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

object CcobzildfiskwvhinguIntakePart01 {
    internal val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    internal val cookieLayout = arrayOf("pad", "app_version", "androidId", "naming", "oneLink", "pad", "pad", "pushToken", "userAgent")
    internal val headerLayout = arrayOf("pad", "pad", "timezone", "pad", "screen")
    internal val dummyBodyKeys = arrayOf("zehus", "bidiz", "sefe")
    internal val extraQuery = linkedMapOf("geha" to "romu")
    internal val fieldRoutes = linkedMapOf("appId" to "body", "deviceID" to "body", "adId" to "body", "pushToken" to "cookie", "referer" to "body", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "cookie", "app_version" to "cookie", "androidId" to "cookie", "event" to "body", "device_model" to "body", "manufacturer" to "body", "locale" to "body", "timezone" to "header", "network" to "body", "screen" to "header", "session_id" to "body", "play_integrity_token" to "body")

    fun assemble(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CcobzildfiskwvhinguIntakePart01ObfV21HashMix("pg") xor CcobzildfiskwvhinguIntakePart01ObfV21SumOdds(intArrayOf(29, 16, 7)) xor CcobzildfiskwvhinguIntakePart01ObfV21ClampMod(83, 33) xor CcobzildfiskwvhinguIntakePart01ObfV21ShiftXor(65, 68)
        
    val values = LinkedHashMap<String, String>()
    for (pair in parseForm(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CcobzildfiskwvhinguIntakePart02.packPipe(cookieLayout, values)
    val header = CcobzildfiskwvhinguIntakePart02.packPipe(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CcobzildfiskwvhinguIntakePart02.enc(key) + "=" + CcobzildfiskwvhinguIntakePart02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CcobzildfiskwvhinguIntakePart02.enc(key) + "=" + CcobzildfiskwvhinguIntakePart02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun parseForm(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CcobzildfiskwvhinguIntakePart01ObfV21HashMix("pg") xor CcobzildfiskwvhinguIntakePart01ObfV21SumOdds(intArrayOf(29, 16, 7)) xor CcobzildfiskwvhinguIntakePart01ObfV21ClampMod(83, 33) xor CcobzildfiskwvhinguIntakePart01ObfV21ShiftXor(65, 68)
        
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun workerUrl(base: String): String {
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CcobzildfiskwvhinguIntakePart01ObfV21HashMix("pg") xor CcobzildfiskwvhinguIntakePart01ObfV21SumOdds(intArrayOf(29, 16, 7)) xor CcobzildfiskwvhinguIntakePart01ObfV21ClampMod(83, 33) xor CcobzildfiskwvhinguIntakePart01ObfV21ShiftXor(65, 68)
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/vusah" + if (params.isEmpty()) "" else "?" + params
}

    fun writeNullable(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CcobzildfiskwvhinguIntakePart01ObfV21HashMix("pg") xor CcobzildfiskwvhinguIntakePart01ObfV21SumOdds(intArrayOf(29, 16, 7)) xor CcobzildfiskwvhinguIntakePart01ObfV21ClampMod(83, 33) xor CcobzildfiskwvhinguIntakePart01ObfV21ShiftXor(65, 68)
        
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}

/* obfuscation-batch:v21 */
private fun CcobzildfiskwvhinguIntakePart01ObfV21HashMix(s: String): Int {
  var h = 75
  for (i in s.indices) h = (h xor (s[i].code * 37)) % 554
  return h
}

private fun CcobzildfiskwvhinguIntakePart01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 25
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 739
  }
  return acc
}

private fun CcobzildfiskwvhinguIntakePart01ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 59) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CcobzildfiskwvhinguIntakePart01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 179) and 60787
}
