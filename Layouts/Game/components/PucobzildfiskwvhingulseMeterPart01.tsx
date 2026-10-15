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
function PucobzildfiskwvhingulseMeterPart01ObfV21SumOdds(nums: number[]): number {
  let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 798;
  }
  return acc;
}

function PucobzildfiskwvhingulseMeterPart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 31) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function PucobzildfiskwvhingulseMeterPart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 19) & 8205;
}
void PucobzildfiskwvhingulseMeterPart01ObfV21SumOdds([18, 22, 5]);
void PucobzildfiskwvhingulseMeterPart01ObfV21ClampMod(78, 64);
void PucobzildfiskwvhingulseMeterPart01ObfV21ShiftXor(42, 64);
