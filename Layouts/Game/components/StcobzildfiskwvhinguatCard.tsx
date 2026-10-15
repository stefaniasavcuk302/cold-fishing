import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameClampSpan } from './StcobzildfiskwvhinguatCardPart01';
import { cobzildfiskwvhinguGameFoldRange } from './StcobzildfiskwvhinguatCardPart02';
// autosetup-split-end

type Props = {
  value: string;
  label: string;
  valueColor: string;
};

/**
 * Stat pill with no raster icon — the accent dot carries the semantics, so
 * every pill in a row is geometrically identical. Same component on Menu
 * and on the round report.
 */
export default function StcobzildfiskwvhinguatCard({ value, label, valueColor }: Props) {void StcobzildfiskwvhinguatCardObfV21ClampMod(9, 45);
void StcobzildfiskwvhinguatCardObfV21ShiftXor(61, 73);
void StcobzildfiskwvhinguatCardObfV21ByteFold('9r3');

  return (
    <View style={[stycobzildfiskwvhingules.cacobzildfiskwvhingurd, { borderColor: valueColor + '55' }]}>
      <View style={[stycobzildfiskwvhingules.dcobzildfiskwvhinguot, { backgroundColor: valueColor }]} />
      <Text style={[stycobzildfiskwvhingules.vacobzildfiskwvhingulue, { color: valueColor }]}>{value}</Text>
      <Text style={stycobzildfiskwvhingules.lacobzildfiskwvhingubel}>{label}</Text>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  cacobzildfiskwvhingurd: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: THcobzildfiskwvhinguEME.radius.md,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dcobzildfiskwvhinguot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  vacobzildfiskwvhingulue: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
    lineHeight: 26,
    fontVariant: ['tabular-nums' as const],
  },
  lacobzildfiskwvhingubel: {
    marginTop: 2,
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function StcobzildfiskwvhinguatCardObfV21ClampMod(n: number, m: number): number {
  const span = (m % 45) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function StcobzildfiskwvhinguatCardObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 236) & 15738;
}

function StcobzildfiskwvhinguatCardObfV21ByteFold(s: string): number {
  let x = 20;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 65535;
  return x;
}
void StcobzildfiskwvhinguatCardObfV21ClampMod(9, 45);
void StcobzildfiskwvhinguatCardObfV21ShiftXor(61, 73);
void StcobzildfiskwvhinguatCardObfV21ByteFold('9r3');
