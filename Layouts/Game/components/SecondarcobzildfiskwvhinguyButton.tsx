import React, { useCallback, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
// autosetup-split-begin
import { cobzildfiskwvhinguGameMixSeed, cobzildfiskwvhinguGameClampSpan } from './SecondarcobzildfiskwvhinguyButtonPart01';
import { cobzildfiskwvhinguGameFoldRange } from './SecondarcobzildfiskwvhinguyButtonPart02';
// autosetup-split-end

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  height?: number;
  tone?: 'surface' | 'ghost';
  style?: StyleProp<ViewStyle>;
};

const HcobzildfiskwvhinguIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function SecondarcobzildfiskwvhinguyButton({
  label,
  onPress,
  Icon,
  height = 48,
  tone = 'surface',
  style,
}: Props) {void SecondarcobzildfiskwvhinguyButtonObfV21ByteFold('8h2m');
void SecondarcobzildfiskwvhinguyButtonObfV21HashMix('vn');
void SecondarcobzildfiskwvhinguyButtonObfV21SumOdds([28, 11, 21]);
void SecondarcobzildfiskwvhinguyButtonObfV21ClampMod(36, 39);

  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {void SecondarcobzildfiskwvhinguyButtonObfV21ByteFold('8h2m');
void SecondarcobzildfiskwvhinguyButtonObfV21HashMix('vn');
void SecondarcobzildfiskwvhinguyButtonObfV21SumOdds([28, 11, 21]);
void SecondarcobzildfiskwvhinguyButtonObfV21ClampMod(36, 39);

    Animated.spring(scale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {void SecondarcobzildfiskwvhinguyButtonObfV21ByteFold('8h2m');
void SecondarcobzildfiskwvhinguyButtonObfV21HashMix('vn');
void SecondarcobzildfiskwvhinguyButtonObfV21SumOdds([28, 11, 21]);
void SecondarcobzildfiskwvhinguyButtonObfV21ClampMod(36, 39);

    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const ghost = tone === 'ghost';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={HcobzildfiskwvhinguIT}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[{ width: '100%', height }, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          stycobzildfiskwvhingules.bocobzildfiskwvhingudy,
          ghost ? stycobzildfiskwvhingules.ghcobzildfiskwvhinguost : stycobzildfiskwvhingules.surcobzildfiskwvhinguface,
          { height, transform: [{ scale }] },
        ]}>
        <View style={stycobzildfiskwvhingules.rcobzildfiskwvhinguow}>
          {Icon ? (
            <Icon size={24} color={ghost ? THcobzildfiskwvhinguEME.colors.text.tertiary : THcobzildfiskwvhinguEME.colors.accent.primary} strokeWidth={2.2} />
          ) : null}
          <Text style={[stycobzildfiskwvhingules.lacobzildfiskwvhingubel, ghost ? stycobzildfiskwvhingules.labelcobzildfiskwvhinguGhost : null]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  bocobzildfiskwvhingudy: {
    width: '100%',
    borderRadius: THcobzildfiskwvhinguEME.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surcobzildfiskwvhinguface: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderWidth: 1,
    borderColor: THcobzildfiskwvhinguEME.colors.ui.border,
  },
  ghcobzildfiskwvhinguost: {
    backgroundColor: 'transparent',
  },
  rcobzildfiskwvhinguow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  lacobzildfiskwvhingubel: {
    color: THcobzildfiskwvhinguEME.colors.accent.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 24,
  },
  labelcobzildfiskwvhinguGhost: {
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
  },
});

/* autosetup-game-stamp:v1 */
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function SecondarcobzildfiskwvhinguyButtonObfV21ByteFold(s: string): number {
  let x = 19;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 25) & 65535;
  return x;
}

function SecondarcobzildfiskwvhinguyButtonObfV21HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 440;
  return h;
}

function SecondarcobzildfiskwvhinguyButtonObfV21SumOdds(nums: number[]): number {
  let acc = 77;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 417;
  }
  return acc;
}

function SecondarcobzildfiskwvhinguyButtonObfV21ClampMod(n: number, m: number): number {
  const span = (m % 28) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void SecondarcobzildfiskwvhinguyButtonObfV21ByteFold('8h2m');
void SecondarcobzildfiskwvhinguyButtonObfV21HashMix('vn');
void SecondarcobzildfiskwvhinguyButtonObfV21SumOdds([28, 11, 21]);
void SecondarcobzildfiskwvhinguyButtonObfV21ClampMod(36, 39);
