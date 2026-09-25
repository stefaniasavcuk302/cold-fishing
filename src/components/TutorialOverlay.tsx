import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { THEME } from '../constants/theme';

type Props = {
  visible: boolean;
  width: number;
};

const LINES = [
  '1. TAP A CELL TO SEND A PULSE',
  '2. WARM ECHO MEANS A SHOAL IS CLOSE',
  '3. A DIRECT HIT MARKS THE SHOAL',
];

/** Non-blocking hint card - never intercepts taps, auto-hides on a timer. */
export default function TutorialOverlay({ visible, width }: Props) {
  if (!visible) {
    return null;
  }
  return (
    <View pointerEvents="none" style={styles.layer}>
      <View style={[styles.card, { width }]}>
        <Text style={styles.title}>HOW IT WORKS</Text>
        {LINES.map(line => (
          <Text key={line} style={styles.line}>
            {line}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.95)',
    paddingVertical: 20,
    paddingHorizontal: 20,
    ...THEME.shadow.card,
  },
  title: {
    color: THEME.colors.text.primary,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1.4,
    marginBottom: 12,
  },
  line: {
    color: THEME.colors.text.secondary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 0.8,
    lineHeight: 20,
  },
});
