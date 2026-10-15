/* autosetup-decoy:v1 */
package com.coldzfilsxhinog3qj6f10

object DcobzildfiskwvhinguVale06 {
  fun tap(seed: Int): Int {
    val tag = "DcobzildfiskwvhinguVale06"
    var x = seed xor 22605
    for (ch in tag) {
      x = (x + ch.code * 27) and 0xffff
    }
    return x xor 971
  }
}
