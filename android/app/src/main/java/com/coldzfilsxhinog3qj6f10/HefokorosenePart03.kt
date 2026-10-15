/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart03 {
    fun cobzildfiskwvhinguHefokoroseneObfV17ClampMod(n: Int, m: Int): Int {
  val span = (m % 37) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguHefokorosenePart03ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 162) and 38654
}
/* obfuscation-batch:v19 */
private fun HefokorosenePart03ObfV19ShiftXocobzildfiskwvhingur(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 201) and 4858
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguHefokorosenePart03ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 80) and 21531
}

private fun cobzildfiskwvhinguHefokorosenePart03ObfV20ByteFold(s: String): Int {
  var x = 65
  for (i in s.indices) x = (x + s[i].code * 26) xor 225
  return x and 21894
}

/* obfuscation-batch:v21 */
private fun HefokorosenePartcobzildfiskwvhingu03ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 34) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokorosenePartcobzildfiskwvhingu03ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 223) and 38427
}

private fun HefokorosenePartcobzildfiskwvhingu03ObfV21ByteFold(s: String): Int {
  var x = 32
  for (i in s.indices) x = (x + s[i].code * 8) and 65535
  return x
}

private fun HefokoroseneParcobzildfiskwvhingut03ObfV21HashMix(s: String): Int {
  var h = 72
  for (i in s.indices) h = (h xor (s[i].code * 34)) % 215
  return h
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguHefokorosenePart03SinkV21Boot = HefokorosenePartcobzildfiskwvhingu03ObfV21ClampMod(10, 66) xor HefokorosenePartcobzildfiskwvhingu03ObfV21ShiftXor(37, 42) xor HefokorosenePartcobzildfiskwvhingu03ObfV21ByteFold("fk") xor HefokoroseneParcobzildfiskwvhingut03ObfV21HashMix("tf")
