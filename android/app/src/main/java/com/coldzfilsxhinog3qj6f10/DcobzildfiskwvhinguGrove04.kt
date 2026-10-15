/* autosetup-decoy:v1 */
package com.coldzfilsxhinog3qj6f10

object DcobzildfiskwvhinguGrove04 {
  fun tap(seed: Int): Int {
    val tag = "DcobzildfiskwvhinguGrove04"
    var x = seed xor 12437
    for (ch in tag) {
      x = (x + ch.code * 3) and 0xffff
    }
    return x xor 513
  }
}
