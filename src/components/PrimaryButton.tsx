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

import { THEME } from '../constants/theme';

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

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function PrimaryButton({
  label,
  onPress,
  Icon,
  colors,
  height = 60,
  width = '100%',
  style,
  disabled = false,
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.96,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  const pressOut = useCallback(() => {
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
      hitSlop={HIT}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[{ width: width as any, height }, styles.press, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[styles.fill, { transform: [{ scale }], opacity: disabled ? 0.5 : 1 }]}>
        <LinearGradient
          colors={colors || THEME.gradients.button}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.fill, { height, borderRadius: THEME.radius.lg }]}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={THEME.colors.text.onAccent} strokeWidth={2.4} /> : null}
            <Text style={styles.label}>{label}</Text>
          </View>
        </LinearGradient>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  press: {
    borderRadius: THEME.radius.lg,
    ...THEME.shadow.button,
  },
  fill: {
    width: '100%',
    borderRadius: THEME.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    color: THEME.colors.text.onAccent,
    fontSize: 17,
    fontWeight: '800',
    letterSpacing: 2,
    lineHeight: 24,
  },
});
