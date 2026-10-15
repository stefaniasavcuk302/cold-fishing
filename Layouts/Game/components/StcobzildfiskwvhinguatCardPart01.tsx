/* autosetup-split:v1 */

export function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v21 */
function StcobzildfiskwvhinguatCardPart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 83) & 5060;
}

function StcobzildfiskwvhinguatCardPart01ObfV21ByteFold(s: string): number {
  let x = 65;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function StcobzildfiskwvhinguatCardPart01ObfV21HashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 802;
  return h;
}

function StcobzildfiskwvhinguatCardPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 35;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 511;
  }
  return acc;
}
void StcobzildfiskwvhinguatCardPart01ObfV21ShiftXor(51, 42);
void StcobzildfiskwvhinguatCardPart01ObfV21ByteFold('nm');
void StcobzildfiskwvhinguatCardPart01ObfV21HashMix('va9r');
void StcobzildfiskwvhinguatCardPart01ObfV21SumOdds([11, 27, 11]);
