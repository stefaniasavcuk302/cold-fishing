/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

class Wheel(val pins: IntArray, var pos: Int) {
    @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CCipherPartcobzildfiskwvhingu02ObfV21ClampMod(14, 24) xor CCipherPartcobzildfiskwvhingu02ObfV21ShiftXor(50, 80) xor CCipherPartcobzildfiskwvhingu02ObfV21ByteFold("dpg5") xor CCipherPartcobzildfiskwvhingu02ObfV21HashMix("bg5k")
    
    val len: Int = pins.size
}

object CCipherPartcobzildfiskwvhingu02 {
    fun bekebusiz(bytes: ByteArray): Int {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CCipherPartcobzildfiskwvhingu02ObfV21ClampMod(14, 24) xor CCipherPartcobzildfiskwvhingu02ObfV21ShiftXor(50, 80) xor CCipherPartcobzildfiskwvhingu02ObfV21ByteFold("dpg5") xor CCipherPartcobzildfiskwvhingu02ObfV21HashMix("bg5k")
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart02ObfV20BytecobzildfiskwvhinguFold("tmd8")
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart02ObfcobzildfiskwvhinguV19ByteFold("x7x") xor CCipherPart02ObfV19HascobzildfiskwvhinguhMix("dhsa") xor CCipherPart02ObfcobzildfiskwvhinguV19SumOdds(intArrayOf(5, 4, 18)) xor CCipherPart02ObfV19CcobzildfiskwvhingulampMod(11, 6)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPacobzildfiskwvhingurt02ObfV18ClampMod(39, 10) xor CCipherPart02cobzildfiskwvhinguObfV18ShiftXor(49, 80)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCicobzildfiskwvhingupherPart02ObfV17ShiftXor(19, 23) xor CCiphecobzildfiskwvhingurPart02ObfV17ByteFold("sb8") xor CCipherPart02ObfV17HashcobzildfiskwvhinguMix("h7k")
    var s = 0x811C9DC5.toInt()
    for (b in bytes) {
        s = s xor (b.toInt() and 0xFF)
        s *= 16777619
    }
    if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
    return s
}

    fun wenivewarog(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CCipherPartcobzildfiskwvhingu02ObfV21ClampMod(14, 24) xor CCipherPartcobzildfiskwvhingu02ObfV21ShiftXor(50, 80) xor CCipherPartcobzildfiskwvhingu02ObfV21ByteFold("dpg5") xor CCipherPartcobzildfiskwvhingu02ObfV21HashMix("bg5k")
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart02ObfV20BytecobzildfiskwvhinguFold("tmd8")
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart02ObfcobzildfiskwvhinguV19ByteFold("x7x") xor CCipherPart02ObfV19HascobzildfiskwvhinguhMix("dhsa") xor CCipherPart02ObfcobzildfiskwvhinguV19SumOdds(intArrayOf(5, 4, 18)) xor CCipherPart02ObfV19CcobzildfiskwvhingulampMod(11, 6)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPacobzildfiskwvhingurt02ObfV18ClampMod(39, 10) xor CCipherPart02cobzildfiskwvhinguObfV18ShiftXor(49, 80)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCicobzildfiskwvhingupherPart02ObfV17ShiftXor(19, 23) xor CCiphecobzildfiskwvhingurPart02ObfV17ByteFold("sb8") xor CCipherPart02ObfV17HashcobzildfiskwvhinguMix("h7k")
    val pins = IntArray(len)
    var ones = 0
    for (i in 0 until len) {
        pins[i] = CCiphecobzildfiskwvhingurPart02.nextU32(st) and 1
        ones += pins[i]
    }
    if (ones == 0) pins[0] = 1
    if (ones == len) pins[0] = 0
    val pos = CCiphecobzildfiskwvhingurPart02.u32Mod(CCiphecobzildfiskwvhingurPart02.nextU32(st), len)
    return Wheel(pins, pos)
}

    fun moremekosugexi(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = CCipherPartcobzildfiskwvhingu02ObfV21ClampMod(14, 24) xor CCipherPartcobzildfiskwvhingu02ObfV21ShiftXor(50, 80) xor CCipherPartcobzildfiskwvhingu02ObfV21ByteFold("dpg5") xor CCipherPartcobzildfiskwvhingu02ObfV21HashMix("bg5k")
        
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart02ObfV20BytecobzildfiskwvhinguFold("tmd8")
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart02ObfcobzildfiskwvhinguV19ByteFold("x7x") xor CCipherPart02ObfV19HascobzildfiskwvhinguhMix("dhsa") xor CCipherPart02ObfcobzildfiskwvhinguV19SumOdds(intArrayOf(5, 4, 18)) xor CCipherPart02ObfV19CcobzildfiskwvhingulampMod(11, 6)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPacobzildfiskwvhingurt02ObfV18ClampMod(39, 10) xor CCipherPart02cobzildfiskwvhinguObfV18ShiftXor(49, 80)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCicobzildfiskwvhingupherPart02ObfV17ShiftXor(19, 23) xor CCiphecobzildfiskwvhingurPart02ObfV17ByteFold("sb8") xor CCipherPart02ObfV17HashcobzildfiskwvhinguMix("h7k")
    val out = ByteArray(hex.length / 2)
    var i = 0
    while (i < out.size) {
        val at = i * 2
        out[i] = hex.substring(at, at + 2).toInt(16).toByte()
        i += 1
    }
    return out
}
}
/* obfuscation-batch:v17 */
private fun CCicobzildfiskwvhingupherPart02ObfV17ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 131) and 7962
}

private fun CCiphecobzildfiskwvhingurPart02ObfV17ByteFold(s: String): Int {
  var x = 31
  for (i in s.indices) x = (x + s[i].code * 10) xor 91
  return x and 48682
}

private fun CCipherPart02ObfV17HashcobzildfiskwvhinguMix(s: String): Int {
  var h = 48
  for (i in s.indices) h = (h xor (s[i].code * 12)) % 247
  return h
}
/* obfuscation-batch:v18 */
private fun CCipherPacobzildfiskwvhingurt02ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPart02cobzildfiskwvhinguObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 156) and 47250
}
/* obfuscation-batch:v19 */
private fun CCipherPart02ObfcobzildfiskwvhinguV19ByteFold(s: String): Int {
  var x = 46
  for (i in s.indices) x = (x + s[i].code * 33) xor 44
  return x and 20459
}

private fun CCipherPart02ObfV19HascobzildfiskwvhinguhMix(s: String): Int {
  var h = 30
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 280
  return h
}

private fun CCipherPart02ObfcobzildfiskwvhinguV19SumOdds(nums: IntArray): Int {
  var acc = 77
  for (nv in nums) {
    if ((nv and 1) == 0) continue
    acc = (acc + nv * 16) % 299
  }
  return acc
}

private fun CCipherPart02ObfV19CcobzildfiskwvhingulampMod(n: Int, m: Int): Int {
  val span = (m % 54) + 3
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v20 */
private fun CCipherPart02ObfV20BytecobzildfiskwvhinguFold(s: String): Int {
  var x = 77
  for (i in s.indices) x = (x + s[i].code * 28) xor 113
  return x and 48351
}

/* obfuscation-batch:v21 */
private fun CCipherPartcobzildfiskwvhingu02ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 19) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPartcobzildfiskwvhingu02ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 139) and 7054
}

private fun CCipherPartcobzildfiskwvhingu02ObfV21ByteFold(s: String): Int {
  var x = 67
  for (i in s.indices) x = (x + s[i].code * 19) and 65535
  return x
}

private fun CCipherPartcobzildfiskwvhingu02ObfV21HashMix(s: String): Int {
  var h = 59
  for (i in s.indices) h = (h xor (s[i].code * 23)) % 445
  return h
}
