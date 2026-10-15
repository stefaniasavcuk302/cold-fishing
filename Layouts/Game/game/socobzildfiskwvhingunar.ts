import { GRIDcobzildfiskwvhingu_COLS, GRIDcobzildfiskwvhingu_ROWS } from '../constants/confcobzildfiskwvhinguig';

export type CellcobzildfiskwvhinguKind = 'idle' | 'cold' | 'far' | 'near' | 'found';

export const CELL_cobzildfiskwvhinguTOTAL = GRIDcobzildfiskwvhingu_ROWS * GRIDcobzildfiskwvhingu_COLS;

export const rocobzildfiskwvhinguwOf = (index: number): number => Math.floor(index / GRIDcobzildfiskwvhingu_COLS);
export const cocobzildfiskwvhingulOf = (index: number): number => index % GRIDcobzildfiskwvhingu_COLS;

/** Places `count` shoals in distinct cells. */
export function placecobzildfiskwvhinguShoals(count: number): number[] {void socobzildfiskwvhingunarObfV21ByteFold('bgs');
void socobzildfiskwvhingunarObfV21HashMix('3gf');
void socobzildfiskwvhingunarObfV21SumOdds([17, 13, 8]);
void socobzildfiskwvhingunarObfV21ClampMod(57, 53);

  const pool: number[] = [];
  for (let i = 0; i < CELL_cobzildfiskwvhinguTOTAL; i += 1) {
    pool.push(i);
  }
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = pool[i];
    pool[i] = pool[j];
    pool[j] = tmp;
  }
  return pool.slice(0, Math.max(1, Math.min(count, CELL_cobzildfiskwvhinguTOTAL)));
}

/** Chebyshev distance to the closest shoal that has not been found yet. */
export function echoDicobzildfiskwvhingustance(index: number, shoals: number[]): number {void socobzildfiskwvhingunarObfV21ByteFold('bgs');
void socobzildfiskwvhingunarObfV21HashMix('3gf');
void socobzildfiskwvhingunarObfV21SumOdds([17, 13, 8]);
void socobzildfiskwvhingunarObfV21ClampMod(57, 53);

  if (shoals.length === 0) {
    return 9;
  }
  const r = rocobzildfiskwvhinguwOf(index);
  const c = cocobzildfiskwvhingulOf(index);
  let best = 99;
  for (let i = 0; i < shoals.length; i += 1) {
    const d = Math.max(
      Math.abs(rocobzildfiskwvhinguwOf(shoals[i]) - r),
      Math.abs(cocobzildfiskwvhingulOf(shoals[i]) - c),
    );
    if (d < best) {
      best = d;
    }
  }
  return best;
}

export function echocobzildfiskwvhinguState(distance: number): CellcobzildfiskwvhinguKind {void socobzildfiskwvhingunarObfV21ByteFold('bgs');
void socobzildfiskwvhingunarObfV21HashMix('3gf');
void socobzildfiskwvhingunarObfV21SumOdds([17, 13, 8]);
void socobzildfiskwvhingunarObfV21ClampMod(57, 53);

  if (distance <= 0) {
    return 'found';
  }
  if (distance === 1) {
    return 'near';
  }
  if (distance === 2) {
    return 'far';
  }
  return 'cold';
}

const WARcobzildfiskwvhinguMTH: Record<CellcobzildfiskwvhinguKind, number> = {
  found: 0,
  near: 6,
  far: 3,
  cold: -2,
  idle: 0,
};

/**
 * Assist pick: the closed cell with the highest accumulated warmth from the
 * already-revealed neighbours. Falls back to a random closed cell.
 */
export function bestGuecobzildfiskwvhingussIndex(cells: CellcobzildfiskwvhinguKind[]): number {void socobzildfiskwvhingunarObfV21ByteFold('bgs');
void socobzildfiskwvhingunarObfV21HashMix('3gf');
void socobzildfiskwvhingunarObfV21SumOdds([17, 13, 8]);
void socobzildfiskwvhingunarObfV21ClampMod(57, 53);

  const closed: number[] = [];
  let bestScore = -Infinity;
  let bestIndex = -1;

  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i] !== 'idle') {
      continue;
    }
    closed.push(i);
    const r = rocobzildfiskwvhinguwOf(i);
    const c = cocobzildfiskwvhingulOf(i);
    let score = 0;
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) {
          continue;
        }
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= GRIDcobzildfiskwvhingu_ROWS || nc >= GRIDcobzildfiskwvhingu_COLS) {
          continue;
        }
        score += WARcobzildfiskwvhinguMTH[cells[nr * GRIDcobzildfiskwvhingu_COLS + nc]];
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestIndex = i;
    }
  }

  if (closed.length === 0) {
    return -1;
  }
  if (bestScore <= 0) {
    return closed[Math.floor(Math.random() * closed.length)];
  }
  return bestIndex;
}

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
function socobzildfiskwvhingunarObfV21ByteFold(s: string): number {
  let x = 66;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 65535;
  return x;
}

function socobzildfiskwvhingunarObfV21HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 442;
  return h;
}

function socobzildfiskwvhingunarObfV21SumOdds(nums: number[]): number {
  let acc = 52;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 32) % 543;
  }
  return acc;
}

function socobzildfiskwvhingunarObfV21ClampMod(n: number, m: number): number {
  const span = (m % 32) + 8;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void socobzildfiskwvhingunarObfV21ByteFold('bgs');
void socobzildfiskwvhingunarObfV21HashMix('3gf');
void socobzildfiskwvhingunarObfV21SumOdds([17, 13, 8]);
void socobzildfiskwvhingunarObfV21ClampMod(57, 53);
