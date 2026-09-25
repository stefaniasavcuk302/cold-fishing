import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, View } from 'react-native';

import { CellKind } from '../game/sonar';
import { spriteShoal } from '../assets';

type Props = {
  kind: CellKind;
  size: number;
  onPress: () => void;
  disabled: boolean;
  label: string;
};

const HIT = { top: 2, bottom: 2, left: 2, right: 2 };

const FILL: Record<CellKind, string> = {
  idle: 'rgba(255,255,255,0.28)',
  cold: 'rgba(214,233,242,0.55)',
  far: 'rgba(154,215,242,0.55)',
  near: 'rgba(109,199,192,0.45)',
  found: 'rgba(242,196,92,0.42)',
};

const BORDER: Record<CellKind, string> = {
  idle: 'rgba(255,255,255,0.70)',
  cold: 'rgba(154,215,242,0.40)',
  far: '#9AD7F2',
  near: '#6DC7C0',
  found: '#F2C45C',
};

function IceCellBase({ kind, size, onPress, disabled, label }: Props) {
  const pop = useRef(new Animated.Value(kind === 'idle' ? 1 : 0.9)).current;

  useEffect(() => {
    if (kind === 'idle') {
      return;
    }
    pop.setValue(0.9);
    Animated.spring(pop, {
      toValue: 1,
      tension: 120,
      friction: 8,
      useNativeDriver: true,
    }).start();
  }, [kind, pop]);

  const inner = size - 18;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled || kind !== 'idle'}
      hitSlop={HIT}
      onPress={onPress}
      style={{ width: size, height: size }}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.cell,
          {
            width: size,
            height: size,
            backgroundColor: FILL[kind],
            borderColor: BORDER[kind],
            borderWidth: kind === 'found' ? 2 : 1,
            transform: [{ scale: pop }],
          },
        ]}>
        <View pointerEvents="none" style={[styles.crack, { width: size * 0.62 }]} />
        {kind === 'cold' ? <View style={styles.dotCold} /> : null}
        {kind === 'far' ? <View style={styles.ringFar} /> : null}
        {kind === 'near' ? <View style={styles.ringNear} /> : null}
        {kind === 'found' ? (
          <Image
            source={spriteShoal}
            style={{ width: inner, height: inner, resizeMode: 'contain' }}
          />
        ) : null}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  crack: {
    position: 'absolute',
    height: 1,
    top: '32%',
    left: '14%',
    backgroundColor: 'rgba(255,255,255,0.35)',
    transform: [{ rotate: '34deg' }],
  },
  dotCold: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9AD7F2',
    opacity: 0.6,
  },
  ringFar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9AD7F2',
  },
  ringNear: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: '#6DC7C0',
  },
});

export default React.memo(IceCellBase);
