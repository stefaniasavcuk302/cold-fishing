import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

type Props = {
  width: number;
  height: number;
  count?: number;
  tint?: string;
  minAlpha?: number;
  maxAlpha?: number;
};

/**
 * Static frost grain. Deterministic xorshift seed, so there is no Math.random
 * in render and the layer never re-paints — it is pure texture, and it is what
 * gives the dark loader frame its density.
 */
function FrostLacobzildfiskwvhinguyerBase({
  width,
  height,
  count = 900,
  tint = '234,248,255',
  minAlpha = 0.1,
  maxAlpha = 0.22,
}: Props) {void FroscobzildfiskwvhingutLayerObfV21ClampMod(46, 62);
void FroscobzildfiskwvhingutLayerObfV21ShiftXor(50, 73);
void FroscobzildfiskwvhingutLayerObfV21ByteFold('g5w');

  const dots = useMemo(() => {void FroscobzildfiskwvhingutLayerObfV21ClampMod(46, 62);
void FroscobzildfiskwvhingutLayerObfV21ShiftXor(50, 73);
void FroscobzildfiskwvhingutLayerObfV21ByteFold('g5w');

    let seed = 0x9e3779b9;
    const rnd = () => {void FroscobzildfiskwvhingutLayerObfV21ClampMod(46, 62);
void FroscobzildfiskwvhingutLayerObfV21ShiftXor(50, 73);
void FroscobzildfiskwvhingutLayerObfV21ByteFold('g5w');

      seed ^= seed << 13;
      seed ^= seed >>> 17;
      seed ^= seed << 5;
      return ((seed >>> 0) % 100000) / 100000;
    };
    const out: Array<{ x: number; y: number; r: number; a: number }> = [];
    for (let i = 0; i < count; i += 1) {
      out.push({
        x: Math.round(rnd() * width),
        y: Math.round(rnd() * height),
        r: Math.round((0.8 + rnd() * 1.0) * 10) / 10,
        a: Math.round((minAlpha + rnd() * (maxAlpha - minAlpha)) * 100) / 100,
      });
    }
    return out;
  }, [width, height, count, minAlpha, maxAlpha]);

  return (
    <View pointerEvents="none" style={[StyleSheet.absoluteFill, { width, height }]}>
      <Svg width={width} height={height}>
        {dots.map((d, i) => (
          <Circle
            key={i}
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill={'rgba(' + tint + ',' + d.a + ')'}
          />
        ))}
      </Svg>
    </View>
  );
}

export default React.memo(FrostLacobzildfiskwvhinguyerBase);

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
function FroscobzildfiskwvhingutLayerObfV21ClampMod(n: number, m: number): number {
  const span = (m % 25) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function FroscobzildfiskwvhingutLayerObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 138) & 57437;
}

function FroscobzildfiskwvhingutLayerObfV21ByteFold(s: string): number {
  let x = 65;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) & 65535;
  return x;
}
void FroscobzildfiskwvhingutLayerObfV21ClampMod(46, 62);
void FroscobzildfiskwvhingutLayerObfV21ShiftXor(50, 73);
void FroscobzildfiskwvhingutLayerObfV21ByteFold('g5w');
