package expo.modules.oseelabs.media.metadata

import android.media.MediaMetadataRetriever

enum class MetadataField(val key: Int) {
    ALBUM(MediaMetadataRetriever.METADATA_KEY_ALBUM),
    ARTIST(MediaMetadataRetriever.METADATA_KEY_ARTIST),
    DATE(MediaMetadataRetriever.METADATA_KEY_DATE),
    DURATION(MediaMetadataRetriever.METADATA_KEY_DURATION),
    GENRE(MediaMetadataRetriever.METADATA_KEY_GENRE),
    TITLE(MediaMetadataRetriever.METADATA_KEY_TITLE),
}

fun MediaMetadataRetriever.extractMetadata(fields: List<MetadataField>) = buildMap {
    fields.forEach {
        this[it.name] = extractMetadata(it.key)
    }
    // FIXME: Correct implementation of embeddedPicture
    this["EMBEDDED_PICTURE"] = embeddedPicture.contentToString()
}