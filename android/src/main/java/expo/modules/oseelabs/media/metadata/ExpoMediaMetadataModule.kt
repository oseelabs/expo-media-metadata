package expo.modules.oseelabs.media.metadata

import android.media.MediaMetadataRetriever
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise

class ExpoMediaMetadataModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("MediaMetadata")

        Function("getMetadata") { path: String, promise: Promise ->
            val retriever = MediaMetadataRetriever()
            try {
                retriever.setDataSource(path)
                val metadata = retriever.extractMetadata(fields = MetadataField.entries)
                promise.resolve(metadata)
            } catch (e: Exception) {
                promise.reject("Error", "Could not retrieve title", e)
            } finally {
                retriever.release()
            }
        }
    }
}
