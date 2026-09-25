import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { GRID_COLS, PULSE_ANIM_MS } from '../constants/config';

type Props = {
  index: number;
  color: string;
  trigger: number;
  tile: number;
  frame: number;
};

/** One expanding echo wave per pulse. No loop — it fires once and settles. */
export default function SonarRing({ index, color, trigger, tile, frame }: Props) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: PULSE_ANIM_MS,
      useNativeDriver: true,
    }).start();
  }, [trigger, progress]);

  const row = Math.floor(index / GRID_COLS);
  const col = index % GRID_COLS;

  const scale = progress.interpolate({ inputRange: [0, 1], outputRange: [0.3, 2.2] });
  const opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.ring,
        {
          left: frame + col * tile,
          top: frame + row * tile,
          width: tile,
          height: tile,
          borderRadius: tile / 2,
          borderColor: color,
          opacity,
          transform: [{ scale }],
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  ring: {
    position: 'absolute',
    borderWidth: 2.5,
  },
});
