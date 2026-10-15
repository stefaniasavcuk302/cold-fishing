/* autosetup-split:v1 */

export function cobzildfiskwvhinguSignalHarvestObfV14SumOdds(nums: number[]): number {
let acc = 76;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 16) % 573;
}
return acc;
}

export function cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 163) & 4216;
}

export function cobzildfiskwvhinguSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function cobzildfiskwvhinguSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function cobzildfiskwvhinguSignalHarvestPart03ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV13ClampMod(n: number, m: number): number {
const span = (m % 64) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV14HashMix(s: string): number {
let h = 42;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 157;
return h;
}

export function cobzildfiskwvhinguSignalHarvestObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function cobzildfiskwvhinguSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function cobzildfiskwvhinguSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestPart02ObfV14SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 32) % 757;
}
return acc;
}

export function cobzildfiskwvhinguSignalHarvestObfV16SumOdds(nums: number[]): number {
let acc = 48;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 29) % 454;
}
return acc;
}

export function cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 149) & 23102;
}
/* obfuscation-batch:v17 */
function SignalHarcobzildfiskwvhinguvestPart02ObfV17SumOdds(nums: number[]): number {
  let acc = 91;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 37) % 503;
  }
  return acc;
}
function SignalHcobzildfiskwvhinguarvestPart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 34) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function SignalHarvescobzildfiskwvhingutPart02ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 143) & 37374;
}
/* obfuscation-batch:v19 */
function SicobzildfiskwvhingugnalHarvestPart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 128) & 8971;
}
function SignalHarvestcobzildfiskwvhinguPart02ObfV19ByteFold(s: string): number {
  let x = 64;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 138;
  return x & 8976;
}
function SignacobzildfiskwvhingulHarvestPart02ObfV19HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 747;
  return h;
}
function SignalHarvestPart02ObfV19SumOddcobzildfiskwvhingus(nums: number[]): number {
  let acc = 25;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 767;
  }
  return acc;
}
/* obfuscation-batch:v20 */
function SignalHarvestPart02ObfV2cobzildfiskwvhingu0ClampMod(n: number, m: number): number {
  const span = (m % 29) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHacobzildfiskwvhingurvestPart02ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 215) & 32668;
}
function SignalHarvestPart02ObfV20BytecobzildfiskwvhinguFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 31) ^ 21;
  return x & 52124;
}
function SignalHarvestPart02ObfV20HashMixcobzildfiskwvhingu(s: string): number {
  let h = 32;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 755;
  return h;
}
void SignalHarvestPart02ObfV2cobzildfiskwvhingu0ClampMod(15, 62);
void SignalHacobzildfiskwvhingurvestPart02ObfV20ShiftXor(34, 44);
void SignalHarvestPart02ObfV20BytecobzildfiskwvhinguFold('g5s');
void SignalHarvestPart02ObfV20HashMixcobzildfiskwvhingu('bs');

/* obfuscation-batch:v21 */
function SignalHarvestPartcobzildfiskwvhingu02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 20) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function SignalHarvestPartcobzildfiskwvhingu02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 52) & 61013;
}
void SignalHarvestPartcobzildfiskwvhingu02ObfV21ClampMod(16, 17);
void SignalHarvestPartcobzildfiskwvhingu02ObfV21ShiftXor(74, 77);
