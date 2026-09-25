import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

import { THEME } from '../constants/theme';

type Props = {
  total: number;
  found: number;
};

export default function TargetStrip({ total, found }: Props) {
  const items: number[] = [];
  for (let i = 0; i < total; i += 1) {
    items.push(i);
  }

  return (
    <View style={styles.strip}>
      {items.map(i => {
        const done = i < found;
        return (
          <View key={i} style={[styles.pill, done ? styles.pillDone : styles.pillIdle]}>
            {done ? (
              <CheckCircle2 size={14} color={THEME.colors.accent.highlight} strokeWidth={2.6} />
            ) : null}
            <Text style={[styles.text, done ? styles.textDone : styles.textIdle]}>
              {'SHOAL ' + (i + 1)}
            </Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  strip: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingHorizontal: 16,
  },
  pill: {
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  pillIdle: {
    backgroundColor: 'rgba(255,255,255,0.60)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.border,
  },
  pillDone: {
    backgroundColor: 'rgba(242,196,92,0.20)',
    borderWidth: 1.5,
    borderColor: THEME.colors.accent.highlight,
  },
  text: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textIdle: {
    color: THEME.colors.text.tertiary,
  },
  textDone: {
    color: THEME.colors.text.primary,
  },
});
