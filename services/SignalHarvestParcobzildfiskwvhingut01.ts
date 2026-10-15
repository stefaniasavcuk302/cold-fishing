/* autosetup-split:v1 */

export function cobzildfiskwvhinguSignalHarvestObfV14HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 551;
return h;
}

export function cobzildfiskwvhinguSignalHarvestObfV14ClampMod(n: number, m: number): number {
const span = (m % 12) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguSignalHarvestObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function cobzildfiskwvhinguSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestPart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function cobzildfiskwvhinguSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestPart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV13ByteFold(s: string): number {
let x = 38;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 207;
return x & 5952;
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 607;
}
return acc;
}

export function cobzildfiskwvhinguSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function cobzildfiskwvhinguFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function cobzildfiskwvhinguSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function cobzildfiskwvhinguSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function cobzildfiskwvhinguSignalHarvestObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 164) & 51888;
}

export function cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 130) & 32633;
}

export function cobzildfiskwvhinguSignalHarvestObfV16ClampMod(n: number, m: number): number {
const span = (m % 32) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguSignalHarvestObfV16ByteFold(s: string): number {
let x = 83;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 92;
return x & 34561;
}
/* obfuscation-batch:v17 */
function SignalHarvestPcobzildfiskwvhinguart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 44) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SigncobzildfiskwvhingualHarvestPart01ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 184) & 4634;
}
function SignalHarvestPart0cobzildfiskwvhingu1ObfV17ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 62;
  return x & 31693;
}
/* obfuscation-batch:v18 */
function SignalHarvestParcobzildfiskwvhingut01ObfV18HashMix(s: string): number {
  let h = 16;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 646;
  return h;
}
function SignalHarvestPcobzildfiskwvhinguart01ObfV18SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 42) % 581;
  }
  return acc;
}
function SignalHarvestPart01ObfV18ClamcobzildfiskwvhingupMod(n: number, m: number): number {
  const span = (m % 24) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function SignalHarvestPart01ObfVcobzildfiskwvhingu18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 73) & 12846;
}
/* obfuscation-batch:v19 */
function SignalHarvestPart01ObfcobzildfiskwvhinguV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 131) & 11443;
}
function SignalHarvestParcobzildfiskwvhingut01ObfV19ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 141;
  return x & 11448;
}
/* obfuscation-batch:v20 */
function SicobzildfiskwvhingugnalHarvestPart01ObfV20ByteFold(s: string): number {
  let x = 43;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 203;
  return x & 55239;
}
void SicobzildfiskwvhingugnalHarvestPart01ObfV20ByteFold('27');

/* obfuscation-batch:v21 */
function SignalHarvestParcobzildfiskwvhingut01ObfV21HashMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 41) % 721;
  return h;
}

function SignalHarvestParcobzildfiskwvhingut01ObfV21SumOdds(nums: number[]): number {
  let acc = 53;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 776;
  }
  return acc;
}

function SignalHarvestParcobzildfiskwvhingut01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void SignalHarvestParcobzildfiskwvhingut01ObfV21HashMix('va');
void SignalHarvestParcobzildfiskwvhingut01ObfV21SumOdds([23, 18, 25]);
void SignalHarvestParcobzildfiskwvhingut01ObfV21ClampMod(31, 72);
