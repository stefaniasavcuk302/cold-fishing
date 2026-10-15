/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object ZurelihivuPart03 {
    fun cobzildfiskwvhinguZurelihivuObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 64) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v19 */
private fun ZurelihivuPart03ObfVcobzildfiskwvhingu19ClampMod(n: Int, m: Int): Int {
  val span = (m % 49) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun ZurelihivuPart03ObfVcobzildfiskwvhingu19ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 207) and 25251
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguZurelihivuPart03ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 100) and 1892
}

/* obfuscation-batch:v21 */
private fun ZurelihivuPart0cobzildfiskwvhingu3ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 158) and 57037
}

private fun ZurelihivuPart0cobzildfiskwvhingu3ObfV21ByteFold(s: String): Int {
  var x = 33
  for (i in s.indices) x = (x + s[i].code * 33) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguZurelihivuPart03SinkV21Boot = ZurelihivuPart0cobzildfiskwvhingu3ObfV21ShiftXor(45, 57) xor ZurelihivuPart0cobzildfiskwvhingu3ObfV21ByteFold("gs8")
