/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguloam07Touch(seed: number): number {void cobzildfiskwvhinguloam07ObfV21ByteFold('t5');
void cobzildfiskwvhinguloam07ObfV21HashMix('p6');
void cobzildfiskwvhinguloam07ObfV21SumOdds([28, 18, 27]);

  let x = (seed ^ 6647) | 0;
  x = (x >>> 6) ^ 1658;
  x = Math.imul(x, 37) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguloam07ObfV21ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 65535;
  return x;
}

function cobzildfiskwvhinguloam07ObfV21HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 517;
  return h;
}

function cobzildfiskwvhinguloam07ObfV21SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 202;
  }
  return acc;
}
void cobzildfiskwvhinguloam07ObfV21ByteFold('t5');
void cobzildfiskwvhinguloam07ObfV21HashMix('p6');
void cobzildfiskwvhinguloam07ObfV21SumOdds([28, 18, 27]);
