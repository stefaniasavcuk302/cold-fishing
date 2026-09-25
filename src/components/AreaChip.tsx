import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { THEME } from '../constants/theme';

type Props = {
  label: string;
  active: boolean;
  onPress: () => void;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

export default function AreaChip({ label, active, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={HIT}
      onPress={onPress}
      style={[styles.chip, active ? styles.active : styles.idle]}>
      <Text style={[styles.text, active ? styles.textActive : styles.textIdle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  active: {
    backgroundColor: 'rgba(109,199,192,0.20)',
    borderWidth: 1.5,
    borderColor: THEME.colors.accent.secondary,
  },
  idle: {
    backgroundColor: 'rgba(255,255,255,0.70)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.border,
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.1,
  },
  textActive: {
    color: THEME.colors.text.primary,
  },
  textIdle: {
    color: THEME.colors.text.tertiary,
  },
});
