import { NativeModule, requireNativeModule } from 'expo';

declare class MediaMetadataModule extends NativeModule {
    getMetadata(path: string): Promise<Map<string, string|null>>
}

const MediaMetadata = requireNativeModule<MediaMetadataModule>('MediaMetadata');

export default class ExpoMediaMetadata {
    static async getMetadata(path: string): Promise<Map<string, string|null> | unknown> {
        try {
            const metadata = await MediaMetadata.getMetadata(path);
            return metadata;
        } catch (error: unknown) {
            console.error("Error retrieving metadata", error);
            return error;
        }
    }
}