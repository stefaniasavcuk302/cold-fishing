/* autosetup-split:v1 */

export function CryptoServiceObfV15cobzildfiskwvhinguByteFold(s: string): number {
let x = 62;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 11;
return x & 33422;
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function CrycobzildfiskwvhinguptoServiceObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function CryptoServicePart01ObfcobzildfiskwvhinguV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CrypcobzildfiskwvhingutoServicePart02ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CryptcobzildfiskwvhinguoServiceObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function cobzildfiskwvhinguMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function CryptoServicePart02ObfV6CcobzildfiskwvhingulampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServcobzildfiskwvhinguiceObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function CryptoServicecobzildfiskwvhinguObfV14ClampMod(n: number, m: number): number {
const span = (m % 49) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CrypcobzildfiskwvhingutoServicePart01ObfV15SumOdds(nums: number[]): number {

let acc = 31;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 30) % 384;
}
return acc;
}

export function CryptoServicePart01OcobzildfiskwvhingubfV6ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptocobzildfiskwvhinguServiceObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function CryptoServiceParcobzildfiskwvhingut01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServcobzildfiskwvhinguiceObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

export function CryptcobzildfiskwvhinguoServiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptcobzildfiskwvhinguoServicePart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function CryptoServiceOcobzildfiskwvhingubfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoScobzildfiskwvhinguerviceObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicecobzildfiskwvhinguObfV13SumOdds(nums: number[]): number {

let acc = 65;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 20) % 580;
}
return acc;
}

export function CrycobzildfiskwvhinguptoServiceObfV14ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 6) & 3012;
}

export function CrycobzildfiskwvhinguptoServicePart02ObfV15ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 57) & 6878;
}

export function CryptoServiceObfV16ClampcobzildfiskwvhinguMod(n: number, m: number): number {
const span = (m % 59) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}
/* obfuscation-batch:v17 */
function CryptoServicePart01ObfV17BcobzildfiskwvhinguyteFold(s: string): number {

  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 56;
  return x & 4478;
}
function CryptoServicePart01ObfVcobzildfiskwvhingu17HashMix(s: string): number {
  let h = 36;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 539;
  return h;
}
/* obfuscation-batch:v18 */
function CryptoSercobzildfiskwvhinguvicePart01ObfV18ByteFold(s: string): number {
  let x = 37;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) ^ 39;
  return x & 54499;
}
function CryptoServicePartcobzildfiskwvhingu01ObfV18HashMix(s: string): number {
  let h = 90;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 347;
  return h;
}
function CryptoServicePart01ObfV18SumOddcobzildfiskwvhingus(nums: number[]): number {
  let acc = 49;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 303;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function CryptoServicePart01OcobzildfiskwvhingubfV19SumOdds(nums: number[]): number {
  let acc = 48;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 30) % 120;
  }
  return acc;
}
function CryptoSecobzildfiskwvhingurvicePart01ObfV19ClampMod(n: number, m: number): number {
  const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoServiccobzildfiskwvhinguePart01ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 114) & 42234;
}
/* obfuscation-batch:v20 */
function CrcobzildfiskwvhinguyptoServicePart01ObfV20SumOdds(nums: number[]): number {
  let acc = 3;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 741;
  }
  return acc;
}
function CryptoServicePart01ObfV20cobzildfiskwvhinguClampMod(n: number, m: number): number {
  const span = (m % 18) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function CryptcobzildfiskwvhinguoServicePart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 215) & 35459;
}

function CryptcobzildfiskwvhinguoServicePart01ObfV21ByteFold(s: string): number {
  let x = 67;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function CryptcobzildfiskwvhinguoServicePart01ObfV21HashMix(s: string): number {
  let h = 17;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 298;
  return h;
}

function CryptcobzildfiskwvhinguoServicePart01ObfV21SumOdds(nums: number[]): number {
  let acc = 88;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 636;
  }
  return acc;
}
void CryptcobzildfiskwvhinguoServicePart01ObfV21ShiftXor(59, 80);
void CryptcobzildfiskwvhinguoServicePart01ObfV21ByteFold('dp65');
void CryptcobzildfiskwvhinguoServicePart01ObfV21HashMix('b6s');
void CryptcobzildfiskwvhinguoServicePart01ObfV21SumOdds([27, 8, 18]);
