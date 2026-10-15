import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

import { GRIDcobzildfiskwvhingu_COLS, PULSE_cobzildfiskwvhinguANIM_MS } from '../constants/confcobzildfiskwvhinguig';

type Props = {
  index: number;
  color: string;
  trigger: number;
  tile: number;
  frame: number;
};

/** One expanding echo wave per pulse. No loop — it fires once and settles. */
export default function SonarRicobzildfiskwvhingung({ index, color, trigger, tile, frame }: Props) {void SonarRicobzildfiskwvhingungObfV21ClampMod(19, 28);
void SonarRicobzildfiskwvhingungObfV21ShiftXor(35, 60);
void SonarRicobzildfiskwvhingungObfV21ByteFold('fwh2');
void SonarRicobzildfiskwvhingungObfV21HashMix('wh2');

  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {void SonarRicobzildfiskwvhingungObfV21ClampMod(19, 28);
void SonarRicobzildfiskwvhingungObfV21ShiftXor(35, 60);
void SonarRicobzildfiskwvhingungObfV21ByteFold('fwh2');
void SonarRicobzildfiskwvhingungObfV21HashMix('wh2');

    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: PULSE_cobzildfiskwvhinguANIM_MS,
      useNativeDriver: true,
    }).start();
  }, [trigger, progress]);

  const row = Math.floor(index / GRIDcobzildfiskwvhingu_COLS);
  const col = index % GRIDcobzildfiskwvhingu_COLS;

  const scale = progress.interpolate({ inputRange: [0, 1], outputRange: [0.3, 2.2] });
  const opacity = progress.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        stycobzildfiskwvhingules.ricobzildfiskwvhingung,
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

const stycobzildfiskwvhingules = StyleSheet.create({
  ricobzildfiskwvhingung: {
    position: 'absolute',
    borderWidth: 2.5,
  },
});

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
function SonarRicobzildfiskwvhingungObfV21ClampMod(n: number, m: number): number {
  const span = (m % 49) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function SonarRicobzildfiskwvhingungObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 59) & 24089;
}

function SonarRicobzildfiskwvhingungObfV21ByteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) & 65535;
  return x;
}

function SonarRicobzildfiskwvhingungObfV21HashMix(s: string): number {
  let h = 38;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 251;
  return h;
}
void SonarRicobzildfiskwvhingungObfV21ClampMod(19, 28);
void SonarRicobzildfiskwvhingungObfV21ShiftXor(35, 60);
void SonarRicobzildfiskwvhingungObfV21ByteFold('fwh2');
void SonarRicobzildfiskwvhingungObfV21HashMix('wh2');
