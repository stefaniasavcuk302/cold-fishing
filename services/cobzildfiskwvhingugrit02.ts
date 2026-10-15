/* autosetup-decoy:v1 */

export function cobzildfiskwvhingugrit02Touch(seed: number): number {void cobzildfiskwvhingugrit02ObfV21SumOdds([26, 26, 17]);
void cobzildfiskwvhingugrit02ObfV21ClampMod(25, 18);
void cobzildfiskwvhingugrit02ObfV21ShiftXor(37, 6);
void cobzildfiskwvhingugrit02ObfV21ByteFold('36fk');

  let x = (seed + 11212) | 0;
  x = (x << 2) | 0;
  x = (x ^ 1509) & 0xffff;
  return x;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhingugrit02ObfV21SumOdds(nums: number[]): number {
  let acc = 83;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 439;
  }
  return acc;
}

function cobzildfiskwvhingugrit02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 27) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function cobzildfiskwvhingugrit02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 187) & 17008;
}

function cobzildfiskwvhingugrit02ObfV21ByteFold(s: string): number {
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 65535;
  return x;
}
void cobzildfiskwvhingugrit02ObfV21SumOdds([26, 26, 17]);
void cobzildfiskwvhingugrit02ObfV21ClampMod(25, 18);
void cobzildfiskwvhingugrit02ObfV21ShiftXor(37, 6);
void cobzildfiskwvhingugrit02ObfV21ByteFold('36fk');
