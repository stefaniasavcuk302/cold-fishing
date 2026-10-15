/* autosetup-split:v1 */

export function cobzildfiskwvhinguMinValue(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function UtilcobzildfiskwvhinguServicePart02ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}
/* obfuscation-batch:v17 */
function UtilServicePart01ObfV17HcobzildfiskwvhinguashMix(s: string): number {

  let h = 57;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 445;
  return h;
}
function UtilServicePart0cobzildfiskwvhingu1ObfV17SumOdds(nums: number[]): number {
  let acc = 78;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 312;
  }
  return acc;
}
function UtilServicePart0cobzildfiskwvhingu1ObfV17ClampMod(n: number, m: number): number {
  const span = (m % 63) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v18 */
function UtilServicePcobzildfiskwvhinguart01ObfV18HashMix(s: string): number {
  let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 266;
  return h;
}
function UtilServicePart01ObfV18SumOcobzildfiskwvhingudds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 119;
  }
  return acc;
}
function UtilServicePart01ObfcobzildfiskwvhinguV18ClampMod(n: number, m: number): number {
  const span = (m % 62) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicobzildfiskwvhingucePart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 156) & 3091;
}
/* obfuscation-batch:v19 */
function UtilScobzildfiskwvhinguervicePart01ObfV19SumOdds(nums: number[]): number {
  let acc = 29;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 356;
  }
  return acc;
}
function UtilSecobzildfiskwvhingurvicePart01ObfV19ClampMod(n: number, m: number): number {
  const span = (m % 7) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function UtilServicePart0cobzildfiskwvhingu1ObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 92) & 17893;
}
/* obfuscation-batch:v20 */
function UtilServicePart01ObfV20ShifcobzildfiskwvhingutXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 166) & 18404;
}
function UtilServicePart01ObfcobzildfiskwvhinguV20ByteFold(s: string): number {
  let x = 72;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 217;
  return x & 19594;
}
function UtilServiceParcobzildfiskwvhingut01ObfV20HashMix(s: string): number {
  let h = 44;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 684;
  return h;
}


/* restored-exports */
export function cobzildfiskwvhinguMaxValue(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguRangeValue(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServiceObfV5HcobzildfiskwvhinguashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiccobzildfiskwvhingueObfV5SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServiceObfV5ClamcobzildfiskwvhingupMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicobzildfiskwvhinguceObfV6HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServcobzildfiskwvhinguiceObfV6SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServiceObfV6ClampMocobzildfiskwvhingud(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicePart01ObcobzildfiskwvhingufV7HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServicePart01ObfV7SumOddcobzildfiskwvhingus(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicePart0cobzildfiskwvhingu1ObfV7ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiccobzildfiskwvhingueObfV8HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiceObfV8cobzildfiskwvhinguSumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServcobzildfiskwvhinguiceObfV8ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilSercobzildfiskwvhinguviceObfV9HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiccobzildfiskwvhingueObfV9SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServicecobzildfiskwvhinguObfV9ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV10HashcobzildfiskwvhinguMix(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UticobzildfiskwvhingulServiceObfV10SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilScobzildfiskwvhinguerviceObfV10ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicePart01ObcobzildfiskwvhingufV11HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServicePart01ObfcobzildfiskwvhinguV11SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServicePart01ObfV11cobzildfiskwvhinguClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicobzildfiskwvhinguceObfV12HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilScobzildfiskwvhinguerviceObfV12SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilScobzildfiskwvhinguerviceObfV12ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicePart01ObfV13SumOdcobzildfiskwvhinguds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicecobzildfiskwvhinguPart01ObfV13ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServicePart01ObcobzildfiskwvhingufV13ShiftXor(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilSecobzildfiskwvhingurvicePart01ObfV14ByteFold(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilSercobzildfiskwvhinguvicePart01ObfV14HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiceObfV15HashMcobzildfiskwvhinguix(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV16ByteFolcobzildfiskwvhingud(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilServiceObfV16HashMixcobzildfiskwvhingu(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function cobzildfiskwvhinguBitMix(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguBoolAnd(a: boolean, b: boolean): boolean {
  return a && b;
}

export function cobzildfiskwvhinguBoolXor(a: boolean, b: boolean): boolean {
  return a !== b;
}

export function cobzildfiskwvhinguMeanVal(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguRotSum(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function cobzildfiskwvhinguProductFold(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UtilServiceObfcobzildfiskwvhinguV11HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiceObfV7SumOcobzildfiskwvhingudds(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtiObfVcobzildfiskwvhingu4HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServiceObfV1ScobzildfiskwvhinguumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

export function UcobzildfiskwvhingutilServiceObfV1HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtilServicePart02ObfV6ClampcobzildfiskwvhinguMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UticobzildfiskwvhingulServiceObfV7HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h + s.charCodeAt(i) * 13) & 65535;
  return h;
}

export function UtiObfV3HashcobzildfiskwvhinguMix(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtilSecobzildfiskwvhingurviceObfV1ClampMod(n: number, m: number): number {
  const span = (m % 17) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

export function UtiObcobzildfiskwvhingufV4SumOdds(nums: number[]): number {
  let acc = 0;
  for (let i = 0; i < nums.length; i++) acc = (acc + nums[i]) & 65535;
  return acc;
}

/* obfuscation-batch:v21 */
function UtilSecobzildfiskwvhingurvicePart01ObfV21ByteFold(s: string): number {
  let x = 40;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}

function UtilSecobzildfiskwvhingurvicePart01ObfV21HashMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 40) % 271;
  return h;
}
void UtilSecobzildfiskwvhingurvicePart01ObfV21ByteFold('s87n');
void UtilSecobzildfiskwvhingurvicePart01ObfV21HashMix('kv');
