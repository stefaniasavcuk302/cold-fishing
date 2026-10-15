/* autosetup-split:v1 */

export function cobzildfiskwvhinguClampSpan(n: number, lo: number, hi: number): number {

return n < lo ? lo : n > hi ? hi : n;
}

export function cobzildfiskwvhinguMixSeed(a: number, b: number): number {

return ((a % (b || 1)) + b) % (b || 1);
}

export function constntsVcobzildfiskwvhinguariableObfV16ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 149) & 21603;
}

export function constntsVarObfcobzildfiskwvhinguV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function constntsVariablecobzildfiskwvhinguObfV7ClampMod(n: number, m: number): number {

const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cocobzildfiskwvhingunstntsVariableObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function constntsVacobzildfiskwvhinguriableObfV9SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

export function constntsVariablcobzildfiskwvhingueObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function constntsVariablcobzildfiskwvhingueObfV15ShiftXor(n: number, k: number): number {

const x = (n ^ k) << 1;
return (x ^ 210) & 65091;
}

export function constntsVariablePart01ObfV17ShifcobzildfiskwvhingutXor(n: number, k: number): number {

const x = (n ^ k) << 3;
return (x ^ 19) & 40331;
}

export function constntsVarcobzildfiskwvhinguiablePart01ObfV17ByteFold(s: string): number {
let x = 44;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 6) ^ 203;
return x & 23256;
}

export function constntsVariablePart01ObfV17HascobzildfiskwvhinguhMix(s: string): number {

let h = 19;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 38) % 546;
return h;
}

export function cocobzildfiskwvhingunstntsVariablePart01ObfV17SumOdds(nums: number[]): number {
let acc = 76;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 8) % 537;
}
return acc;
}

export function constntsVariablePart0cobzildfiskwvhingu1ObfV18ByteFold(s: string): number {
let x = 61;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) ^ 79;
return x & 24826;
}

export function constntsVariablePart01ObcobzildfiskwvhingufV18HashMix(s: string): number {

let h = 3;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 18) % 184;
return h;
}

export function constntsVariablePart01ObfV18ScobzildfiskwvhinguumOdds(nums: number[]): number {

let acc = 28;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 21) % 295;
}
return acc;
}

export function constntsVariablePart01cobzildfiskwvhinguObfV19ClampMod(n: number, m: number): number {
const span = (m % 47) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

export function constntsVacobzildfiskwvhinguriablePart01ObfV19ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 69) & 47982;
}

export function cocobzildfiskwvhingunstntsVariablePart01ObfV19ByteFold(s: string): number {
let x = 50;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) ^ 79;
return x & 47987;
}

export function constntsVariablePart01ObfV19HcobzildfiskwvhinguashMix(s: string): number {
let h = 39;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 789;
return h;
}
/* obfuscation-batch:v20 */
function constntsVariablePart01ObfcobzildfiskwvhinguV20SumOdds(nums: number[]): number {
  let acc = 61;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 35) % 321;
  }
  return acc;
}
function constntsVariablePart01OcobzildfiskwvhingubfV20ClampMod(n: number, m: number): number {
  const span = (m % 8) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function constntsVacobzildfiskwvhinguriablePart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 213) & 49410;
}
function constntsVariablePcobzildfiskwvhinguart01ObfV20ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 228;
  return x & 11236;
}


/* restored-exports */
export function constntsVacobzildfiskwvhinguriablePart01ObfV13ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function constcobzildfiskwvhinguntsVariableObfV10HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function cobzildfiskwvhinguFoldRange(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function constntsVariableOcobzildfiskwvhingubfV9HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function cocobzildfiskwvhingunstntsVariableObfV5SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

/* obfuscation-batch:v21 */
function constntsVariablePart01cobzildfiskwvhinguObfV21SumOdds(nums: number[]): number {
  let acc = 69;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 445;
  }
  return acc;
}

function constntsVariablePart01cobzildfiskwvhinguObfV21ClampMod(n: number, m: number): number {
  const span = (m % 49) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function constntsVariablePart01cobzildfiskwvhinguObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 109) & 21517;
}

function constntsVariablePart01cobzildfiskwvhinguObfV21ByteFold(s: string): number {
  let x = 16;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}
void constntsVariablePart01cobzildfiskwvhinguObfV21SumOdds([12, 18, 13]);
void constntsVariablePart01cobzildfiskwvhinguObfV21ClampMod(81, 65);
void constntsVariablePart01cobzildfiskwvhinguObfV21ShiftXor(18, 38);
void constntsVariablePart01cobzildfiskwvhinguObfV21ByteFold('m4');
