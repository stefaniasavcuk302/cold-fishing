/* autosetup-split:v1 */

export function cobzildfiskwvhinguPublicPingObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 215) & 24601;
}

export function cobzildfiskwvhinguPublicPingObfV14HashMix(s: string): number {
let h = 31;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 200;
return h;
}

export function cobzildfiskwvhinguPublicPingObfV14SumOdds(nums: number[]): number {
let acc = 26;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 42) % 388;
}
return acc;
}

export function cobzildfiskwvhinguPublicPingObfV15SumOdds(nums: number[]): number {
let acc = 73;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 25) % 612;
}
return acc;
}

export function cobzildfiskwvhinguPublicPingObfV15ClampMod(n: number, m: number): number {
const span = (m % 43) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguPublicPingObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 3;
return (x ^ 237) & 30457;
}

export function cobzildfiskwvhinguPublicPingObfV16ClampMod(n: number, m: number): number {
const span = (m % 60) + 1;
const x = n % span;
return x < 0 ? x + span : x;
}

export function cobzildfiskwvhinguPublicPingObfV16ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 6;
return (x ^ 188) & 11575;
}
/* obfuscation-batch:v17 */
function PublicPingPart01ObfV17ShiftXcobzildfiskwvhinguor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 8) & 22981;
}
function PublcobzildfiskwvhinguicPingPart01ObfV17ByteFold(s: string): number {
  let x = 79;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 34) ^ 156;
  return x & 16690;
}
function PublicPingPcobzildfiskwvhinguart01ObfV17HashMix(s: string): number {
  let h = 51;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 381;
  return h;
}
void PublicPingPart01ObfV17ShiftXcobzildfiskwvhinguor(69, 65);
void PublcobzildfiskwvhinguicPingPart01ObfV17ByteFold('rv');
void PublicPingPcobzildfiskwvhinguart01ObfV17HashMix('q4');
/* obfuscation-batch:v18 */
function PublicPingcobzildfiskwvhinguPart01ObfV18SumOdds(nums: number[]): number {
  let acc = 89;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 28) % 347;
  }
  return acc;
}
function PublicPingPart01ObfV18ClampMocobzildfiskwvhingud(n: number, m: number): number {
  const span = (m % 23) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingPcobzildfiskwvhinguart01ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 52) & 12748;
}
function PublicPingPcobzildfiskwvhinguart01ObfV18ByteFold(s: string): number {
  let x = 13;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 123;
  return x & 51643;
}
void PublicPingcobzildfiskwvhinguPart01ObfV18SumOdds([16, 19, 18]);
void PublicPingPart01ObfV18ClampMocobzildfiskwvhingud(39, 40);
void PublicPingPcobzildfiskwvhinguart01ObfV18ShiftXor(50, 51);
void PublicPingPcobzildfiskwvhinguart01ObfV18ByteFold('hw');
/* obfuscation-batch:v19 */
function PublicPingPart01ObfV19ScobzildfiskwvhinguumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 852;
  }
  return acc;
}
function PubcobzildfiskwvhingulicPingPart01ObfV19ClampMod(n: number, m: number): number {
  const span = (m % 28) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPingPart01cobzildfiskwvhinguObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 80) & 59817;
}
function PublicPingParcobzildfiskwvhingut01ObfV19ByteFold(s: string): number {
  let x = 47;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 90;
  return x & 59822;
}
/* obfuscation-batch:v20 */
function PcobzildfiskwvhinguublicPingPart01ObfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 134) & 55662;
}

/* obfuscation-batch:v21 */
function PublicPingParcobzildfiskwvhingut01ObfV21ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 65535;
  return x;
}

function PublicPingParcobzildfiskwvhingut01ObfV21HashMix(s: string): number {
  let h = 54;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 394;
  return h;
}

function PublicPingParcobzildfiskwvhingut01ObfV21SumOdds(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 181;
  }
  return acc;
}
void PublicPingParcobzildfiskwvhingut01ObfV21ByteFold('zr');
void PublicPingParcobzildfiskwvhingut01ObfV21HashMix('2zr3');
void PublicPingParcobzildfiskwvhingut01ObfV21SumOdds([20, 9, 16]);
