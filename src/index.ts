// Reexport the native module. On web, it will be resolved to ExpoMediaMetadataModule.web.ts
// and on native platforms to ExpoMediaMetadataModule.ts
export { default } from './ExpoMediaMetadataModule';
export { default as ExpoMediaMetadataView } from './ExpoMediaMetadataView';
export * from  './ExpoMediaMetadata.types';
