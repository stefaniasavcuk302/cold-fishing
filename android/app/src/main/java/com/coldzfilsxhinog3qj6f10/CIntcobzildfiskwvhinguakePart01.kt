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

object CIntcobzildfiskwvhinguakePart01 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("oneLink", "adId", "app_version", "naming", "device_model", "pad", "event", "deviceID")
    private val headerLayout = arrayOf("androidId", "userAgent", "appId")
    private val dummyBodyKeys = arrayOf("rexiq", "zimak")
    private val extraQuery = linkedMapOf("su" to "ciwe")
    private val fieldRoutes = linkedMapOf("appId" to "header", "deviceID" to "cookie", "adId" to "cookie", "pushToken" to "body", "referer" to "body", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "header", "app_version" to "cookie", "androidId" to "header", "event" to "cookie", "device_model" to "cookie", "manufacturer" to "body", "locale" to "body", "timezone" to "body", "network" to "body", "screen" to "body", "session_id" to "body", "play_integrity_token" to "body")

    fun kimakufila(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    val values = LinkedHashMap<String, String>()
    for (pair in qebelufewares(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = sukakezame(cookieLayout, values)
    val header = sukakezame(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(enc(key) + "=" + enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(enc(key) + "=" + enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun sukakezame(layout: Array<String>, values: Map<String, String>): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    if (layout.isEmpty()) return ""
    val out = ArrayList<String>(layout.size)
    var pad = 0
    for (slot in layout) {
        if (slot == "pad") {
            out.add("p" + pad.toString(16) + values.size)
            pad += 1
        } else {
            out.add(values[slot] ?: "")
        }
    }
    return out.joinToString("|")
}

    fun qebelufewares(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun enc(value: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
        return URLEncoder.encode(value, "UTF-8")
    }

    fun ruzapibimode(base: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/lerep" + if (params.isEmpty()) "" else "?" + params
}

    fun tebazixujof(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    val map = Arguments.createMap()
    qocefifojahi(map, "redirectUrl", pick(obj, "bem", "redirectUrl"))
    qocefifojahi(map, "redirectUrlInitial", pick(obj, "pup", "redirectUrlInitial"))
    qocefifojahi(map, "error", pick(obj, "sel", "error"))
    map.putBoolean("blockUser", asBool(pickRaw(obj, "de", "blockUser")))
    return map
}

    fun qocefifojahi(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pick(obj: JSONObject, alias: String, fallback: String): String? {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    val raw = pickRaw(obj, alias, fallback) ?: return null
    val text = raw.toString()
    return if (text.isEmpty()) null else text
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}

    fun asBool(value: Any?): Boolean {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(intArrayOf(15, 22, 8)) xor CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(64, 7)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CIntakePart01cobzildfiskwvhinguObfV20SumOdds(intArrayOf(13, 9, 26))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(intArrayOf(22, 27, 16)) xor CIntakePart01OcobzildfiskwvhingubfV19ClampMod(52, 62) xor CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(14, 73) xor CIntakePart01ObfV19ByteFolcobzildfiskwvhingud("h2b4")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(58, 14) xor CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(46, 68) xor CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu("gm") xor CIntakePart01ObfV18HashMicobzildfiskwvhingux("9hm")
        return when (value) {
    null -> false
    is Boolean -> value
    is Number -> value.toDouble() != 0.0
    is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
    else -> true
}
    }
}
/* obfuscation-batch:v18 */
private fun CIntakePart01ObfVcobzildfiskwvhingu18ClampMod(n: Int, m: Int): Int {
  val span = (m % 58) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV1cobzildfiskwvhingu8ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 226) and 17507
}

private fun CIntakePart01ObfV18ByteFoldcobzildfiskwvhingu(s: String): Int {
  var x = 91
  for (i in s.indices) x = (x + s[i].code * 25) xor 106
  return x and 60251
}

private fun CIntakePart01ObfV18HashMicobzildfiskwvhingux(s: String): Int {
  var h = 53
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 708
  return h
}
/* obfuscation-batch:v19 */
private fun CIntakePart01ObfV19SumOdcobzildfiskwvhinguds(nums: IntArray): Int {
  var acc = 51
  for (nv in nums) {
    if ((nv and 1) == 0) continue
    acc = (acc + nv * 38) % 182
  }
  return acc
}

private fun CIntakePart01OcobzildfiskwvhingubfV19ClampMod(n: Int, m: Int): Int {
  val span = (m % 21) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV19ShifcobzildfiskwvhingutXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 205) and 28650
}

private fun CIntakePart01ObfV19ByteFolcobzildfiskwvhingud(s: String): Int {
  var x = 64
  for (i in s.indices) x = (x + s[i].code * 13) xor 215
  return x and 28655
}
/* obfuscation-batch:v20 */
private fun CIntakePart01cobzildfiskwvhinguObfV20SumOdds(nums: IntArray): Int {
  var acc = 78
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 9) % 143
  }
  return acc
}

/* obfuscation-batch:v21 */
private fun CIntcobzildfiskwvhinguakePart01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 64
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 38) % 350
  }
  return acc
}

private fun CIntcobzildfiskwvhinguakePart01ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 46) + 8
  val x = n % span
  return if (x < 0) x + span else x
}
