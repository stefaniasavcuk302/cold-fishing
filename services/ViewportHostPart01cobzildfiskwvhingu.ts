/* autosetup-split:v1 */

export function cobzildfiskwvhinguViewportHostObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 126) & 41627;
}

export function cobzildfiskwvhinguViewportHostObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function cobzildfiskwvhinguViewportHostObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function cobzildfiskwvhinguViewportHostObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV15SumOdds(nums: number[]): number {
let acc = 84;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 392;
}
return acc;
}
/* obfuscation-batch:v17 */
function ViewportHostPart0cobzildfiskwvhingu1ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 70) & 38126;
}
function ViewportHostPart01ObfV17ByteFocobzildfiskwvhinguld(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 64;
  return x & 6293;
}
function ViewportHostPart01ObcobzildfiskwvhingufV17HashMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 700;
  return h;
}
function ViewportHostPart0cobzildfiskwvhingu1ObfV17SumOdds(nums: number[]): number {
  let acc = 8;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 630;
  }
  return acc;
}
void ViewportHostPart0cobzildfiskwvhingu1ObfV17ShiftXor(3, 38);
void ViewportHostPart01ObfV17ByteFocobzildfiskwvhinguld('fpq');
void ViewportHostPart01ObcobzildfiskwvhingufV17HashMix('vj');
void ViewportHostPart0cobzildfiskwvhingu1ObfV17SumOdds([21, 25, 6]);
/* obfuscation-batch:v18 */
function ViewportHostPart01OcobzildfiskwvhingubfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 33) & 16851;
}
function VcobzildfiskwvhinguiewportHostPart01ObfV18ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 99;
  return x & 61899;
}
function ViewpocobzildfiskwvhingurtHostPart01ObfV18HashMix(s: string): number {
  let h = 82;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 780;
  return h;
}
void ViewportHostPart01OcobzildfiskwvhingubfV18ShiftXor(81, 38);
void VcobzildfiskwvhinguiewportHostPart01ObfV18ByteFold('qqf');
void ViewpocobzildfiskwvhingurtHostPart01ObfV18HashMix('fv');
/* obfuscation-batch:v19 */
function ViewportcobzildfiskwvhinguHostPart01ObfV19SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 280;
  }
  return acc;
}
function ViewportHostPart01ObfV19ClcobzildfiskwvhinguampMod(n: number, m: number): number {
  const span = (m % 53) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewpocobzildfiskwvhingurtHostPart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 94) & 6874;
}
function ViewportHostPart01ObfV19cobzildfiskwvhinguByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 104;
  return x & 6879;
}
/* obfuscation-batch:v20 */
function ViewportHostPart01cobzildfiskwvhinguObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 38) & 43549;
}
function ViewportcobzildfiskwvhinguHostPart01ObfV20ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 232;
  return x & 51751;
}

/* obfuscation-batch:v21 */
function ViewportHostPart01cobzildfiskwvhinguObfV21HashMix(s: string): number {
  let h = 70;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 157;
  return h;
}

function ViewportHostPart01cobzildfiskwvhinguObfV21SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 795;
  }
  return acc;
}
void ViewportHostPart01cobzildfiskwvhinguObfV21HashMix('n9db');
void ViewportHostPart01cobzildfiskwvhinguObfV21SumOdds([27, 23, 8]);
