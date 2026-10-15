/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

object CCipherPcobzildfiskwvhinguart01 {
    private val keyBytes = "NJkHLBHqmbU5z9TynPGmmc8q3XFT".toByteArray(StandardCharsets.UTF_8)
    private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
    private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
    private val MU_LENS = intArrayOf(61, 37)

    fun loqoworuwi(data: ByteArray): ByteArray {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart01ObfV20BcobzildfiskwvhinguyteFold("bv") xor CCcobzildfiskwvhinguipherPart01ObfV20HashMix("k983") xor CCipherPcobzildfiskwvhinguart01ObfV20SumOdds(intArrayOf(7, 14, 10)) xor CCipherPart01ObfV20ClampMocobzildfiskwvhingud(67, 21)
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart01cobzildfiskwvhinguObfV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPart01ObfV18ShcobzildfiskwvhinguiftXor(71, 22)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCipherPart01ObfcobzildfiskwvhinguV17SumOdds(intArrayOf(7, 21, 2)) xor CCiphercobzildfiskwvhinguPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObcobzildfiskwvhingufV17ShiftXor(27, 21) xor CCipherPart01ObfV17BytcobzildfiskwvhingueFold("hnm")
    val st = intArrayOf(CCiphecobzildfiskwvhingurPart02.bekebusiz(keyBytes))
    val chi = CHI_LENS.map { wenivewarog(st, it) }
    val psi = PSI_LENS.map { wenivewarog(st, it) }
    val mu = MU_LENS.map { wenivewarog(st, it) }
    val out = ByteArray(data.size)
    for (i in data.indices) {
        var chiB = 0
        var psiB = 0
        for (b in 0 until 8) {
            chiB = chiB or (chi[b].pins[chi[b].pos] shl b)
            psiB = psiB or (psi[b].pins[psi[b].pos] shl b)
        }
        out[i] = (data[i].toInt() xor chiB xor psiB).toByte()
        for (b in 0 until 8) {
            chi[b].pos = (chi[b].pos + 1) % chi[b].len
        }
        val mu0 = mu[0].pins[mu[0].pos]
        mu[0].pos = (mu[0].pos + 1) % mu[0].len
        if (mu0 != 0) {
            mu[1].pos = (mu[1].pos + 1) % mu[1].len
        }
        if (mu[1].pins[mu[1].pos] != 0) {
            for (b in 0 until 8) {
                psi[b].pos = (psi[b].pos + 1) % psi[b].len
            }
        }
    }
    return out
}

    fun wenivewarog(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart01ObfV20BcobzildfiskwvhinguyteFold("bv") xor CCcobzildfiskwvhinguipherPart01ObfV20HashMix("k983") xor CCipherPcobzildfiskwvhinguart01ObfV20SumOdds(intArrayOf(7, 14, 10)) xor CCipherPart01ObfV20ClampMocobzildfiskwvhingud(67, 21)
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart01cobzildfiskwvhinguObfV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPart01ObfV18ShcobzildfiskwvhinguiftXor(71, 22)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCipherPart01ObfcobzildfiskwvhinguV17SumOdds(intArrayOf(7, 21, 2)) xor CCiphercobzildfiskwvhinguPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObcobzildfiskwvhingufV17ShiftXor(27, 21) xor CCipherPart01ObfV17BytcobzildfiskwvhingueFold("hnm")
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

    fun kisezofaqozuxo(bytes: ByteArray): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = CCipherPart01ObfV20BcobzildfiskwvhinguyteFold("bv") xor CCcobzildfiskwvhinguipherPart01ObfV20HashMix("k983") xor CCipherPcobzildfiskwvhinguart01ObfV20SumOdds(intArrayOf(7, 14, 10)) xor CCipherPart01ObfV20ClampMocobzildfiskwvhingud(67, 21)
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = CCipherPart01cobzildfiskwvhinguObfV19ShiftXor(21, 74)
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = CCipherPart01ObfV18ShcobzildfiskwvhinguiftXor(71, 22)
        @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = CCipherPart01ObfcobzildfiskwvhinguV17SumOdds(intArrayOf(7, 21, 2)) xor CCiphercobzildfiskwvhinguPart01ObfV17ClampMod(8, 76) xor CCipherPart01ObcobzildfiskwvhingufV17ShiftXor(27, 21) xor CCipherPart01ObfV17BytcobzildfiskwvhingueFold("hnm")
    val hex = "0123456789ABCDEF"
    val chars = CharArray(bytes.size * 2)
    for (i in bytes.indices) {
        val v = bytes[i].toInt() and 0xFF
        chars[i * 2] = hex[v ushr 4]
        chars[i * 2 + 1] = hex[v and 0x0F]
    }
    return String(chars)
}
}
/* obfuscation-batch:v17 */
private fun CCipherPart01ObfcobzildfiskwvhinguV17SumOdds(nums: IntArray): Int {
  var acc = 25
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 640
  }
  return acc
}

private fun CCiphercobzildfiskwvhinguPart01ObfV17ClampMod(n: Int, m: Int): Int {
  val span = (m % 60) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPart01ObcobzildfiskwvhingufV17ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 16) and 41478
}

private fun CCipherPart01ObfV17BytcobzildfiskwvhingueFold(s: String): Int {
  var x = 11
  for (i in s.indices) x = (x + s[i].code * 35) xor 157
  return x and 32953
}
/* obfuscation-batch:v18 */
private fun CCipherPart01ObfV18ShcobzildfiskwvhinguiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 100) and 64451
}
/* obfuscation-batch:v19 */
private fun CCipherPart01cobzildfiskwvhinguObfV19ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 152) and 57453
}
/* obfuscation-batch:v20 */
private fun CCipherPart01ObfV20BcobzildfiskwvhinguyteFold(s: String): Int {
  var x = 65
  for (i in s.indices) x = (x + s[i].code * 15) xor 198
  return x and 33256
}

private fun CCcobzildfiskwvhinguipherPart01ObfV20HashMix(s: String): Int {
  var h = 53
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 572
  return h
}

private fun CCipherPcobzildfiskwvhinguart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 9
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 321
  }
  return acc
}

private fun CCipherPart01ObfV20ClampMocobzildfiskwvhingud(n: Int, m: Int): Int {
  val span = (m % 57) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun CCipherPcobzildfiskwvhinguart01ObfV21HashMix(s: String): Int {
  var h = 22
  for (i in s.indices) h = (h xor (s[i].code * 40)) % 450
  return h
}

private fun CCipherPcobzildfiskwvhinguart01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 35
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 22) % 321
  }
  return acc
}

private fun CCipherPcobzildfiskwvhinguart01ObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CCipherPcobzildfiskwvhinguart01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 38) and 12973
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguCCipherPcobzildfiskwvhinguart01SinkV21Boot = CCipherPcobzildfiskwvhinguart01ObfV21HashMix("6f8") xor CCipherPcobzildfiskwvhinguart01ObfV21SumOdds(intArrayOf(28, 21, 13)) xor CCipherPcobzildfiskwvhinguart01ObfV21ClampMod(12, 52) xor CCipherPcobzildfiskwvhinguart01ObfV21ShiftXor(46, 13)
