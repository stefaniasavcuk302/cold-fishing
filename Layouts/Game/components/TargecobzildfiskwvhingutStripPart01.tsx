/* autosetup-split:v1 */

export function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function cobzildfiskwvhinguGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v21 */
function TargecobzildfiskwvhingutStripPart01ObfV21HashMix(s: string): number {
  let h = 85;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 591;
  return h;
}

function TargecobzildfiskwvhingutStripPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 416;
  }
  return acc;
}

function TargecobzildfiskwvhingutStripPart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 33) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void TargecobzildfiskwvhingutStripPart01ObfV21HashMix('hnzr');
void TargecobzildfiskwvhingutStripPart01ObfV21SumOdds([3, 19, 17]);
void TargecobzildfiskwvhingutStripPart01ObfV21ClampMod(23, 64);
