/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

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

object CIntakePacobzildfiskwvhingurt01 {
    internal val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    internal val cookieLayout = arrayOf("pad", "network", "pad", "adId", "timezone", "oneLink", "androidId", "session_id", "app_version", "userAgent")
    internal val headerLayout = arrayOf("pushToken", "referer", "pad", "manufacturer", "device_model", "pad")
    internal val dummyBodyKeys = arrayOf("cegecej", "fanaqi", "lumup")
    internal val extraQuery = linkedMapOf("kir" to "lof", "kuja" to "suja", "duf" to "bodet")
    internal val fieldRoutes = linkedMapOf("appId" to "body", "deviceID" to "body", "adId" to "cookie", "pushToken" to "header", "referer" to "header", "oneLink" to "cookie", "naming" to "body", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "cookie", "event" to "body", "device_model" to "header", "manufacturer" to "header", "locale" to "body", "timezone" to "cookie", "network" to "cookie", "screen" to "body", "session_id" to "cookie", "play_integrity_token" to "body")

    fun assemble(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntakePacobzildfiskwvhingurt01ObfV21HashMix("hnm") xor CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(intArrayOf(15, 20, 26)) xor CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(60, 62)
    val values = LinkedHashMap<String, String>()
    for (pair in parseForm(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CIntcobzildfiskwvhinguakePart02.packPipe(cookieLayout, values)
    val header = CIntcobzildfiskwvhinguakePart02.packPipe(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CIntcobzildfiskwvhinguakePart02.enc(key) + "=" + CIntcobzildfiskwvhinguakePart02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CIntcobzildfiskwvhinguakePart02.enc(key) + "=" + CIntcobzildfiskwvhinguakePart02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun parseForm(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntakePacobzildfiskwvhingurt01ObfV21HashMix("hnm") xor CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(intArrayOf(15, 20, 26)) xor CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(60, 62)
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun workerUrl(base: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(intArrayOf(15, 20, 26)) xor CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(60, 62)
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntakePacobzildfiskwvhingurt01ObfV21HashMix("hnm") xor CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(intArrayOf(19, 21, 16))
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/deku" + if (params.isEmpty()) "" else "?" + params
}

    fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntakePacobzildfiskwvhingurt01ObfV21HashMix("hnm") xor CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(intArrayOf(15, 20, 26)) xor CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(60, 62)
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntakePacobzildfiskwvhingurt01ObfV21HashMix("hnm") xor CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(intArrayOf(19, 21, 16))
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(intArrayOf(15, 20, 26)) xor CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(6, 46) xor CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(60, 62)
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}
/* obfuscation-batch:v20 */
private fun CIntakePart01ObfV20cobzildfiskwvhinguSumOdds(nums: IntArray): Int {
  var acc = 17
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 37) % 367
  }
  return acc
}

private fun CIntakePcobzildfiskwvhinguart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 35) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV20ShcobzildfiskwvhinguiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 40) and 29362
}

/* obfuscation-batch:v21 */
private fun CIntakePacobzildfiskwvhingurt01ObfV21HashMix(s: String): Int {
  var h = 61
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 600
  return h
}

private fun CIntakePacobzildfiskwvhingurt01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 72
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 29) % 293
  }
  return acc
}
