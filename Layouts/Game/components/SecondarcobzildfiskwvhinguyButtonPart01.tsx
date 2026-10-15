/* autosetup-split:v1 */

export function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v21 */
function SecondarcobzildfiskwvhinguyButtonPart01ObfV21HashMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 503;
  return h;
}

function SecondarcobzildfiskwvhinguyButtonPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 70;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 777;
  }
  return acc;
}
void SecondarcobzildfiskwvhinguyButtonPart01ObfV21HashMix('6s8v');
void SecondarcobzildfiskwvhinguyButtonPart01ObfV21SumOdds([3, 17, 24]);
