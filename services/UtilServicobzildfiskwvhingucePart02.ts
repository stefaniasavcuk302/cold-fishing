/* autosetup-split:v1 */

export function UtilServiceObfVcobzildfiskwvhingu14SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function UtilcobzildfiskwvhinguServicePart02ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function UtilServcobzildfiskwvhinguiceObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

export function UtilServiceObfV7ClampMocobzildfiskwvhingud(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtcobzildfiskwvhinguiObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UticobzildfiskwvhingulServiceObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function UtilServiceObfV2SumOcobzildfiskwvhingudds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function UtilServicePart02ObcobzildfiskwvhingufV14HashMix(s: string): number {

let h = 48;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 435;
return h;
}
/* obfuscation-batch:v17 */
function UtilServicePart02ObfV17SumOcobzildfiskwvhingudds(nums: number[]): number {
  let acc = 82;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 373;
  }
  return acc;
}
function UtilSecobzildfiskwvhingurvicePart02ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 56) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UticobzildfiskwvhingulServicePart02ObfV18ClampMod(n: number, m: number): number {
  const span = (m % 30) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilcobzildfiskwvhinguServicePart02ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 19) & 3217;
}
function UtilServicePart02ObcobzildfiskwvhingufV18ByteFold(s: string): number {
  let x = 36;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 30) ^ 226;
  return x & 3109;
}
/* obfuscation-batch:v19 */
function UcobzildfiskwvhingutilServicePart02ObfV19ByteFold(s: string): number {
  let x = 34;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 217;
  return x & 18676;
}
/* obfuscation-batch:v20 */
function UtilServicePart02ObfV20ShifcobzildfiskwvhingutXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 189) & 47763;
}
function UtilServicobzildfiskwvhingucePart02ObfV20ByteFold(s: string): number {
  let x = 87;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 13) ^ 174;
  return x & 49929;
}
function UtilServicePart02ObfV20HacobzildfiskwvhingushMix(s: string): number {
  let h = 47;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 35) % 653;
  return h;
}
function UtilcobzildfiskwvhinguServicePart02ObfV20SumOdds(nums: number[]): number {
  let acc = 20;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 38) % 655;
  }
  return acc;
}


/* restored-exports */
export function UtilSecobzildfiskwvhingurviceObfV14ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV14ShicobzildfiskwvhinguftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV14BytcobzildfiskwvhingueFold(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguNormMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguSignVal(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguGcdPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguBoolOr(a: boolean, b: boolean): boolean {
  return a || b;
}

export function cobzildfiskwvhinguPrefixLen(s: string, n: number): number {
  return Math.min(s.length, n);
}

export function cobzildfiskwvhinguEvenCount(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguRevStr(s: string): string {
  return s.split('').reverse().join('');
}

export function cobzildfiskwvhinguModSpan(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguCountTruthy(flags: boolean[]): number {
  let n = 0;
  for (let i = 0; i < flags.length; i++) if (flags[i]) n++;
  return n;
}

export function cobzildfiskwvhinguRangeSpan(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguConcatLen(parts: string[]): number {
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function cobzildfiskwvhinguAbsDiff(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguStrLenSum(parts: string[]): number {
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function cobzildfiskwvhinguDigitSum(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguPowSum(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguCharCodeSum(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function cobzildfiskwvhinguSumDiff(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguXorFold(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguWrapIndex(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguIsEven(n: number): boolean {
  return (n & 1) === 0;
}

export function cobzildfiskwvhinguLcmPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguMidAvg(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguAverageAbsoluteDeviation(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguHalfSum(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguFloorDiv(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguPairAvg(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguMaxPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguDotFold(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguLerpVal(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function cobzildfiskwvhinguJoinLen(parts: string[]): number {
  let n = 0;
  for (let i = 0; i < parts.length; i++) n += parts[i].length;
  return n;
}

export function cobzildfiskwvhinguOddCount(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguSumSquares(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguStrHash(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function cobzildfiskwvhinguMinPair(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguSqDiff(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguTrimLen(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiceOcobzildfiskwvhingubfV13ShiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicobzildfiskwvhinguceObfV11ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV2cobzildfiskwvhinguHashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtiObfV4ClampMcobzildfiskwvhinguod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtiObfV3SumcobzildfiskwvhinguOdds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function UtilServicobzildfiskwvhingucePart02ObfV21SumOdds(nums: number[]): number {
  let acc = 79;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 637;
  }
  return acc;
}

function UtilServicobzildfiskwvhingucePart02ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function UtilServicobzildfiskwvhingucePart02ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 96) & 11498;
}

function UtilServicobzildfiskwvhingucePart02ObfV21ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) & 65535;
  return x;
}
void UtilServicobzildfiskwvhingucePart02ObfV21SumOdds([7, 5, 13]);
void UtilServicobzildfiskwvhingucePart02ObfV21ClampMod(77, 8);
void UtilServicobzildfiskwvhingucePart02ObfV21ShiftXor(37, 37);
void UtilServicobzildfiskwvhingucePart02ObfV21ByteFold('43ts');
