/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object CujabejivePart01 {
    fun qononemuwaqeh(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = cobzildfiskwvhinguCujabejivePart01ObfV20HashMix("8vf") xor cobzildfiskwvhinguCujabejivePart01ObfV20SumOdds(intArrayOf(28, 5, 3)) xor cobzildfiskwvhinguCujabejivePart01ObfV20ClampMod(56, 17) xor cobzildfiskwvhinguCujabejivePart01ObfV20ShiftXor(22, 69)
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CujabejivePart01cobzildfiskwvhinguObfV19ClampMod(18, 10) xor CujabejivePart01ObfV19ShiftcobzildfiskwvhinguXor(35, 9) xor CujabejiveParcobzildfiskwvhingut01ObfV19ByteFold("aex9")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = cobzildfiskwvhinguCujabejivePart01ObfV18ClampMod(21, 55) xor cobzildfiskwvhinguCujabejivePart01ObfV18ShiftXor(33, 25) xor cobzildfiskwvhinguCujabejivePart01ObfV18ByteFold("gs53")
    @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CujabejivePart02.cobzildfiskwvhinguCujabejiveObfV17ByteFold("pf") xor cobzildfiskwvhinguCujabejiveObfV17HashMix("288n") xor CujabejivePart02.cobzildfiskwvhinguCujabejiveObfV17SumOdds(intArrayOf(15, 18, 8)) xor cobzildfiskwvhinguCujabejiveObfV17ClampMod(14, 70)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun cobzildfiskwvhinguCujabejiveObfV17HashMix(s: String): Int {
  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 17)) % 724
  return h
}

    fun cobzildfiskwvhinguCujabejiveObfV17ClampMod(n: Int, m: Int): Int {
  val span = (m % 62) + 1
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguCujabejivePart01ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 51) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguCujabejivePart01ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 25) and 54752
}

private fun cobzildfiskwvhinguCujabejivePart01ObfV18ByteFold(s: String): Int {
  var x = 10
  for (i in s.indices) x = (x + s[i].code * 17) xor 224
  return x and 16049
}
/* obfuscation-batch:v19 */
private fun CujabejivePart01cobzildfiskwvhinguObfV19ClampMod(n: Int, m: Int): Int {
  val span = (m % 15) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CujabejivePart01ObfV19ShiftcobzildfiskwvhinguXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 176) and 45965
}

private fun CujabejiveParcobzildfiskwvhingut01ObfV19ByteFold(s: String): Int {
  var x = 81
  for (i in s.indices) x = (x + s[i].code * 8) xor 186
  return x and 45970
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguCujabejivePart01ObfV20HashMix(s: String): Int {
  var h = 89
  for (i in s.indices) h = (h xor (s[i].code * 43)) % 208
  return h
}

private fun cobzildfiskwvhinguCujabejivePart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 4
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 350
  }
  return acc
}

private fun cobzildfiskwvhinguCujabejivePart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 43) + 5
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguCujabejivePart01ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 37) and 61108
}

/* obfuscation-batch:v21 */
private fun CujabejivePartcobzildfiskwvhingu01ObfV21HashMix(s: String): Int {
  var h = 76
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 728
  return h
}

private fun CujabejivePartcobzildfiskwvhingu01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 70
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 209
  }
  return acc
}

private fun CujabejivePart0cobzildfiskwvhingu1ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 55) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CujabejivePart0cobzildfiskwvhingu1ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 230) and 37507
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguCujabejivePart01SinkV21Boot = CujabejivePartcobzildfiskwvhingu01ObfV21HashMix("8h") xor CujabejivePartcobzildfiskwvhingu01ObfV21SumOdds(intArrayOf(17, 22, 16)) xor CujabejivePart0cobzildfiskwvhingu1ObfV21ClampMod(67, 40) xor CujabejivePart0cobzildfiskwvhingu1ObfV21ShiftXor(79, 9)
