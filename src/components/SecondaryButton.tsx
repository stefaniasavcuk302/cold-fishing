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

import { THEME } from '../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  Icon?: any;
  height?: number;
  tone?: 'surface' | 'ghost';
  style?: StyleProp<ViewStyle>;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function SecondaryButton({
  label,
  onPress,
  Icon,
  height = 48,
  tone = 'surface',
  style,
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

  const ghost = tone === 'ghost';

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={HIT}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
      style={[{ width: '100%', height }, style]}>
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.body,
          ghost ? styles.ghost : styles.surface,
          { height, transform: [{ scale }] },
        ]}>
        <View style={styles.row}>
          {Icon ? (
            <Icon size={24} color={ghost ? THEME.colors.text.tertiary : THEME.colors.accent.primary} strokeWidth={2.2} />
          ) : null}
          <Text style={[styles.label, ghost ? styles.labelGhost : null]}>{label}</Text>
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    borderRadius: THEME.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  surface: {
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.border,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    color: THEME.colors.accent.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.6,
    lineHeight: 24,
  },
  labelGhost: {
    color: THEME.colors.text.tertiary,
  },
});
