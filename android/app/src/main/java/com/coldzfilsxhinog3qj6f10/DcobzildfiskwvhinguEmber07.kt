/* autosetup-decoy:v1 */
package com.coldzfilsxhinog3qj6f10

object DcobzildfiskwvhinguEmber07 {
  fun tap(seed: Int): Int {
    var x = seed * 41
    x = x xor 52334
    x %= 3409
    if (x < 0) x += 3409
    return x
  }
}
