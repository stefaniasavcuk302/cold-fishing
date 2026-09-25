/** Round tuning + timings. Values here are read by the screens and the hook. */

export const LOADER_DURATION_MS = 8000;

export const GRID_ROWS = 6;
export const GRID_COLS = 6;

export const PULSE_LIMIT = 12;
export const SHOAL_COUNT = 3;

/** Backstop fired once on GameScreen mount, never re-armed. */
export const IDLE_RESULT_MS = 40000;
/** Backstop armed once on the player's first pulse, never re-armed. */
export const ENGAGED_RESULT_MS = 8000;
/** Non-blocking tutorial card auto-hide. */
export const TUTORIAL_MS = 2500;

/** Pause before handing the round to the result screen, so the last echo paints. */
export const RESOLVE_DELAY_MS = 600;
/** One expanding sonar wave per pulse. */
export const PULSE_ANIM_MS = 650;

export type AreaId = 'north' | 'crack' | 'shelf';

export type AreaConfig = {
  id: AreaId;
  label: string;
  shoals: number;
  pulses: number;
};

export const AREAS: AreaConfig[] = [
  { id: 'north', label: 'NORTH BAY', shoals: SHOAL_COUNT, pulses: PULSE_LIMIT },
  { id: 'crack', label: 'BLUE CRACK', shoals: SHOAL_COUNT, pulses: 11 },
  { id: 'shelf', label: 'DEEP SHELF', shoals: 4, pulses: 13 },
];

export const getArea = (id: AreaId): AreaConfig =>
  AREAS.find(a => a.id === id) || AREAS[0];

export const nextAreaId = (id: AreaId): AreaId => {
  const i = AREAS.findIndex(a => a.id === id);
  return AREAS[(i + 1 + AREAS.length) % AREAS.length].id;
};
