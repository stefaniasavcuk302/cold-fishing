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

object WiwatigedPart03 {
    fun cobzildfiskwvhinguWiwatigedObfV20SumOdds(nums: IntArray): Int {
  var acc = 55
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 23) % 181
  }
  return acc
}
}

/* obfuscation-batch:v21 */
private fun WiwatigedPart0cobzildfiskwvhingu3ObfV21SumOdds(nums: IntArray): Int {
  var acc = 88
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 16) % 432
  }
  return acc
}

private fun WiwatigedPart0cobzildfiskwvhingu3ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 57) + 5
  val x = n % span
  return if (x < 0) x + span else x
}

private fun WiwatigedPart0cobzildfiskwvhingu3ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 237) and 40519
}

private fun WiwatigedPart0cobzildfiskwvhingu3ObfV21ByteFold(s: String): Int {
  var x = 56
  for (i in s.indices) x = (x + s[i].code * 10) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguWiwatigedPart03SinkV21Boot = WiwatigedPart0cobzildfiskwvhingu3ObfV21SumOdds(intArrayOf(8, 26, 10)) xor WiwatigedPart0cobzildfiskwvhingu3ObfV21ClampMod(28, 48) xor WiwatigedPart0cobzildfiskwvhingu3ObfV21ShiftXor(41, 78) xor WiwatigedPart0cobzildfiskwvhingu3ObfV21ByteFold("5w")
