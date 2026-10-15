/* autosetup-split:v1 */
package com.coldzfilsxhinog3qj6f10

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.android.volley.DefaultRetryPolicy
import com.android.volley.ExecutorDelivery
import com.android.volley.Request as VolleyRequest
import com.android.volley.RequestQueue
import com.android.volley.toolbox.BasicNetwork
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.NoCache
import com.android.volley.toolbox.StringRequest
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object BorucamucaqPart01 {
    fun pujesapusu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV20 = cobzildfiskwvhinguBorucamucaqPart01ObfV20HashMix("67") xor cobzildfiskwvhinguBorucamucaqPart01ObfV20SumOdds(intArrayOf(27, 25, 25)) xor cobzildfiskwvhinguBorucamucaqPart01ObfV20ClampMod(75, 57)
    @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV19 = BorucamucaqPart02.BorucobzildfiskwvhingucamucaqObfV19ByteFold("w7y") xor BorucamucaqPart03.BorucamucaqObfcobzildfiskwvhinguV19HashMix("tw")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}
/* obfuscation-batch:v20 */
private fun cobzildfiskwvhinguBorucamucaqPart01ObfV20HashMix(s: String): Int {
  var h = 28
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 539
  return h
}

private fun cobzildfiskwvhinguBorucamucaqPart01ObfV20SumOdds(nums: IntArray): Int {
  var acc = 67
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 28) % 162
  }
  return acc
}

private fun cobzildfiskwvhinguBorucamucaqPart01ObfV20ClampMod(n: Int, m: Int): Int {
  val span = (m % 60) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun BorucamucaqPartcobzildfiskwvhingu01ObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 1
  return (x xor 116) and 17594
}

private fun BorucamucaqPartcobzildfiskwvhingu01ObfV21ByteFold(s: String): Int {
  var x = 62
  for (i in s.indices) x = (x + s[i].code * 24) and 65535
  return x
}

private fun BorucamucaqPartcobzildfiskwvhingu01ObfV21HashMix(s: String): Int {
  var h = 69
  for (i in s.indices) h = (h xor (s[i].code * 14)) % 180
  return h
}
@Suppress("UNUSED_VARIABLE") private val cobzildfiskwvhinguBorucamucaqPart01SinkV21Boot = BorucamucaqPartcobzildfiskwvhingu01ObfV21ShiftXor(16, 27) xor BorucamucaqPartcobzildfiskwvhingu01ObfV21ByteFold("h2z") xor BorucamucaqPartcobzildfiskwvhingu01ObfV21HashMix("72")
