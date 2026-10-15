/* autosetup-decoy:v1 */

export function cobzildfiskwvhinguflint01Touch(seed: number): number {void cobzildfiskwvhinguflint01ObfV21SumOdds([25, 10, 15]);
void cobzildfiskwvhinguflint01ObfV21ClampMod(19, 17);
void cobzildfiskwvhinguflint01ObfV21ShiftXor(63, 54);

  let x = (seed ^ 4594) | 0;
  x = (x >>> 3) ^ 1080;
  x = Math.imul(x, 47) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguflint01ObfV21SumOdds(nums: number[]): number {
  let acc = 31;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 784;
  }
  return acc;
}

function cobzildfiskwvhinguflint01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 39) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function cobzildfiskwvhinguflint01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 219) & 16846;
}
void cobzildfiskwvhinguflint01ObfV21SumOdds([25, 10, 15]);
void cobzildfiskwvhinguflint01ObfV21ClampMod(19, 17);
void cobzildfiskwvhinguflint01ObfV21ShiftXor(63, 54);
