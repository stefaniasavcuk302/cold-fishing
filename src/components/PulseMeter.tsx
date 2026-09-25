import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THEME } from '../constants/theme';

type Props = {
  total: number;
  left: number;
};

const PER_ROW = 6;

export default function PulseMeter({ total, left }: Props) {
  const rows: number[][] = [];
  for (let i = 0; i < total; i += PER_ROW) {
    const row: number[] = [];
    for (let j = i; j < Math.min(i + PER_ROW, total); j += 1) {
      row.push(j);
    }
    rows.push(row);
  }

  return (
    <View style={styles.wrap}>
      <Text style={styles.caption}>PULSES LEFT</Text>
      <View style={styles.rows}>
        {rows.map((row, r) => (
          <View key={r} style={styles.row}>
            {row.map(i => (
              <View key={i} style={[styles.tick, i < left ? styles.tickOn : styles.tickOff]} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    gap: 6,
  },
  caption: {
    color: THEME.colors.text.tertiary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  rows: {
    gap: 5,
  },
  row: {
    flexDirection: 'row',
    gap: 5,
  },
  tick: {
    width: 8,
    height: 8,
    borderRadius: 2,
  },
  tickOn: {
    backgroundColor: THEME.colors.accent.primary,
  },
  tickOff: {
    backgroundColor: 'rgba(36,65,90,0.18)',
  },
});
