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

object KoponafofujidPart01 {
    fun xugeculoqejur(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KoponafofujidParcobzildfiskwvhingut01ObfV21ByteFold("7amd") xor KoponafofujidParcobzildfiskwvhingut01ObfV21HashMix("29") xor KoponafofujidParcobzildfiskwvhingut01ObfV21SumOdds(intArrayOf(16, 11, 28)) xor KoponafofujidParcobzildfiskwvhingut01ObfV21ClampMod(25, 39)
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = cobzildfiskwvhinguKoponafofujidPart01ObfV20HashMix("s43") xor cobzildfiskwvhinguKoponafofujidPart01ObfV20SumOdds(intArrayOf(20, 20, 20)) xor cobzildfiskwvhinguKoponafofujidPart01ObfV20ClampMod(38, 79)
    val bytes = ByteArray(16)
    java.security.SecureRandom().nextBytes(bytes)
    @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = KoponafofujidPart02.KoponcobzildfiskwvhinguafofujidObfV19ByteFold("gq2z") xor KoponafofujidPart03.KoponafofujidObfV19HcobzildfiskwvhinguashMix("tkv")
    return bytes.joinToString("") { byte ->
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KoponafofujidParcobzildfiskwvhingut01ObfV21ByteFold("7amd") xor KoponafofujidParcobzildfiskwvhingut01ObfV21HashMix("29") xor KoponafofujidParcobzildfiskwvhingut01ObfV21SumOdds(intArrayOf(16, 11, 28)) xor KoponafofujidParcobzildfiskwvhingut01ObfV21ClampMod(25, 39)
        "%02x".format(byte)
    }
}
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguKoponafofujidPart01ObfV20HashMix(s: String): Int {
  var h = 40
  for (i in s.indices) h = (h xor (s[i].code * 10)) % 702
  return h
}

private fun cobzildfiskwvhinguKoponafofujidPart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 63
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 516
  }
  return acc
}

private fun cobzildfiskwvhinguKoponafofujidPart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 47) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun KoponafofujidParcobzildfiskwvhingut01ObfV21ByteFold(s: String): Int {
  var x = 54
  for (i in s.indices) x = (x + s[i].code * 18) and 65535
  return x
}

private fun KoponafofujidParcobzildfiskwvhingut01ObfV21HashMix(s: String): Int {
  var h = 62
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 673
  return h
}

private fun KoponafofujidParcobzildfiskwvhingut01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 24
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 231
  }
  return acc
}

private fun KoponafofujidParcobzildfiskwvhingut01ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 56) + 9
  val x = n % span
  return if (x < 0) x + span else x
}
