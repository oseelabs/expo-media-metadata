import * as React from 'react';

import { ExpoMediaMetadataViewProps } from './ExpoMediaMetadata.types';

export default function ExpoMediaMetadataView(props: ExpoMediaMetadataViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
