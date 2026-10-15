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
import LinearGradient from 'react-native-linear-gradient';

import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  colors?: string[];
  height?: number;
  width?: number | string;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
};

const HcobzildfiskwvhinguIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function PrimarycobzildfiskwvhinguButton({
  label,
  onPress,
  Icon,
  colors,
  height = 60,
  width = '100%',
  style,
  disabled = false,
}: Props) {void PrimarycobzildfiskwvhinguButtonObfV21ShiftXor(66, 72);
void PrimarycobzildfiskwvhinguButtonObfV21ByteFold('wh29');
void PrimarycobzildfiskwvhinguButtonObfV21HashMix('hnzr');

  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {void PrimarycobzildfiskwvhinguButtonObfV21ShiftXor(66, 72);
void PrimarycobzildfiskwvhinguButtonObfV21ByteFold('wh29');
void PrimarycobzildfiskwvhinguButtonObfV21HashMix('hnzr');

    Animated.spring(scale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {void PrimarycobzildfiskwvhinguButtonObfV21ShiftXor(66, 72);
void PrimarycobzildfiskwvhinguButtonObfV21ByteFold('wh29');
void PrimarycobzildfiskwvhinguButtonObfV21HashMix('hnzr');

    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      disabled={disabled}
      hitSlop={HcobzildfiskwvhinguIT}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[{ width: width as any, height }, stycobzildfiskwvhingules.prcobzildfiskwvhinguess, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[stycobzildfiskwvhingules.ficobzildfiskwvhingull, { transform: [{ scale }], opacity: disabled ? 0.5 : 1 }]}>
        <LinearGradient
          colors={colors || THcobzildfiskwvhinguEME.gradients.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[stycobzildfiskwvhingules.ficobzildfiskwvhingull, { height, borderRadius: THcobzildfiskwvhinguEME.radius.lg }]}>
          <View style={stycobzildfiskwvhingules.rcobzildfiskwvhinguow}>
            {Icon ? <Icon size={24} color={THcobzildfiskwvhinguEME.colors.text.onAccent} strokeWidth={2.4} /> : null}
            <Text style={stycobzildfiskwvhingules.lacobzildfiskwvhingubel}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  prcobzildfiskwvhinguess: {
    borderRadius: THcobzildfiskwvhinguEME.radius.lg,
    ...THcobzildfiskwvhinguEME.shadow.button,
  },
  ficobzildfiskwvhingull: {
    width: '100%',
    borderRadius: THcobzildfiskwvhinguEME.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rcobzildfiskwvhinguow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  lacobzildfiskwvhingubel: {
    color: THcobzildfiskwvhinguEME.colors.text.onAccent,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 24,
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
function PrimarycobzildfiskwvhinguButtonObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 199) & 12112;
}

function PrimarycobzildfiskwvhinguButtonObfV21ByteFold(s: string): number {
  let x = 11;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 9) & 65535;
  return x;
}

function PrimarycobzildfiskwvhinguButtonObfV21HashMix(s: string): number {
  let h = 29;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 34) % 180;
  return h;
}
void PrimarycobzildfiskwvhinguButtonObfV21ShiftXor(66, 72);
void PrimarycobzildfiskwvhinguButtonObfV21ByteFold('wh29');
void PrimarycobzildfiskwvhinguButtonObfV21HashMix('hnzr');
