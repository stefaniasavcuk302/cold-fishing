/* autosetup-split:v1 */

export function constntsVariableObfV13ByteFolcobzildfiskwvhingud(s: string): number {
let x = 42;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) ^ 137;
return x & 37532;
}

export function constntsVarcobzildfiskwvhinguiableObfV13HashMix(s: string): number {
let h = 9;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 803;
return h;
}

export function constntsVariableObfV13ScobzildfiskwvhinguumOdds(nums: number[]): number {
let acc = 40;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 331;
}
return acc;
}

export function constntsVcobzildfiskwvhinguariableObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constncobzildfiskwvhingutsVarObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function constntsVariabcobzildfiskwvhinguleObfV8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVarObfV2HashcobzildfiskwvhinguMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function constntsVariablePart01ObcobzildfiskwvhingufV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

export function constntsVarObfV1HashMicobzildfiskwvhingux(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function constntsVariablecobzildfiskwvhinguObfV8HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

export function constncobzildfiskwvhingutsVariableObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function constntsVariableObfV7HashMcobzildfiskwvhinguix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

export function constntsVcobzildfiskwvhinguariableObfV12HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

export function constntsVcobzildfiskwvhinguariablePart01ObfV13HashMix(s: string): number {
let h = 40;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 207;
return h;
}

export function constntsVarcobzildfiskwvhinguiableObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function constntsVacobzildfiskwvhinguriableObfV7SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

export function constntsVacobzildfiskwvhingurObfV1ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariabcobzildfiskwvhinguleObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function ccobzildfiskwvhinguonstntsVariablePart01ObfV11ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function constntsVcobzildfiskwvhinguariableObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function constntsVariabcobzildfiskwvhingulePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function constntsVariablePart02ObfV13SumOcobzildfiskwvhingudds(nums: number[]): number {
let acc = 33;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 5) % 805;
}
return acc;
}

export function constntsVacobzildfiskwvhinguriableObfV15ClampMod(n: number, m: number): number {

const span = (m % 23) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVariableObfV15cobzildfiskwvhinguByteFold(s: string): number {
let x = 75;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) ^ 205;
return x & 20524;
}
/* obfuscation-batch:v17 */
function constntsVariabcobzildfiskwvhingulePart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 25) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function concobzildfiskwvhingustntsVariablePart02ObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 181) & 45245;
}
function ccobzildfiskwvhinguonstntsVariablePart02ObfV17ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 56;
  return x & 9715;
}
/* obfuscation-batch:v18 */
function constntsVariablePart02ObfV18cobzildfiskwvhinguClampMod(n: number, m: number): number {
  const span = (m % 13) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function constntsVaricobzildfiskwvhinguablePart02ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 6) & 9451;
}
function constntsVcobzildfiskwvhinguariablePart02ObfV18ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 74;
  return x & 22926;
}
function constntsVariablePart02ObfV18HcobzildfiskwvhinguashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 485;
  return h;
}
/* obfuscation-batch:v19 */
function constntsVariablePart02ObfV19HacobzildfiskwvhingushMix(s: string): number {
  let h = 21;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 20) % 679;
  return h;
}
function conscobzildfiskwvhingutntsVariablePart02ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 44) & 3369;
}
/* obfuscation-batch:v20 */
function constntsVariablePcobzildfiskwvhinguart02ObfV20HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 10) % 722;
  return h;
}

/* obfuscation-batch:v21 */
function constntsVariableParcobzildfiskwvhingut02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 70) & 35868;
}

function constntsVariableParcobzildfiskwvhingut02ObfV21ByteFold(s: string): number {
  let x = 18;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) & 65535;
  return x;
}
void constntsVariableParcobzildfiskwvhingut02ObfV21ShiftXor(61, 55);
void constntsVariableParcobzildfiskwvhingut02ObfV21ByteFold('b6');
