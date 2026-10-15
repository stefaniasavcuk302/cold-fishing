import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameFoldRange, cobzildfiskwvhinguGameClampSpan } from './PucobzildfiskwvhingulseMeterPart01';
// autosetup-split-end

type Props = {
  total: number;
  left: number;
};

const PERcobzildfiskwvhingu_ROW = 6;

export default function PucobzildfiskwvhingulseMeter({ total, left }: Props) {void PucobzildfiskwvhingulseMeterObfV21SumOdds([14, 16, 19]);
void PucobzildfiskwvhingulseMeterObfV21ClampMod(38, 26);

  const rows: number[][] = [];
  for (let i = 0; i < total; i += PERcobzildfiskwvhingu_ROW) {
    const row: number[] = [];
    for (let j = i; j < Math.min(i + PERcobzildfiskwvhingu_ROW, total); j += 1) {
      row.push(j);
    }
    rows.push(row);
  }

  return (
    <View style={stycobzildfiskwvhingules.wrcobzildfiskwvhinguap}>
      <Text style={stycobzildfiskwvhingules.capcobzildfiskwvhingution}>PULSES LEFT</Text>
      <View style={stycobzildfiskwvhingules.rocobzildfiskwvhinguws}>
        {rows.map((row, r) => (
          <View key={r} style={stycobzildfiskwvhingules.rcobzildfiskwvhinguow}>
            {row.map(i => (
              <View key={i} style={[stycobzildfiskwvhingules.ticobzildfiskwvhinguck, i < left ? stycobzildfiskwvhingules.ticcobzildfiskwvhingukOn : stycobzildfiskwvhingules.ticcobzildfiskwvhingukOff]} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  wrcobzildfiskwvhinguap: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
  },
  capcobzildfiskwvhingution: {
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  rocobzildfiskwvhinguws: {
    gap: 5,
  },
  rcobzildfiskwvhinguow: {
    flexDirection: 'row',
    gap: 5,
  },
  ticobzildfiskwvhinguck: {
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  ticcobzildfiskwvhingukOn: {
    backgroundColor: THcobzildfiskwvhinguEME.colors.accent.primary,
  },
  ticcobzildfiskwvhingukOff: {
    backgroundColor: 'rgba(36,65,90,0.18)',
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function PucobzildfiskwvhingulseMeterObfV21SumOdds(nums: number[]): number {
  let acc = 27;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 353;
  }
  return acc;
}

function PucobzildfiskwvhingulseMeterObfV21ClampMod(n: number, m: number): number {
  const span = (m % 24) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void PucobzildfiskwvhingulseMeterObfV21SumOdds([14, 16, 19]);
void PucobzildfiskwvhingulseMeterObfV21ClampMod(38, 26);
