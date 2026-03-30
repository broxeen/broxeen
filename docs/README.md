<!-- code2docs:start --># broxeen

![version](https://img.shields.io/badge/version-0.1.0-blue) ![python](https://img.shields.io/badge/python-%3E%3D3.9-blue) ![coverage](https://img.shields.io/badge/coverage-unknown-lightgrey) ![functions](https://img.shields.io/badge/functions-3697-green)
> **3697** functions | **444** classes | **228** files | CC̄ = 4.1

> Auto-generated project documentation from source code analysis.

**Author:** Tom Softreck <tom@sapletta.com>  
**License:** MIT[(LICENSE)](./LICENSE)  
**Repository:** [https://github.com/wronai/broxeen](https://github.com/wronai/broxeen)

## Installation

### From PyPI

```bash
pip install broxeen
```

### From Source

```bash
git clone https://github.com/wronai/broxeen
cd broxeen
pip install -e .
```


## Quick Start

### CLI Usage

```bash
# Generate full documentation for your project
broxeen ./my-project

# Only regenerate README
broxeen ./my-project --readme-only

# Preview what would be generated (no file writes)
broxeen ./my-project --dry-run

# Check documentation health
broxeen check ./my-project

# Sync — regenerate only changed modules
broxeen sync ./my-project
```

### Python API

```python
from broxeen import generate_readme, generate_docs, Code2DocsConfig

# Quick: generate README
generate_readme("./my-project")

# Full: generate all documentation
config = Code2DocsConfig(project_name="mylib", verbose=True)
docs = generate_docs("./my-project", config=config)
```

## Generated Output

When you run `broxeen`, the following files are produced:

```
<project>/
├── README.md                 # Main project README (auto-generated sections)
├── docs/
│   ├── api.md               # Consolidated API reference
│   ├── modules.md           # Module documentation with metrics
│   ├── architecture.md      # Architecture overview with diagrams
│   ├── dependency-graph.md  # Module dependency graphs
│   ├── coverage.md          # Docstring coverage report
│   ├── getting-started.md   # Getting started guide
│   ├── configuration.md    # Configuration reference
│   └── api-changelog.md    # API change tracking
├── examples/
│   ├── quickstart.py       # Basic usage examples
│   └── advanced_usage.py   # Advanced usage examples
├── CONTRIBUTING.md         # Contribution guidelines
└── mkdocs.yml             # MkDocs site configuration
```

## Configuration

Create `broxeen.yaml` in your project root (or run `broxeen init`):

```yaml
project:
  name: my-project
  source: ./
  output: ./docs/

readme:
  sections:
    - overview
    - install
    - quickstart
    - api
    - structure
  badges:
    - version
    - python
    - coverage
  sync_markers: true

docs:
  api_reference: true
  module_docs: true
  architecture: true
  changelog: true

examples:
  auto_generate: true
  from_entry_points: true

sync:
  strategy: markers    # markers | full | git-diff
  watch: false
  ignore:
    - "tests/"
    - "__pycache__"
```

## Sync Markers

broxeen can update only specific sections of an existing README using HTML comment markers:

```markdown
<!-- broxeen:start -->
# Project Title
... auto-generated content ...
<!-- broxeen:end -->
```

Content outside the markers is preserved when regenerating. Enable this with `sync_markers: true` in your configuration.

## Architecture

```
broxeen/
    ├── config        ├── d        ├── spec        ├── spec        ├── spec        ├── spec        ├── spec    ├── config        ├── spec        ├── spec        ├── spec        ├── types        ├── historyRepository        ├── deviceRepository        ├── migrations        ├── scanHistoryRepository        ├── configuredDeviceRepository        ├── databaseManager        ├── chatRepository        ├── sendMessageCommand        ├── copyContextCommand        ├── saveSettingsCommand        ├── browseCommand        ├── sttClient        ├── llmPrompts        ├── logger        ├── resolver        ├── llmClient        ├── phonetic        ├── runtime        ├── useChatPersistence        ├── useTts        ├── useDatabaseManager        ├── useChatDispatch        ├── useHistoryPersistence        ├── browseGateway        ├── useChatSpeech        ├── useAlertBridge        ├── useLlm    ├── motion_pipeline        ├── useWatchNotifications        ├── useChatMessages        ├── llmService        ├── defaultBrowseAdapter        ├── defaultLlmAdapter        ├── browseService        ├── preferenceLearning        ├── useStt            ├── types        ├── types        ├── queryBus        ├── useSpeech        ├── pluginRegistry        ├── cache        ├── realtimeSync        ├── bootstrap        ├── processRegistry        ├── systemContext        ├── retry        ├── actionSchema        ├── intentSchema        ├── commandBus        ├── fallbackHandler        ├── types        ├── llmIntentClassifier        ├── intentRouter        ├── monitoringPlugin        ├── networkScanner        ├── getMessagesQuery        ├── getSettingsQuery        ├── appConfig        ├── configStore        ├── serviceProber        ├── autoConfig        ├── audioSettings        ├── chatAggregate        ├── chatEvents        ├── watchConfig        ├── eventStore        ├── quickActionResolver├── resolver        ├── types        ├── autoWatchIntegration        ├── errorReporting        ├── alertBridge        ├── watchManager        ├── healthCheck            ├── remoteMachinePlugin        ├── changeDetector            ├── wakeOnLanPlugin            ├── mdnsPlugin            ├── onvifPlugin            ├── arpPlugin            ├── pingPlugin            ├── portScanPlugin                ├── index            ├── diskInfoPlugin            ├── processesPlugin            ├── logsPlugin            ├── sshPlugin        ├── monitor/            ├── dockerPlugin            ├── fileSearchPlugin            ├── serviceProbePlugin            ├── motionDetectionPlugin            ├── advancedPortScanPlugin            ├── cameraDetection            ├── autoScanScheduler            ├── deviceStatusPlugin            ├── rtspCameraPlugin            ├── deviceConfigPlugin        ├── marketplace/        ├── rtsp-camera/            ├── cameraPtzPlugin        ├── cameras/            ├── marketplaceLoader            ├── cameraHealthPlugin        ├── mqtt/            ├── cameraSnapshotPlugin            ├── mqttPlugin            ├── scopeRegistry            ├── browsePlugin            ├── networkScanPlugin        ├── voice/            ├── authBrowsePlugin            ├── voiceCommandsPlugin            ├── chatPlugin            ├── frigateEventsPlugin            ├── cameraVendorDatabase            ├── toonicBridgePlugin        ├── protocol-bridge/            ├── emailPlugin    ├── main            ├── cameraLivePlugin    ├── App        ├── NetworkSelector        ├── WatchBadge        ├── HealthDiagnostic        ├── AlertBridgeComponent        ├── ChatOverlays        ├── Settings        ├── NetworkHistorySelector        ├── CameraLiveInline        ├── SetupWizardModal        ├── CameraPreview        ├── MessageResultCard        ├── QuickActionButtons        ├── MicSettingsModal        ├── QuickCommands            ├── simple            ├── protocolBridgePlugin        ├── TtsControls        ├── Chat        ├── CommandHistory        ├── ActionSuggestions        ├── DeviceDashboardModal        ├── MessageQuickActions        ├── DiagnosticsModal        ├── ThinkingMessage        ├── ChatPersistenceBridge            ├── monitorPlugin        ├── ChatInput        ├── TtsSettingsModal        ├── ErrorReportPanel        ├── DeviceStrip        ├── FileResultsDisplay        ├── QuickCommandHistory        ├── CqrsContext    ├── config    ├── config        ├── ChatConfigPrompt        ├── pluginContext    ├── add-reolink-camera    ├── net-diag        ├── network_info        ├── main_changes        ├── vision_config        ├── vision_tracker        ├── vision_scene_buffer        ├── llm        ├── vision_motion        ├── ChatMessageList        ├── llm_query        ├── frigate_mqtt        ├── tts        ├── stt        ├── file_search        ├── vision_llm        ├── browse_rendered        ├── main        ├── rss_parser        ├── vision_movement        ├── logging        ├── motion_detection        ├── query_schema        ├── autostart        ├── vision_detector        ├── vision_pipeline        ├── ssh        ├── email        ├── audio_commands        ├── disk_info    ├── chat-cli        ├── vision_db        ├── vision_query_engine        ├── docker        ├── vision_capture        ├── remote_machine        ├── wake_word        ├── settings        ├── toonic_sidecar        ├── network_scan        ├── network        ├── audio_capture        ├── local_llm        ├── content_cleaning        ├── file_search_bench├── project    ├── detect-platform    ├── install-openvino-pip    ├── install-openvino    ├── install-openvino-docker        ├── tts_backend    ├── install-openvino-ubuntu    ├── install-openvino-rhel        ├── setup-audio    ├── install-openvino-macos        ├── content_extraction```

## API Overview

### Classes

- **`Device`** — —
- **`DeviceService`** — —
- **`ContentSnapshot`** — —
- **`ChangeHistory`** — —
- **`Conversation`** — —
- **`Message`** — —
- **`WatchRule`** — —
- **`DatabaseConfig`** — —
- **`Migration`** — —
- **`CommandHistoryRow`** — —
- **`NetworkHistoryRow`** — —
- **`HistoryRepository`** — —
- **`DeviceRepository`** — —
- **`ScanHistoryEntry`** — —
- **`IncrementalScanRecommendation`** — —
- **`ScanHistoryRepository`** — —
- **`ConfiguredDevice`** — —
- **`ConfiguredDeviceRow`** — —
- **`ConfiguredDeviceRepository`** — —
- **`DbAdapter`** — —
- **`TauriDbAdapter`** — —
- **`InMemoryDbAdapter`** — —
- **`DatabaseManager`** — —
- **`ChatRepository`** — —
- **`SendMessageCommand`** — —
- **`CopyContextCommand`** — —
- **`SaveSettingsCommand`** — —
- **`BrowseCommandParams`** — —
- **`BrowseCommand`** — —
- **`SttConfig`** — —
- **`ResolveResult`** — —
- **`LlmConfig`** — —
- **`LlmMessage`** — —
- **`LlmResponse`** — —
- **`TtsOptions`** — —
- **`TauriTtsAvailability`** — —
- **`BackendTtsInfo`** — —
- **`UseChatDispatchDeps`** — —
- **`CommandHistoryItem`** — —
- **`NetworkHistoryItem`** — —
- **`BrowseResult`** — —
- **`AllOriginsResponse`** — —
- **`BrowserProxyPayload`** — —
- **`UseChatSpeechDeps`** — —
- **`UseChatSpeechReturn`** — —
- **`UseLlmOptions`** — —
- **`UseLlmReturn`** — —
- **`LocalClassifier`** — —
- **`LlmVerifier`** — —
- **`MotionPipeline`** — —
- **`WatchNotification`** — —
- **`UseWatchNotificationsReturn`** — —
- **`LlmService`** — —
- **`DefaultBrowseAdapter`** — —
- **`DefaultLlmAdapter`** — —
- **`BrowseService`** — —
- **`PreferenceEntry`** — —
- **`PreferenceScore`** — —
- **`PreferenceLearningStore`** — —
- **`UseSttOptions`** — —
- **`UseSttReturn`** — —
- **`PluginQuery`** — —
- **`QueryMetadata`** — —
- **`PluginResult`** — —
- **`ContentBlock`** — —
- **`ResultMetadata`** — —
- **`PluginCapabilities`** — —
- **`DataSourcePlugin`** — —
- **`StreamablePlugin`** — —
- **`VisualPlugin`** — —
- **`PersistentPlugin`** — —
- **`PluginEvent`** — —
- **`IPluginRegistry`** — —
- **`IIntentRouter`** — —
- **`ICommand`** — —
- **`ICommandHandler`** — —
- **`ICommandBus`** — —
- **`IQuery`** — —
- **`IQueryHandler`** — —
- **`IQueryBus`** — —
- **`PluginContext`** — —
- **`CameraConfig`** — —
- **`MqttConfig`** — —
- **`MqttAdapter`** — —
- **`Plugin`** — —
- **`IntentDetection`** — —
- **`IntentRouter`** — —
- **`PluginRegistry`** — —
- **`CommandBus`** — —
- **`AppContext`** — —
- **`QueryBus`** — —
- **`ListPluginsQuery`** — —
- **`PluginInfo`** — —
- **`GetPluginStatusQuery`** — —
- **`SpeechRecognitionEvent`** — —
- **`SpeechRecognitionErrorEvent`** — —
- **`SpeechRecognitionInstance`** — —
- **`Window`** — —
- **`PluginRegistry`** — —
- **`CacheEntry`** — —
- **`CacheConfig`** — —
- **`CacheStats`** — —
- **`Cache`** — —
- **`CacheFactory`** — —
- **`RealtimeSyncConfig`** — —
- **`SyncMessage`** — —
- **`RealtimeSync`** — —
- **`ProcessInfo`** — —
- **`ProcessRegistry`** — —
- **`SystemContext`** — —
- **`RetryOptions`** — —
- **`ActionSchema`** — —
- **`SubActionDef`** — —
- **`IntentSchema`** — —
- **`CommandBus`** — —
- **`FallbackResult`** — —
- **`FallbackOptions`** — —
- **`NetworkScanResult`** — —
- **`DiscoveredDevice`** — —
- **`ServiceProbeResult`** — —
- **`DiscoveredService`** — —
- **`ServiceMetadata`** — —
- **`NetworkScannerConfig`** — —
- **`ServiceProberConfig`** — —
- **`DiscoveryEvent`** — —
- **`LlmIntentResult`** — —
- **`LlmResponse`** — —
- **`IntentRouter`** — —
- **`PluginQuery`** — —
- **`VisionQueryResult`** — —
- **`MonitoringPlugin`** — —
- **`NetworkScanner`** — —
- **`GetMessagesQuery`** — —
- **`GetSettingsQuery`** — —
- **`LlmAppConfig`** — —
- **`SttAppConfig`** — —
- **`NetworkScanConfig`** — —
- **`ServiceProbeConfig`** — —
- **`SshAppConfig`** — —
- **`LocaleConfig`** — —
- **`CameraDefaults`** — —
- **`MonitorAppConfig`** — —
- **`EmailAppConfig`** — —
- **`FrigateAppConfig`** — —
- **`MotionDetectionConfig`** — —
- **`AppConfig`** — —
- **`ConfigFieldMeta`** — —
- **`ConfigStoreImpl`** — —
- **`ConfigStatus`** — —
- **`ServiceProber`** — —
- **`AutoConfigResult`** — —
- **`AudioSettings`** — —
- **`ChatAggregate`** — —
- **`ChatMessage`** — —
- **`EventStore`** — —
- **`QuickActionSet`** — —
- **`ResolveResult`** — Result of URL resolution.
- **`WatchRule`** — —
- **`ChangeDetectedEvent`** — —
- **`WatchConfig`** — —
- **`ChangeDetectionResult`** — —
- **`WatchManagerEvent`** — —
- **`PollingStats`** — —
- **`AutoWatchConfig`** — —
- **`AutoWatchStats`** — —
- **`AutoWatchIntegration`** — —
- **`ErrorReport`** — —
- **`ErrorReporting`** — —
- **`DeviceStatusChange`** — —
- **`AlertBridgeOptions`** — —
- **`AlertBridge`** — —
- **`WatchManager`** — —
- **`HealthCheckResult`** — —
- **`HealthReport`** — —
- **`HealthChecker`** — —
- **`RemoteMachine`** — —
- **`RemoteCommandResult`** — —
- **`RemoteSystemInfo`** — —
- **`DiskUsage`** — —
- **`NetworkInterface`** — —
- **`RemoteProcess`** — —
- **`RemoteMachinePlugin`** — —
- **`ChangeDetector`** — —
- **`WakeOnLanPlugin`** — —
- **`MdnsService`** — —
- **`MdnsPlugin`** — —
- **`OnvifCamera`** — —
- **`OnvifPlugin`** — —
- **`ArpHost`** — —
- **`ArpPlugin`** — —
- **`PingPlugin`** — —
- **`PingResult`** — —
- **`PortScanPlugin`** — —
- **`PortScanResult`** — —
- **`DiskInfoPlugin`** — —
- **`DiskPartition`** — —
- **`DiskInfo`** — —
- **`SshResult`** — —
- **`ProcessesPlugin`** — —
- **`LogCommand`** — —
- **`LogsPlugin`** — —
- **`SshPlugin`** — —
- **`SshExecResult`** — —
- **`SshTestResult`** — —
- **`KnownHost`** — —
- **`DockerContainer`** — —
- **`DockerImage`** — —
- **`DockerVolume`** — —
- **`DockerNetwork`** — —
- **`DockerInfo`** — —
- **`DockerPlugin`** — —
- **`FileSearchResult`** — —
- **`FileSearchResponse`** — —
- **`FileContentResponse`** — —
- **`FileSearchPlugin`** — —
- **`ServiceProbePlugin`** — —
- **`PipelineStatus`** — —
- **`DetectionStats`** — —
- **`DetectionRow`** — —
- **`MotionDetectionPlugin`** — —
- **`AdvancedPortScanPlugin`** — —
- **`CameraVendor`** — —
- **`PortScanResult`** — —
- **`CameraDetectionResult`** — —
- **`AutoScanConfig`** — —
- **`AutoScanScheduler`** — —
- **`DeviceStatusPlugin`** — —
- **`CameraConfig`** — —
- **`FrameGrabber`** — —
- **`CapturedFrame`** — —
- **`HttpSnapshotGrabber`** — —
- **`TauriRtspGrabber`** — —
- **`SceneDescriber`** — —
- **`LlmSceneDescriber`** — —
- **`RtspCameraPluginOptions`** — —
- **`RtspCameraPlugin`** — —
- **`DeviceConfigPlugin`** — —
- **`RegisterRtspCameraOptions`** — —
- **`PtzCommand`** — —
- **`CameraPtzPlugin`** — —
- **`MarketplaceEntry`** — —
- **`MarketplacePlugin`** — —
- **`CameraStatus`** — —
- **`CameraHealthPlugin`** — —
- **`CameraSnapshotPlugin`** — —
- **`MqttConfig`** — —
- **`MqttClientAdapter`** — —
- **`TopicValue`** — —
- **`MqttPlugin`** — —
- **`ScopeDefinition`** — —
- **`RemotePluginManifest`** — —
- **`ScopeRegistry`** — —
- **`HttpBrowsePlugin`** — —
- **`NetworkScanPlugin`** — —
- **`NetworkDevice`** — —
- **`NetworkScanResult`** — —
- **`AuthBrowsePlugin`** — —
- **`VoiceCommand`** — —
- **`VoiceCommandsPlugin`** — —
- **`ChatLlmPlugin`** — —
- **`FrigateEventsPlugin`** — —
- **`CameraVendor`** — —
- **`ToonicStatus`** — —
- **`ToonicEvent`** — —
- **`ToonicBridgePlugin`** — —
- **`EmailConfig`** — —
- **`EmailMessage`** — —
- **`InboxSummary`** — —
- **`EmailPlugin`** — —
- **`CameraLivePlugin`** — —
- **`NetworkConfig`** — —
- **`NetworkSelectorProps`** — —
- **`WatchBadgeProps`** — —
- **`HealthDiagnosticProps`** — —
- **`AlertBridgeComponentProps`** — —
- **`ExpandedImageData`** — —
- **`ExpandedLiveData`** — —
- **`ChatOverlaysProps`** — —
- **`SettingsProps`** — —
- **`NetworkHistoryItem`** — —
- **`NetworkHistorySelectorProps`** — —
- **`SetupWizardModalProps`** — —
- **`CameraPreviewProps`** — —
- **`FrameAnalysis`** — —
- **`DomainMeta`** — —
- **`MessageResultCardProps`** — —
- **`QuickActionButtonsProps`** — —
- **`ActionLink`** — —
- **`MicSettingsModalProps`** — —
- **`QuickCommand`** — —
- **`SavedCommandHistoryItem`** — —
- **`QuickCommandsProps`** — —
- **`WatchBadgeProps`** — —
- **`BridgeEndpoint`** — —
- **`BridgeMessage`** — —
- **`ActionHint`** — —
- **`MqttCacheEntry`** — —
- **`WsConnection`** — —
- **`SseStream`** — —
- **`ProtocolBridgePlugin`** — —
- **`TtsControlsProps`** — —
- **`ChatProps`** — —
- **`CommandHistoryItem`** — —
- **`CommandHistoryProps`** — —
- **`ActionSuggestion`** — —
- **`ActionSuggestionsProps`** — —
- **`DeviceEntry`** — —
- **`DeviceServiceEntry`** — —
- **`DeviceDashboardModalProps`** — —
- **`MessageQuickActionsProps`** — —
- **`DiagnosticsModalProps`** — —
- **`ThinkingMessageProps`** — —
- **`Props`** — —
- **`MonitorTarget`** — —
- **`CaptureMetadata`** — —
- **`MonitorLogEntry`** — —
- **`MonitorPlugin`** — —
- **`ScopeOption`** — —
- **`SttState`** — —
- **`ChatInputProps`** — —
- **`TtsSettingsModalProps`** — —
- **`Window`** — —
- **`ErrorReportPanelProps`** — —
- **`DeviceStripProps`** — —
- **`FileResult`** — —
- **`FileResultsDisplayProps`** — —
- **`QuickCommandHistoryProps`** — —
- **`CqrsContextValue`** — —
- **`ConfigAction`** — —
- **`ConfigPromptData`** — —
- **`ChatConfigPromptProps`** — —
- **`PluginContextValue`** — —
- **`PluginProviderProps`** — —
- **`NetworkInfo`** — —
- **`VisionConfig`** — —
- **`CameraConfig`** — —
- **`DetectorConfig`** — —
- **`PipelineConfig`** — —
- **`TrackerConfig`** — —
- **`SceneConfig`** — —
- **`DatabaseConfig`** — —
- **`LlmConfig`** — —
- **`CropSnapshot`** — —
- **`CompletedTrack`** — —
- **`ActiveTrack`** — —
- **`Tracker`** — —
- **`ObjectEvent`** — —
- **`MinuteBatch`** — —
- **`MinuteBuffer`** — —
- **`LlmResponse`** — —
- **`MovingObject`** — —
- **`MotionDetector`** — —
- **`TtsState`** — —
- **`ChatMessageListProps`** — —
- **`NlQueryResult`** — —
- **`FrigateMqttEvent`** — —
- **`FrigateMqttConfig`** — —
- **`FrigateMqttRuntime`** — —
- **`TtsAvailability`** — —
- **`VadResult`** — —
- **`FileSearchResult`** — —
- **`FileSearchResponse`** — —
- **`FileContentResponse`** — —
- **`ChatRequest`** — —
- **`Message`** — —
- **`ImageUrlData`** — —
- **`ObjectDescription`** — —
- **`SceneNarrativeResult`** — —
- **`LlmClient`** — —
- **`BrowseResult`** — —
- **`RssItem`** — —
- **`RssFeed`** — —
- **`AtomEntry`** — —
- **`AtomFeed`** — —
- **`MovementSummary`** — —
- **`PipelineProcess`** — —
- **`NativePipeline`** — —
- **`StartPipelineRequest`** — —
- **`PipelineStatus`** — —
- **`PipelineListResult`** — —
- **`DetectionRow`** — —
- **`DetectionStats`** — —
- **`VisionQueryResult`** — —
- **`Detection`** — —
- **`Detector`** — —
- **`TrackMsg`** — —
- **`PipelineHandle`** — —
- **`Pipeline`** — —
- **`SshResult`** — —
- **`SshTestResult`** — —
- **`KnownHost`** — —
- **`EmailConfig`** — —
- **`EmailMessage`** — —
- **`InboxSummary`** — —
- **`ActiveStream`** — —
- **`ActiveTts`** — —
- **`ActiveWakeWordStream`** — —
- **`SttStatus`** — —
- **`TtsInfo`** — —
- **`AudioDevices`** — —
- **`DiskPartition`** — —
- **`DiskInfo`** — —
- **`LocalDetection`** — —
- **`LlmEvent`** — —
- **`Statistics`** — —
- **`VisionDatabase`** — —
- **`QueryResult`** — —
- **`QueryEngine`** — —
- **`DockerContainer`** — —
- **`DockerImage`** — —
- **`DockerVolume`** — —
- **`DockerNetwork`** — —
- **`DockerInfo`** — —
- **`CaptureStream`** — —
- **`RemoteMachine`** — —
- **`RemoteCommandResult`** — —
- **`RemoteSystemInfo`** — —
- **`DiskUsage`** — —
- **`NetworkInterface`** — —
- **`RemoteProcess`** — —
- **`WakeWordState`** — —
- **`AudioSettings`** — —
- **`LegacyAudioSettings`** — —
- **`ToonicStatus`** — —
- **`CapturedFrame`** — —
- **`LiveFrameCache`** — —
- **`RtspWorker`** — —
- **`RtspWorkerStat`** — —
- **`HttpFetchBase64Result`** — —
- **`CameraHealthStatus`** — —
- **`PingResult`** — —
- **`SimplePingResult`** — —
- **`OpenPort`** — —
- **`PortScanResult`** — —
- **`ArpHost`** — —
- **`OnvifCamera`** — —
- **`MdnsService`** — —
- **`NetworkDevice`** — —
- **`NetworkScanResult`** — —
- **`ScanNetworkArgs`** — —
- **`RecordingState`** — —
- **`LocalLlmConfig`** — —
- **`LocalLlm`** — —
- **`ActionLinks`** — —

### Functions

- `testEnv()` — —
- `openApp()` — —
- `supported()` — —
- `input()` — —
- `ttsButton()` — —
- `hasTtsButton()` — —
- `assistantMessages()` — —
- `count()` — —
- `result()` — —
- `utt()` — —
- `voiceCount()` — —
- `voices()` — —
- `micButton()` — —
- `SR()` — —
- `orig()` — —
- `startCalled()` — —
- `speakCalled()` — —
- `sendBtn()` — —
- `copyBtn()` — —
- `settingsBtn()` — —
- `llmStatus()` — —
- `env()` — —
- `llmClassifierStatus()` — —
- `configStore()` — —
- `apiKey()` — —
- `text()` — —
- `messages()` — —
- `lastMessage()` — —
- `updatedMessages()` — —
- `newLastMessage()` — —
- `input()` — —
- `autocomplete()` — —
- `suggestions()` — —
- `currentValue()` — —
- `SSH_TEST_PORT()` — —
- `input()` — —
- `response()` — —
- `messages()` — —
- `apiKey()` — —
- `openApp()` — —
- `url()` — —
- `input()` — —
- `assistantMessages()` — —
- `settingsBtn()` — —
- `btn()` — —
- `ttsCheckbox()` — —
- `saveBtn()` — —
- `closeBtn()` — —
- `copyMainBtn()` — —
- `clipboardText()` — —
- `diagnosticButton()` — —
- `diagnosticTitle()` — —
- `closeDiagnosticBtn()` — —
- `errorReportBtn()` — —
- `w()` — —
- `host()` — —
- `chatApiPlugin()` — —
- `run()` — —
- `getLocalIp()` — —
- `detectIntent()` — —
- `parseArpEntries()` — —
- `raw()` — —
- `ip()` — —
- `mac()` — —
- `parseNmapHosts()` — —
- `block()` — —
- `handleQuery()` — —
- `intent()` — —
- `localIp()` — —
- `sub()` — —
- `m()` — —
- `out()` — —
- `entries()` — —
- `arp()` — —
- `wifiArp()` — —
- `nmapCmd()` — —
- `nmapOut()` — —
- `hosts()` — —
- `cameras()` — —
- `others()` — —
- `body()` — —
- `result()` — —
- `url()` — —
- `parsedUrl()` — —
- `basicUser()` — —
- `basicPass()` — —
- `method()` — —
- `upstream()` — —
- `contentType()` — —
- `buffer()` — —
- `input()` — —
- `response()` — —
- `messages()` — —
- `apiKeySet()` — —
- `waitForApp()` — —
- `sendMessage()` — —
- `body()` — —
- `networkOption()` — —
- `scanResults()` — —
- `scanResultsVisible()` — —
- `networkOptions()` — —
- `cameraFound()` — —
- `optionLocator()` — —
- `element()` — —
- `interactionFound()` — —
- `testSuccessful()` — —
- `button()` — —
- `backButton()` — —
- `historyItems()` — —
- `historyItem()` — —
- `repoLogger()` — —
- `repoLogger()` — —
- `repoLogger()` — —
- `rowToDevice()` — —
- `genId()` — —
- `dbLogger()` — —
- `repoLogger()` — —
- `logger()` — —
- `logger()` — —
- `logger()` — —
- `logger()` — —
- `sttLogger()` — —
- `buildSttRequestBody()` — —
- `getSttConfig()` — —
- `cfg()` — —
- `transcribeAudio()` — —
- `run()` — —
- `isTauri()` — —
- `result()` — —
- `appCfg()` — —
- `resp()` — —
- `body()` — —
- `data()` — —
- `text()` — —
- `getPrompt()` — —
- `isDebug()` — —
- `normalizeLogArg()` — —
- `safeStringify()` — —
- `emit()` — —
- `timestamp()` — —
- `scopePrefix()` — —
- `normalizedArgs()` — —
- `createScopedLogger()` — —
- `logSyncDecorator()` — —
- `scoped()` — —
- `startedAt()` — —
- `result()` — —
- `logAsyncDecorator()` — —
- `levenshtein()` — —
- `m()` — —
- `n()` — —
- `similarity()` — —
- `dist()` — —
- `matches()` — —
- `fuzzyMatchDomain()` — —
- `cleaned()` — —
- `stem()` — —
- `ratioFull()` — —
- `ratioStem()` — —
- `ratio()` — —
- `resolve()` — —
- `text()` — —
- `query()` — —
- `normalized()` — —
- `fuzzy()` — —
- `suggestions()` — —
- `allSuggestions()` — —
- `llmClientLogger()` — —
- `getConfig()` — —
- `cfg()` — —
- `chat()` — —
- `runChat()` — —
- `isTauri()` — —
- `chatDirect()` — —
- `runChatDirect()` — —
- `apiUrl()` — —
- `httpReferer()` — —
- `appTitle()` — —
- `resp()` — —
- `body()` — —
- `data()` — —
- `text()` — —
- `chatViaTauri()` — —
- `runChatViaTauri()` — —
- `result()` — —
- `CONTENT_TRIM()` — —
- `TTS_TRIM()` — —
- `askAboutContent()` — —
- `runAsk()` — —
- `describeImage()` — —
- `runDescribe()` — —
- `describeImageChange()` — —
- `summarizeForTts()` — —
- `runSummarize()` — —
- `detectIntent()` — —
- `runDetect()` — —
- `summarizeSearchResults()` — —
- `SORTED_RULES()` — —
- `normalize()` — —
- `result()` — —
- `original()` — —
- `looksLikeUrl()` — —
- `isTauriRuntime()` — —
- `runtimeWindow()` — —
- `persistLogger()` — —
- `getSessionConversationId()` — —
- `useChatPersistence()` — —
- `repoRef()` — —
- `conversationIdRef()` — —
- `repo()` — —
- `conversationId()` — —
- `unsubAdd()` — —
- `msg()` — —
- `unsubUpdate()` — —
- `ttsLogger()` — —
- `MAX_TTS_SENTENCES()` — —
- `getSpeechSynthesisApi()` — —
- `preprocessForTts()` — —
- `normalized()` — —
- `estimateBackendSpeechDurationMs()` — —
- `words()` — —
- `wordsPerMinute()` — —
- `minutes()` — —
- `useTts()` — —
- `utteranceRef()` — —
- `totalLenRef()` — —
- `backendSupportedRef()` — —
- `backendModeRef()` — —
- `backendProgressTimerRef()` — —
- `backendProgressIntervalRef()` — —
- `clearBackendProgress()` — —
- `startBackendProgress()` — —
- `startedAt()` — —
- `elapsed()` — —
- `next()` — —
- `isMounted()` — —
- `speechSynthesisApi()` — —
- `runtimeIsTauri()` — —
- `loadVoices()` — —
- `synthesis()` — —
- `available()` — —
- `probeTauriBackendTts()` — —
- `engine()` — —
- `backendSupported()` — —
- `speak()` — —
- `runSpeak()` — —
- `preparedText()` — —
- `estimatedDurationMs()` — —
- `runSpeakViaBackend()` — —
- `utterance()` — —
- `found()` — —
- `plVoice()` — —
- `pause()` — —
- `runPause()` — —
- `resume()` — —
- `runResume()` — —
- `stop()` — —
- `runStop()` — —
- `runStopViaBackend()` — —
- `DatabaseManagerContext()` — —
- `useDatabaseManager()` — —
- `dispatchLogger()` — —
- `handleConfigCommand()` — —
- `lower()` — —
- `intervalMs()` — —
- `threshold()` — —
- `thumb()` — —
- `status()` — —
- `subnet()` — —
- `addScopePrefix()` — —
- `prefix()` — —
- `categorizeCommand()` — —
- `lowerCommand()` — —
- `checkIfAmbiguousQuery()` — —
- `lowerQuery()` — —
- `checkIfNetworkQuery()` — —
- `containsUrl()` — —
- `getAmbiguousQueryText()` — —
- `getSuggestionsForQuery()` — —
- `getNetworkSelectionText()` — —
- `parseCameraResults()` — —
- `lines()` — —
- `cameraMatch()` — —
- `camCfg()` — —
- `looksLikeRecoverableError()` — —
- `useChatDispatch()` — —
- `handleSubmit()` — —
- `originalQuery()` — —
- `query()` — —
- `configResult()` — —
- `thinkingId()` — —
- `isVoiceInput()` — —
- `result()` — —
- `fallback()` — —
- `fallbackPrompt()` — —
- `textData()` — —
- `hasCameraLiveBlock()` — —
- `parsed()` — —
- `contentBlocks()` — —
- `runtimeIsTauri()` — —
- `errorMessage()` — —
- `handleCommandHistorySelect()` — —
- `handleSuggestionClick()` — —
- `handleNetworkOptionClick()` — —
- `sendAmbiguousQuerySuggestions()` — —
- `suggestionsId()` — —
- `sendNetworkSelectionMessage()` — —
- `networkSelectionId()` — —
- `handleCameraSelect()` — —
- `handleCameraAnalysisComplete()` — —
- `handleCameraStreamStart()` — —
- `histLogger()` — —
- `useHistoryPersistence()` — —
- `repoRef()` — —
- `getRepo()` — —
- `addToCommandHistory()` — —
- `repo()` — —
- `loadCommandHistory()` — —
- `rows()` — —
- `addToNetworkHistory()` — —
- `loadNetworkHistory()` — —
- `addToCommandHistoryLocalStorage()` — —
- `saved()` — —
- `existingIndex()` — —
- `loadCommandHistoryLocalStorage()` — —
- `addToNetworkHistoryLocalStorage()` — —
- `loadNetworkHistoryLocalStorage()` — —
- `browseLogger()` — —
- `MAX_CONTENT_LENGTH()` — —
- `getRandomUserAgent()` — —
- `getRandomReferer()` — —
- `polishReferers()` — —
- `getRandomAcceptLanguage()` — —
- `generateAdvancedHeaders()` — —
- `generateWPPLCookies()` — —
- `generateOnetCookies()` — —
- `generateInteriaCookies()` — —
- `generateRandomIP()` — —
- `base()` — —
- `last()` — —
- `requestTimestamps()` — —
- `RATE_LIMIT_MS()` — —
- `shouldRateLimit()` — —
- `domain()` — —
- `now()` — —
- `timestamps()` — —
- `recent()` — —
- `delay()` — —
- `detectContentType()` — —
- `text()` — —
- `confidence()` — —
- `productScore()` — —
- `priceMatch()` — —
- `brandMatch()` — —
- `newsScore()` — —
- `dateMatch()` — —
- `authorMatch()` — —
- `docScore()` — —
- `versionMatch()` — —
- `blogScore()` — —
- `forumScore()` — —
- `shopScore()` — —
- `articleScore()` — —
- `createHumanLikeSummary()` — —
- `contentType()` — —
- `sentences()` — —
- `metaInfo()` — —
- `typeLabel()` — —
- `getContentTypeLabel()` — —
- `summarizeBlog()` — —
- `intro()` — —
- `conclusion()` — —
- `takeaways()` — —
- `summarizeForum()` — —
- `questionSentences()` — —
- `answerSentences()` — —
- `summarizeShop()` — —
- `categories()` — —
- `featured()` — —
- `summarizeProduct()` — —
- `price()` — —
- `brand()` — —
- `description()` — —
- `regex()` — —
- `match()` — —
- `summarizeNews()` — —
- `date()` — —
- `author()` — —
- `mainContent()` — —
- `conclusionSentences()` — —
- `summarizeArticle()` — —
- `listItems()` — —
- `summarizeDocumentation()` — —
- `installMatch()` — —
- `configMatch()` — —
- `usageMatch()` — —
- `examples()` — —
- `summarizeGeneral()` — —
- `substantialSentences()` — —
- `getMetaInfo()` — —
- `label()` — —
- `getMetadataLabel()` — —
- `stripCookieBannerText()` — —
- `raw()` — —
- `normalized()` — —
- `blocks()` — —
- `removedCount()` — —
- `processedBlock()` — —
- `shouldRemove()` — —
- `score()` — —
- `linkCount()` — —
- `wordCount()` — —
- `result()` — —
- `calculateBlockScore()` — —
- `normalizeText()` — —
- `withHttpScheme()` — —
- `summarizeUnknownError()` — —
- `extractBrowserReadableContent()` — —
- `document()` — —
- `title()` — —
- `bestScore()` — —
- `node()` — —
- `paragraphs()` — —
- `headings()` — —
- `lists()` — —
- `links()` — —
- `linkRatio()` — —
- `avgSentenceLength()` — —
- `paragraphContent()` — —
- `bodyText()` — —
- `looksLikeHtml()` — —
- `probe()` — —
- `normalizeBrowseResult()` — —
- `rawUrl()` — —
- `safeUrl()` — —
- `rawTitle()` — —
- `rawContent()` — —
- `contentWasHtml()` — —
- `extractedContent()` — —
- `cookieStripped()` — —
- `processedContent()` — —
- `fetchViaAdvancedProxy()` — —
- `targetUrl()` — —
- `controller()` — —
- `timeout()` — —
- `delayMs()` — —
- `response()` — —
- `err()` — —
- `data()` — —
- `fetchViaAllOriginsJson()` — —
- `statusCode()` — —
- `status()` — —
- `fetchViaAllOriginsRaw()` — —
- `fetchViaCorsProxy()` — —
- `fetchViaJina()` — —
- `jinaProxies()` — —
- `wpProxies()` — —
- `regularProxies()` — —
- `browseInBrowser()` — —
- `runBrowseInBrowser()` — —
- `fetchers()` — —
- `payload()` — —
- `htmlPayload()` — —
- `extracted()` — —
- `message()` — —
- `getSmartFetchers()` — —
- `isValidContent()` — —
- `hasMeaningfulContent()` — —
- `executeBrowseCommand()` — —
- `runExecuteBrowseCommand()` — —
- `speechLogger()` — —
- `useChatSpeech()` — —
- `stt()` — —
- `tts()` — —
- `micPhase()` — —
- `lastSpeechSubmitRef()` — —
- `sttAutoListenTimerRef()` — —
- `sttAutoListenStartedAtRef()` — —
- `sttAutoListenSilenceHitsRef()` — —
- `runtimeIsTauri()` — —
- `silenceMs()` — —
- `thresholdSeconds()` — —
- `requiredHits()` — —
- `startedAt()` — —
- `elapsedMs()` — —
- `silent()` — —
- `wakeWordTriggeredSttRef()` — —
- `unsub()` — —
- `previousLoadingWaitIdsRef()` — —
- `unsub2()` — —
- `setupWakeWordListener()` — —
- `payload()` — —
- `wakeWordRunningRef()` — —
- `wakeWordStoppedForSttRef()` — —
- `toggleMic()` — —
- `hookLog()` — —
- `useAlertBridge()` — —
- `bridgeRef()` — —
- `bridge()` — —
- `handler()` — —
- `detail()` — —
- `llmLogger()` — —
- `useLlm()` — —
- `historyRef()` — —
- `send()` — —
- `runSend()` — —
- `resp()` — —
- `msg()` — —
- `describe()` — —
- `runDescribe()` — —
- `summarize()` — —
- `runSummarize()` — —
- `summarizeSearch()` — —
- `runSummarizeSearch()` — —
- `detectIntent()` — —
- `runDetectIntent()` — —
- `raw()` — —
- `finalIntent()` — —
- `clearHistory()` — —
- `init_db(db_path)` — —
- `save_detection(conn, camera_id, label, confidence)` — —
- `update_detection_llm(conn, det_id, llm_label, llm_description)` — —
- `get_statistics(conn, camera_id, hours)` — —
- `create_bg_subtractor(history, var_threshold)` — —
- `extract_moving_objects(frame, bg_subtractor, min_area, max_area)` — —
- `should_send_to_llm(label, confidence, threshold, night_mode)` — —
- `parse_args()` — —
- `main()` — —
- `useWatchNotifications()` — —
- `unsub()` — —
- `changeEvent()` — —
- `notif()` — —
- `timer()` — —
- `acknowledge()` — —
- `acknowledgeEndpoint()` — —
- `acknowledgeAll()` — —
- `stopWatch()` — —
- `mapChangeToNotification()` — —
- `useChatMessages()` — —
- `unsubscribe()` — —
- `log()` — —
- `MAX_ENTRIES()` — —
- `sttLogger()` — —
- `getAudioSettings()` — —
- `settings()` — —
- `arrayBufferToBase64()` — —
- `bytes()` — —
- `chunk()` — —
- `writeWavPcm16()` — —
- `numChannels()` — —
- `sampleRate()` — —
- `numFrames()` — —
- `bytesPerSample()` — —
- `blockAlign()` — —
- `byteRate()` — —
- `dataSize()` — —
- `buffer()` — —
- `view()` — —
- `writeString()` — —
- `offset()` — —
- `sample()` — —
- `clamped()` — —
- `blobToWavBase64()` — —
- `buf()` — —
- `ctx()` — —
- `arr()` — —
- `audioBuffer()` — —
- `wav()` — —
- `getUnsupportedReason()` — —
- `toErrorDetails()` — —
- `err()` — —
- `useStt()` — —
- `recorderRef()` — —
- `chunksRef()` — —
- `streamRef()` — —
- `modeRef()` — —
- `isRecordingRef()` — —
- `startInFlightRef()` — —
- `stopInFlightRef()` — —
- `reason()` — —
- `runtime()` — —
- `stopTracks()` — —
- `startTauriRecording()` — —
- `runBackendStart()` — —
- `msg()` — —
- `startRecording()` — —
- `run()` — —
- `recorder()` — —
- `runOnStop()` — —
- `blob()` — —
- `text()` — —
- `details()` — —
- `stopRecording()` — —
- `runBackendStop()` — —
- `transcriptValue()` — —
- `normalized()` — —
- `rec()` — —
- `cleanupSettings()` — —
- `isStreamable()` — —
- `isVisual()` — —
- `isPersistent()` — —
- `speechLogger()` — —
- `getSpeechRecognitionCtor()` — —
- `getUnsupportedReason()` — —
- `useSpeech()` — —
- `recognitionRef()` — —
- `autoListenEnabledRef()` — —
- `stopRequestedRef()` — —
- `restartTimerRef()` — —
- `runtimeIsTauri()` — —
- `SpeechRecognition()` — —
- `reason()` — —
- `clearFinalTranscript()` — —
- `disableAutoListen()` — —
- `startListening()` — —
- `runStartListening()` — —
- `continuous()` — —
- `recognition()` — —
- `result()` — —
- `stopListening()` — —
- `runStopListening()` — —
- `enableAutoListen()` — —
- `cacheLogger()` — —
- `syncLogger()` — —
- `log()` — —
- `bootstrapApp()` — —
- `pluginRegistry()` — —
- `useLlmClassifier()` — —
- `intentRouter()` — —
- `commandBus()` — —
- `eventStore()` — —
- `dbManager()` — —
- `status()` — —
- `sharedTauriInvoke()` — —
- `safeRegister()` — —
- `registerCorePlugins()` — —
- `grabbers()` — —
- `rtspPlugin()` — —
- `intent()` — —
- `activeScope()` — —
- `plugin()` — —
- `log()` — —
- `detectOs()` — —
- `ua()` — —
- `platform()` — —
- `detectUser()` — —
- `detectHomeDir()` — —
- `detectShell()` — —
- `detectCapabilities()` — —
- `getSystemContext()` — —
- `os()` — —
- `user()` — —
- `homeDir()` — —
- `shell()` — —
- `hostname()` — —
- `capabilities()` — —
- `updateSystemContext()` — —
- `ctx()` — —
- `resetSystemContext()` — —
- `buildSystemContextPrompt()` — —
- `capsText()` — —
- `resolveDecision()` — —
- `sleep()` — —
- `computeDelayMs()` — —
- `expo()` — —
- `capped()` — —
- `jitter()` — —
- `min()` — —
- `max()` — —
- `retry()` — —
- `maxDelayMs()` — —
- `jitterRatio()` — —
- `isLastAttempt()` — —
- `decision()` — —
- `delayMs()` — —
- `isProbablyTransientHttpStatus()` — —
- `isProbablyTransientErrorMessage()` — —
- `m()` — —
- `shouldRetryUnknownAsTransient()` — —
- `message()` — —
- `getSchemasByDomain()` — —
- `getAllDomains()` — —
- `scoreMatch()` — —
- `lower()` — —
- `words()` — —
- `hits()` — —
- `maxPossible()` — —
- `findMatchingSchemas()` — —
- `getDomainHints()` — —
- `findDomainSchemas()` — —
- `hints()` — —
- `matchedDomains()` — —
- `schemasToConfigActions()` — —
- `schemasToLlmContext()` — —
- `byDomain()` — —
- `list()` — —
- `schemaRegistry()` — —
- `registerIntentSchema()` — —
- `registerIntentSchemas()` — —
- `getIntentSchema()` — —
- `getAllIntentSchemas()` — —
- `getSchemasByPlugin()` — —
- `getSchemasByDomain()` — —
- `clearIntentSchemas()` — —
- `matchIntentByPatterns()` — —
- `lower()` — —
- `matches()` — —
- `canPluginHandle()` — —
- `schemas()` — —
- `defineIntent()` — —
- `fallbackLogger()` — —
- `tryLlmFallback()` — —
- `cfg()` — —
- `schemasContext()` — —
- `sysCtx()` — —
- `response()` — —
- `text()` — —
- `jsonMatch()` — —
- `parsed()` — —
- `schemaMap()` — —
- `schema()` — —
- `actions()` — —
- `rankByPreference()` — —
- `scoreA()` — —
- `scoreB()` — —
- `injectFavorites()` — —
- `topPrefs()` — —
- `existingKeys()` — —
- `keywordFallback()` — —
- `domainSchemas()` — —
- `domainLabel()` — —
- `scored()` — —
- `finalActions()` — —
- `generateFallback()` — —
- `llmResult()` — —
- `log()` — —
- `intentCache()` — —
- `CACHE_TTL_MS()` — —
- `MAX_CACHE_SIZE()` — —
- `getCacheKey()` — —
- `cacheSet()` — —
- `firstKey()` — —
- `cacheGet()` — —
- `buildIntentPrompt()` — —
- `context()` — —
- `systemContext()` — —
- `classifyIntent()` — —
- `trimmed()` — —
- `cacheKey()` — —
- `cached()` — —
- `apiKey()` — —
- `systemPrompt()` — —
- `model()` — —
- `response()` — —
- `cleaned()` — —
- `knownIntents()` — —
- `isLlmClassifierAvailable()` — —
- `clearIntentCache()` — —
- `getIntentCacheStats()` — —
- `log()` — —
- `logger()` — —
- `getConfigFieldsByCategory()` — —
- `map()` — —
- `list()` — —
- `configLogger()` — —
- `autoConfigLogger()` — —
- `runAutoConfig()` — —
- `status()` — —
- `isTauri()` — —
- `interfaces()` — —
- `best()` — —
- `buildWelcomeMessage()` — —
- `isPrivateIp()` — —
- `isValidCandidateIp()` — —
- `interfaceScore()` — —
- `score()` — —
- `n()` — —
- `pickBestInterface()` — —
- `withAudioSettingsDefaults()` — —
- `createEvent()` — —
- `projectChatMessages()` — —
- `getWatchConfig()` — —
- `env()` — —
- `getAutoWatchConfig()` — —
- `getPollingInterval()` — —
- `getChangeThreshold()` — —
- `validateWatchConfig()` — —
- `mergeWatchConfig()` — —
- `esLogger()` — —
- `resolveQuickActions()` — —
- `text()` — —
- `subnetMatch()` — —
- `ip()` — —
- `feedUrl()` — —
- `url()` — —
- `seen()` — —
- `deduped()` — —
- `fuzzy_match_domain(input_str, threshold, max_results)` — Find closest matching domains using SequenceMatcher.
- `resolve(raw_input, threshold)` — Resolve user input into a browseable URL.
- `alertLog()` — —
- `healthLogger()` — —
- `motionLog()` — —
- `getAllCameraPorts()` — —
- `allPorts()` — —
- `identifyVendor()` — —
- `confidence()` — —
- `matches()` — —
- `headerValue()` — —
- `generateRtspUrls()` — —
- `vendorInfo()` — —
- `vendorPaths()` — —
- `generateRecommendations()` — —
- `vendor()` — —
- `user()` — —
- `pass()` — —
- `schedLogger()` — —
- `statusLogger()` — —
- `configLogger()` — —
- `registerRtspCameraPlugin()` — —
- `plugin()` — —
- `tauriPlugin()` — —
- `registerMqttPlugin()` — —
- `plugin()` — —
- `logger()` — —
- `logger()` — —
- `frigateLogger()` — —
- `detectCameraVendor()` — —
- `oui()` — —
- `getVendorInfo()` — —
- `buildRtspUrl()` — —
- `vendor()` — —
- `auth()` — —
- `path()` — —
- `buildSnapshotUrl()` — —
- `log()` — —
- `startupLogger()` — —
- `disableStrictModeForTauriDev()` — —
- `renderApp()` — —
- `rootElement()` — —
- `startupLogger()` — —
- `tts()` — —
- `micStreamRef()` — —
- `micAudioCtxRef()` — —
- `micAnimationFrameRef()` — —
- `runtimeIsTauri()` — —
- `runHealthCheck()` — —
- `healthStatus()` — —
- `initializePlugins()` — —
- `context()` — —
- `loadSettings()` — —
- `loadVoices()` — —
- `availableVoices()` — —
- `warmupMicrophone()` — —
- `stream()` — —
- `md()` — —
- `cancelled()` — —
- `cleanup()` — —
- `interval()` — —
- `level()` — —
- `ctx()` — —
- `src()` — —
- `analyser()` — —
- `buf()` — —
- `loop()` — —
- `sum()` — —
- `v()` — —
- `rms()` — —
- `micDevices()` — —
- `speakerDevices()` — —
- `activeMic()` — —
- `activeSpeaker()` — —
- `persistSettings()` — —
- `updateSettings()` — —
- `handleSelect()` — —
- `handleHistorySelect()` — —
- `config()` — —
- `handleNewNetwork()` — —
- `formatTime()` — —
- `now()` — —
- `diff()` — —
- `getNotificationIcon()` — —
- `getSeverityColor()` — —
- `copyErrorsToClipboard()` — —
- `currentReport()` — —
- `timestamp()` — —
- `errors()` — —
- `warnings()` — —
- `detailsStr()` — —
- `textArea()` — —
- `showNotification()` — —
- `notification()` — —
- `bgColor()` — —
- `runHealthCheck()` — —
- `result()` — —
- `interval()` — —
- `handleKeyDown()` — —
- `getStatusColor()` — —
- `getStatusIcon()` — —
- `getOverallStatus()` — —
- `overallStatus()` — —
- `categoryChecks()` — —
- `useHealthDiagnostic()` — —
- `checkHealth()` — —
- `status()` — —
- `AlertBridgeComponent()` — —
- `ChatOverlays()` — —
- `STT_MODELS()` — —
- `runtimeIsTauri()` — —
- `speech()` — —
- `stt()` — —
- `tts()` — —
- `permissionsApi()` — —
- `active()` — —
- `state()` — —
- `next()` — —
- `micDevices()` — —
- `speakerDevices()` — —
- `hasDeviceLabels()` — —
- `update()` — —
- `handleSave()` — —
- `result()` — —
- `msg()` — —
- `savedHistory()` — —
- `parsed()` — —
- `filtered()` — —
- `saveHistory()` — —
- `addToHistory()` — —
- `existingIndex()` — —
- `removeFromHistory()` — —
- `newHistory()` — —
- `clearHistory()` — —
- `startVoiceRecognition()` — —
- `SpeechRecognition()` — —
- `recognition()` — —
- `transcript()` — —
- `item()` — —
- `stopVoiceRecognition()` — —
- `parseVoiceCommand()` — —
- `numberMatch()` — —
- `numberWord()` — —
- `number()` — —
- `addressMatch()` — —
- `getScopeIcon()` — —
- `formatLastUsed()` — —
- `now()` — —
- `diff()` — —
- `FRAME_CACHE()` — —
- `CameraLiveInline()` — —
- `fps()` — —
- `intervalMs()` — —
- `cacheKey()` — —
- `cached()` — —
- `rtspFailCountRef()` — —
- `RTSP_FAIL_THRESHOLD()` — —
- `timerRef()` — —
- `inFlightRef()` — —
- `cancelled()` — —
- `tick()` — —
- `useHttp()` — —
- `res()` — —
- `now()` — —
- `dt()` — —
- `nextFps()` — —
- `msg()` — —
- `MODELS()` — —
- `toggleAutostart()` — —
- `handleSave()` — —
- `runtimeIsTauri()` — —
- `configStatus()` — —
- `apiKeyTrimmed()` — —
- `testApiKey()` — —
- `key()` — —
- `msg()` — —
- `canProceed()` — —
- `Icon()` — —
- `done()` — —
- `active()` — —
- `videoRef()` — —
- `canvasRef()` — —
- `streamRef()` — —
- `analysisIntervalRef()` — —
- `captureFrame()` — —
- `video()` — —
- `canvas()` — —
- `ctx()` — —
- `compareFrames()` — —
- `img1()` — —
- `img2()` — —
- `canvas1()` — —
- `canvas2()` — —
- `ctx1()` — —
- `ctx2()` — —
- `data1()` — —
- `data2()` — —
- `diff()` — —
- `rDiff()` — —
- `gDiff()` — —
- `bDiff()` — —
- `avgDiff()` — —
- `hasChanged()` — —
- `analyzeFrameChanges()` — —
- `result()` — —
- `analysis()` — —
- `startAnalysis()` — —
- `currentFrame()` — —
- `stopAnalysis()` — —
- `handlePlay()` — —
- `mockStream()` — —
- `handlePause()` — —
- `createRTSPStream()` — —
- `createMJPEGStream()` — —
- `frameCount()` — —
- `drawMJPEGFrame()` — —
- `response()` — —
- `blob()` — —
- `img()` — —
- `mjpegInterval()` — —
- `stream()` — —
- `createWebRTCStream()` — —
- `startStreamMonitoring()` — —
- `monitoringInterval()` — —
- `stopStreamMonitoring()` — —
- `handleMuteToggle()` — —
- `handleFullscreen()` — —
- `createMockVideoStream()` — —
- `frame()` — —
- `lastChange()` — —
- `drawFrame()` — —
- `videoTrack()` — —
- `interval()` — —
- `getStatusColor()` — —
- `detectDomain()` — —
- `detectStatus()` — —
- `MessageResultCard()` — —
- `domain()` — —
- `meta()` — —
- `status()` — —
- `statusMeta()` — —
- `QuickActionButtons()` — —
- `isEmail()` — —
- `handleActionClick()` — —
- `MessageWithQuickActions()` — —
- `hasQuickActions()` — —
- `STT_MODELS()` — —
- `runtimeIsTauri()` — —
- `speech()` — —
- `stt()` — —
- `permissionsApi()` — —
- `active()` — —
- `state()` — —
- `next()` — —
- `micDevices()` — —
- `update()` — —
- `handleSave()` — —
- `saved()` — —
- `parsed()` — —
- `formatCommandTitle()` — —
- `inferCategory()` — —
- `lower()` — —
- `getCategoryIcon()` — —
- `aggregation()` — —
- `command()` — —
- `category()` — —
- `existing()` — —
- `mergedCommands()` — —
- `seen()` — —
- `filteredCommands()` — —
- `categoryMatch()` — —
- `searchMatch()` — —
- `getCategoryColor()` — —
- `handleCommandClick()` — —
- `handleSearchChange()` — —
- `toggleFavorite()` — —
- `handleDragStart()` — —
- `handleDragOver()` — —
- `handleDragLeave()` — —
- `handleDrop()` — —
- `draggedIndex()` — —
- `handleDragEnd()` — —
- `handleClick()` — —
- `browseLogger()` — —
- `handlePause()` — —
- `handleResume()` — —
- `handleStop()` — —
- `messages()` — —
- `dbManager()` — —
- `hasNonSystemMessages()` — —
- `showWelcomeScreen()` — —
- `userMessages()` — —
- `currentScopeRef()` — —
- `messagesEndRef()` — —
- `statusNoticeRef()` — —
- `statusNoticeIdRef()` — —
- `messageIdRef()` — —
- `chatLogger()` — —
- `nextMessageId()` — —
- `getRecentQueries()` — —
- `getCurrentContext()` — —
- `hour()` — —
- `lastQuery()` — —
- `handleSuggestionLearning()` — —
- `unsub()` — —
- `message()` — —
- `cancelled()` — —
- `llm()` — —
- `appendStatusNotice()` — —
- `prev()` — —
- `handleSubmitRef()` — —
- `dispatch()` — —
- `handler()` — —
- `custom()` — —
- `detail()` — —
- `inputElement()` — —
- `pct()` — —
- `eventTime()` — —
- `mime()` — —
- `dataUrl()` — —
- `copyChatContent()` — —
- `chatContent()` — —
- `role()` — —
- `copyMessageContext()` — —
- `handleKeyDown()` — —
- `num()` — —
- `card()` — —
- `categoryCounts()` — —
- `savedHistory()` — —
- `parsed()` — —
- `filtered()` — —
- `q()` — —
- `saveHistory()` — —
- `addToHistory()` — —
- `existingIndex()` — —
- `removeFromHistory()` — —
- `newHistory()` — —
- `clearHistory()` — —
- `handleSelect()` — —
- `getCategoryInfo()` — —
- `formatTimestamp()` — —
- `now()` — —
- `diff()` — —
- `getSuccessIndicator()` — —
- `count()` — —
- `isActive()` — —
- `categoryInfo()` — —
- `successIndicator()` — —
- `saved()` — —
- `getTimeOfDay()` — —
- `hour()` — —
- `generateContextualSuggestions()` — —
- `timeOfDay()` — —
- `generateSmartSuggestions()` — —
- `sortedLearning()` — —
- `aScore()` — —
- `bScore()` — —
- `category()` — —
- `getSmartTitle()` — —
- `getSmartIcon()` — —
- `trackSuggestionUsage()` — —
- `key()` — —
- `existing()` — —
- `contextual()` — —
- `smart()` — —
- `lastQuery()` — —
- `sortedSuggestions()` — —
- `getCategoryColor()` — —
- `getCategoryIcon()` — —
- `handleSuggestionClick()` — —
- `timeAgo()` — —
- `diff()` — —
- `mins()` — —
- `hours()` — —
- `days()` — —
- `statusColor()` — —
- `inferDeviceType()` — —
- `v()` — —
- `h()` — —
- `deviceIcon()` — —
- `type()` — —
- `loadDevices()` — —
- `db()` — —
- `key()` — —
- `dispatchChatAction()` — —
- `buildDeviceActions()` — —
- `services()` — —
- `rtsp()` — —
- `http()` — —
- `scheme()` — —
- `ssh()` — —
- `filtered()` — —
- `q()` — —
- `onlineCount()` — —
- `offlineCount()` — —
- `cameraCount()` — —
- `serverCount()` — —
- `deviceCount()` — —
- `isOnline()` — —
- `MessageQuickActions()` — —
- `result()` — —
- `handleAction()` — —
- `getIcon()` — —
- `getVariantClasses()` — —
- `isExecuted()` — —
- `runtimeIsTauri()` — —
- `speech()` — —
- `stt()` — —
- `tts()` — —
- `permissionsApi()` — —
- `active()` — —
- `state()` — —
- `next()` — —
- `micDevices()` — —
- `speakerDevices()` — —
- `hasDeviceLabels()` — —
- `ThinkingMessage()` — —
- `startRef()` — —
- `timer()` — —
- `now()` — —
- `remaining()` — —
- `showCountdown()` — —
- `ChatPersistenceBridge()` — —
- `chatLogger()` — —
- `ChatInput()` — —
- `inputHistoryRef()` — —
- `historyIndexRef()` — —
- `autocompleteSuggestions()` — —
- `q()` — —
- `recent()` — —
- `seen()` — —
- `lower()` — —
- `handleInputFocus()` — —
- `handleInputBlur()` — —
- `handleAutocompleteSelect()` — —
- `inputElement()` — —
- `handleQuickHistorySelect()` — —
- `handleKeyDown()` — —
- `choice()` — —
- `history()` — —
- `nextIndex()` — —
- `runtimeIsTauri()` — —
- `tts()` — —
- `speakerDevices()` — —
- `update()` — —
- `handleSave()` — —
- `result()` — —
- `msg()` — —
- `ErrorReportPanel()` — —
- `refreshData()` — —
- `getFilterOptions()` — —
- `copyErrorReport()` — —
- `report()` — —
- `backendLogs()` — —
- `textArea()` — —
- `clearAllErrors()` — —
- `resolveError()` — —
- `showNotification()` — —
- `notification()` — —
- `bgColor()` — —
- `getSeverityColor()` — —
- `getSeverityIcon()` — —
- `getTypeIcon()` — —
- `deviceTypeIcon()` — —
- `statusDot()` — —
- `age()` — —
- `loadDevices()` — —
- `repo()` — —
- `all()` — —
- `interval()` — —
- `handler()` — —
- `dispatchChatAction()` — —
- `handleDelete()` — —
- `extra()` — —
- `ok()` — —
- `getFileIcon()` — —
- `lower()` — —
- `formatBytes()` — —
- `FileResultsDisplay()` — —
- `toggleSelect()` — —
- `next()` — —
- `handleSendSelected()` — —
- `ClarificationView()` — —
- `extCounts()` — —
- `ext()` — —
- `topExts()` — —
- `savedHistory()` — —
- `parsed()` — —
- `getCategoryIcon()` — —
- `getSuccessIndicator()` — —
- `formatTimestamp()` — —
- `now()` — —
- `diff()` — —
- `getPopularCommands()` — —
- `popularCommands()` — —
- `categoryIcon()` — —
- `successIndicator()` — —
- `CqrsContext()` — —
- `CqrsProvider()` — —
- `storeRef()` — —
- `aggregateRef()` — —
- `value()` — —
- `store()` — —
- `aggregate()` — —
- `browseAdapter()` — —
- `llmAdapter()` — —
- `useCqrs()` — —
- `context()` — —
- `ChatConfigPrompt()` — —
- `handleAction()` — —
- `handleFieldSave()` — —
- `value()` — —
- `meta()` — —
- `getVariantClasses()` — —
- `layout()` — —
- `currentValue()` — —
- `isCompleted()` — —
- `isClicked()` — —
- `buildApiKeyPrompt()` — —
- `buildNetworkConfigPrompt()` — —
- `buildModelSelectionPrompt()` — —
- `buildMonitorConfigPrompt()` — —
- `buildSshHostPrompt()` — —
- `buildCameraActionPrompt()` — —
- `buildConfigOverviewPrompt()` — —
- `status()` — —
- `PluginCtx()` — —
- `PluginProvider()` — —
- `value()` — —
- `intent()` — —
- `plugin()` — —
- `fallback()` — —
- `runtimeIsTauri()` — —
- `result()` — —
- `usePlugins()` — —
- `ctx()` — —
- `addCamera()` — —
- `dbManager()` — —
- `deviceRepo()` — —
- `ARGS()` — —
- `MODE_CAM()` — —
- `MODE_CMP()` — —
- `APP_URL()` — —
- `col()` — —
- `sep()` — —
- `run()` — —
- `has()` — —
- `getLocalIp()` — —
- `printTools()` — —
- `printLocalInfo()` — —
- `ifaces()` — —
- `getArpEntries()` — —
- `raw()` — —
- `ip()` — —
- `mac()` — —
- `printArp()` — —
- `stateColor()` — —
- `printRoutes()` — —
- `out()` — —
- `pingBroadcast()` — —
- `targets()` — —
- `results()` — —
- `nmapScan()` — —
- `cmd()` — —
- `parseNmapResult()` — —
- `hostname()` — —
- `block()` — —
- `vendor()` — —
- `hasCam()` — —
- `printNmapHosts()` — —
- `icon()` — —
- `label()` — —
- `printMdns()` — —
- `compareWithApp()` — —
- `res()` — —
- `data()` — —
- `content()` — —
- `main()` — —
- `localIp()` — —
- `sub()` — —
- `arpEntries()` — —
- `pingAlive()` — —
- `nmapOut()` — —
- `nmapHosts()` — —
- `allIps()` — —
- `cameras()` — —
- `get_local_network_info()` — —
- `list_network_interfaces()` — —
- `resolveIcon()` — —
- `getNetworkIcon()` — —
- `markdownComponents()` — —
- `codeText()` — —
- `inputElement()` — —
- `stripSuggestionMarker()` — —
- `idx()` — —
- `extractSuggestionSection()` — —
- `CopyMessageButton()` — —
- `handleCopy()` — —
- `ChatMessageList()` — —
- `mdComponents()` — —
- `mdComponentsSimple()` — —
- `isSystem()` — —
- `prevIsSystem()` — —
- `nextIsSystem()` — —
- `isDataUrl()` — —
- `canPreview()` — —
- `m()` — —
- `section()` — —
- `seen()` — —
- `query()` — —
- `label()` — —
- `placeholderMatch()` — —
- `placeholderPos()` — —
- `validate_sql_public()` — —
- `tts_is_available()` — —
- `tts_speak()` — —
- `tts_stop()` — —
- `detect_voice_activity()` — —
- `is_available()` — —
- `render_and_extract()` — —
- `capture_screenshot()` — —
- `parse_rss_feed()` — —
- `parse_atom_feed()` — —
- `format_rss_feed()` — —
- `format_atom_feed()` — —
- `detect_feed_type()` — —
- `parse_and_format_feed()` — —
- `parse_rss_feed_command()` — —
- `analyse_movement()` — —
- `movement_tag()` — —
- `init_logging()` — —
- `backend_info()` — —
- `backend_warn()` — —
- `backend_error()` — —
- `resolve_db_path()` — —
- `build_text_to_sql_prompt()` — —
- `autostart_enable()` — —
- `autostart_disable()` — —
- `autostart_status()` — —
- `stt_start()` — —
- `stt_status()` — —
- `stt_get_mic_level()` — —
- `stt_is_silence()` — —
- `backend_tts_stop()` — —
- `backend_tts_pause()` — —
- `backend_tts_resume()` — —
- `backend_tts_speak_base64()` — —
- `backend_tts_info()` — —
- `backend_audio_devices()` — —
- `piper_is_installed()` — —
- `wake_word_start()` — —
- `wake_word_stop()` — —
- `wake_word_check_triggered()` — —
- `col()` — —
- `run()` — —
- `hasCmd()` — —
- `getLocalIp()` — —
- `subnet()` — —
- `getLocalCidrs()` — —
- `out()` — —
- `cidrs()` — —
- `m()` — —
- `ip()` — —
- `detectIntent()` — —
- `handlePing()` — —
- `host()` — —
- `parseArpEntries()` — —
- `raw()` — —
- `mac()` — —
- `parseNmapHosts()` — —
- `block()` — —
- `hasCam()` — —
- `handleFindRpi()` — —
- `blocks()` — —
- `hits()` — —
- `vendor()` — —
- `handleScan()` — —
- `localIp()` — —
- `sub()` — —
- `arp()` — —
- `wifiArp()` — —
- `nmapCmd()` — —
- `nmapOut()` — —
- `hosts()` — —
- `cameras()` — —
- `others()` — —
- `handlePortScan()` — —
- `r()` — —
- `handleArp()` — —
- `entries()` — —
- `handleBrowse()` — —
- `url()` — —
- `res()` — —
- `text()` — —
- `title()` — —
- `plain()` — —
- `showHelp()` — —
- `findDbPath()` — —
- `hasSqlite3Cli()` — —
- `sqliteQuery()` — —
- `handleDevices()` — —
- `dbPath()` — —
- `device()` — —
- `services()` — —
- `count()` — —
- `handlePlugins()` — —
- `data()` — —
- `plugins()` — —
- `name()` — —
- `handleDbCommand()` — —
- `devicesDb()` — —
- `chatDb()` — —
- `tables()` — —
- `size()` — —
- `sql()` — —
- `handleConfig()` — —
- `envFile()` — —
- `val()` — —
- `fromFile()` — —
- `display()` — —
- `masked()` — —
- `getEmailConfig()` — —
- `runPythonScript()` — —
- `cmd()` — —
- `handleEmailTest()` — —
- `c()` — —
- `handleEmailSend()` — —
- `to()` — —
- `subject()` — —
- `body()` — —
- `handleEmailInbox()` — —
- `max()` — —
- `msgs()` — —
- `total()` — —
- `icon()` — —
- `showEmailHelp()` — —
- `APP_URL()` — —
- `askApp()` — —
- `handleMonitorCommand()` — —
- `query()` — —
- `result()` — —
- `isRealResult()` — —
- `getFrigateConfig()` — —
- `handleFrigateCommand()` — —
- `mqttReach()` — —
- `mqttOk()` — —
- `frigateApi()` — —
- `appResult()` — —
- `isReal()` — —
- `runComparison()` — —
- `rl()` — —
- `showPrompt()` — —
- `input()` — —
- `lip()` — —
- `arg()` — —
- `args()` — —
- `s()` — —
- `parts()` — —
- `rest()` — —
- `intent()` — —
- `waitAndExit()` — —
- `anonymize_rtsp_url()` — —
- `rtsp_stop_worker()` — —
- `rtsp_stop_all_workers()` — —
- `rtsp_worker_stats()` — —
- `db_execute()` — —
- `db_query()` — —
- `db_close()` — —
- `strip_cookie_banner_text()` — —
- `truncate_to_chars()` — —
- `normalize_whitespace()` — —
- `is_bot_protection_text()` — —
- `detect_os()` — —
- `detect_arch()` — —
- `detect_cpu()` — —
- `detect_gpu()` — —
- `recommend_openvino_ep()` — —
- `print_report()` — —
- `export_vars()` — —
- `main()` — —
- `find_python()` — —
- `install_in_venv()` — —
- `install_system_wide()` — —
- `install_dev_tools()` — —
- `verify_install()` — —
- `print()` — —
- `main()` — —
- `run_detect()` — —
- `check_install()` — —
- `print()` — —
- `main()` — —
- `check_docker()` — —
- `pull_openvino_image()` — —
- `test_in_docker()` — —
- `print()` — —
- `generate_dockerfile()` — —
- `generate_compose()` — —
- `build_docker_image()` — —
- `main()` — —
- `detect_tts_engine()` — —
- `tts_engine_info()` — —
- `select_tts_engine()` — —
- `synthesize_to_wav()` — —
- `synthesize_to_wav_with_engine()` — —
- `play_wav_blocking()` — —
- `play_wav_async()` — —
- `play_wav_stoppable()` — —
- `speak()` — —
- `speak_with_engine()` — —
- `speak_to_base64()` — —
- `speak_to_base64_with_engine()` — —
- `piper_setup_instructions()` — —
- `piper_is_installed()` — —
- `install_prerequisites()` — —
- `install_via_apt()` — —
- `install_via_pip()` — —
- `install_gpu_runtime()` — —
- `install_python_extras()` — —
- `setup_environment()` — —
- `verify_install()` — —
- `print()` — —
- `main()` — —
- `install_prerequisites()` — —
- `install_via_yum_repo()` — —
- `install_via_pip()` — —
- `install_gpu_runtime()` — —
- `setup_environment()` — —
- `verify_install()` — —
- `main()` — —
- `install_homebrew_deps()` — —
- `install_via_pip()` — —
- `install_via_brew()` — —
- `print_macos_notes()` — —
- `setup_environment()` — —
- `verify_install()` — —
- `print()` — —
- `main()` — —
- `extract_search_results()` — —
- `extract_content()` — —
- `extract_with_scraper()` — —
- `try_extract_search()` — —
- `extract_action_links()` — —


## Project Structure

📄 `e2e.chat-features.spec` (12 functions)
📄 `e2e.logging.spec` (5 functions)
📄 `e2e.network-scanning-flow.spec` (15 functions)
📄 `e2e.new-plugins.spec` (24 functions)
📄 `e2e.plugin-system.spec` (26 functions)
📄 `e2e.ssh-docker.spec` (23 functions)
📄 `e2e.ssh-integration.spec` (17 functions)
📄 `e2e.voice-interface.spec` (36 functions)
📄 `playwright.config` (1 functions)
📄 `postcss.config`
📄 `project`
📄 `resolver` (2 functions, 1 classes)
📄 `scripts.add-reolink-camera` (3 functions)
📄 `scripts.chat-cli` (156 functions)
📄 `scripts.detect-platform` (8 functions)
📄 `scripts.install-openvino` (5 functions)
📄 `scripts.install-openvino-docker` (9 functions)
📄 `scripts.install-openvino-macos` (9 functions)
📄 `scripts.install-openvino-pip` (10 functions)
📄 `scripts.install-openvino-rhel` (7 functions)
📄 `scripts.install-openvino-ubuntu` (10 functions)
📄 `scripts.motion_pipeline` (23 functions, 3 classes)
📄 `scripts.net-diag` (51 functions)
📄 `src-tauri.benches.file_search_bench` (2 functions)
📄 `src-tauri.src.audio_capture` (9 functions, 1 classes)
📄 `src-tauri.src.audio_commands` (17 functions, 6 classes)
📄 `src-tauri.src.autostart` (7 functions)
📄 `src-tauri.src.browse_rendered` (6 functions)
📄 `src-tauri.src.content_cleaning` (4 functions)
📄 `src-tauri.src.content_extraction` (10 functions, 1 classes)
📄 `src-tauri.src.disk_info` (6 functions, 2 classes)
📄 `src-tauri.src.docker` (5 classes)
📄 `src-tauri.src.email` (1 functions, 3 classes)
📄 `src-tauri.src.file_search` (10 functions, 3 classes)
📄 `src-tauri.src.frigate_mqtt` (3 classes)
📄 `src-tauri.src.llm` (1 classes)
📄 `src-tauri.src.llm_query` (2 functions, 1 classes)
📄 `src-tauri.src.local_llm` (7 functions, 2 classes)
📄 `src-tauri.src.logging` (6 functions)
📄 `src-tauri.src.main` (1 functions, 1 classes)
📄 `src-tauri.src.main_changes` (1 functions)
📄 `src-tauri.src.motion_detection` (8 functions, 8 classes)
📄 `src-tauri.src.network` (7 functions)
📄 `src-tauri.src.network_info` (5 functions, 1 classes)
📄 `src-tauri.src.network_scan` (27 functions, 16 classes)
📄 `src-tauri.src.query_schema` (9 functions)
📄 `src-tauri.src.remote_machine` (6 classes)
📄 `src-tauri.src.rss_parser` (13 functions, 4 classes)
📄 `src-tauri.src.settings` (17 functions, 2 classes)
📄 `src-tauri.src.setup-audio`
📄 `src-tauri.src.ssh` (2 functions, 3 classes)
📄 `src-tauri.src.stt` (6 functions, 1 classes)
📄 `src-tauri.src.toonic_sidecar` (3 functions, 1 classes)
📄 `src-tauri.src.tts` (10 functions, 1 classes)
📄 `src-tauri.src.tts_backend` (22 functions)
📄 `src-tauri.src.vision_capture` (3 functions, 1 classes)
📄 `src-tauri.src.vision_config` (34 functions, 8 classes)
📄 `src-tauri.src.vision_db` (12 functions, 4 classes)
📄 `src-tauri.src.vision_detector` (8 functions, 2 classes)
📄 `src-tauri.src.vision_llm` (7 functions, 6 classes)
📄 `src-tauri.src.vision_motion` (2 functions, 2 classes)
📄 `src-tauri.src.vision_movement` (4 functions, 1 classes)
📄 `src-tauri.src.vision_pipeline` (3 functions, 3 classes)
📄 `src-tauri.src.vision_query_engine` (2 functions, 2 classes)
📄 `src-tauri.src.vision_scene_buffer` (7 functions, 3 classes)
📄 `src-tauri.src.vision_tracker` (4 functions, 4 classes)
📄 `src-tauri.src.wake_word` (7 functions, 1 classes)
📄 `src.App` (38 functions)
📄 `src.commands.browseCommand` (9 functions, 2 classes)
📄 `src.commands.copyContextCommand` (5 functions, 1 classes)
📄 `src.commands.saveSettingsCommand` (3 functions, 1 classes)
📄 `src.commands.sendMessageCommand` (5 functions, 1 classes)
📄 `src.components.ActionSuggestions` (22 functions, 2 classes)
📄 `src.components.AlertBridgeComponent` (1 functions, 1 classes)
📄 `src.components.CameraLiveInline` (19 functions)
📄 `src.components.CameraPreview` (62 functions, 2 classes)
📄 `src.components.Chat` (44 functions, 1 classes)
📄 `src.components.ChatConfigPrompt` (24 functions, 3 classes)
📄 `src.components.ChatInput` (22 functions, 3 classes)
📄 `src.components.ChatMessageList` (28 functions, 2 classes)
📄 `src.components.ChatOverlays` (1 functions, 3 classes)
📄 `src.components.ChatPersistenceBridge` (1 functions, 1 classes)
📄 `src.components.CommandHistory` (21 functions, 2 classes)
📄 `src.components.DeviceDashboardModal` (32 functions, 3 classes)
📄 `src.components.DeviceStrip` (13 functions, 1 classes)
📄 `src.components.DiagnosticsModal` (11 functions, 1 classes)
📄 `src.components.ErrorReportPanel` (15 functions, 2 classes)
📄 `src.components.FileResultsDisplay` (11 functions, 2 classes)
📄 `src.components.HealthDiagnostic` (23 functions, 1 classes)
📄 `src.components.MessageQuickActions` (6 functions, 1 classes)
📄 `src.components.MessageResultCard` (7 functions, 2 classes)
📄 `src.components.MicSettingsModal` (11 functions, 1 classes)
📄 `src.components.NetworkHistorySelector` (25 functions, 2 classes)
📄 `src.components.NetworkSelector` (4 functions, 2 classes)
📄 `src.components.QuickActionButtons` (5 functions, 2 classes)
📄 `src.components.QuickCommandHistory` (12 functions, 1 classes)
📄 `src.components.QuickCommands` (25 functions, 3 classes)
📄 `src.components.Settings` (16 functions, 1 classes)
📄 `src.components.SetupWizardModal` (13 functions, 1 classes)
📄 `src.components.ThinkingMessage` (6 functions, 1 classes)
📄 `src.components.TtsControls` (3 functions, 1 classes)
📄 `src.components.TtsSettingsModal` (7 functions, 1 classes)
📄 `src.components.WatchBadge` (5 functions, 1 classes)
📄 `src.components.WatchBadge.simple` (1 functions, 1 classes)
📄 `src.config.appConfig` (3 functions, 13 classes)
📄 `src.config.autoConfig` (14 functions, 1 classes)
📄 `src.config.configStore` (24 functions, 2 classes)
📄 `src.config.watchConfig` (8 functions)
📄 `src.contexts.CqrsContext` (11 functions, 1 classes)
📄 `src.contexts.pluginContext` (10 functions, 2 classes)
📄 `src.core.actionSchema` (18 functions, 1 classes)
📄 `src.core.bootstrap` (17 functions)
📄 `src.core.cache` (38 functions, 5 classes)
📄 `src.core.commandBus` (7 functions, 1 classes)
📄 `src.core.fallbackHandler` (29 functions, 2 classes)
📄 `src.core.intentRouter` (20 functions, 2 classes)
📄 `src.core.intentSchema` (15 functions, 2 classes)
📄 `src.core.llmIntentClassifier` (25 functions, 2 classes)
📄 `src.core.plugin.types` (3 functions, 19 classes)
📄 `src.core.pluginRegistry` (15 functions, 1 classes)
📄 `src.core.preferenceLearning` (23 functions, 3 classes)
📄 `src.core.processRegistry` (15 functions, 2 classes)
📄 `src.core.queryBus` (14 functions, 4 classes)
📄 `src.core.realtimeSync` (19 functions, 3 classes)
📄 `src.core.retry` (19 functions, 1 classes)
📄 `src.core.systemContext` (21 functions, 1 classes)
📄 `src.core.types` (10 classes)
📄 `src.discovery.networkScanner` (33 functions, 1 classes)
📄 `src.discovery.serviceProber` (32 functions, 1 classes)
📄 `src.discovery.types` (8 classes)
📄 `src.domain.audioSettings` (1 functions, 1 classes)
📄 `src.domain.chatAggregate` (8 functions, 1 classes)
📄 `src.domain.chatEvents` (2 functions, 1 classes)
📄 `src.domain.eventStore` (12 functions, 1 classes)
📄 `src.hooks.useAlertBridge` (7 functions)
📄 `src.hooks.useChatDispatch` (56 functions, 1 classes)
📄 `src.hooks.useChatMessages` (2 functions)
📄 `src.hooks.useChatPersistence` (10 functions)
📄 `src.hooks.useChatSpeech` (26 functions, 2 classes)
📄 `src.hooks.useDatabaseManager` (2 functions)
📄 `src.hooks.useHistoryPersistence` (24 functions, 2 classes)
📄 `src.hooks.useLlm` (21 functions, 2 classes)
📄 `src.hooks.useSpeech` (24 functions, 4 classes)
📄 `src.hooks.useStt` (62 functions, 2 classes)
📄 `src.hooks.useTts` (51 functions, 3 classes)
📄 `src.hooks.useWatchNotifications` (10 functions, 2 classes)
📄 `src.integration.autoWatchIntegration` (31 functions, 3 classes)
📄 `src.lib.browseGateway` (183 functions, 3 classes)
📄 `src.lib.llmClient` (38 functions, 3 classes)
📄 `src.lib.llmPrompts` (1 functions)
📄 `src.lib.logger` (16 functions)
📄 `src.lib.phonetic` (5 functions)
📄 `src.lib.resolver` (20 functions, 1 classes)
📄 `src.lib.runtime` (2 functions)
📄 `src.lib.sttClient` (13 functions, 1 classes)
📄 `src.main` (4 functions)
📄 `src.persistence.chatRepository` (16 functions, 1 classes)
📄 `src.persistence.configuredDeviceRepository` (28 functions, 3 classes)
📄 `src.persistence.databaseManager` (22 functions, 4 classes)
📄 `src.persistence.deviceRepository` (22 functions, 1 classes)
📄 `src.persistence.historyRepository` (13 functions, 3 classes)
📄 `src.persistence.migrations`
📄 `src.persistence.scanHistoryRepository` (16 functions, 3 classes)
📄 `src.persistence.types` (9 classes)
📄 `src.plugins.authBrowse.authBrowsePlugin` (13 functions, 1 classes)
📄 `src.plugins.camera.cameraLivePlugin` (72 functions, 1 classes)
📄 `src.plugins.camera.cameraVendorDatabase` (11 functions, 1 classes)
📦 `src.plugins.cameras`
📄 `src.plugins.cameras.cameraHealthPlugin` (15 functions, 2 classes)
📄 `src.plugins.cameras.cameraPtzPlugin` (16 functions, 2 classes)
📄 `src.plugins.cameras.cameraSnapshotPlugin` (12 functions, 1 classes)
📄 `src.plugins.chat.chatPlugin` (9 functions, 1 classes)
📄 `src.plugins.discovery.advancedPortScanPlugin` (42 functions, 1 classes)
📄 `src.plugins.discovery.autoScanScheduler` (34 functions, 2 classes)
📄 `src.plugins.discovery.cameraDetection` (13 functions, 3 classes)
📄 `src.plugins.discovery.deviceConfigPlugin` (42 functions, 1 classes)
📄 `src.plugins.discovery.deviceStatusPlugin` (41 functions, 1 classes)
📄 `src.plugins.discovery.networkScanPlugin` (197 functions, 3 classes)
📄 `src.plugins.discovery.serviceProbePlugin` (21 functions, 1 classes)
📄 `src.plugins.docker.dockerPlugin` (31 functions, 6 classes)
📄 `src.plugins.email.emailPlugin` (36 functions, 4 classes)
📄 `src.plugins.files.fileSearchPlugin` (36 functions, 4 classes)
📄 `src.plugins.frigate.frigateEventsPlugin` (39 functions, 1 classes)
📄 `src.plugins.http.browsePlugin` (21 functions, 1 classes)
📦 `src.plugins.marketplace`
📄 `src.plugins.marketplace.marketplaceLoader` (23 functions, 2 classes)
📦 `src.plugins.monitor`
📄 `src.plugins.monitor.monitorPlugin` (300 functions, 4 classes)
📄 `src.plugins.monitor.motionDetectionPlugin` (58 functions, 4 classes)
📄 `src.plugins.monitoringPlugin` (19 functions, 2 classes)
📦 `src.plugins.mqtt` (2 functions)
📄 `src.plugins.mqtt.mqttPlugin` (28 functions, 4 classes)
📄 `src.plugins.network.arpPlugin` (16 functions, 2 classes)
📄 `src.plugins.network.mdnsPlugin` (16 functions, 2 classes)
📄 `src.plugins.network.onvifPlugin` (19 functions, 2 classes)
📄 `src.plugins.network.pingPlugin` (18 functions, 2 classes)
📄 `src.plugins.network.portScanPlugin` (21 functions, 2 classes)
📄 `src.plugins.network.wakeOnLanPlugin` (10 functions, 1 classes)
📦 `src.plugins.protocol-bridge`
📄 `src.plugins.protocol-bridge.protocolBridgePlugin` (152 functions, 7 classes)
📄 `src.plugins.remote-machine.remoteMachinePlugin` (33 functions, 7 classes)
📦 `src.plugins.rtsp-camera` (3 functions, 1 classes)
📄 `src.plugins.rtsp-camera.rtspCameraPlugin` (42 functions, 9 classes)
📄 `src.plugins.scope.scopeRegistry` (22 functions, 3 classes)
📄 `src.plugins.system.diskInfoPlugin` (33 functions, 4 classes)
📄 `src.plugins.system.logs.index`
📄 `src.plugins.system.logsPlugin` (25 functions, 2 classes)
📄 `src.plugins.system.processesPlugin` (12 functions, 1 classes)
📄 `src.plugins.system.sshPlugin` (34 functions, 4 classes)
📄 `src.plugins.toonic.toonicBridgePlugin` (54 functions, 3 classes)
📦 `src.plugins.voice`
📄 `src.plugins.voice.voiceCommandsPlugin` (9 functions, 2 classes)
📄 `src.queries.getMessagesQuery` (3 functions, 1 classes)
📄 `src.queries.getSettingsQuery` (2 functions, 1 classes)
📄 `src.reactive.alertBridge` (27 functions, 3 classes)
📄 `src.reactive.changeDetector` (37 functions, 1 classes)
📄 `src.reactive.types` (6 classes)
📄 `src.reactive.watchManager` (44 functions, 1 classes)
📄 `src.services.browseService` (1 classes)
📄 `src.services.defaultBrowseAdapter` (1 functions, 1 classes)
📄 `src.services.defaultLlmAdapter` (7 functions, 1 classes)
📄 `src.services.llmService` (1 classes)
📄 `src.utils.errorReporting` (27 functions, 2 classes)
📄 `src.utils.healthCheck` (28 functions, 3 classes)
📄 `src.utils.quickActionResolver` (12 functions, 1 classes)
📄 `src.vite-env.d`
📄 `tailwind.config`
📄 `vite.config` (42 functions)

## Requirements

- @tailwindcss/typography ^0.5.19- @tauri-apps/api ^2.0.0- @tauri-apps/plugin-shell ^2.0.0- better-sqlite3 ^12.6.2- lucide-react ^0.454.0- react ^18.3.1- react-dom ^18.3.1- react-markdown ^10.1.0- remark-breaks ^4.0.0- remark-gfm ^4.0.1

## Contributing

**Contributors:**
- Tom Softreck <tom@sapletta.com>
- Tom Sapletta <tom-sapletta-com@users.noreply.github.com>

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/wronai/broxeen
cd broxeen

# Install in development mode
pip install -e ".[dev]"

# Run tests
pytest
```

## Documentation

- 📖 [Full Documentation](https://github.com/wronai/broxeen/tree/main/docs) — API reference, module docs, architecture
- 🚀 [Getting Started](https://github.com/wronai/broxeen/blob/main/docs/getting-started.md) — Quick start guide
- 📚 [API Reference](https://github.com/wronai/broxeen/blob/main/docs/api.md) — Complete API documentation
- 🔧 [Configuration](https://github.com/wronai/broxeen/blob/main/docs/configuration.md) — Configuration options
- 💡 [Examples](./examples) — Usage examples and code samples

### Generated Files

| Output | Description | Link |
|--------|-------------|------|
| `README.md` | Project overview (this file) | — |
| `docs/api.md` | Consolidated API reference | [View](./docs/api.md) |
| `docs/modules.md` | Module reference with metrics | [View](./docs/modules.md) |
| `docs/architecture.md` | Architecture with diagrams | [View](./docs/architecture.md) |
| `docs/dependency-graph.md` | Dependency graphs | [View](./docs/dependency-graph.md) |
| `docs/coverage.md` | Docstring coverage report | [View](./docs/coverage.md) |
| `docs/getting-started.md` | Getting started guide | [View](./docs/getting-started.md) |
| `docs/configuration.md` | Configuration reference | [View](./docs/configuration.md) |
| `docs/api-changelog.md` | API change tracking | [View](./docs/api-changelog.md) |
| `CONTRIBUTING.md` | Contribution guidelines | [View](./CONTRIBUTING.md) |
| `examples/` | Usage examples | [Browse](./examples) |
| `mkdocs.yml` | MkDocs configuration | — |

<!-- code2docs:end -->