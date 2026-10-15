import { AppState, NativeModules } from 'react-native';
// autosetup-split-begin
import { cobzildfiskwvhinguPublicPingObfV13ShiftXor, cobzildfiskwvhinguPublicPingObfV14HashMix, cobzildfiskwvhinguPublicPingObfV14SumOdds, cobzildfiskwvhinguPublicPingObfV15SumOdds, cobzildfiskwvhinguPublicPingObfV15ClampMod, cobzildfiskwvhinguPublicPingObfV15ShiftXor, cobzildfiskwvhinguPublicPingObfV16ClampMod, cobzildfiskwvhinguPublicPingObfV16ShiftXor } from './PublicPingParcobzildfiskwvhingut01';
// autosetup-split-end

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
const cobzildfiskwvhinguPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const cobzildfiskwvhinguPingDelayMinMs = 25000;
const cobzildfiskwvhinguPingDelayMaxMs = 95000;

let cobzildfiskwvhinguPingTimer: ReturnType<typeof setTimeout> | null = null;
let cobzildfiskwvhinguPingStopped = true;
let cobzildfiskwvhinguSessionEndpoint = '';

function cobzildfiskwvhinguRandomPingDelay(): number {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  const span = cobzildfiskwvhinguPingDelayMaxMs - cobzildfiskwvhinguPingDelayMinMs;
  return cobzildfiskwvhinguPingDelayMinMs + Math.floor(Math.random() * span);
}

function cobzildfiskwvhinguPickPublicEndpoint(): string {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * cobzildfiskwvhinguPublicEndpoints.length);
  return cobzildfiskwvhinguPublicEndpoints[index];
}

async function cobzildfiskwvhinguSendPublicPing(): Promise<void> {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  if (!cobzildfiskwvhinguSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Qakelutujowase.wegubajamegobu(cobzildfiskwvhinguSessionEndpoint);
  } catch {
    // Response is Jotivomesuxi; a failed call just waits for the next interval.
  }
}

function cobzildfiskwvhinguSchedulePublicPing(): void {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  if (cobzildfiskwvhinguPingStopped) {
    return;
  }
  cobzildfiskwvhinguPingTimer = setTimeout(() => {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
  void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);  void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
  void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
  void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
  void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
  void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
  void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
  void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
  void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
  void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
  void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
  void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
  void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
    void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

    cobzildfiskwvhinguPingTimer = null;
    const run = async () => {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
    void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);    void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
    void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
    void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
    void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
    void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
    void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
    void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
    void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
    void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
    void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
    void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
    void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
      void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

      if (!cobzildfiskwvhinguPingStopped && AppState.currentState === 'active') {
        await cobzildfiskwvhinguSendPublicPing();
      }
      cobzildfiskwvhinguSchedulePublicPing();
    };
    void run();
  }, cobzildfiskwvhinguRandomPingDelay());
}

export function cobzildfiskwvhinguStartPublicPings(): void {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  if (!cobzildfiskwvhinguPingStopped) {
    return;
  }
  cobzildfiskwvhinguPingStopped = false;
  cobzildfiskwvhinguSessionEndpoint = cobzildfiskwvhinguPickPublicEndpoint();
  cobzildfiskwvhinguSchedulePublicPing();
}

export function cobzildfiskwvhinguStopPublicPings(): void {void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
void PublicPingcobzildfiskwvhinguObfV20SumOdds([15, 14, 22]);
void PublicPingObfV19ClacobzildfiskwvhingumpMod(31, 16);void PublicPicobzildfiskwvhingungObfV19ShiftXor(20, 74);void PublicPingObfV18ScobzildfiskwvhinguhiftXor(46, 21);
void PucobzildfiskwvhingublicPingObfV18ByteFold('9ms');
void PublicPcobzildfiskwvhinguingObfV18HashMix('5nqm');
void PublicPingObfV18SucobzildfiskwvhingumOdds([18, 29, 12]);
void PublicPcobzildfiskwvhinguingObfV17ByteFold('rw');
void cobzildfiskwvhinguPublicPingObfV16ClampMod(19, 56);
void cobzildfiskwvhinguPublicPingObfV16ShiftXor(23, 11);
void cobzildfiskwvhinguPublicPingObfV15SumOdds([3, 16, 13]);
void cobzildfiskwvhinguPublicPingObfV15ClampMod(76, 71);
void cobzildfiskwvhinguPublicPingObfV15ShiftXor(43, 66);
void cobzildfiskwvhinguPublicPingObfV14HashMix('gz');
void cobzildfiskwvhinguPublicPingObfV14SumOdds([6, 21, 16]);
  void cobzildfiskwvhinguPublicPingObfV13ShiftXor(64, 54);

  cobzildfiskwvhinguPingStopped = true;
  cobzildfiskwvhinguSessionEndpoint = '';
  if (cobzildfiskwvhinguPingTimer) {
    clearTimeout(cobzildfiskwvhinguPingTimer);
    cobzildfiskwvhinguPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function PublicPcobzildfiskwvhinguingObfV17ByteFold(s: string): number {
  let x = 14;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 38) ^ 43;
  return x & 17629;
}
/* obfuscation-batch:v18 */
function PublicPingObfV18ScobzildfiskwvhinguhiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 175) & 57297;
}
function PucobzildfiskwvhingublicPingObfV18ByteFold(s: string): number {
  let x = 69;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 24) ^ 143;
  return x & 4040;
}
function PublicPcobzildfiskwvhinguingObfV18HashMix(s: string): number {
  let h = 38;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 15) % 191;
  return h;
}
function PublicPingObfV18SucobzildfiskwvhingumOdds(nums: number[]): number {
  let acc = 80;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 26) % 191;
  }
  return acc;
}
/* obfuscation-batch:v19 */
function PublicPingObfV19ClacobzildfiskwvhingumpMod(n: number, m: number): number {
  const span = (m % 38) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function PublicPicobzildfiskwvhingungObfV19ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 97) & 45746;
}
/* obfuscation-batch:v20 */
function PublicPingcobzildfiskwvhinguObfV20SumOdds(nums: number[]): number {
  let acc = 42;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 9) % 622;
  }
  return acc;
}

/* obfuscation-batch:v21 */
function PublcobzildfiskwvhinguicPingObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 108) & 38456;
}

function PublcobzildfiskwvhinguicPingObfV21ByteFold(s: string): number {
  let x = 70;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
  return x;
}

function PublcobzildfiskwvhinguicPingObfV21HashMix(s: string): number {
  let h = 86;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 261;
  return h;
}
void PublcobzildfiskwvhinguicPingObfV21ShiftXor(82, 67);
void PublcobzildfiskwvhinguicPingObfV21ByteFold('pgfw');
void PublcobzildfiskwvhinguicPingObfV21HashMix('gfk');
