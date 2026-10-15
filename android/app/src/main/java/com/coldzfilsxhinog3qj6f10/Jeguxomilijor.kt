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

class Jeguxomilijor(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
        

    override fun getName(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
        return "Purehexuce"
    }

    @ReactMethod
    fun jatabenurerax(promise: Promise) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
        
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 12
        dexLane = dexLane shl 12
        val laneNums = intArrayOf(103, 107, 69)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
            @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
            
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        val started = try {
            rakeziqequmol { value -> finish(value) }
            true
        } catch (e: Exception) {
            false
        }
        if (!started) finish("")
    }

    private fun rakeziqequmol(finish: (String) -> Unit) {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
        
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(xitomixeqedo())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun xitomixeqedo(): String {
        @Suppress("UNUSED_VARIABLE") val cobzildfiskwvhinguSinkV21 = JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(37, 62) xor JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(18, 65)
        
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        val alphabet = "0123456789abcdef"
        val out = StringBuilder(bytes.size * 2)
        for (byte in bytes) {
            val v = byte.toInt() and 0xff
            out.append(alphabet[v ushr 4])
            out.append(alphabet[v and 0x0f])
        }
        return out.toString()
    }

    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}

/* obfuscation-batch:v21 */
private fun JeguxomilijorcobzildfiskwvhinguObfV21ClampMod(n: Int, m: Int): Int {
  val span = (m % 40) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun JeguxomilijorcobzildfiskwvhinguObfV21ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 192) and 40795
}
