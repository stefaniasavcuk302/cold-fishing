/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguchalk04Touch(seed: number): number {void cobzildfiskwvhinguchalk04ObfV21HashMix('h294');
void cobzildfiskwvhinguchalk04ObfV21SumOdds([11, 10, 25]);

  let x = (seed + 39016) | 0;
  x = (x << 6) | 0;
  x = (x ^ 3788) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguchalk04ObfV21HashMix(s: string): number {
  let h = 85;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 168;
  return h;
}

function cobzildfiskwvhinguchalk04ObfV21SumOdds(nums: number[]): number {
  let acc = 55;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 555;
  }
  return acc;
}
void cobzildfiskwvhinguchalk04ObfV21HashMix('h294');
void cobzildfiskwvhinguchalk04ObfV21SumOdds([11, 10, 25]);
