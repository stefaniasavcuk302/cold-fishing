/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart02 {
    fun cobzildfiskwvhinguHefokoroseneObfV17SumOdds(nums: IntArray): Int {
  var acc = 74
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 37) % 440
  }
  return acc
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguHefokorosenePart02ObfV18ByteFold(s: String): Int {
  var x = 89
  for (i in s.indices) x = (x + s[i].code * 20) xor 84
  return x and 26395
}

private fun cobzildfiskwvhinguHefokorosenePart02ObfV18HashMix(s: String): Int {
  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 374
  return h
}

private fun cobzildfiskwvhinguHefokorosenePart02ObfV18SumOdds(nums: IntArray): Int {
  var acc = 44
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 29) % 162
  }
  return acc
}

private fun cobzildfiskwvhinguHefokorosenePart02ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 52) + 3
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v19 */
private fun HefokorosenePart0cobzildfiskwvhingu2ObfV19ByteFold(s: String): Int {
  var x = 67
  for (i in s.indices) x = (x + s[i].code * 27) xor 169
  return x and 1142
}

private fun HefokorocobzildfiskwvhingusenePart02ObfV19HashMix(s: String): Int {
  var h = 45
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 609
  return h
}

private fun HefokorosenePart02ObfV19ScobzildfiskwvhinguumOdds(nums: IntArray): Int {
  var acc = 85
  for (nv in nums) {
    if ((nv and 1) == 0) continue
    acc = (acc + nv * 11) % 629
  }
  return acc
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguHefokorosenePart02ObfV20SumOdds(nums: IntArray): Int {
  var acc = 53
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 8) % 756
  }
  return acc
}

private fun cobzildfiskwvhinguHefokorosenePart02ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 44) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguHefokorosenePart02ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 135) and 257
}

/* obfuscation-batch:v21 */
private fun HefokoroseneParcobzildfiskwvhingut02ObfV21HashMix(s: String): Int {
  var h = 71
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 228
  return h
}

private fun HefokoroseneParcobzildfiskwvhingut02ObfV21SumOdds(nums: IntArray): Int {
  var acc = 80
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 25) % 614
  }
  return acc
}

private fun HefokorosenePartcobzildfiskwvhingu02ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 27) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguHefokorosenePart02SinkV21Boot = HefokoroseneParcobzildfiskwvhingut02ObfV21HashMix("p65") xor HefokoroseneParcobzildfiskwvhingut02ObfV21SumOdds(intArrayOf(27, 13, 16)) xor HefokorosenePartcobzildfiskwvhingu02ObfV21ClampMod(77, 27)
