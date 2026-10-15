/* cf-cipher:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.nio.charset.StandardCharsets

class Qolevajaxodud(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        return "Qolevajaxodud"
    }

    private val keyString = "ME7LDXUt8iYyV3UDqNEArdZDKkh3"
    @Suppress("unused")
    private val ivString = "JNdwZNRK2vXzj2tAQg"
    private val keyBytes = keyString.toByteArray(StandardCharsets.UTF_8)

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun curenelomivida(plain: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        return try {
            rapobatosisixa(transform(plain.toByteArray(StandardCharsets.UTF_8)))
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun notarukemu(hex: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            String(transform(jemataxofesog(normalized)), StandardCharsets.UTF_8)
        } catch (_: Exception) {
            ""
        }
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun kequjijalo(hex: String): String {
        return try {
            val normalized = hex.trim()
            if (normalized.isEmpty() || normalized.length % 2 != 0) return ""
            rapobatosisixa(transform(jemataxofesog(normalized)))
        } catch (_: Exception) {
            ""
        }
    }

    private class Wheel(val pins: IntArray, var pos: Int) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        val len: Int = pins.size
    }

    private fun transform(data: ByteArray): ByteArray {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        val st = intArrayOf(dopihesuzedifa(keyBytes))
        val chi = CHI_LENS.map { maqujukisilan(st, it) }
        val psi = PSI_LENS.map { maqujukisilan(st, it) }
        val mu = MU_LENS.map { maqujukisilan(st, it) }
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

    private fun dopihesuzedifa(bytes: ByteArray): Int {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        var s = 0x811C9DC5.toInt()
        for (b in bytes) {
            s = s xor (b.toInt() and 0xFF)
            s *= 16777619
        }
        if (bytes.isEmpty()) s = s xor 0xA5A5A5A5.toInt()
        return s
    }

    private fun kebelibasev(state: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        var x = state[0]
        x = x xor (x shl 13)
        x = x xor (x ushr 17)
        x = x xor (x shl 5)
        state[0] = x
        return x
    }

    private fun maqujukisilan(st: IntArray, len: Int): Wheel {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        val pins = IntArray(len)
        var ones = 0
        for (i in 0 until len) {
            pins[i] = kebelibasev(st) and 1
            ones += pins[i]
        }
        if (ones == 0) pins[0] = 1
        if (ones == len) pins[0] = 0
        val pos = bofoqiqoxezezu(kebelibasev(st), len)
        return Wheel(pins, pos)
    }

    private fun bofoqiqoxezezu(value: Int, len: Int): Int {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        return ((value.toLong() and 0xFFFFFFFFL) % len.toLong()).toInt()
    }

    private fun jemataxofesog(hex: String): ByteArray {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        val out = ByteArray(hex.length / 2)
        var i = 0
        while (i < out.size) {
            val at = i * 2
            out[i] = hex.substring(at, at + 2).toInt(16).toByte()
            i += 1
        }
        return out
    }

    private fun rapobatosisixa(bytes: ByteArray): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(intArrayOf(6, 28, 12)) xor QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(46, 75) xor QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(81, 33) xor QolevajaxodudcobzildfiskwvhinguObfV21ByteFold("wv")
        
        val hex = "0123456789ABCDEF"
        val chars = CharArray(bytes.size * 2)
        for (i in bytes.indices) {
            val v = bytes[i].toInt() and 0xFF
            chars[i * 2] = hex[v ushr 4]
            chars[i * 2 + 1] = hex[v and 0x0F]
        }
        return String(chars)
    }

    companion object {
        private val CHI_LENS = intArrayOf(41, 31, 29, 26, 23, 43, 47, 37)
        private val PSI_LENS = intArrayOf(43, 47, 51, 53, 59, 61, 67, 71)
        private val MU_LENS = intArrayOf(61, 37)
    }
}

/* obfuscation-batch:v21 */
private fun QolevajaxodudcobzildfiskwvhinguObfV21SumOdds(nums: IntArray): Int {
  var acc = 74
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 32) % 718
  }
  return acc
}

private fun QolevajaxodudcobzildfiskwvhinguObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 61) + 8
  val x = n % span
  return if (x < 0) x + span else x
}

private fun QolevajaxodudcobzildfiskwvhinguObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 180) and 42188
}

private fun QolevajaxodudcobzildfiskwvhinguObfV21ByteFold(s: String): Int {
  var x = 23
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
