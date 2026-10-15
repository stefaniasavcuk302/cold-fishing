import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameFoldRange, cobzildfiskwvhinguGameClampSpan } from './TargecobzildfiskwvhingutStripPart01';
// autosetup-split-end

type Props = {
  total: number;
  found: number;
};

export default function TargecobzildfiskwvhingutStrip({ total, found }: Props) {void TargecobzildfiskwvhingutStripObfV21ClampMod(80, 66);
void TargecobzildfiskwvhingutStripObfV21ShiftXor(60, 17);
void TargecobzildfiskwvhingutStripObfV21ByteFold('w7');

  const items: number[] = [];
  for (let i = 0; i < total; i += 1) {
    items.push(i);
  }

  return (
    <View style={stycobzildfiskwvhingules.stcobzildfiskwvhingurip}>
      {items.map(i => {void TargecobzildfiskwvhingutStripObfV21ClampMod(80, 66);
void TargecobzildfiskwvhingutStripObfV21ShiftXor(60, 17);
void TargecobzildfiskwvhingutStripObfV21ByteFold('w7');

        const done = i < found;
        return (
          <View key={i} style={[stycobzildfiskwvhingules.picobzildfiskwvhingull, done ? stycobzildfiskwvhingules.pillcobzildfiskwvhinguDone : stycobzildfiskwvhingules.pillcobzildfiskwvhinguIdle]}>
            {done ? (
              <CheckCircle2 size={14} color={THcobzildfiskwvhinguEME.colors.accent.highlight} strokeWidth={2.6} />
            ) : null}
            <Text style={[stycobzildfiskwvhingules.tecobzildfiskwvhinguxt, done ? stycobzildfiskwvhingules.textcobzildfiskwvhinguDone : stycobzildfiskwvhingules.textcobzildfiskwvhinguIdle]}>
              {'SHOAL ' + (i + 1)}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  stcobzildfiskwvhingurip: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
  },
  picobzildfiskwvhingull: {
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pillcobzildfiskwvhinguIdle: {
    backgroundColor: 'rgba(255,255,255,0.60)',
    borderWidth: 1,
    borderColor: THcobzildfiskwvhinguEME.colors.ui.border,
  },
  pillcobzildfiskwvhinguDone: {
    backgroundColor: 'rgba(242,196,92,0.20)',
    borderWidth: 1.5,
    borderColor: THcobzildfiskwvhinguEME.colors.accent.highlight,
  },
  tecobzildfiskwvhinguxt: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textcobzildfiskwvhinguIdle: {
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
  },
  textcobzildfiskwvhinguDone: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function TargecobzildfiskwvhingutStripObfV21ClampMod(n: number, m: number): number {
  const span = (m % 41) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function TargecobzildfiskwvhingutStripObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 30) & 60513;
}

function TargecobzildfiskwvhingutStripObfV21ByteFold(s: string): number {
  let x = 23;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 11) & 65535;
  return x;
}
void TargecobzildfiskwvhingutStripObfV21ClampMod(80, 66);
void TargecobzildfiskwvhingutStripObfV21ShiftXor(60, 17);
void TargecobzildfiskwvhingutStripObfV21ByteFold('w7');
