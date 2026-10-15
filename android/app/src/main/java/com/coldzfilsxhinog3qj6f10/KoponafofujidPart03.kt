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

object KoponafofujidPart03 {
    fun KoponafofujidObfV19HcobzildfiskwvhinguashMix(s: String): Int {
  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 13)) % 127
  return h
}
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguKoponafofujidPart03ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 16) and 14743
}

/* obfuscation-batch:v21 */
private fun KoponafofujidParcobzildfiskwvhingut03ObfV21ByteFold(s: String): Int {
  var x = 24
  for (i in s.indices) x = (x + s[i].code * 12) and 65535
  return x
}

private fun KoponafofujidParcobzildfiskwvhingut03ObfV21HashMix(s: String): Int {
  var h = 18
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 540
  return h
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguKoponafofujidPart03SinkV21Boot = KoponafofujidParcobzildfiskwvhingut03ObfV21ByteFold("mrbt") xor KoponafofujidParcobzildfiskwvhingut03ObfV21HashMix("r3g")
