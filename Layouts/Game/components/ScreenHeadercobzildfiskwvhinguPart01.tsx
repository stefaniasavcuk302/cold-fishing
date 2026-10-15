/* autosetup-split:v1 */

export function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v21 */
function ScreenHeadercobzildfiskwvhinguPart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 56) & 5407;
}

function ScreenHeadercobzildfiskwvhinguPart01ObfV21ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function ScreenHeadercobzildfiskwvhinguPart01ObfV21HashMix(s: string): number {
  let h = 32;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 257;
  return h;
}

function ScreenHeadercobzildfiskwvhinguPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 87;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 621;
  }
  return acc;
}
void ScreenHeadercobzildfiskwvhinguPart01ObfV21ShiftXor(30, 45);
void ScreenHeadercobzildfiskwvhinguPart01ObfV21ByteFold('azr');
void ScreenHeadercobzildfiskwvhinguPart01ObfV21HashMix('amr');
void ScreenHeadercobzildfiskwvhinguPart01ObfV21SumOdds([5, 6, 5]);
