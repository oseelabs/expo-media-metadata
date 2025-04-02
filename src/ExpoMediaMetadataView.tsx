import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoMediaMetadataViewProps } from './ExpoMediaMetadata.types';

const NativeView: React.ComponentType<ExpoMediaMetadataViewProps> =
  requireNativeView('ExpoMediaMetadata');

export default function ExpoMediaMetadataView(props: ExpoMediaMetadataViewProps) {
  return <NativeView {...props} />;
}
