import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Map as MapIcon, Star, Waves } from 'lucide-react-native';

import AreaChip from '../components/AreaChip';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import TutorialOverlay from '../components/TutorialOverlay';
import { AREAS, AreaConfig, AreaId, TUTORIAL_MS } from '../constants/config';
import { THEME } from '../constants/theme';
import { bgMenu, spriteShoal } from '../assets';

type Props = {
  area: AreaConfig;
  best: number;
  onSelectArea: (id: AreaId) => void;
  onStart: () => void;
};

export default function MenuScreen({ area, best, onSelectArea, onStart }: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;
  const [hint, setHint] = useState(false);

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 380, useNativeDriver: true }).start();

    // One finite rise-and-settle pass. The menu must stop moving quickly so
    // the window reports idle for the capture tooling.
    Animated.sequence([
      Animated.timing(float, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.timing(float, { toValue: 0, duration: 900, useNativeDriver: true }),
    ]).start();
  }, [fade, float]);

  useEffect(() => {
    if (!hint) {
      return;
    }
    const t = setTimeout(() => setHint(false), TUTORIAL_MS + 1500);
    return () => clearTimeout(t);
  }, [hint]);

  const openHint = useCallback(() => setHint(true), []);
  const bump = float.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });

  return (
    <View style={styles.root}>
      <View style={styles.art}>
        <ImageBackground source={bgMenu} resizeMode="cover" style={styles.artBg}>
          <LinearGradient
            colors={THEME.gradients.menuFade}
            locations={[0, 0.62, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={styles.hero}>
            <Animated.View
              pointerEvents="box-none"
              style={{ transform: [{ translateY: bump }] }}>
              <Image source={spriteShoal} style={styles.heroSprite} />
            </Animated.View>
          </View>
        </ImageBackground>

        <ScreenHeader floating
          leftSlot={
            <View style={styles.badge}>
              <MapIcon size={16} color={THEME.colors.accent.primary} strokeWidth={2.4} />
              <Text style={styles.badgeText}>{area.label}</Text>
            </View>
          }
          rightSlot={
            <View style={styles.badge}>
              <Star size={16} color={THEME.colors.accent.highlight} strokeWidth={2.4} />
              <Text style={styles.badgeValue}>{best + ' / ' + area.shoals}</Text>
            </View>
          }
        />
      </View>

      <Animated.View style={[styles.sheet, { opacity: fade }]}>
        <Text style={styles.title}>COLD FISHING</Text>
        <Text style={styles.tagline}>FIND THE SHOALS UNDER THE ICE</Text>

        <View style={styles.chips}>
          {AREAS.map(a => (
            <AreaChip
              key={a.id}
              label={a.label}
              active={a.id === area.id}
              onPress={() => onSelectArea(a.id)}
            />
          ))}
        </View>

        <View style={styles.stats}>
          <View style={styles.statSlot}>
            <StatCard
              value={String(area.shoals)}
              label="SHOALS"
              valueColor={THEME.colors.accent.secondary}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={String(area.pulses)}
              label="PULSES"
              valueColor={THEME.colors.accent.primary}
            />
          </View>
          {best > 0 ? (
            <View style={styles.statSlot}>
              <StatCard
                value={String(best)}
                label="BEST"
                valueColor={THEME.colors.accent.highlight}
              />
            </View>
          ) : null}
        </View>

        <Text style={styles.hintText}>TAP THE ICE TO SEND A PULSE</Text>

        <PrimaryButton label="START SONAR" Icon={Waves} onPress={onStart} height={60} />

        <View style={styles.secondRow}>
          <View style={styles.secondSlot}>
            <SecondaryButton label="HOW TO PLAY" onPress={openHint} />
          </View>
          <View style={styles.secondSlot}>
            <SecondaryButton label="SETTINGS" onPress={openHint} />
          </View>
        </View>
      </Animated.View>

      <TutorialOverlay visible={hint} width={300} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.bg.base,
  },
  art: {
    flex: 1,
  },
  artBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  hero: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 18,
  },
  heroSprite: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  badge: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.78)',
    borderWidth: 1,
    borderColor: 'rgba(63,142,184,0.25)',
  },
  badgeText: {
    color: THEME.colors.text.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  badgeValue: {
    color: THEME.colors.text.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
  },
  sheet: {
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 28,
    ...THEME.shadow.sheet,
  },
  title: {
    color: THEME.colors.text.primary,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2,
  },
  tagline: {
    marginTop: 6,
    color: THEME.colors.accent.primary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
  chips: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
  },
  stats: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  statSlot: {
    flex: 1,
  },
  hintText: {
    marginTop: 14,
    marginBottom: 10,
    color: THEME.colors.text.tertiary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
  secondRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  secondSlot: {
    flex: 1,
  },
});
