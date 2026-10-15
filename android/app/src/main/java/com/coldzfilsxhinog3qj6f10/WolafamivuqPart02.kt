/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
object WolafamivuqPart02 {
    fun cobzildfiskwvhinguWolafamivuqObfV17ByteFold(s: String): Int {
  var x = 27
  for (i in s.indices) x = (x + s[i].code * 15) xor 219
  return x and 38732
}

    fun cobzildfiskwvhinguWolafamivuqObfV17ClampMod(n: Int, m: Int): Int {
  val span = (m % 38) + 1
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguWolafamivuqPart02ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 22) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguWolafamivuqPart02ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 169) and 427
}

private fun cobzildfiskwvhinguWolafamivuqPart02ObfV18ByteFold(s: String): Int {
  var x = 59
  for (i in s.indices) x = (x + s[i].code * 23) xor 192
  return x and 54471
}

private fun cobzildfiskwvhinguWolafamivuqPart02ObfV18HashMix(s: String): Int {
  var h = 62
  for (i in s.indices) h = (h xor (s[i].code * 28)) % 746
  return h
}
/* obfuscation-batch:v19 */
private fun WolafacobzildfiskwvhingumivuqPart02ObfV19ByteFold(s: String): Int {
  var x = 11
  for (i in s.indices) x = (x + s[i].code * 7) xor 225
  return x and 54630
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguWolafamivuqPart02ObfV20ByteFold(s: String): Int {
  var x = 54
  for (i in s.indices) x = (x + s[i].code * 36) xor 142
  return x and 7961
}

private fun cobzildfiskwvhinguWolafamivuqPart02ObfV20HashMix(s: String): Int {
  var h = 9
  for (i in s.indices) h = (h xor (s[i].code * 26)) % 744
  return h
}

private fun cobzildfiskwvhinguWolafamivuqPart02ObfV20SumOdds(nums: IntArray): Int {
  var acc = 21
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 655
  }
  return acc
}

/* obfuscation-batch:v21 */
private fun WolafamivuqPartcobzildfiskwvhingu02ObfV21SumOdds(nums: IntArray): Int {
  var acc = 40
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 37) % 331
  }
  return acc
}

private fun WolafamivuqPartcobzildfiskwvhingu02ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 34) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun WolafamivuqPartcobzildfiskwvhingu02ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 116) and 14987
}

private fun WolafamivuqPartcobzildfiskwvhingu02ObfV21ByteFold(s: String): Int {
  var x = 19
  for (i in s.indices) x = (x + s[i].code * 11) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguWolafamivuqPart02SinkV21Boot = WolafamivuqPartcobzildfiskwvhingu02ObfV21SumOdds(intArrayOf(18, 12, 14)) xor WolafamivuqPartcobzildfiskwvhingu02ObfV21ClampMod(22, 45) xor WolafamivuqPartcobzildfiskwvhingu02ObfV21ShiftXor(52, 51) xor WolafamivuqPartcobzildfiskwvhingu02ObfV21ByteFold("wvn")
