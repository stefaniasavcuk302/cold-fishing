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

object ZurelihivuPart02 {
    fun cobzildfiskwvhinguZurelihivuObfV18SumOdds(nums: IntArray): Int {
  var acc = 55
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 31) % 411
  }
  return acc
}
}
/* obfuscation-batch:v19 */
private fun ZurcobzildfiskwvhinguelihivuPart02ObfV19HashMix(s: String): Int {
  var h = 79
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 611
  return h
}

private fun ZurelihivuPcobzildfiskwvhinguart02ObfV19ByteFold(s: String): Int {
  var x = 72
  for (i in s.indices) x = (x + s[i].code * 8) xor 130
  return x and 21152
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguZurelihivuPart02ObfV20HashMix(s: String): Int {
  var h = 58
  for (i in s.indices) h = (h xor (s[i].code * 30)) % 410
  return h
}

private fun cobzildfiskwvhinguZurelihivuPart02ObfV20SumOdds(nums: IntArray): Int {
  var acc = 63
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 42) % 528
  }
  return acc
}

private fun cobzildfiskwvhinguZurelihivuPart02ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 5) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguZurelihivuPart02ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 155) and 4126
}

/* obfuscation-batch:v21 */
private fun ZurelihivuPart0cobzildfiskwvhingu2ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 52) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun ZurelihivuPart0cobzildfiskwvhingu2ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 68) and 22461
}

private fun ZurelihivuPart0cobzildfiskwvhingu2ObfV21ByteFold(s: String): Int {
  var x = 49
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguZurelihivuPart02SinkV21Boot = ZurelihivuPart0cobzildfiskwvhingu2ObfV21ClampMod(34, 45) xor ZurelihivuPart0cobzildfiskwvhingu2ObfV21ShiftXor(84, 45) xor ZurelihivuPart0cobzildfiskwvhingu2ObfV21ByteFold("t5k")
