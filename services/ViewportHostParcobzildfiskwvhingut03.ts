/* autosetup-split:v1 */

export function cobzildfiskwvhinguVieObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function cobzildfiskwvhinguVieObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function cobzildfiskwvhinguViewportHostObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function cobzildfiskwvhinguViewportHosObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function cobzildfiskwvhinguClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function cobzildfiskwvhinguViewportHostObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function cobzildfiskwvhinguViewportHostObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function cobzildfiskwvhinguViewportHostObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function cobzildfiskwvhinguViewportHostObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function cobzildfiskwvhinguViewportHostObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function cobzildfiskwvhinguViewportHostObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguViewportHostObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function cobzildfiskwvhinguViewportHostObfV13SumOdds(nums: number[]): number {
let acc = 45;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 261;
}
return acc;
}

export function cobzildfiskwvhinguViewportHostPart01ObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguViewportHostObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 50) & 39681;
}
/* obfuscation-batch:v17 */
function ViewportHostPart03ObfV17ByteFolcobzildfiskwvhingud(s: string): number {
  let x = 55;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 32) ^ 237;
  return x & 62936;
}
function ViewportHoscobzildfiskwvhingutPart03ObfV17HashMix(s: string): number {
  let h = 3;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 39) % 349;
  return h;
}
function ViewportHostPart0cobzildfiskwvhingu3ObfV17SumOdds(nums: number[]): number {

  let acc = 81;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 188;
  }
  return acc;
}
function ViewportcobzildfiskwvhinguHostPart03ObfV17ClampMod(n: number, m: number): number {

  const span = (m % 46) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function ViewcobzildfiskwvhinguportHostPart03ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 23) & 56607;
}
/* obfuscation-batch:v19 */
function ViewportHoscobzildfiskwvhingutPart03ObfV19HashMix(s: string): number {
  let h = 94;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 847;
  return h;
}
function ViewportHostPart03ObfV19BytcobzildfiskwvhingueFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 208;
  return x & 37811;
}
/* obfuscation-batch:v20 */
function ViewportHostPart03ObfcobzildfiskwvhinguV20HashMix(s: string): number {
  let h = 33;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 337;
  return h;
}
function ViewportHostPacobzildfiskwvhingurt03ObfV20SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 383;
  }
  return acc;
}

/* obfuscation-batch:v21 */
function ViewportHostParcobzildfiskwvhingut03ObfV21SumOdds(nums: number[]): number {
  let acc = 33;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 20) % 292;
  }
  return acc;
}

function ViewportHostParcobzildfiskwvhingut03ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 59) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ViewportHostParcobzildfiskwvhingut03ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 49) & 25824;
}
void ViewportHostParcobzildfiskwvhingut03ObfV21SumOdds([18, 8, 7]);
void ViewportHostParcobzildfiskwvhingut03ObfV21ClampMod(51, 78);
void ViewportHostParcobzildfiskwvhingut03ObfV21ShiftXor(62, 28);
