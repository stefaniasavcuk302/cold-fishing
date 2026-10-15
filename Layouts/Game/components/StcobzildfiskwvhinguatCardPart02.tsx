/* autosetup-split:v1 */

export function cobzildfiskwvhinguGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

/* obfuscation-batch:v21 */
function StcobzildfiskwvhinguatCardPart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 38) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function StcobzildfiskwvhinguatCardPart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 43) & 19456;
}

function StcobzildfiskwvhinguatCardPart02ObfV21ByteFold(s: string): number {
  let x = 32;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) & 65535;
  return x;
}
void StcobzildfiskwvhinguatCardPart02ObfV21ClampMod(49, 66);
void StcobzildfiskwvhinguatCardPart02ObfV21ShiftXor(20, 34);
void StcobzildfiskwvhinguatCardPart02ObfV21ByteFold('9d3t');
