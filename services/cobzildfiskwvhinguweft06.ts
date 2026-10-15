/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguweft06Touch(seed: number): number {void cobzildfiskwvhinguweft06ObfV21HashMix('w72');
void cobzildfiskwvhinguweft06ObfV21SumOdds([22, 23, 27]);
void cobzildfiskwvhinguweft06ObfV21ClampMod(17, 5);
void cobzildfiskwvhinguweft06ObfV21ShiftXor(21, 19);

  let x = (seed + 9715) | 0;
  x = (x << 5) | 0;
  x = (x ^ 1228) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguweft06ObfV21HashMix(s: string): number {
  let h = 76;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 30) % 540;
  return h;
}

function cobzildfiskwvhinguweft06ObfV21SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 552;
  }
  return acc;
}

function cobzildfiskwvhinguweft06ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 31) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function cobzildfiskwvhinguweft06ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 110) & 25283;
}
void cobzildfiskwvhinguweft06ObfV21HashMix('w72');
void cobzildfiskwvhinguweft06ObfV21SumOdds([22, 23, 27]);
void cobzildfiskwvhinguweft06ObfV21ClampMod(17, 5);
void cobzildfiskwvhinguweft06ObfV21ShiftXor(21, 19);
