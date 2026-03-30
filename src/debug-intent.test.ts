// @vitest-environment node
import { describe, it, expect, beforeEach } from 'vitest';
import { IntentRouter } from '../src/core/intentRouter';
import { PluginRegistry } from '../src/core/pluginRegistry';
import { VoiceCommandsPlugin } from '../src/plugins/voice/voiceCommandsPlugin';
import { LogsPlugin } from '../src/plugins/system/logsPlugin';

describe('Intent Detection Debug', () => {
  let registry: PluginRegistry;
  let router: IntentRouter;

  beforeEach(() => {
    registry = new PluginRegistry();
    router = new IntentRouter({ useLlmClassifier: false }); // Disable LLM for testing
  });

  it('should detect voice intents correctly', async () => {
    const voicePlugin = new VoiceCommandsPlugin();
    registry.register(voicePlugin);
    router.registerPlugin(voicePlugin);

    const testQueries = [
      'wyłącz mikrofon',
      'włącz mikrofon', 
      'wyłącz sterowanie głosowe',
      'włącz sterowanie głosowe'
    ];

    for (const query of testQueries) {
      console.log(`\n🔍 Testing query: "${query}"`);
      const intent = await router.detect(query);
      console.log(`🎯 Detected intent: ${intent.intent} (confidence: ${intent.confidence})`);
      
      const plugin = router.route(intent.intent);
      console.log(`🔌 Found plugin: ${plugin?.id || 'null'}`);
      
      expect(intent.intent).toBe('voice:command');
      expect(plugin).toBeDefined();
      expect(plugin?.id).toBe('voice-commands');
    }
  });

  it('should detect logs intents correctly', async () => {
    const logsPlugin = new LogsPlugin();
    registry.register(logsPlugin);
    router.registerPlugin(logsPlugin);

    const testQueries = [
      'pobierz logi',
      'wyczyść logi',
      'poziom logów'
    ];

    for (const query of testQueries) {
      console.log(`\n🔍 Testing query: "${query}"`);
      const intent = await router.detect(query);
      console.log(`🎯 Detected intent: ${intent.intent} (confidence: ${intent.confidence})`);
      
      const plugin = router.route(intent.intent);
      console.log(`🔌 Found plugin: ${plugin?.id || 'null'}`);
      
      expect(['logs:download', 'logs:clear', 'logs:level']).toContain(intent.intent);
      expect(plugin).toBeDefined();
      expect(plugin?.id).toBe('logs');
    }
  });
});
