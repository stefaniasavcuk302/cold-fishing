/* autosetup-decoy:v1 */
package com.coldzfilsxhinog3qj6f10

object DcobzildfiskwvhinguFlux02 {
  fun tap(seed: Int): Int {
    val tag = "DcobzildfiskwvhinguFlux02"
    var x = seed xor 23497
    for (ch in tag) {
      x = (x + ch.code * 7) and 0xffff
    }
    return x xor 2268
  }
}
