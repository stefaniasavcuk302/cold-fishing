/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import java.io.StringReader

object WolafamivuqPart01 {
    fun zizolicen(body: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = cobzildfiskwvhinguWolafamivuqPart01ObfV20ShiftXor(51, 76) xor cobzildfiskwvhinguWolafamivuqPart01ObfV20ByteFold("j47") xor cobzildfiskwvhinguWolafamivuqPart01ObfV20HashMix("6k") xor cobzildfiskwvhinguWolafamivuqPart01ObfV20SumOdds(intArrayOf(20, 28, 10))
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = WolafamivuqPart01ObfV19cobzildfiskwvhinguByteFold("m9a") xor WolafamivuqParcobzildfiskwvhingut01ObfV19HashMix("nde")
        @Suppress("Qafirirehimec") val cobzildfiskwvhinguSinkV18 = cobzildfiskwvhinguWolafamivuqPart01ObfV18ClampMod(77, 13) xor cobzildfiskwvhinguWolafamivuqPart01ObfV18ShiftXor(77, 62) xor cobzildfiskwvhinguWolafamivuqPart01ObfV18ByteFold("h64w")
    @Suppress("Zovuwebaxa") val cobzildfiskwvhinguSinkV17 = WolafamivuqPart02.cobzildfiskwvhinguWolafamivuqObfV17ByteFold("6k") xor WolafamivuqPart03.cobzildfiskwvhinguWolafamivuqObfV17HashMix("gbj") xor cobzildfiskwvhinguWolafamivuqObfV17SumOdds(intArrayOf(6, 7, 12)) xor WolafamivuqPart02.cobzildfiskwvhinguWolafamivuqObfV17ClampMod(33, 24)
    val count = JsonReader(StringReader(body)).use { reader ->
        var tokens = 0
        while (reader.peek() != JsonToken.END_DOCUMENT) {
            when (reader.peek()) {
                JsonToken.BEGIN_OBJECT -> {
                    reader.beginObject()
                    tokens += 1
                }
                JsonToken.END_OBJECT -> {
                    reader.endObject()
                    tokens += 1
                }
                JsonToken.BEGIN_ARRAY -> {
                    reader.beginArray()
                    tokens += 1
                }
                JsonToken.END_ARRAY -> {
                    reader.endArray()
                    tokens += 1
                }
                JsonToken.NAME -> {
                    reader.nextName()
                    tokens += 1
                }
                JsonToken.STRING -> {
                    reader.nextString()
                    tokens += 1
                }
                JsonToken.NUMBER -> {
                    reader.nextDouble()
                    tokens += 1
                }
                JsonToken.BOOLEAN -> {
                    reader.nextBoolean()
                    tokens += 1
                }
                JsonToken.NULL -> {
                    reader.nextNull()
                    tokens += 1
                }
                else -> {
                    reader.skipValue()
                    tokens += 1
                }
            }
        }
        tokens
    }
    return count.toString()
}

    fun cobzildfiskwvhinguWolafamivuqObfV17SumOdds(nums: IntArray): Int {
  var acc = 77
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 433
  }
  return acc
}
}
/* obfuscation-batch:v18 */
private fun cobzildfiskwvhinguWolafamivuqPart01ObfV18ClampMod(n: Int, m: Int): Int {
  val span = (m % 10) + 1
  val x = n % span
  return if (x < 0) x + span else x
}

private fun cobzildfiskwvhinguWolafamivuqPart01ObfV18ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 88) and 9417
}

private fun cobzildfiskwvhinguWolafamivuqPart01ObfV18ByteFold(s: String): Int {
  var x = 22
  for (i in s.indices) x = (x + s[i].code * 19) xor 21
  return x and 35564
}
/* obfuscation-batch:v19 */
private fun WolafamivuqPart01ObfV19cobzildfiskwvhinguByteFold(s: String): Int {
  var x = 15
  for (i in s.indices) x = (x + s[i].code * 16) xor 181
  return x and 38318
}

private fun WolafamivuqParcobzildfiskwvhingut01ObfV19HashMix(s: String): Int {
  var h = 32
  for (i in s.indices) h = (h xor (s[i].code * 7)) % 513
  return h
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguWolafamivuqPart01ObfV20ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 90) and 18200
}

private fun cobzildfiskwvhinguWolafamivuqPart01ObfV20ByteFold(s: String): Int {
  var x = 67
  for (i in s.indices) x = (x + s[i].code * 17) xor 115
  return x and 56977
}

private fun cobzildfiskwvhinguWolafamivuqPart01ObfV20HashMix(s: String): Int {
  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 751
  return h
}

private fun cobzildfiskwvhinguWolafamivuqPart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 87
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 4) % 252
  }
  return acc
}

/* obfuscation-batch:v21 */
private fun WolafamivuqPartcobzildfiskwvhingu01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 7
  return (x xor 39) and 45950
}

private fun WolafamivuqPartcobzildfiskwvhingu01ObfV21ByteFold(s: String): Int {
  var x = 19
  for (i in s.indices) x = (x + s[i].code * 33) and 65535
  return x
}

private fun WolafamivuqPartcobzildfiskwvhingu01ObfV21HashMix(s: String): Int {
  var h = 89
  for (i in s.indices) h = (h xor (s[i].code * 22)) % 754
  return h
}

private fun WolafamivuqPartcobzildfiskwvhingu01ObfV21SumOdds(nums: IntArray): Int {
  var acc = 29
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 36) % 656
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguWolafamivuqPart01SinkV21Boot = WolafamivuqPartcobzildfiskwvhingu01ObfV21ShiftXor(84, 36) xor WolafamivuqPartcobzildfiskwvhingu01ObfV21ByteFold("d3") xor WolafamivuqPartcobzildfiskwvhingu01ObfV21HashMix("m4p6") xor WolafamivuqPartcobzildfiskwvhingu01ObfV21SumOdds(intArrayOf(27, 14, 29))
