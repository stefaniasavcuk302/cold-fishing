/* net-stack:v1 okhttp+moshi */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.squareup.moshi.JsonReader
import okio.Buffer

class Kereqohiwop(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KereqohiwopOcobzildfiskwvhingubfV21ClampMod(62, 62) xor KereqohiwopOcobzildfiskwvhingubfV21ShiftXor(16, 47)
        

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KereqohiwopOcobzildfiskwvhingubfV21ClampMod(62, 62) xor KereqohiwopOcobzildfiskwvhingubfV21ShiftXor(16, 47)
        return "Qakelutujowase"
    }

    @ReactMethod
    fun wegubajamegobu(url: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KereqohiwopOcobzildfiskwvhingubfV21ClampMod(62, 62) xor KereqohiwopOcobzildfiskwvhingubfV21ShiftXor(16, 47)
        
        val client = OkHttpClient.Builder()
            .callTimeout(8, TimeUnit.SECONDS)
            .build()
        var short = ""
        try {
            client.newCall(Request.Builder().url(url).get().build()).execute().use { response ->
                val text = response.body?.string() ?: ""
                short = xajamalupi(text)
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            client.dispatcher.executorService.shutdown()
            client.connectionPool.evictAll()
        }
        promise.resolve(short)
    }

    private fun xajamalupi(body: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KereqohiwopOcobzildfiskwvhingubfV21ClampMod(62, 62) xor KereqohiwopOcobzildfiskwvhingubfV21ShiftXor(16, 47)
        
        val count = JsonReader.of(Buffer().writeUtf8(body)).use { reader ->
            var tokens = 0
            while (reader.peek() != JsonReader.Token.END_DOCUMENT) {
                when (reader.peek()) {
                    JsonReader.Token.BEGIN_OBJECT -> {
                        reader.beginObject()
                        tokens += 1
                    }
                    JsonReader.Token.END_OBJECT -> {
                        reader.endObject()
                        tokens += 1
                    }
                    JsonReader.Token.BEGIN_ARRAY -> {
                        reader.beginArray()
                        tokens += 1
                    }
                    JsonReader.Token.END_ARRAY -> {
                        reader.endArray()
                        tokens += 1
                    }
                    JsonReader.Token.NAME -> {
                        reader.nextName()
                        tokens += 1
                    }
                    JsonReader.Token.STRING -> {
                        reader.nextString()
                        tokens += 1
                    }
                    JsonReader.Token.NUMBER -> {
                        reader.nextDouble()
                        tokens += 1
                    }
                    JsonReader.Token.BOOLEAN -> {
                        reader.nextBoolean()
                        tokens += 1
                    }
                    JsonReader.Token.NULL -> {
                        reader.nextNull<Any>()
                        tokens += 1
                    }
                    else -> {
                        reader.skipValue()
                        tokens += 1
                    }
                }
            }
            tokens
        }
        return count.toString()
    }
}

/* obfuscation-batch:v21 */
private fun KereqohiwopOcobzildfiskwvhingubfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 55) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KereqohiwopOcobzildfiskwvhingubfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 92) and 56142
}
