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

object KoponafofujidPart02 {
    fun KoponcobzildfiskwvhinguafofujidObfV19ByteFold(s: String): Int {
  var x = 27
  for (i in s.indices) x = (x + s[i].code * 21) xor 28
  return x and 30021
}
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguKoponafofujidPart02ObfV20ByteFold(s: String): Int {
  var x = 20
  for (i in s.indices) x = (x + s[i].code * 24) xor 44
  return x and 43141
}

private fun cobzildfiskwvhinguKoponafofujidPart02ObfV20HashMix(s: String): Int {
  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 13)) % 291
  return h
}

private fun cobzildfiskwvhinguKoponafofujidPart02ObfV20SumOdds(nums: IntArray): Int {
  var acc = 17
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 22) % 766
  }
  return acc
}

private fun cobzildfiskwvhinguKoponafofujidPart02ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 51) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun KoponafofujidParcobzildfiskwvhingut02ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 139) and 10816
}

private fun KoponafofujidParcobzildfiskwvhingut02ObfV21ByteFold(s: String): Int {
  var x = 18
  for (i in s.indices) x = (x + s[i].code * 20) and 65535
  return x
}

private fun KoponafofujidParcobzildfiskwvhingut02ObfV21HashMix(s: String): Int {
  var h = 39
  for (i in s.indices) h = (h xor (s[i].code * 36)) % 765
  return h
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguKoponafofujidPart02SinkV21Boot = KoponafofujidParcobzildfiskwvhingut02ObfV21ShiftXor(33, 44) xor KoponafofujidParcobzildfiskwvhingut02ObfV21ByteFold("p6f") xor KoponafofujidParcobzildfiskwvhingut02ObfV21HashMix("p6s")
