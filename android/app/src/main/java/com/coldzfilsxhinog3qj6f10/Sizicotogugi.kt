/* cf-intake:v1 */
package com.coldzfilsxhinog3qj6f10

// autosetup-split-begin
// autosetup-split-end
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

class Sizicotogugi(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = SizicotogugiOcobzildfiskwvhingubfV21ByteFold("wv") xor SizicotogugicobzildfiskwvhinguObfV21HashMix("sw7")
        

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = SizicotogugiOcobzildfiskwvhingubfV21ByteFold("wv") xor SizicotogugicobzildfiskwvhinguObfV21HashMix("sw7")
        return "Sizicotogugi"
    }

    @ReactMethod
    fun guxesocitugaf(fields: ReadableArray, bodyPlain: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = SizicotogugiOcobzildfiskwvhingubfV21ByteFold("wv") xor SizicotogugicobzildfiskwvhinguObfV21HashMix("sw7")
        
        try {
            promise.resolve(CcobzildfiskwvhinguIntakePart01.assemble(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun hijitisicadi(json: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = SizicotogugiOcobzildfiskwvhingubfV21ByteFold("wv") xor SizicotogugicobzildfiskwvhinguObfV21HashMix("sw7")
        
        try {
            promise.resolve(CcobzildfiskwvhinguIntakePart02.mapResponse(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun dasamuruhujado(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = SizicotogugiOcobzildfiskwvhingubfV21ByteFold("wv") xor SizicotogugicobzildfiskwvhinguObfV21HashMix("sw7")
        
        Thread {
            try {
                val connection = (URL(CcobzildfiskwvhinguIntakePart01.workerUrl(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "kovaja" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Mo", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }
}

/* obfuscation-batch:v21 */
private fun SizicotogugiOcobzildfiskwvhingubfV21ByteFold(s: String): Int {
  var x = 15
  for (i in s.indices) x = (x + s[i].code * 33) and 65535
  return x
}

private fun SizicotogugicobzildfiskwvhinguObfV21HashMix(s: String): Int {
  var h = 39
  for (i in s.indices) h = (h xor (s[i].code * 31)) % 711
  return h
}
