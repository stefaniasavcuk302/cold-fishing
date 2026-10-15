/* autosetup-split:v1 */
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

object WiwatigedPart02 {
    fun cobzildfiskwvhinguWiwatigedObfV20HashMix(s: String): Int {
  var h = 69
  for (i in s.indices) h = (h xor (s[i].code * 30)) % 677
  return h
}
}

/* obfuscation-batch:v21 */
private fun WiwatigedPart0cobzildfiskwvhingu2ObfV21HashMix(s: String): Int {
  var h = 44
  for (i in s.indices) h = (h xor (s[i].code * 10)) % 655
  return h
}

private fun WiwatigedPart0cobzildfiskwvhingu2ObfV21SumOdds(nums: IntArray): Int {
  var acc = 23
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 39) % 210
  }
  return acc
}

private fun WiwatigedPart0cobzildfiskwvhingu2ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 30) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun WiwatigedPart0cobzildfiskwvhingu2ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 71) and 57026
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguWiwatigedPart02SinkV21Boot = WiwatigedPart0cobzildfiskwvhingu2ObfV21HashMix("t5w") xor WiwatigedPart0cobzildfiskwvhingu2ObfV21SumOdds(intArrayOf(7, 24, 11)) xor WiwatigedPart0cobzildfiskwvhingu2ObfV21ClampMod(66, 73) xor WiwatigedPart0cobzildfiskwvhingu2ObfV21ShiftXor(25, 6)
