/* autosetup-split:v1 */

export function cobzildfiskwvhinguVieObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function cobzildfiskwvhinguViewportHosObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function cobzildfiskwvhinguViewportHosObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV15ByteFold(s: string): number {
let x = 29;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 170;
return x & 5709;
}
/* obfuscation-batch:v17 */
function ViewportHostPart02ObfV17ByteFolcobzildfiskwvhingud(s: string): number {
  let x = 80;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 106;
  return x & 6323;
}
void ViewportHostPart02ObfV17ByteFolcobzildfiskwvhingud('fkvg');
/* obfuscation-batch:v18 */
function ViewportHostPcobzildfiskwvhinguart02ObfV18ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 114;
  return x & 48365;
}
function ViewportHostPart02ObfVcobzildfiskwvhingu18HashMix(s: string): number {
  let h = 56;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 796;
  return h;
}
void ViewportHostPcobzildfiskwvhinguart02ObfV18ByteFold('92m');
void ViewportHostPart02ObfVcobzildfiskwvhingu18HashMix('nf66');
/* obfuscation-batch:v19 */
function ViewportHostPart02ObfV19ShiftXocobzildfiskwvhingur(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 19) & 37937;
}
function ViewportHostPart02ObfV19BytecobzildfiskwvhinguFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) ^ 29;
  return x & 37942;
}
function ViewportHostPart0cobzildfiskwvhingu2ObfV19HashMix(s: string): number {
  let h = 23;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 609;
  return h;
}
function ViewportHostcobzildfiskwvhinguPart02ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 628;
  }
  return acc;
}
/* obfuscation-batch:v20 */
function ViewportHostPart02ObfV20ScobzildfiskwvhinguhiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 146) & 28064;
}

/* obfuscation-batch:v21 */
function ViewportHostPacobzildfiskwvhingurt02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 27) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostPacobzildfiskwvhingurt02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 123) & 46424;
}
void ViewportHostPacobzildfiskwvhingurt02ObfV21ClampMod(23, 18);
void ViewportHostPacobzildfiskwvhingurt02ObfV21ShiftXor(60, 40);
