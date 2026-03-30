"""Broxeen-local runtime patches.

This module is imported automatically by Python when it is present on sys.path.
We use it to harden the Conda-installed `goal` CLI used in release flows so it
respects Broxeen's local publishing policy and never attempts `npm publish`
for the private Node.js package.

The patch is intentionally narrow:
- it only activates when the current command looks like `goal`
- it only wraps Goal's publish entrypoints
- it only skips publishing for project types that are explicitly disabled or
  whose package.json is marked private
"""

from __future__ import annotations

import importlib
import json
import os
import sys
from pathlib import Path
from typing import Iterable, List, Optional, Sequence, Tuple


def _running_goal_cli() -> bool:
    argv0 = Path(sys.argv[0]).name.lower() if sys.argv else ""
    return argv0 == "goal" or argv0.startswith("goal")


def _echo_skip(reason: str) -> None:
    try:
        import click

        click.echo(click.style(f"\nℹ️  {reason}", fg="yellow"))
    except Exception:
        print(f"\nℹ️  {reason}")


_goal_config = None


def _load_goal_config():
    global _goal_config
    if _goal_config is not None:
        return _goal_config

    try:
        from goal.config import load_config
    except Exception:
        _goal_config = None
        return None

    try:
        _goal_config = load_config()
    except Exception:
        _goal_config = None
    return _goal_config


def _nodejs_is_private() -> bool:
    package_json = Path("package.json")
    if not package_json.exists():
        return False

    try:
        data = json.loads(package_json.read_text(encoding="utf-8"))
    except Exception:
        return False

    return bool(data.get("private", False))


def _publish_skip_reason(project_type: str) -> Optional[str]:
    try:
        config = _load_goal_config()
        if config is not None:
            strategy = config.get_strategy(project_type)
            if strategy and not strategy.get("publish_enabled", True):
                return f"Publishing disabled for {project_type} in goal.yaml. Skipping."
    except Exception:
        pass

    if project_type == "nodejs" and _nodejs_is_private():
        return f"Skipping publish for {project_type} - package is marked as private"

    return None


def _filter_project_types(project_types: Sequence[str]) -> Tuple[List[str], List[str]]:
    active: List[str] = []
    skipped: List[str] = []

    for project_type in project_types:
        reason = _publish_skip_reason(project_type)
        if reason is None:
            active.append(project_type)
            continue

        skipped.append(project_type)
        _echo_skip(reason)

    return active, skipped


def _patch_goal_publishers() -> None:
    try:
        publish_mod = importlib.import_module("goal.cli.publish")
        publish_cmd_mod = importlib.import_module("goal.cli.publish_cmd")
        stage_publish_mod = importlib.import_module("goal.push.stages.publish")
    except Exception:
        return

    original_publish_project = publish_mod.publish_project

    def wrapped_publish_project(project_types, version, yes=False):
        active_types, _ = _filter_project_types(list(project_types or []))
        if not active_types:
            return True
        return original_publish_project(active_types, version, yes)

    # Patch every known reference so both `goal publish` and `goal push`
    # see the same guarded behavior.
    publish_mod.publish_project = wrapped_publish_project
    publish_cmd_mod.publish_project = wrapped_publish_project
    stage_publish_mod.publish_project = wrapped_publish_project


if _running_goal_cli() and not os.environ.get("BROXEEN_DISABLE_GOAL_PUBLISH_PATCH"):
    _patch_goal_publishers()
