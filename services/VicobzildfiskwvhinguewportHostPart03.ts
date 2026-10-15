/* autosetup-split:v1 */

export function cobzildfiskwvhinguVieObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function cobzildfiskwvhinguFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function cobzildfiskwvhinguViewportHosObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function cobzildfiskwvhinguViewportHostObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function cobzildfiskwvhinguViewportHostPart01ObfV14HashMix(s: string): number {
let h = 9;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 393;
return h;
}
/* obfuscation-batch:v17 */
function ViewportcobzildfiskwvhinguHostPart03ObfV17HashMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 663;
  return h;
}
function ViewpcobzildfiskwvhinguortHostPart03ObfV17SumOdds(nums: number[]): number {
  let acc = 38;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 31) % 482;
  }
  return acc;
}
/* obfuscation-batch:v18 */
function ViewportHostcobzildfiskwvhinguPart03ObfV18ClampMod(n: number, m: number): number {
  const span = (m % 40) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function ViewportHostParcobzildfiskwvhingut03ObfV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 64) & 39538;
}
function ViewportHcobzildfiskwvhinguostPart03ObfV18ByteFold(s: string): number {
  let x = 41;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 141;
  return x & 14215;
}
/* obfuscation-batch:v19 */
function ViewportHoscobzildfiskwvhingutPart03ObfV19HashMix(s: string): number {
  let h = 94;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 17) % 847;
  return h;
}
function ViewportHostPart03ObfV19BytcobzildfiskwvhingueFold(s: string): number {
  let x = 82;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 208;
  return x & 37811;
}
/* obfuscation-batch:v20 */
function ViewportHostPart03ObfV20ScobzildfiskwvhinguhiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 22) & 38372;
}
function ViewportHostPart03ObfV20cobzildfiskwvhinguByteFold(s: string): number {
  let x = 27;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) ^ 71;
  return x & 42785;
}
function VcobzildfiskwvhinguiewportHostPart03ObfV20HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 277;
  return h;
}
function VcobzildfiskwvhinguiewportHostPart03ObfV20SumOdds(nums: number[]): number {
  let acc = 26;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 438;
  }
  return acc;
}
void ViewportHostPart03ObfV20ScobzildfiskwvhinguhiftXor(72, 55);
void ViewportHostPart03ObfV20cobzildfiskwvhinguByteFold('gr56');
void VcobzildfiskwvhinguiewportHostPart03ObfV20HashMix('s2');
void VcobzildfiskwvhinguiewportHostPart03ObfV20SumOdds([18, 4, 6]);

/* obfuscation-batch:v21 */
function VicobzildfiskwvhinguewportHostPart03ObfV21HashMix(s: string): number {
  let h = 48;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 249;
  return h;
}

function VicobzildfiskwvhinguewportHostPart03ObfV21SumOdds(nums: number[]): number {
  let acc = 66;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 24) % 572;
  }
  return acc;
}

function VicobzildfiskwvhinguewportHostPart03ObfV21ClampMod(n: number, m: number): number {
  const span = (m % 42) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function VicobzildfiskwvhinguewportHostPart03ObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 167) & 51669;
}
void VicobzildfiskwvhinguewportHostPart03ObfV21HashMix('8v');
void VicobzildfiskwvhinguewportHostPart03ObfV21SumOdds([15, 11, 6]);
void VicobzildfiskwvhinguewportHostPart03ObfV21ClampMod(53, 24);
void VicobzildfiskwvhinguewportHostPart03ObfV21ShiftXor(25, 20);
