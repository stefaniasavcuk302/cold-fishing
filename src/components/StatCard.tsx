import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THEME } from '../constants/theme';

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
export default function StatCard({ value, label, valueColor }: Props) {
  return (
    <View style={[styles.card, { borderColor: valueColor + '55' }]}>
      <View style={[styles.dot, { backgroundColor: valueColor }]} />
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: THEME.radius.md,
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.72)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 6,
  },
  value: {
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.5,
    lineHeight: 26,
    fontVariant: ['tabular-nums' as const],
  },
  label: {
    marginTop: 2,
    color: THEME.colors.text.tertiary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
});
