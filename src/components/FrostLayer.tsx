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
function FrostLayerBase({
  width,
  height,
  count = 900,
  tint = '234,248,255',
  minAlpha = 0.1,
  maxAlpha = 0.22,
}: Props) {
  const dots = useMemo(() => {
    let seed = 0x9e3779b9;
    const rnd = () => {
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

export default React.memo(FrostLayerBase);
