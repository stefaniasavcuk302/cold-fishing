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

object CujabejivePart02 {
    fun cobzildfiskwvhinguCujabejiveObfV17ByteFold(s: String): Int {
  var x = 20
  for (i in s.indices) x = (x + s[i].code * 30) xor 26
  return x and 29436
}

    fun cobzildfiskwvhinguCujabejiveObfV17SumOdds(nums: IntArray): Int {
  var acc = 82
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 33) % 604
  }
  return acc
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguCujabejivePart02ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 39) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguCujabejivePart02ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 43) and 14557
}

private fun cobzildfiskwvhinguCujabejivePart02ObfV18ByteFold(s: String): Int {
  var x = 19
  for (i in s.indices) x = (x + s[i].code * 11) xor 125
  return x and 39059
}

private fun cobzildfiskwvhinguCujabejivePart02ObfV18HashMix(s: String): Int {
  var h = 82
  for (i in s.indices) h = (h xor (s[i].code * 6)) % 667
  return h
}
/* obfuscation-batch:v19 */
private fun CujabejivePart02OcobzildfiskwvhingubfV19ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 169) and 48432
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguCujabejivePart02ObfV20HashMix(s: String): Int {
  var h = 41
  for (i in s.indices) h = (h xor (s[i].code * 15)) % 294
  return h
}

private fun cobzildfiskwvhinguCujabejivePart02ObfV20SumOdds(nums: IntArray): Int {
  var acc = 53
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 36) % 209
  }
  return acc
}

private fun cobzildfiskwvhinguCujabejivePart02ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 42) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun CujabejivePart0cobzildfiskwvhingu2ObfV21ByteFold(s: String): Int {
  var x = 18
  for (i in s.indices) x = (x + s[i].code * 10) and 65535
  return x
}

private fun CujabejivePartcobzildfiskwvhingu02ObfV21HashMix(s: String): Int {
  var h = 31
  for (i in s.indices) h = (h xor (s[i].code * 23)) % 413
  return h
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguCujabejivePart02SinkV21Boot = CujabejivePart0cobzildfiskwvhingu2ObfV21ByteFold("b6s") xor CujabejivePartcobzildfiskwvhingu02ObfV21HashMix("3tsk")
