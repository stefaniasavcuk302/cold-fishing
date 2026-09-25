import { GRID_COLS, GRID_ROWS } from '../constants/config';

export type CellKind = 'idle' | 'cold' | 'far' | 'near' | 'found';

export const CELL_TOTAL = GRID_ROWS * GRID_COLS;

export const rowOf = (index: number): number => Math.floor(index / GRID_COLS);
export const colOf = (index: number): number => index % GRID_COLS;

/** Places `count` shoals in distinct cells. */
export function placeShoals(count: number): number[] {
  const pool: number[] = [];
  for (let i = 0; i < CELL_TOTAL; i += 1) {
    pool.push(i);
  }
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = pool[i];
    pool[i] = pool[j];
    pool[j] = tmp;
  }
  return pool.slice(0, Math.max(1, Math.min(count, CELL_TOTAL)));
}

/** Chebyshev distance to the closest shoal that has not been found yet. */
export function echoDistance(index: number, shoals: number[]): number {
  if (shoals.length === 0) {
    return 9;
  }
  const r = rowOf(index);
  const c = colOf(index);
  let best = 99;
  for (let i = 0; i < shoals.length; i += 1) {
    const d = Math.max(
      Math.abs(rowOf(shoals[i]) - r),
      Math.abs(colOf(shoals[i]) - c),
    );
    if (d < best) {
      best = d;
    }
  }
  return best;
}

export function echoState(distance: number): CellKind {
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

const WARMTH: Record<CellKind, number> = {
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
export function bestGuessIndex(cells: CellKind[]): number {
  const closed: number[] = [];
  let bestScore = -Infinity;
  let bestIndex = -1;

  for (let i = 0; i < cells.length; i += 1) {
    if (cells[i] !== 'idle') {
      continue;
    }
    closed.push(i);
    const r = rowOf(i);
    const c = colOf(i);
    let score = 0;
    for (let dr = -1; dr <= 1; dr += 1) {
      for (let dc = -1; dc <= 1; dc += 1) {
        if (dr === 0 && dc === 0) {
          continue;
        }
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= GRID_ROWS || nc >= GRID_COLS) {
          continue;
        }
        score += WARMTH[cells[nr * GRID_COLS + nc]];
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
