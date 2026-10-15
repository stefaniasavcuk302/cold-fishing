/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguplait08Touch(seed: number): number {void cobzildfiskwvhinguplait08ObfV21SumOdds([27, 19, 27]);
void cobzildfiskwvhinguplait08ObfV21ClampMod(68, 49);

  const tag = "cobzildfiskwvhinguplait08Touch";
  let x = (seed ^ 60372) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 21) & 0xffff;
  }
  return x ^ 3172;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguplait08ObfV21SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 183;
  }
  return acc;
}

function cobzildfiskwvhinguplait08ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 20) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void cobzildfiskwvhinguplait08ObfV21SumOdds([27, 19, 27]);
void cobzildfiskwvhinguplait08ObfV21ClampMod(68, 49);
