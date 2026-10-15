/* autosetup-split:v1 */

export function constntsVariableOcobzildfiskwvhingubfV17SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 11) % 330;
}
return acc;
}

export function constntsVariableObfV17cobzildfiskwvhinguShiftXor(n: number, k: number): number {
const x = (n ^ k) << 4;
return (x ^ 237) & 4934;
}

export function constntsVariableObfV1cobzildfiskwvhingu8HashMix(s: string): number {
let h = 79;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 492;
return h;
}

export function constntsVariableObfV19ByteFolcobzildfiskwvhingud(s: string): number {
let x = 49;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 16;
return x & 36465;
}

export function constntsVarcobzildfiskwvhinguiableObfV19HashMix(s: string): number {
let h = 77;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 303;
return h;
}

export function constntscobzildfiskwvhinguVariableObfV19SumOdds(nums: number[]): number {
let acc = 56;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 13) % 323;
}
return acc;
}

export function concobzildfiskwvhingustntsVariableObfV17ClampMod(n: number, m: number): number {
const span = (m % 59) + 7;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVariableObfV17BcobzildfiskwvhinguyteFold(s: string): number {
let x = 32;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 170;
return x & 32210;
}

export function constntsVariableObcobzildfiskwvhingufV13ClampMod(n: number, m: number): number {
const span = (m % 55) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVarObfV2ClampMcobzildfiskwvhinguod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV10ClcobzildfiskwvhinguampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVacobzildfiskwvhinguriableObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV6SumOdcobzildfiskwvhinguds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function constntsVaricobzildfiskwvhinguableObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObcobzildfiskwvhingufV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function constntsVariabcobzildfiskwvhinguleObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function cobzildfiskwvhinguconstbchlipsoqiyroObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariableObfV8ScobzildfiskwvhinguumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

export function constntscobzildfiskwvhinguVariableObfV14SumOdds(nums: number[]): number {
let acc = 81;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 8) % 357;
}
return acc;
}

export function constntsVariableOcobzildfiskwvhingubfV15HashMix(s: string): number {


let h = 13;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 552;
return h;
}
/* obfuscation-batch:v20 */
function constntscobzildfiskwvhinguVariablePart02ObfV20ClampMod(n: number, m: number): number {
  const span = (m % 32) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function conscobzildfiskwvhingutntsVariablePart02ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 35) & 31815;
}
function constntsVariablePart02OcobzildfiskwvhingubfV20ByteFold(s: string): number {
  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 37) ^ 10;
  return x & 58499;
}

/* obfuscation-batch:v21 */
function conscobzildfiskwvhingutntsVariablePart02ObfV21SumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 605;
  }
  return acc;
}

function conscobzildfiskwvhingutntsVariablePart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 24) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function conscobzildfiskwvhingutntsVariablePart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 191) & 33345;
}
void conscobzildfiskwvhingutntsVariablePart02ObfV21SumOdds([3, 28, 12]);
void conscobzildfiskwvhingutntsVariablePart02ObfV21ClampMod(79, 15);
void conscobzildfiskwvhingutntsVariablePart02ObfV21ShiftXor(62, 54);
