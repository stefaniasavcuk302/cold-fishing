/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguyarn03Touch(seed: number): number {void cobzildfiskwvhinguyarn03ObfV21HashMix('zrp');
void cobzildfiskwvhinguyarn03ObfV21SumOdds([18, 22, 30]);

  let x = (seed + 61179) | 0;
  x = (x << 2) | 0;
  x = (x ^ 757) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguyarn03ObfV21HashMix(s: string): number {
  let h = 25;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 661;
  return h;
}

function cobzildfiskwvhinguyarn03ObfV21SumOdds(nums: number[]): number {
  let acc = 54;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 151;
  }
  return acc;
}
void cobzildfiskwvhinguyarn03ObfV21HashMix('zrp');
void cobzildfiskwvhinguyarn03ObfV21SumOdds([18, 22, 30]);
