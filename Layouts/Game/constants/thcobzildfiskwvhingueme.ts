/**
 * OCEAN_FRESH preset, accents retuned for the frozen-lake brief.
 * The `name` field stays exactly as the shipped preset defines it.
 */
export const THcobzildfiskwvhinguEME = {
  name: 'ocean-fresh',

  colors: {
    bg: {
      base: '#EAF8FF',
      pale: '#D6E9F2',
      mid: '#9AD7F2',
      deep: '#24415A',
      deepest: '#0E2338',
    },
    surface: {
      card: 'rgba(255,255,255,0.86)',
      subtle: 'rgba(255,255,255,0.60)',
      faint: 'rgba(255,255,255,0.28)',
      line: 'rgba(255,255,255,0.85)',
    },
    accent: {
      primary: '#3F8EB8',
      secondary: '#6DC7C0',
      highlight: '#F2C45C',
    },
    text: {
      primary: '#24415A',
      secondary: '#3F8EB8',
      tertiary: 'rgba(36,65,90,0.55)',
      onAccent: '#FFFFFF',
      onDark: '#EAF8FF',
    },
    ui: {
      border: 'rgba(63,142,184,0.22)',
      borderStrong: 'rgba(63,142,184,0.30)',
    },
  },

  gradients: {
    button: ['#6DC7C0', '#3F8EB8'],
    loader: ['#0E2338', '#1A3450', '#24415A'],
    result: ['#EAF8FF', '#9AD7F2'],
    menuFade: ['rgba(234,248,255,0)', 'rgba(234,248,255,0.35)', '#EAF8FF'],
    gameVeil: ['rgba(234,248,255,0.55)', 'rgba(154,215,242,0.40)'],
  },

  radius: { sm: 10, md: 14, lg: 18, xl: 22, xxl: 28, pill: 999 },

  spacing: { xs: 4, sm: 8, md: 12, lg: 18, xl: 24, xxl: 32 },

  shadow: {
    card: {
      shadowColor: '#3F8EB8',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.14,
      shadowRadius: 16,
      elevation: 6,
    },
    button: {
      shadowColor: '#3F8EB8',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 14,
      elevation: 6,
    },
    sheet: {
      shadowColor: '#3F8EB8',
      shadowOffset: { width: 0, height: -6 },
      shadowOpacity: 0.12,
      shadowRadius: 18,
      elevation: 8,
    },
  },

  type: {
    hero: { fontSize: 40, fontWeight: '800' as const, letterSpacing: 5 },
    title: { fontSize: 30, fontWeight: '800' as const, letterSpacing: 2 },
    headline: { fontSize: 34, fontWeight: '800' as const, letterSpacing: 2 },
    section: { fontSize: 16, fontWeight: '800' as const, letterSpacing: 1.4 },
    body: { fontSize: 15, fontWeight: '600' as const, letterSpacing: 0.2 },
    button: { fontSize: 17, fontWeight: '800' as const, letterSpacing: 2, lineHeight: 24 },
    caption: { fontSize: 12, fontWeight: '600' as const, letterSpacing: 1.4 },
    micro: { fontSize: 10, fontWeight: '700' as const, letterSpacing: 2 },
    number: { fontSize: 22, fontWeight: '800' as const, letterSpacing: 0.5 },
  },
};

export const ECHO_cobzildfiskwvhinguCOLORS = {
  idle: 'rgba(255,255,255,0.28)',
  cold: '#9AD7F2',
  far: '#9AD7F2',
  near: '#6DC7C0',
  found: '#F2C45C',
};

export type ThemcobzildfiskwvhingueType = typeof THcobzildfiskwvhinguEME;

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
function thcobzildfiskwvhinguemeObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 32) & 19686;
}

function thcobzildfiskwvhinguemeObfV21ByteFold(s: string): number {
  let x = 65;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
  return x;
}

function thcobzildfiskwvhinguemeObfV21HashMix(s: string): number {
  let h = 71;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 37) % 424;
  return h;
}

function thcobzildfiskwvhinguemeObfV21SumOdds(nums: number[]): number {
  let acc = 87;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 272;
  }
  return acc;
}
void thcobzildfiskwvhinguemeObfV21ShiftXor(61, 33);
void thcobzildfiskwvhinguemeObfV21ByteFold('tf');
void thcobzildfiskwvhinguemeObfV21HashMix('bgsk');
void thcobzildfiskwvhinguemeObfV21SumOdds([4, 20, 25]);
