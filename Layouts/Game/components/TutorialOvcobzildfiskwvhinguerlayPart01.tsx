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
function TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 25) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 224) & 19589;
}

function TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ByteFold(s: string): number {
  let x = 46;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}
void TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ClampMod(45, 24);
void TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ShiftXor(68, 39);
void TutorialOvcobzildfiskwvhinguerlayPart01ObfV21ByteFold('b6');
