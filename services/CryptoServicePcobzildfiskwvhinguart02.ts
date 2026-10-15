/* autosetup-split:v1 */

export function CryptoServiceObfV17ShiftXocobzildfiskwvhingur(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 234) & 4273;
}

export function CryptoServiceObfV17BytecobzildfiskwvhinguFold(s: string): number {

let x = 56;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 54;
return x & 45467;
}

export function CryptoServicobzildfiskwvhinguceObfV17HashMix(s: string): number {
let h = 83;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 282;
return h;
}

export function CryptoScobzildfiskwvhinguerviceObfV17SumOdds(nums: number[]): number {
let acc = 82;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 323;
}
return acc;
}

export function CryptoServiceObfV10HashMixcobzildfiskwvhingu(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

export function CryptoServiceObfVcobzildfiskwvhingu5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptoServicobzildfiskwvhingucePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function CryptcobzildfiskwvhinguoServiceObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function CrcobzildfiskwvhinguyptoServicePart02ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function cobzildfiskwvhinguCrypbchlipsoqiyrodObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServicePart01cobzildfiskwvhinguObfV15ByteFold(s: string): number {

let x = 14;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 10;
return x & 28574;
}

export function CryptoSercobzildfiskwvhinguviObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function CryptoSercobzildfiskwvhinguviceObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function CrcobzildfiskwvhinguyptoServiObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function CryptoServiOcobzildfiskwvhingubfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function CryptoServiceObfVcobzildfiskwvhingu16HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 525;
return h;
}
/* obfuscation-batch:v18 */
function CryptoServicePart02ObfV18ClacobzildfiskwvhingumpMod(n: number, m: number): number {
  const span = (m % 8) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function CryptoSecobzildfiskwvhingurvicePart02ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 19) & 9695;
}
function CryptoServicePart02OcobzildfiskwvhingubfV18ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 207;
  return x & 59506;
}
function CryptoServicePart02ObfVcobzildfiskwvhingu18HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 242;
  return h;
}
/* obfuscation-batch:v19 */
function CryptoServicePart02ObfV19HashMicobzildfiskwvhingux(s: string): number {
  let h = 96;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 597;
  return h;
}
function CryptoScobzildfiskwvhinguervicePart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 103) & 47549;
}
/* obfuscation-batch:v20 */
function CryptoSercobzildfiskwvhinguvicePart02ObfV20SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 757;
  }
  return acc;
}

/* obfuscation-batch:v21 */
function CryptoServicePcobzildfiskwvhinguart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 54) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function CryptoServicePcobzildfiskwvhinguart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 144) & 51769;
}

function CryptoServicePcobzildfiskwvhinguart02ObfV21ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
  return x;
}
void CryptoServicePcobzildfiskwvhinguart02ObfV21ClampMod(20, 67);
void CryptoServicePcobzildfiskwvhinguart02ObfV21ShiftXor(22, 39);
void CryptoServicePcobzildfiskwvhinguart02ObfV21ByteFold('t5k');
