import { registerWebModule, NativeModule } from 'expo';

import { ExpoMediaMetadataModuleEvents } from './ExpoMediaMetadata.types';

class ExpoMediaMetadataModule extends NativeModule<ExpoMediaMetadataModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoMediaMetadataModule);
