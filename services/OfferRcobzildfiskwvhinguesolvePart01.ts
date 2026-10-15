/* autosetup-split:v1 */

export function cobzildfiskwvhinguOfferResolveObfV15HashMix(s: string): number {
let h = 67;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 632;
return h;
}

export function cobzildfiskwvhinguOfferResolveObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguOfferResolvObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV9HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

export function cobzildfiskwvhinguOfferResolvObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function cobzildfiskwvhinguOfferResolvePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolvePart03ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV13HashMix(s: string): number {
let h = 88;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 539;
return h;
}

export function cobzildfiskwvhinguOfferResolveObfV14SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 36) % 335;
}
return acc;
}

export function cobzildfiskwvhinguOfferResolvePart01ObfV15ByteFold(s: string): number {
let x = 80;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) ^ 133;
return x & 13916;
}

export function cobzildfiskwvhinguOfferResolvePart01ObfV15SumOdds(nums: number[]): number {
let acc = 70;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 269;
}
return acc;
}

export function cobzildfiskwvhinguOffObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV7HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function cobzildfiskwvhinguOfferResolvePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function cobzildfiskwvhinguOfferResolvePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguOffObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV14ByteFold(s: string): number {
let x = 71;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) ^ 143;
return x & 39056;
}

export function cobzildfiskwvhinguOfferResolvePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 44) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguOfferResolveObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function cobzildfiskwvhinguOfferResolvePart01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function cobzildfiskwvhinguOfferResolvObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function cobzildfiskwvhinguOfferResolveObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function cobzildfiskwvhinguOfferResolvObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolvePart03ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguOfferResolveObfV13ClampMod(n: number, m: number): number {
const span = (m % 44) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguOfferResolvePart03ObfV15ClampMod(n: number, m: number): number {
const span = (m % 54) + 4;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguOfferResolveObfV16SumOdds(nums: number[]): number {
let acc = 90;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 34) % 294;
}
return acc;
}

export function cobzildfiskwvhinguOfferResolveObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 129) & 6985;
}
/* obfuscation-batch:v17 */
function OfferResolvePart01ObfV17ByteFoldcobzildfiskwvhingu(s: string): number {
  let x = 28;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 39) ^ 229;
  return x & 48430;
}
function OffercobzildfiskwvhinguResolvePart01ObfV17HashMix(s: string): number {
  let h = 75;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 43) % 419;
  return h;
}
function OfferResolvePart01ObfVcobzildfiskwvhingu17SumOdds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 237;
  }
  return acc;
}
function OffercobzildfiskwvhinguResolvePart01ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 21) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void OfferResolvePart01ObfV17ByteFoldcobzildfiskwvhingu('w7g');
void OffercobzildfiskwvhinguResolvePart01ObfV17HashMix('fzq3');
void OfferResolvePart01ObfVcobzildfiskwvhingu17SumOdds([16, 9, 18]);
void OffercobzildfiskwvhinguResolvePart01ObfV17ClampMod(76, 54);
/* obfuscation-batch:v18 */
function OffercobzildfiskwvhinguResolvePart01ObfV18SumOdds(nums: number[]): number {
  let acc = 58;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 29) % 171;
  }
  return acc;
}
function OfferResolvePart01ObfcobzildfiskwvhinguV18ClampMod(n: number, m: number): number {
  const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResolvePart01ObfV18cobzildfiskwvhinguShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 216) & 48530;
}
void OffercobzildfiskwvhinguResolvePart01ObfV18SumOdds([20, 25, 23]);
void OfferResolvePart01ObfcobzildfiskwvhinguV18ClampMod(10, 75);
void OfferResolvePart01ObfV18cobzildfiskwvhinguShiftXor(17, 43);
/* obfuscation-batch:v19 */
function OfferResolvePart01ObfV19HacobzildfiskwvhingushMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 782;
  return h;
}
function OfferResolvePart01ObfV1cobzildfiskwvhingu9SumOdds(nums: number[]): number {
  let acc = 84;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 801;
  }
  return acc;
}
function OfferResolvePart01ObfV19ByteFolcobzildfiskwvhingud(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 165;
  return x & 3000;
}
/* obfuscation-batch:v20 */
function OfferResolvePart01ObfV20ClcobzildfiskwvhinguampMod(n: number, m: number): number {
  const span = (m % 24) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OffcobzildfiskwvhinguerResolvePart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 138) & 63074;
}
function OfferResolvePart01OcobzildfiskwvhingubfV20ByteFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 20) ^ 230;
  return x & 20568;
}
function OfferResolvePartcobzildfiskwvhingu01ObfV20HashMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 26) % 484;
  return h;
}
void OfferResolvePart01ObfV20ClcobzildfiskwvhinguampMod(63, 40);
void OffcobzildfiskwvhinguerResolvePart01ObfV20ShiftXor(34, 42);
void OfferResolvePart01OcobzildfiskwvhingubfV20ByteFold('zfj8');
void OfferResolvePartcobzildfiskwvhingu01ObfV20HashMix('p4mm');

/* obfuscation-batch:v21 */
function OfferRcobzildfiskwvhinguesolvePart01ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 61) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function OfferRcobzildfiskwvhinguesolvePart01ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 88) & 9537;
}

function OfferRcobzildfiskwvhinguesolvePart01ObfV21ByteFold(s: string): number {
  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) & 65535;
  return x;
}

function OfferRcobzildfiskwvhinguesolvePart01ObfV21HashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 683;
  return h;
}
void OfferRcobzildfiskwvhinguesolvePart01ObfV21ClampMod(47, 74);
void OfferRcobzildfiskwvhinguesolvePart01ObfV21ShiftXor(77, 21);
void OfferRcobzildfiskwvhinguesolvePart01ObfV21ByteFold('wha');
void OfferRcobzildfiskwvhinguesolvePart01ObfV21HashMix('kha');
