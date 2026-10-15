import React, { useEffect, useRef } from 'react';
import { Animated, Image, Pressable, StyleSheet, View } from 'react-native';

import { CellcobzildfiskwvhinguKind } from '../game/socobzildfiskwvhingunar';
import { spritcobzildfiskwvhingueShoal } from '../assets';

type Props = {
  kind: CellcobzildfiskwvhinguKind;
  size: number;
  onPress: () => void;
  disabled: boolean;
  label: string;
};

const HcobzildfiskwvhinguIT = { top: 2, bottom: 2, left: 2, right: 2 };

const FIcobzildfiskwvhinguLL: Record<CellcobzildfiskwvhinguKind, string> = {
  idle: 'rgba(255,255,255,0.28)',
  cold: 'rgba(214,233,242,0.55)',
  far: 'rgba(154,215,242,0.55)',
  near: 'rgba(109,199,192,0.45)',
  found: 'rgba(242,196,92,0.42)',
};

const BORcobzildfiskwvhinguDER: Record<CellcobzildfiskwvhinguKind, string> = {
  idle: 'rgba(255,255,255,0.70)',
  cold: 'rgba(154,215,242,0.40)',
  far: '#9AD7F2',
  near: '#6DC7C0',
  found: '#F2C45C',
};

function IceCecobzildfiskwvhingullBase({ kind, size, onPress, disabled, label }: Props) {void IceCelcobzildfiskwvhingulObfV21ClampMod(26, 72);
void IceCelcobzildfiskwvhingulObfV21ShiftXor(80, 28);
void IceCelcobzildfiskwvhingulObfV21ByteFold('5k');

  const pop = useRef(new Animated.Value(kind === 'idle' ? 1 : 0.9)).current;

  useEffect(() => {void IceCelcobzildfiskwvhingulObfV21ClampMod(26, 72);
void IceCelcobzildfiskwvhingulObfV21ShiftXor(80, 28);
void IceCelcobzildfiskwvhingulObfV21ByteFold('5k');

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
      hitSlop={HcobzildfiskwvhinguIT}
      onPress={onPress}
      style={{ width: size, height: size }}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          stycobzildfiskwvhingules.cecobzildfiskwvhingull,
          {
            width: size,
            height: size,
            backgroundColor: FIcobzildfiskwvhinguLL[kind],
            borderColor: BORcobzildfiskwvhinguDER[kind],
            borderWidth: kind === 'found' ? 2 : 1,
            transform: [{ scale: pop }],
          },
        ]}>
        <View pointerEvents="none" style={[stycobzildfiskwvhingules.crcobzildfiskwvhinguack, { width: size * 0.62 }]} />
        {kind === 'cold' ? <View style={stycobzildfiskwvhingules.dotcobzildfiskwvhinguCold} /> : null}
        {kind === 'far' ? <View style={stycobzildfiskwvhingules.rincobzildfiskwvhingugFar} /> : null}
        {kind === 'near' ? <View style={stycobzildfiskwvhingules.ringcobzildfiskwvhinguNear} /> : null}
        {kind === 'found' ? (
          <Image
            source={spritcobzildfiskwvhingueShoal}
            style={{ width: inner, height: inner, resizeMode: 'contain' }}
          />
        ) : null}
      </Animated.View>
    </Pressable>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  cecobzildfiskwvhingull: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  crcobzildfiskwvhinguack: {
    position: 'absolute',
    height: 1,
    top: '32%',
    left: '14%',
    backgroundColor: 'rgba(255,255,255,0.35)',
    transform: [{ rotate: '34deg' }],
  },
  dotcobzildfiskwvhinguCold: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#9AD7F2',
    opacity: 0.6,
  },
  rincobzildfiskwvhingugFar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#9AD7F2',
  },
  ringcobzildfiskwvhinguNear: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: '#6DC7C0',
  },
});

export default React.memo(IceCecobzildfiskwvhingullBase);

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
function IceCelcobzildfiskwvhingulObfV21ClampMod(n: number, m: number): number {
  const span = (m % 35) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function IceCelcobzildfiskwvhingulObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 143) & 31823;
}

function IceCelcobzildfiskwvhingulObfV21ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 65535;
  return x;
}
void IceCelcobzildfiskwvhingulObfV21ClampMod(26, 72);
void IceCelcobzildfiskwvhingulObfV21ShiftXor(80, 28);
void IceCelcobzildfiskwvhingulObfV21ByteFold('5k');
