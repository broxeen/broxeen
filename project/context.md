# System Architecture Analysis

## Overview

- **Project**: broxeen
- **Language**: typescript
- **Files**: 206
- **Lines**: 82967
- **Functions**: 3725
- **Classes**: 444
- **Avg CC**: 4.0
- **Critical (CC≥10)**: 306

## Architecture

### e2e/ (8 files, 1729L, 74 functions)

- `chat-features.spec.ts` — 141L, 11 methods, CC↑6
- `ssh-docker.spec.ts` — 216L, 5 methods, CC↑6
- `new-plugins.spec.ts` — 191L, 14 methods, CC↑5
- `logging.spec.ts` — 60L, 5 methods, CC↑3
- `network-scanning-flow.spec.ts` — 342L, 13 methods, CC↑3
- _3 more files_

### root/ (6 files, 513L, 38 functions)

- `vite.config.ts` — 280L, 35 methods, CC↑71
- `resolver.py` — 129L, 2 methods, CC↑10
- `playwright.config.ts` — 54L, 1 methods, CC↑1
- `postcss.config.js` — 6L, 0 methods, CC↑0
- `project.sh` — 21L, 0 methods, CC↑0
- _1 more files_

### scripts/ (11 files, 3486L, 233 functions)

- `chat-cli.mjs` — 1093L, 109 methods, CC↑32
- `net-diag.mjs` — 265L, 47 methods, CC↑12
- `motion_pipeline.py` — 624L, 23 methods, CC↑7
- `add-reolink-camera.mjs` — 155L, 3 methods, CC↑4
- `detect-platform.sh` — 328L, 8 methods, CC↑0
- _6 more files_

### src/ (3 files, 609L, 38 functions)

- `App.tsx` — 571L, 34 methods, CC↑21
- `main.tsx` — 37L, 4 methods, CC↑2
- `vite-env.d.ts` — 1L, 0 methods, CC↑0

### src-tauri/benches/ (1 files, 295L, 2 functions)

- `file_search_bench.rs` — 295L, 2 methods, CC↑6

### src-tauri/src/ (43 files, 13691L, 304 functions)

- `query_schema.rs` — 272L, 9 methods, CC↑46
- `content_cleaning.rs` — 147L, 4 methods, CC↑33
- `content_extraction.rs` — 506L, 10 methods, CC↑32
- `vision_pipeline.rs` — 311L, 3 methods, CC↑30
- `network_scan.rs` — 1655L, 27 methods, CC↑26
- _38 more files_

### src-tauri/target/release/bundle/appimage/Broxeen.AppDir/apprun-hooks/ (1 files, 18L, 0 functions)

- `linuxdeploy-plugin-gtk.sh` — 18L, 0 methods, CC↑0

### src/commands/ (4 files, 339L, 24 functions)

- `browseCommand.ts` — 187L, 9 methods, CC↑15
- `copyContextCommand.ts` — 37L, 6 methods, CC↑5
- `sendMessageCommand.ts` — 68L, 5 methods, CC↑5
- `saveSettingsCommand.ts` — 47L, 4 methods, CC↑4

### src/components/ (32 files, 10798L, 463 functions)

- `ChatMessageList.tsx` — 805L, 25 methods, CC↑107
- `ChatInput.tsx` — 550L, 18 methods, CC↑101
- `ChatConfigPrompt.tsx` — 674L, 18 methods, CC↑62
- `CameraLiveInline.tsx` — 179L, 18 methods, CC↑61
- `ErrorReportPanel.tsx` — 326L, 15 methods, CC↑41
- _27 more files_

### src/config/ (4 files, 1206L, 47 functions)

- `configStore.ts` — 214L, 24 methods, CC↑40
- `watchConfig.ts` — 211L, 7 methods, CC↑12
- `autoConfig.ts` — 153L, 13 methods, CC↑9
- `appConfig.ts` — 628L, 3 methods, CC↑3

### src/contexts/ (2 files, 240L, 21 functions)

- `pluginContext.tsx` — 161L, 10 methods, CC↑12
- `CqrsContext.tsx` — 79L, 11 methods, CC↑4

### src/core/ (17 files, 4465L, 286 functions)

- `intentRouter.ts` — 853L, 21 methods, CC↑55
- `bootstrap.ts` — 409L, 17 methods, CC↑45
- `llmIntentClassifier.ts` — 218L, 24 methods, CC↑16
- `fallbackHandler.ts` — 305L, 25 methods, CC↑11
- `retry.ts` — 112L, 19 methods, CC↑9
- _12 more files_

### src/discovery/ (3 files, 896L, 59 functions)

- `serviceProber.ts` — 435L, 27 methods, CC↑12
- `networkScanner.ts` — 383L, 32 methods, CC↑7
- `types.ts` — 78L, 0 methods, CC↑0

### src/domain/ (4 files, 476L, 21 functions)

- `eventStore.ts` — 152L, 10 methods, CC↑21
- `chatEvents.ts` — 209L, 2 methods, CC↑6
- `chatAggregate.ts` — 72L, 8 methods, CC↑4
- `audioSettings.ts` — 43L, 1 methods, CC↑1

### src/hooks/ (12 files, 3695L, 261 functions)

- `useChatSpeech.ts` — 594L, 25 methods, CC↑107
- `useChatDispatch.ts` — 897L, 50 methods, CC↑78
- `useTts.ts` — 533L, 45 methods, CC↑72
- `useStt.ts` — 534L, 56 methods, CC↑55
- `useSpeech.ts` — 313L, 21 methods, CC↑23
- _7 more files_

### src/integration/ (1 files, 367L, 26 functions)

- `autoWatchIntegration.ts` — 367L, 26 methods, CC↑15

### src/lib/ (8 files, 2835L, 226 functions)

- `browseGateway.ts` — 1741L, 143 methods, CC↑42
- `sttClient.ts` — 145L, 13 methods, CC↑16
- `resolver.ts` — 264L, 19 methods, CC↑11
- `llmClient.ts` — 402L, 30 methods, CC↑10
- `logger.ts` — 129L, 13 methods, CC↑8
- _3 more files_

### src/persistence/ (8 files, 1574L, 104 functions)

- `deviceRepository.ts` — 252L, 18 methods, CC↑27
- `chatRepository.ts` — 123L, 17 methods, CC↑14
- `configuredDeviceRepository.ts` — 251L, 21 methods, CC↑8
- `databaseManager.ts` — 233L, 23 methods, CC↑8
- `historyRepository.ts` — 167L, 10 methods, CC↑6
- _3 more files_

### src/plugins/ (1 files, 183L, 18 functions)

- `monitoringPlugin.ts` — 183L, 18 methods, CC↑8

### src/plugins/authBrowse/ (1 files, 187L, 13 functions)

- `authBrowsePlugin.ts` — 187L, 13 methods, CC↑34

### src/plugins/camera/ (2 files, 1196L, 65 functions)

- `cameraLivePlugin.ts` — 755L, 57 methods, CC↑95
- `cameraVendorDatabase.ts` — 441L, 8 methods, CC↑29

### src/plugins/cameras/ (4 files, 416L, 41 functions)

- `cameraPtzPlugin.ts` — 164L, 14 methods, CC↑17
- `cameraHealthPlugin.ts` — 140L, 15 methods, CC↑11
- `cameraSnapshotPlugin.ts` — 105L, 12 methods, CC↑8
- `index.ts` — 7L, 0 methods, CC↑0

### src/plugins/chat/ (1 files, 111L, 9 functions)

- `chatPlugin.ts` — 111L, 9 methods, CC↑6

### src/plugins/discovery/ (7 files, 3732L, 299 functions)

- `deviceConfigPlugin.ts` — 464L, 38 methods, CC↑76
- `networkScanPlugin.ts` — 1586L, 135 methods, CC↑40
- `deviceStatusPlugin.ts` — 317L, 29 methods, CC↑33
- `advancedPortScanPlugin.ts` — 379L, 34 methods, CC↑18
- `autoScanScheduler.ts` — 322L, 30 methods, CC↑18
- _2 more files_

### src/plugins/docker/ (1 files, 489L, 24 functions)

- `dockerPlugin.ts` — 489L, 24 methods, CC↑52

### src/plugins/email/ (1 files, 419L, 34 functions)

- `emailPlugin.ts` — 419L, 34 methods, CC↑10

### src/plugins/files/ (1 files, 560L, 30 functions)

- `fileSearchPlugin.ts` — 560L, 30 methods, CC↑34

### src/plugins/frigate/ (1 files, 305L, 37 functions)

- `frigateEventsPlugin.ts` — 305L, 37 methods, CC↑33

### src/plugins/http/ (1 files, 226L, 21 functions)

- `browsePlugin.ts` — 226L, 21 methods, CC↑23

### src/plugins/marketplace/ (2 files, 352L, 22 functions)

- `marketplaceLoader.ts` — 346L, 22 methods, CC↑6
- `index.ts` — 6L, 0 methods, CC↑0

### src/plugins/monitor/ (3 files, 3389L, 273 functions)

- `monitorPlugin.ts` — 2871L, 229 methods, CC↑93
- `motionDetectionPlugin.ts` — 512L, 44 methods, CC↑13
- `index.ts` — 6L, 0 methods, CC↑0

### src/plugins/mqtt/ (2 files, 346L, 26 functions)

- `mqttPlugin.ts` — 327L, 24 methods, CC↑7
- `index.ts` — 19L, 2 methods, CC↑1

### src/plugins/network/ (6 files, 838L, 99 functions)

- `onvifPlugin.ts` — 178L, 19 methods, CC↑15
- `portScanPlugin.ts` — 156L, 21 methods, CC↑12
- `arpPlugin.ts` — 143L, 16 methods, CC↑10
- `pingPlugin.ts` — 123L, 18 methods, CC↑9
- `mdnsPlugin.ts` — 152L, 15 methods, CC↑8
- _1 more files_

### src/plugins/protocol-bridge/ (2 files, 1732L, 98 functions)

- `protocolBridgePlugin.ts` — 1720L, 98 methods, CC↑24
- `index.ts` — 12L, 0 methods, CC↑0

### src/plugins/remote-machine/ (1 files, 511L, 29 functions)

- `remoteMachinePlugin.ts` — 511L, 29 methods, CC↑26

### src/plugins/rtsp-camera/ (2 files, 474L, 38 functions)

- `rtspCameraPlugin.ts` — 416L, 35 methods, CC↑8
- `index.ts` — 58L, 3 methods, CC↑4

### src/plugins/scope/ (1 files, 253L, 19 functions)

- `scopeRegistry.ts` — 253L, 19 methods, CC↑7

### src/plugins/system/ (5 files, 1292L, 91 functions)

- `sshPlugin.ts` — 544L, 29 methods, CC↑14
- `processesPlugin.ts` — 120L, 11 methods, CC↑11
- `diskInfoPlugin.ts` — 319L, 28 methods, CC↑8
- `logsPlugin.ts` — 301L, 23 methods, CC↑7
- `logs.index.ts` — 8L, 0 methods, CC↑0

### src/plugins/toonic/ (1 files, 411L, 38 functions)

- `toonicBridgePlugin.ts` — 411L, 38 methods, CC↑18

### src/plugins/voice/ (2 files, 194L, 8 functions)

- `voiceCommandsPlugin.ts` — 186L, 8 methods, CC↑7
- `index.ts` — 8L, 0 methods, CC↑0

### src/queries/ (2 files, 55L, 6 functions)

- `getSettingsQuery.ts` — 33L, 2 methods, CC↑3
- `getMessagesQuery.ts` — 22L, 4 methods, CC↑1

### src/reactive/ (4 files, 1195L, 90 functions)

- `alertBridge.ts` — 232L, 23 methods, CC↑10
- `changeDetector.ts` — 362L, 30 methods, CC↑9
- `watchManager.ts` — 537L, 37 methods, CC↑7
- `types.ts` — 64L, 0 methods, CC↑0

### src/services/ (4 files, 87L, 8 functions)

- `defaultLlmAdapter.ts` — 41L, 7 methods, CC↑2
- `defaultBrowseAdapter.ts` — 12L, 1 methods, CC↑1
- `browseService.ts` — 9L, 0 methods, CC↑0
- `llmService.ts` — 25L, 0 methods, CC↑0

### src/utils/ (3 files, 978L, 62 functions)

- `quickActionResolver.ts` — 233L, 8 methods, CC↑58
- `healthCheck.ts` — 422L, 26 methods, CC↑49
- `errorReporting.ts` — 323L, 28 methods, CC↑9

## Key Exports

- **ChatMessageList** (function, CC=107) ⚠ split
- **useChatSpeech** (function, CC=107) ⚠ split
- **ChatInput** (function, CC=101) ⚠ split
- **handleKeyDown** (function, CC=32) ⚠ split
- **CameraLivePlugin** (class, CC̄=4.5)
  - `execute` CC=95 ⚠ split
  - `start` CC=23 ⚠ split
  - `sanitizedInput` CC=23 ⚠ split
  - `rtspMatch` CC=23 ⚠ split
- **MonitorPlugin** (class, CC̄=4.4)
  - `execute` CC=16 ⚠ split
  - `start` CC=16 ⚠ split
  - `handleAddToMonitoring` CC=15 ⚠ split
  - `handleStart` CC=93 ⚠ split
  - `goal` CC=15 ⚠ split
  - `when` CC=15 ⚠ split
  - `handleStop` CC=25 ⚠ split
  - `handleLogs` CC=36 ⚠ split
  - `handleConfig` CC=32 ⚠ split
  - `poll` CC=33 ⚠ split
  - `summarizeCaptureFailure` CC=19 ⚠ split
  - `ensureApiToken` CC=18 ⚠ split
  - `parseTarget` CC=26 ⚠ split
  - `formatTargetLogs` CC=21 ⚠ split
  - `initialize` CC=17 ⚠ split
  - `loadMonitoredDevices` CC=17 ⚠ split
  - `handleResolveDbConflict` CC=19 ⚠ split
- **dispatchLogger** (function, CC=19) ⚠ split
- **handleConfigCommand** (function, CC=19) ⚠ split
- **useChatDispatch** (function, CC=78) ⚠ split
- **handleSubmit** (function, CC=72) ⚠ split
- **DeviceConfigPlugin** (class, CC̄=4.2)
  - `execute` CC=15 ⚠ split
  - `parseAddCommand` CC=21 ⚠ split
- **configLogger** (function, CC=76) ⚠ split
- **useTts** (function, CC=72) ⚠ split
- **probeTauriBackendTts** (function, CC=25) ⚠ split
- **speak** (function, CC=20) ⚠ split
- **runSpeak** (function, CC=20) ⚠ split
- **host** (function, CC=71) ⚠ split
- **chatApiPlugin** (function, CC=71) ⚠ split
- **handleQuery** (function, CC=31) ⚠ split
- **intent** (function, CC=30) ⚠ split
- **sub** (function, CC=30) ⚠ split
- **ChatConfigPrompt** (function, CC=62) ⚠ split
- **CameraLiveInline** (function, CC=61) ⚠ split
- **rtspFailCountRef** (function, CC=42) ⚠ split
- **RTSP_FAIL_THRESHOLD** (function, CC=42) ⚠ split
- **timerRef** (function, CC=42) ⚠ split
- **inFlightRef** (function, CC=42) ⚠ split
- **tick** (function, CC=40) ⚠ split
- **useHttp** (function, CC=36) ⚠ split
- **resolveQuickActions** (function, CC=58) ⚠ split
- **IntentRouter** (class, CC̄=7.6)
  - `initializeDefaultPatterns` CC=55 ⚠ split
  - `route` CC=18 ⚠ split
  - `extractEntities` CC=39 ⚠ split
- **useStt** (function, CC=55) ⚠ split
- **startRecording** (function, CC=20) ⚠ split
- **DockerPlugin** (class, CC̄=5.1)
  - `execute` CC=52 ⚠ split
  - `intentLower` CC=52 ⚠ split
- **HealthChecker** (class, CC̄=4.9)
  - `registerDefaultChecks` CC=49 ⚠ split
- **registerCorePlugins** (function, CC=45) ⚠ split
- **detectContentType** (function, CC=22) ⚠ split
- **stripCookieBannerText** (function, CC=16) ⚠ split
- **calculateBlockScore** (function, CC=32) ⚠ split
- **extractBrowserReadableContent** (function, CC=42) ⚠ split
- **title** (function, CC=30) ⚠ split
- **bestScore** (function, CC=30) ⚠ split
- **normalizeBrowseResult** (function, CC=20) ⚠ split
- **fetchViaAllOriginsJson** (function, CC=21) ⚠ split
- **fetchViaJina** (function, CC=19) ⚠ split
- **jinaProxies** (function, CC=18) ⚠ split
- **isValidContent** (function, CC=19) ⚠ split
- **ErrorReportPanel** (function, CC=41) ⚠ split
- **ConfigStoreImpl** (class, CC̄=3.0)
  - `load` CC=15 ⚠ split
- **configLogger** (function, CC=40) ⚠ split
- **NetworkScanPlugin** (class, CC̄=3.3)
  - `handleDeviceFilter` CC=17 ⚠ split
  - `handleExport` CC=15 ⚠ split
  - `execute` CC=40 ⚠ split
  - `detectSubnet` CC=18 ⚠ split
  - `persistDevices` CC=24 ⚠ split
  - `getDefaultSubnet` CC=16 ⚠ split
- **AuthBrowsePlugin** (class, CC̄=5.8)
  - `execute` CC=30 ⚠ split
- **logger** (function, CC=34) ⚠ split
- **FileSearchPlugin** (class, CC̄=4.1)
  - `parseSearchParams` CC=34 ⚠ split
- **strip_cookie_banner_text** (function, CC=33) ⚠ split
- **statusLogger** (function, CC=33) ⚠ split
- **FrigateEventsPlugin** (class, CC̄=3.1)
  - `handleMqttEvent` CC=33 ⚠ split
- **handleFindRpi** (function, CC=18) ⚠ split
- **handleScan** (function, CC=18) ⚠ split
- **handleEmailInbox** (function, CC=32) ⚠ split
- **max** (function, CC=15) ⚠ split
- **intent** (function, CC=20) ⚠ split
- **extract_search_results** (function, CC=15) ⚠ split
- **extract_action_links** (function, CC=32) ⚠ split
- **start** (function, CC=30) ⚠ split
- **detectCameraVendor** (function, CC=29) ⚠ split
- **repoLogger** (function, CC=27) ⚠ split
- **RemoteMachinePlugin** (class, CC̄=4.2)
  - `execute` CC=26 ⚠ split
  - `intentLower` CC=26 ⚠ split
- **ProtocolBridgePlugin** (class, CC̄=3.8)
  - `execute` CC=24 ⚠ split
  - `detectProtocolFromInput` CC=17 ⚠ split
  - `handleAdd` CC=21 ⚠ split
  - `handleRestSend` CC=16 ⚠ split
  - `handleWebSocket` CC=21 ⚠ split
  - `handleSse` CC=20 ⚠ split
  - `handleGraphQL` CC=18 ⚠ split
  - `handleMqttRead` CC=15 ⚠ split
- **useSpeech** (function, CC=23) ⚠ split
- **HttpBrowsePlugin** (class, CC̄=4.6)
  - `createNaturalPresentation` CC=23 ⚠ split
- **micStreamRef** (function, CC=21) ⚠ split
- **micAudioCtxRef** (function, CC=21) ⚠ split
- **micAnimationFrameRef** (function, CC=21) ⚠ split
- **MessageQuickActions** (function, CC=21) ⚠ split
- **esLogger** (function, CC=21) ⚠ split
- **update** (function, CC=20) ⚠ split
- **FileResultsDisplay** (function, CC=20) ⚠ split
- **QuickActionButtons** (function, CC=20) ⚠ split
- **useHistoryPersistence** (function, CC=20) ⚠ split
- **analyse_movement** (function, CC=18) ⚠ split
- **AdvancedPortScanPlugin** (class, CC̄=2.7)
  - `formatSingleHostResult` CC=18 ⚠ split
- **AutoScanScheduler** (class, CC̄=4.0)
  - `tick` CC=18 ⚠ split
  - `retryOfflineDevices` CC=17 ⚠ split
- **ToonicBridgePlugin** (class, CC̄=3.4)
  - `execute` CC=18 ⚠ split
  - `start` CC=18 ⚠ split
  - `lower` CC=18 ⚠ split
- **handlePlay** (function, CC=17) ⚠ split
- **CameraPtzPlugin** (class, CC̄=4.3)
  - `canHandle` CC=17 ⚠ split
- **insert_detection** (function, CC=16) ⚠ split
- **process_frame** (function, CC=16) ⚠ split
- **filtered** (function, CC=16) ⚠ split
- **classifyIntent** (function, CC=16) ⚠ split
- **useChatPersistence** (function, CC=16) ⚠ split
- **repoRef** (function, CC=16) ⚠ split
- **conversationIdRef** (function, CC=16) ⚠ split
- **transcribeAudio** (function, CC=16) ⚠ split
- **run** (function, CC=16) ⚠ split
- **detect** (function, CC=15) ⚠ split
- **BrowseCommand** (class, CC̄=3.1)
  - `execute` CC=15 ⚠ split
- **handleKeyDown** (function, CC=15) ⚠ split
- **copyErrorsToClipboard** (function, CC=15) ⚠ split
- **AutoWatchIntegration** (class, CC̄=2.7)
  - `extractIntentInfo` CC=15 ⚠ split
- **OnvifPlugin** (class, CC̄=3.2)
  - `formatCameras` CC=15 ⚠ split

## Hotspots (High Fan-Out)

- **registerCorePlugins** — fan-out=52: Orchestrates 52 calls
- **useChatSpeech** — fan-out=49: Orchestrates 49 calls
- **useTts** — fan-out=48: Orchestrates 48 calls
- **useStt** — fan-out=48: Orchestrates 48 calls
- **host** — fan-out=47: Orchestrates 47 calls
- **chatApiPlugin** — fan-out=47: Orchestrates 47 calls
- **useChatDispatch** — fan-out=46: 46-way dispatch

## Refactoring Priorities

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | Split host (CC=71 → target CC<10) | high | low |
| 2 | Split chatApiPlugin (CC=71 → target CC<10) | high | low |
| 3 | Split handleQuery (CC=31 → target CC<10) | high | low |
| 4 | Split intent (CC=30 → target CC<10) | high | low |
| 5 | Split sub (CC=30 → target CC<10) | high | low |
| 6 | Split repoLogger (CC=27 → target CC<10) | high | low |
| 7 | Split useTts (CC=72 → target CC<10) | high | low |
| 8 | Split probeTauriBackendTts (CC=25 → target CC<10) | high | low |
| 9 | Split calculateBlockScore (CC=32 → target CC<10) | high | low |
| 10 | Split extractBrowserReadableContent (CC=42 → target CC<10) | high | low |

## Context for LLM

When suggesting changes:
1. Start from hotspots and high-CC functions
2. Follow refactoring priorities above
3. Maintain public API surface — keep backward compatibility
4. Prefer minimal, incremental changes

