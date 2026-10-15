import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const HcobzildfiskwvhinguIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function AcobzildfiskwvhingureaChip({ label, active, onPress }: Props) {void AcobzildfiskwvhingureaChipObfV21ShiftXor(79, 69);
void AcobzildfiskwvhingureaChipObfV21ByteFold('db');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={HcobzildfiskwvhinguIT}
      onPress={onPress}
      style={[stycobzildfiskwvhingules.chcobzildfiskwvhinguip, active ? stycobzildfiskwvhingules.actcobzildfiskwvhinguive : stycobzildfiskwvhingules.idcobzildfiskwvhingule]}>
      <Text style={[stycobzildfiskwvhingules.tecobzildfiskwvhinguxt, active ? stycobzildfiskwvhingules.textAcobzildfiskwvhinguctive : stycobzildfiskwvhingules.textcobzildfiskwvhinguIdle]}>{label}</Text>
    </Pressable>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  chcobzildfiskwvhinguip: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  actcobzildfiskwvhinguive: {
    backgroundColor: 'rgba(109,199,192,0.20)',
    borderWidth: 1.5,
    borderColor: THcobzildfiskwvhinguEME.colors.accent.secondary,
  },
  idcobzildfiskwvhingule: {
    backgroundColor: 'rgba(255,255,255,0.70)',
    borderWidth: 1,
    borderColor: THcobzildfiskwvhinguEME.colors.ui.border,
  },
  tecobzildfiskwvhinguxt: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  textAcobzildfiskwvhinguctive: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
  },
  textcobzildfiskwvhinguIdle: {
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
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
function AcobzildfiskwvhingureaChipObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 40) & 53424;
}

function AcobzildfiskwvhingureaChipObfV21ByteFold(s: string): number {
  let x = 27;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 23) & 65535;
  return x;
}
void AcobzildfiskwvhingureaChipObfV21ShiftXor(79, 69);
void AcobzildfiskwvhingureaChipObfV21ByteFold('db');
