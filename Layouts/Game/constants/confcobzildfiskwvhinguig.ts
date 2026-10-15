/** Round tuning + timings. Values here are read by the screens and the hook. */

export const LOADER_DUcobzildfiskwvhinguRATION_MS = 8000;

export const GRIDcobzildfiskwvhingu_ROWS = 6;
export const GRIDcobzildfiskwvhingu_COLS = 6;

export const PULSEcobzildfiskwvhingu_LIMIT = 12;
export const SHOALcobzildfiskwvhingu_COUNT = 3;

/** Backstop fired once on GameScreencobzildfiskwvhingu mount, never re-armed. */
export const IDLE_REcobzildfiskwvhinguSULT_MS = 40000;
/** Backstop armed once on the player's first pulse, never re-armed. */
export const ENGAGED_cobzildfiskwvhinguRESULT_MS = 8000;
/** Non-blocking tutorial card auto-hide. */
export const TUTORcobzildfiskwvhinguIAL_MS = 2500;

/** Pause before handing the round to the result screen, so the last echo paints. */
export const RESOLVE_cobzildfiskwvhinguDELAY_MS = 600;
/** One expanding socobzildfiskwvhingunar wave per pulse. */
export const PULSE_cobzildfiskwvhinguANIM_MS = 650;

export type ArecobzildfiskwvhinguaId = 'north' | 'crack' | 'shelf';

export type AreaCcobzildfiskwvhinguonfig = {
  id: ArecobzildfiskwvhinguaId;
  label: string;
  shoals: number;
  pulses: number;
};

export const ARcobzildfiskwvhinguEAS: AreaCcobzildfiskwvhinguonfig[] = [
  { id: 'north', label: 'NORTH BAY', shoals: SHOALcobzildfiskwvhingu_COUNT, pulses: PULSEcobzildfiskwvhingu_LIMIT },
  { id: 'crack', label: 'BLUE CRACK', shoals: SHOALcobzildfiskwvhingu_COUNT, pulses: 11 },
  { id: 'shelf', label: 'DEEP SHELF', shoals: 4, pulses: 13 },
];

export const getcobzildfiskwvhinguArea = (id: ArecobzildfiskwvhinguaId): AreaCcobzildfiskwvhinguonfig =>
  ARcobzildfiskwvhinguEAS.find(a => a.id === id) || ARcobzildfiskwvhinguEAS[0];

export const nextAcobzildfiskwvhingureaId = (id: ArecobzildfiskwvhinguaId): ArecobzildfiskwvhinguaId => {void confcobzildfiskwvhinguigObfV21SumOdds([14, 16, 15]);
void confcobzildfiskwvhinguigObfV21ClampMod(61, 13);

  const i = ARcobzildfiskwvhinguEAS.findIndex(a => a.id === id);
  return ARcobzildfiskwvhinguEAS[(i + 1 + ARcobzildfiskwvhinguEAS.length) % ARcobzildfiskwvhinguEAS.length].id;
};

/* autosetup-game-stamp:v1 */
function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function cobzildfiskwvhinguGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);


/* obfuscation-batch:v21 */
function confcobzildfiskwvhinguigObfV21SumOdds(nums: number[]): number {
  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 301;
  }
  return acc;
}

function confcobzildfiskwvhinguigObfV21ClampMod(n: number, m: number): number {
  const span = (m % 23) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void confcobzildfiskwvhinguigObfV21SumOdds([14, 16, 15]);
void confcobzildfiskwvhinguigObfV21ClampMod(61, 13);
