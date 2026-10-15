/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
object WolafamivuqPart03 {
    fun cobzildfiskwvhinguWolafamivuqObfV17HashMix(s: String): Int {
  var h = 31
  for (i in s.indices) h = (h xor (s[i].code * 15)) % 466
  return h
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguWolafamivuqPart03ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 233) and 11183
}
/* obfuscation-batch:v19 */
private fun WolafamivuqPart03ObfV19SumOddscobzildfiskwvhingu(nums: IntArray): Int {
  var acc = 58
  for (nv in nums) {
    if ((nv and 1) == 0) continue
    acc = (acc + nv * 17) % 353
  }
  return acc
}

private fun WolafamivcobzildfiskwvhinguuqPart03ObfV19ByteFold(s: String): Int {
  var x = 60
  for (i in s.indices) x = (x + s[i].code * 9) xor 161
  return x and 29288
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguWolafamivuqPart03ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguWolafamivuqPart03ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 198) and 45974
}

/* obfuscation-batch:v21 */
private fun WolafamivuqPartcobzildfiskwvhingu03ObfV21SumOdds(nums: IntArray): Int {
  var acc = 87
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 27) % 489
  }
  return acc
}

private fun WolafamivuqPartcobzildfiskwvhingu03ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 19) + 3
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguWolafamivuqPart03SinkV21Boot = WolafamivuqPartcobzildfiskwvhingu03ObfV21SumOdds(intArrayOf(6, 15, 11)) xor WolafamivuqPartcobzildfiskwvhingu03ObfV21ClampMod(57, 21)
