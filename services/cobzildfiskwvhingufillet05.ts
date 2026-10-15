/* autosetup-decoy:v1 */

export function cobzildfiskwvhingufillet05Touch(seed: number): number {void cobzildfiskwvhingufillet05ObfV21ClampMod(55, 12);
void cobzildfiskwvhingufillet05ObfV21ShiftXor(59, 73);
void cobzildfiskwvhingufillet05ObfV21ByteFold('kva');

  const tag = "cobzildfiskwvhingufillet05Touch";
  let x = (seed ^ 13959) & 0xffff;
  for (let i = 0; i < tag.length; i++) {
    x = (x + tag.charCodeAt(i) * 13) & 0xffff;
  }
  return x ^ 1213;
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhingufillet05ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 59) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function cobzildfiskwvhingufillet05ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 66) & 49868;
}

function cobzildfiskwvhingufillet05ObfV21ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}
void cobzildfiskwvhingufillet05ObfV21ClampMod(55, 12);
void cobzildfiskwvhingufillet05ObfV21ShiftXor(59, 73);
void cobzildfiskwvhingufillet05ObfV21ByteFold('kva');
