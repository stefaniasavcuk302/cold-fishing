import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ArrowLeft } from 'lucide-react-native';

import { THEME } from '../constants/theme';

type Props = {
  title?: string;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  onBack?: () => void;
  floating?: boolean;
};

const HIT = { top: 8, bottom: 8, left: 8, right: 8 };

/** The single header used by every screen — keeps badges and padding identical. */
export default function ScreenHeader({
  title,
  leftSlot,
  rightSlot,
  onBack,
  floating = false,
}: Props) {
  return (
    <View style={[styles.wrap, floating ? styles.floating : styles.solid]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="BACK"
            hitSlop={HIT}
            onPress={onBack}
            style={styles.backBtn}>
            <ArrowLeft size={24} color={THEME.colors.accent.primary} strokeWidth={2.4} />
          </Pressable>
        ) : (
          leftSlot || null
        )}
      </View>

      {title ? (
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
      ) : (
        <View style={styles.spacer} />
      )}

      <View style={styles.sideRight}>{rightSlot || null}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 88,
    paddingTop: 44,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  solid: {
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(63,142,184,0.18)',
  },
  floating: {
    backgroundColor: 'transparent',
  },
  side: {
    minWidth: 104,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  sideRight: {
    minWidth: 104,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  spacer: {
    width: 1,
    height: 1,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: THEME.colors.text.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.6,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.border,
  },
});
