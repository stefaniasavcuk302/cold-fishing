import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameClampSpan } from './ScreenHeadercobzildfiskwvhinguPart01';
import { cobzildfiskwvhinguGameFoldRange } from './ScreenHeadercobzildfiskwvhinguPart02';
// autosetup-split-end

type Props = {
  title?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  onBack?: () => void;
  floating?: boolean;
};

const HcobzildfiskwvhinguIT = { top: 8, bottom: 8, left: 8, right: 8 };

/** The single header used by every screen — keeps badges and padding identical. */
export default function ScreenHeadercobzildfiskwvhingu({
  title,
  leftSlot,
  rightSlot,
  onBack,
  floating = false,
}: Props) {void ScreenHeadercobzildfiskwvhinguObfV21ByteFold('ptf');
void ScreenHeadercobzildfiskwvhinguObfV21HashMix('bt');
void ScreenHeadercobzildfiskwvhinguObfV21SumOdds([10, 12, 27]);

  return (
    <View style={[stycobzildfiskwvhingules.wrcobzildfiskwvhinguap, floating ? stycobzildfiskwvhingules.floacobzildfiskwvhinguting : stycobzildfiskwvhingules.socobzildfiskwvhingulid]}>
      <View style={stycobzildfiskwvhingules.sicobzildfiskwvhingude}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="BACK"
            hitSlop={HcobzildfiskwvhinguIT}
            onPress={onBack}
            style={stycobzildfiskwvhingules.baccobzildfiskwvhingukBtn}>
            <ArrowLeft size={24} color={THcobzildfiskwvhinguEME.colors.accent.primary} strokeWidth={2.4} />
          </Pressable>
        ) : (
          leftSlot || null
        )}
      </View>

      {title ? (
        <Text numberOfLines={1} style={stycobzildfiskwvhingules.ticobzildfiskwvhingutle}>
          {title}
        </Text>
      ) : (
        <View style={stycobzildfiskwvhingules.spacobzildfiskwvhingucer} />
      )}

      <View style={stycobzildfiskwvhingules.sidecobzildfiskwvhinguRight}>{rightSlot || null}</View>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  wrcobzildfiskwvhinguap: {
    height: 88,
    paddingTop: 44,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  socobzildfiskwvhingulid: {
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(63,142,184,0.18)',
  },
  floacobzildfiskwvhinguting: {
    backgroundColor: 'transparent',
  },
  sicobzildfiskwvhingude: {
    minWidth: 104,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sidecobzildfiskwvhinguRight: {
    minWidth: 104,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  spacobzildfiskwvhingucer: {
    width: 1,
    height: 1,
  },
  ticobzildfiskwvhingutle: {
    flex: 1,
    textAlign: 'center',
    color: THcobzildfiskwvhinguEME.colors.text.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.6,
  },
  baccobzildfiskwvhingukBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderWidth: 1,
    borderColor: THcobzildfiskwvhinguEME.colors.ui.border,
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function ScreenHeadercobzildfiskwvhinguObfV21ByteFold(s: string): number {
  let x = 46;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) & 65535;
  return x;
}

function ScreenHeadercobzildfiskwvhinguObfV21HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 626;
  return h;
}

function ScreenHeadercobzildfiskwvhinguObfV21SumOdds(nums: number[]): number {
  let acc = 45;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 22) % 378;
  }
  return acc;
}
void ScreenHeadercobzildfiskwvhinguObfV21ByteFold('ptf');
void ScreenHeadercobzildfiskwvhinguObfV21HashMix('bt');
void ScreenHeadercobzildfiskwvhinguObfV21SumOdds([10, 12, 27]);
