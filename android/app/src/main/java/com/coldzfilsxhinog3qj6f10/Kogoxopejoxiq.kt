package com.coldzfilsxhinog3qj6f10

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Kogoxopejoxiq(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KogoxopejoxiqcobzildfiskwvhinguObfV21ByteFold("pts") xor KogoxopejoxiqcobzildfiskwvhinguObfV21HashMix("bt") xor KogoxopejoxiqcobzildfiskwvhinguObfV21SumOdds(intArrayOf(9, 17, 23)) xor KogoxopejoxiqcobzildfiskwvhinguObfV21ClampMod(59, 55)
        

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KogoxopejoxiqcobzildfiskwvhinguObfV21ByteFold("pts") xor KogoxopejoxiqcobzildfiskwvhinguObfV21HashMix("bt") xor KogoxopejoxiqcobzildfiskwvhinguObfV21SumOdds(intArrayOf(9, 17, 23)) xor KogoxopejoxiqcobzildfiskwvhinguObfV21ClampMod(59, 55)
        return "Xediwelipe"
    }

    @ReactMethod
    fun verecowuveze(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = KogoxopejoxiqcobzildfiskwvhinguObfV21ByteFold("pts") xor KogoxopejoxiqcobzildfiskwvhinguObfV21HashMix("bt") xor KogoxopejoxiqcobzildfiskwvhinguObfV21SumOdds(intArrayOf(9, 17, 23)) xor KogoxopejoxiqcobzildfiskwvhinguObfV21ClampMod(59, 55)
        
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane % 14
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "fone"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane and 27857
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = try {
            cofizujob(reactApplicationContext)
        } catch (e: Exception) {
            ""
        }
        promise.resolve(dexValue)
    }

    private fun cofizujob(context: Context): String {
        val loaded = WebSettings.getDefaultUserAgent(context)
        if (loaded == null) {
            return ""
        }
        return loaded
    }
}

/* obfuscation-batch:v21 */
private fun KogoxopejoxiqcobzildfiskwvhinguObfV21ByteFold(s: String): Int {
  var x = 54
  for (i in s.indices) x = (x + s[i].code * 30) and 65535
  return x
}

private fun KogoxopejoxiqcobzildfiskwvhinguObfV21HashMix(s: String): Int {
  var h = 77
  for (i in s.indices) h = (h xor (s[i].code * 34)) % 537
  return h
}

private fun KogoxopejoxiqcobzildfiskwvhinguObfV21SumOdds(nums: IntArray): Int {
  var acc = 41
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 29) % 400
  }
  return acc
}

private fun KogoxopejoxiqcobzildfiskwvhinguObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 24) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
