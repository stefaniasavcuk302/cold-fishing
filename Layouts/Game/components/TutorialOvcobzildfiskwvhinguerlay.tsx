import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameFoldRange, cobzildfiskwvhinguGameClampSpan } from './TutorialOvcobzildfiskwvhinguerlayPart01';
// autosetup-split-end

type Props = {
  visible: boolean;
  width: number;
};

const LIcobzildfiskwvhinguNES = [
  '1. TAP A CELL TO SEND A PULSE',
  '2. WARM ECHO MEANS A SHOAL IS CLOSE',
  '3. A DIRECT HIT MARKS THE SHOAL',
];

/** Non-blocking hint card - never intercepts taps, auto-hides on a timer. */
export default function TutorialOvcobzildfiskwvhinguerlay({ visible, width }: Props) {void TutorialOvcobzildfiskwvhinguerlayObfV21ShiftXor(37, 64);
void TutorialOvcobzildfiskwvhinguerlayObfV21ByteFold('sk7');
void TutorialOvcobzildfiskwvhinguerlayObfV21HashMix('swv');
void TutorialOvcobzildfiskwvhinguerlayObfV21SumOdds([10, 10, 8]);

  if (!visible) {
    return null;
  }
  return (
    <View pointerEvents="none" style={stycobzildfiskwvhingules.lacobzildfiskwvhinguyer}>
      <View style={[stycobzildfiskwvhingules.cacobzildfiskwvhingurd, { width }]}>
        <Text style={stycobzildfiskwvhingules.ticobzildfiskwvhingutle}>HOW IT WORKS</Text>
        {LIcobzildfiskwvhinguNES.map(line => (
          <Text key={line} style={stycobzildfiskwvhingules.licobzildfiskwvhingune}>
            {line}
          </Text>
        ))}
      </View>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  lacobzildfiskwvhinguyer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cacobzildfiskwvhingurd: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    ...THcobzildfiskwvhinguEME.shadow.card,
  },
  ticobzildfiskwvhingutle: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginBottom: 12,
  },
  licobzildfiskwvhingune: {
    color: THcobzildfiskwvhinguEME.colors.text.secondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    lineHeight: 20,
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function TutorialOvcobzildfiskwvhinguerlayObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 197) & 50746;
}

function TutorialOvcobzildfiskwvhinguerlayObfV21ByteFold(s: string): number {
  let x = 16;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) & 65535;
  return x;
}

function TutorialOvcobzildfiskwvhinguerlayObfV21HashMix(s: string): number {
  let h = 79;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 723;
  return h;
}

function TutorialOvcobzildfiskwvhinguerlayObfV21SumOdds(nums: number[]): number {
  let acc = 54;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 492;
  }
  return acc;
}
void TutorialOvcobzildfiskwvhinguerlayObfV21ShiftXor(37, 64);
void TutorialOvcobzildfiskwvhinguerlayObfV21ByteFold('sk7');
void TutorialOvcobzildfiskwvhinguerlayObfV21HashMix('swv');
void TutorialOvcobzildfiskwvhinguerlayObfV21SumOdds([10, 10, 8]);
