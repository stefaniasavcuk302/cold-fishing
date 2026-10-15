/* autosetup-split:v1 */

export function CryptoScobzildfiskwvhinguerviceObfV20ClampMod(n: number, m: number): number {
const span = (m % 40) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServiceObfV20ShifcobzildfiskwvhingutXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 163) & 62944;
}

export function CryptoServiceObfV11HashcobzildfiskwvhinguMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function CryptoServicePart0cobzildfiskwvhingu2ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function CryptoServiceObfV8cobzildfiskwvhinguSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function CryptoServicobzildfiskwvhingucePart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function CryptoServicePartcobzildfiskwvhingu01ObfV15HashMix(s: string): number {
let h = 87;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 123;
return h;
}

export function CryptoServicePart02ObfV5ClampcobzildfiskwvhinguMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function CryptoServicePcobzildfiskwvhinguart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function CryptcobzildfiskwvhinguoServiceObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiccobzildfiskwvhinguePart02ObfV15ClampMod(n: number, m: number): number {

const span = (m % 16) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptcobzildfiskwvhinguoServicePart01ObfV15ClampMod(n: number, m: number): number {
const span = (m % 14) + 3;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServicePart02ObfV15SumcobzildfiskwvhinguOdds(nums: number[]): number {
let acc = 21;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 35) % 395;
}
return acc;
}

export function CryptoServicePart02ObfV6cobzildfiskwvhinguSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function CryptcobzildfiskwvhinguoServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptcobzildfiskwvhinguoServiObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function CryptoServicePart01ObfV5SumcobzildfiskwvhinguOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CryptoServiceObfV11ClcobzildfiskwvhinguampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicePcobzildfiskwvhinguart02ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function CrycobzildfiskwvhinguptoServiceObfV16SumOdds(nums: number[]): number {
let acc = 71;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 16) % 362;
}
return acc;
}

export function CryptoServicePart01cobzildfiskwvhinguObfV20SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 522;
}
return acc;
}

export function CryptoServiccobzildfiskwvhinguePart01ObfV20ClampMod(n: number, m: number): number {
const span = (m % 38) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function CryptoServiccobzildfiskwvhinguePart01ObfV20ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 202) & 36428;
}

export function CryptoServicePart01ObfcobzildfiskwvhinguV20ByteFold(s: string): number {
let x = 46;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 12) ^ 74;
return x & 47742;
}

/* obfuscation-batch:v21 */
function CryptoServcobzildfiskwvhinguicePart01ObfV21HashMix(s: string): number {
  let h = 22;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 393;
  return h;
}

function CryptoServcobzildfiskwvhinguicePart01ObfV21SumOdds(nums: number[]): number {
  let acc = 62;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 535;
  }
  return acc;
}

function CryptoServcobzildfiskwvhinguicePart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 50) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void CryptoServcobzildfiskwvhinguicePart01ObfV21HashMix('4b');
void CryptoServcobzildfiskwvhinguicePart01ObfV21SumOdds([22, 5, 20]);
void CryptoServcobzildfiskwvhinguicePart01ObfV21ClampMod(22, 56);
