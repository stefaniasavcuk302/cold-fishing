/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart01 {
    fun cobzildfiskwvhinguHefokoroseneObfV17HashMix(s: String): Int {
  var h = 83
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 636
  return h
}

    fun cobzildfiskwvhinguHefokoroseneObfV17ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 172) and 24159
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguHefokorosenePart01ObfV18HashMix(s: String): Int {
  var h = 75
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 303
  return h
}

private fun cobzildfiskwvhinguHefokorosenePart01ObfV18SumOdds(nums: IntArray): Int {
  var acc = 7
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 233
  }
  return acc
}

private fun cobzildfiskwvhinguHefokorosenePart01ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 7) + 2
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v19 */
private fun HefocobzildfiskwvhingukorosenePart01ObfV19ByteFold(s: String): Int {
  var x = 48
  for (i in s.indices) x = (x + s[i].code * 9) xor 171
  return x and 55823
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguHefokorosenePart01ObfV20ByteFold(s: String): Int {
  var x = 68
  for (i in s.indices) x = (x + s[i].code * 25) xor 209
  return x and 47798
}

private fun cobzildfiskwvhinguHefokorosenePart01ObfV20HashMix(s: String): Int {
  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 333
  return h
}

private fun cobzildfiskwvhinguHefokorosenePart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 15) % 786
  }
  return acc
}

private fun cobzildfiskwvhinguHefokorosenePart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 33) + 1
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun HefokorosenePartcobzildfiskwvhingu01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 157) and 18262
}

private fun HefokorosenePartcobzildfiskwvhingu01ObfV21ByteFold(s: String): Int {
  var x = 55
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguHefokorosenePart01SinkV21Boot = HefokorosenePartcobzildfiskwvhingu01ObfV21ShiftXor(41, 60) xor HefokorosenePartcobzildfiskwvhingu01ObfV21ByteFold("wh2")
