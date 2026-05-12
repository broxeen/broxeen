/**
 * ConfigStore — Singleton store for Broxeen app configuration.
 *
 * Persistence strategy:
 * - Browser/dev fallback: localStorage
 * - Tauri desktop: per-user local config file via Rust commands
 *
 * The Tauri config file is stored outside the repository, e.g. on Windows:
 * C:\Users\<USER>\AppData\Roaming\broxeen\app_config.json
 *
 * This prevents API keys from being lost after refresh/restart and keeps
 * every system user's configuration separate.
 */

import { invoke } from "@tauri-apps/api/core";
import { DEFAULT_CONFIG, type AppConfig } from "./appConfig";
import { logger } from "../lib/logger";
import { isTauriRuntime } from "../lib/runtime";

const STORAGE_KEY = "broxeen_app_config";
const configLogger = logger.scope("config:store");

type ConfigListener = (path: string, value: unknown) => void;

class ConfigStoreImpl {
  private config: AppConfig;
  private listeners: Set<ConfigListener> = new Set();
  private hydratedFromDisk = false;
  private hydratePromise: Promise<void> | null = null;

  constructor() {
    this.config = this.loadFromLocalStorageAndEnv();

    configLogger.info("ConfigStore initialized", {
      hasApiKey: !!this.config.llm.apiKey,
      apiKeyPreview: this.maskSecret(this.config.llm.apiKey),
      model: this.config.llm.model,
      locale: this.config.locale.locale,
      runtime: isTauriRuntime() ? "tauri" : "browser",
    });
  }

  /**
   * Load config synchronously:
   * defaults ← localStorage ← valid env vars
   *
   * Tauri disk config is loaded asynchronously by hydrateFromDisk().
   */
  private loadFromLocalStorageAndEnv(): AppConfig {
    let stored: Partial<AppConfig> = {};

    try {
      if (typeof localStorage !== "undefined") {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          stored = JSON.parse(raw);
          configLogger.debug("Loaded config from localStorage");
        }
      }
    } catch (err) {
      configLogger.warn("Failed to parse stored config, using defaults", err);
    }

    const merged = this.deepMerge(DEFAULT_CONFIG, stored) as AppConfig;
    return this.applyEnvOverrides(merged);
  }

  /**
   * Load per-user app config from the Tauri backend.
   *
   * This should be called during app startup before checking whether setup is needed.
   */
  async hydrateFromDisk(): Promise<void> {
    if (!isTauriRuntime()) {
      this.hydratedFromDisk = true;
      return;
    }

    if (this.hydratedFromDisk) {
      return;
    }

    if (this.hydratePromise) {
      return this.hydratePromise;
    }

    this.hydratePromise = this.hydrateFromDiskInternal();
    return this.hydratePromise;
  }

  private async hydrateFromDiskInternal(): Promise<void> {
    try {
      const diskConfig = await invoke<Partial<AppConfig> | null>("get_app_config");

      if (diskConfig) {
        const merged = this.deepMerge(this.config, diskConfig) as AppConfig;
        this.config = this.applyEnvOverrides(merged);

        this.persistToLocalStorage();
        this.notify("*", this.config);

        configLogger.info("Config hydrated from per-user disk config", {
          hasApiKey: !!this.config.llm.apiKey,
          apiKeyPreview: this.maskSecret(this.config.llm.apiKey),
          model: this.config.llm.model,
        });
      } else {
        configLogger.info("No per-user disk config found");
      }

      this.hydratedFromDisk = true;
    } catch (err) {
      this.hydratedFromDisk = true;
      configLogger.warn("Failed to hydrate config from disk", err);
    } finally {
      this.hydratePromise = null;
    }
  }

  /**
   * Persist current config.
   *
   * Always writes to localStorage as a browser/dev fallback.
   * In Tauri, also writes to the per-user config file.
   */
  persist(): void {
    this.persistToLocalStorage();

    if (isTauriRuntime()) {
      void invoke("save_app_config", { config: this.config }).catch((err) => {
        configLogger.error("Failed to persist config to per-user disk file", err);
      });
    }
  }

  private persistToLocalStorage(): void {
    try {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.config));
        configLogger.debug("Config persisted to localStorage");
      }
    } catch (err) {
      configLogger.error("Failed to persist config to localStorage", err);
    }
  }

  /** Get the full config */
  getAll(): Readonly<AppConfig> {
    return this.config;
  }

  /** Get a nested value by dot-path, e.g. "llm.apiKey" */
  get<T = unknown>(path: string): T {
    return path
      .split(".")
      .reduce((obj: any, key) => obj?.[key], this.config) as T;
  }

  /** Set a nested value by dot-path and persist */
  set(path: string, value: unknown): void {
    const keys = path.split(".");
    let obj: any = this.config;

    for (let i = 0; i < keys.length - 1; i++) {
      if (obj[keys[i]] === undefined) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }

    const lastKey = keys[keys.length - 1];
    const oldValue = obj[lastKey];
    obj[lastKey] = value;

    configLogger.info("Config updated", {
      path,
      oldValue: this.isSecretPath(path) ? this.maskSecret(String(oldValue ?? "")) : oldValue,
      newValue: this.isSecretPath(path) ? this.maskSecret(String(value ?? "")) : value,
    });

    this.persist();
    this.notify(path, value);
  }

  /** Set multiple values at once */
  setMany(updates: Record<string, unknown>): void {
    for (const [path, value] of Object.entries(updates)) {
      const keys = path.split(".");
      let obj: any = this.config;

      for (let i = 0; i < keys.length - 1; i++) {
        if (obj[keys[i]] === undefined) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = value;
    }

    this.persist();

    for (const [path, value] of Object.entries(updates)) {
      this.notify(path, value);
    }

    configLogger.info("Config batch updated", {
      paths: Object.keys(updates),
      containsSecret: Object.keys(updates).some((path) => this.isSecretPath(path)),
    });
  }

  /** Reset a section or entire config to defaults */
  reset(section?: keyof AppConfig): void {
    if (section) {
      (this.config as any)[section] = { ...(DEFAULT_CONFIG as any)[section] };
      configLogger.info(`Config section "${section}" reset to defaults`);
    } else {
      this.config = structuredClone
        ? structuredClone(DEFAULT_CONFIG)
        : JSON.parse(JSON.stringify(DEFAULT_CONFIG));

      configLogger.info("Full config reset to defaults");
    }

    this.persist();
    this.notify(section || "*", this.config);
  }

  /**
   * Delete persisted Tauri app config.
   *
   * Useful later if the UI gets a "forget API key" button.
   */
  async deletePersistedDiskConfig(): Promise<void> {
    if (!isTauriRuntime()) return;

    await invoke("delete_app_config");
    configLogger.info("Per-user disk config deleted");
  }

  /** Subscribe to config changes */
  onChange(listener: ConfigListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify(path: string, value: unknown): void {
    for (const listener of this.listeners) {
      try {
        listener(path, value);
      } catch (err) {
        configLogger.error("Config change listener error", err);
      }
    }
  }

  private deepMerge(target: any, source: any): any {
    const output = { ...target };

    for (const key of Object.keys(source || {})) {
      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key]) &&
        target[key] &&
        typeof target[key] === "object" &&
        !Array.isArray(target[key])
      ) {
        output[key] = this.deepMerge(target[key], source[key]);
      } else if (source[key] !== undefined) {
        output[key] = source[key];
      }
    }

    return output;
  }

  private applyEnvOverrides(config: AppConfig): AppConfig {
    const merged = this.deepMerge(DEFAULT_CONFIG, config) as AppConfig;
    const env =
      typeof import.meta !== "undefined"
        ? (import.meta.env as Record<string, string | undefined>)
        : {};

    configLogger.info("Environment config snapshot", {
      hasViteOpenRouterKey: this.isUsableEnvValue(env.VITE_OPENROUTER_API_KEY),
      viteOpenRouterKeyPreview: this.maskSecret(env.VITE_OPENROUTER_API_KEY || ""),
      nodeEnv: env.NODE_ENV,
    });

    /**
     * Important:
     * Do not allow placeholder values from copied .env.example to override
     * a real per-user saved API key.
     */
    if (this.isUsableEnvValue(env.VITE_OPENROUTER_API_KEY)) {
      merged.llm.apiKey = env.VITE_OPENROUTER_API_KEY!;
    }

    if (this.isUsableEnvValue(env.VITE_LLM_MODEL)) {
      merged.llm.model = env.VITE_LLM_MODEL!;
    }

    if (this.isUsableEnvValue(env.VITE_LLM_MAX_TOKENS)) {
      merged.llm.maxTokens = Number(env.VITE_LLM_MAX_TOKENS);
    }

    if (this.isUsableEnvValue(env.VITE_LLM_TEMPERATURE)) {
      merged.llm.temperature = Number(env.VITE_LLM_TEMPERATURE);
    }

    if (this.isUsableEnvValue(env.VITE_STT_MODEL)) {
      merged.stt.model = env.VITE_STT_MODEL!;
    }

    if (this.isUsableEnvValue(env.VITE_STT_LANG)) {
      merged.stt.language = env.VITE_STT_LANG!;
    }

    if (this.isUsableEnvValue(env.VITE_MOTION_LLM_VERIFY_MODEL)) {
      merged.motionDetection.llmVerifyModel = env.VITE_MOTION_LLM_VERIFY_MODEL!;
    }

    if (this.isUsableEnvValue(env.VITE_LLM_API_URL)) {
      merged.llm.apiUrl = env.VITE_LLM_API_URL!;
    }

    if (this.isUsableEnvValue(env.VITE_DEFAULT_SUBNET)) {
      merged.network.defaultSubnet = env.VITE_DEFAULT_SUBNET!;
    }

    if (this.isUsableEnvValue(env.VITE_LOCALE)) {
      merged.locale.locale = env.VITE_LOCALE!;
    }

    if (this.isUsableEnvValue(env.VITE_LANGUAGE)) {
      merged.locale.language = env.VITE_LANGUAGE!;
    }

    return merged;
  }

  private isUsableEnvValue(value: string | undefined): boolean {
    if (!value) return false;

    const trimmed = value.trim();
    if (!trimmed) return false;

    const lower = trimmed.toLowerCase();

    return ![
      "sk-or-v1-your-key-here",
      "your-key-here",
      "changeme",
      "change-me",
      "example",
      "placeholder",
      "undefined",
      "null",
    ].some((marker) => lower.includes(marker));
  }

  private isSecretPath(path: string): boolean {
    const lower = path.toLowerCase();
    return (
      lower.includes("apikey") ||
      lower.includes("api_key") ||
      lower.includes("password") ||
      lower.includes("token") ||
      lower.includes("secret")
    );
  }

  private maskSecret(value: string): string {
    if (!value) return "";

    if (value.length <= 10) {
      return "***";
    }

    return `${value.slice(0, 8)}…${value.slice(-4)}`;
  }

  // ── Auto-discovery helpers ──────────────────────────────────

  /** Check what capabilities are available and return missing config */
  detectMissingConfig(): string[] {
    const missing: string[] = [];

    if (!this.config.llm.apiKey) {
      missing.push("llm.apiKey");
    }

    return missing;
  }

  /** Check if LLM is configured and available */
  isLlmAvailable(): boolean {
    return !!this.config.llm.apiKey;
  }

  /** Check if STT is configured */
  isSttConfigured(): boolean {
    return !!this.config.llm.apiKey && !!this.config.stt.model;
  }

  /** Get a summary of current configuration status */
  getConfigStatus(): ConfigStatus {
    return {
      llmConfigured: this.isLlmAvailable(),
      sttConfigured: this.isSttConfigured(),
      networkSubnet: this.config.network.defaultSubnet,
      locale: this.config.locale.locale,
      missingFields: this.detectMissingConfig(),
    };
  }
}

export interface ConfigStatus {
  llmConfigured: boolean;
  sttConfigured: boolean;
  networkSubnet: string;
  locale: string;
  missingFields: string[];
}

/** Singleton instance */
export const configStore = new ConfigStoreImpl();