import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RotateCcw, Star } from 'lucide-react-native';

import FrostLayer from '../components/FrostLayer';
import PrimaryButton from '../components/PrimaryButton';
import ScreenHeader from '../components/ScreenHeader';
import SecondaryButton from '../components/SecondaryButton';
import StatCard from '../components/StatCard';
import { THEME } from '../constants/theme';
import { RoundResult } from '../hooks/useSonarGame';
import { spriteHole } from '../assets';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const CARD_W = Math.min(SCREEN_W - 44, 340);

type Props = {
  result: RoundResult;
  best: number;
  onPlayAgain: () => void;
  onNextArea: () => void;
  onMenu: () => void;
};

export default function ResultScreen({
  result,
  best,
  onPlayAgain,
  onNextArea,
  onMenu,
}: Props) {
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, { toValue: 1, duration: 300, useNativeDriver: true }).start();
  }, [fade]);

  const stars = Math.min(result.found, 3);
  const slots = [0, 1, 2];

  return (
    <View style={styles.root}>
      <LinearGradient colors={THEME.gradients.result} style={StyleSheet.absoluteFill} />
      <FrostLayer
        width={SCREEN_W}
        height={SCREEN_H}
        count={90}
        tint="255,255,255"
        minAlpha={0.3}
        maxAlpha={0.55}
      />

      <ScreenHeader floating title="ROUND REPORT" />

      <View style={styles.center}>
        <Animated.View style={[styles.card, { opacity: fade }]}>
          <Image source={spriteHole} style={styles.crest} />

          <Text style={[styles.headline, result.win ? styles.headlineWin : styles.headlineLose]}>
            {result.win ? 'YOU WON!' : 'NO LUCK!'}
          </Text>
          <Text style={styles.subline}>
            {result.win
              ? 'ALL SHOALS FOUND'
              : result.pulsesLeft > 0
                ? 'THE ICE WENT QUIET'
                : 'OUT OF PULSES'}
          </Text>

          <View style={styles.stars}>
            {slots.map(i => (
              <Star
                key={i}
                size={34}
                color={i < stars ? THEME.colors.accent.highlight : 'rgba(36,65,90,0.18)'}
                fill={i < stars ? THEME.colors.accent.highlight : 'transparent'}
                strokeWidth={2}
              />
            ))}
          </View>

          <View style={styles.stats}>
            <View style={styles.statSlot}>
              <StatCard
                value={result.found + '/' + result.total}
                label="SHOALS"
                valueColor={THEME.colors.accent.secondary}
              />
            </View>
            <View style={styles.statSlot}>
              <StatCard
                value={String(result.pulsesLeft)}
                label="PULSES LEFT"
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

          <View style={styles.ctaStack}>
            <PrimaryButton label="SCAN AGAIN" Icon={RotateCcw} onPress={onPlayAgain} height={60} />
            <SecondaryButton label="NEXT AREA" onPress={onNextArea} />
            <SecondaryButton label="MENU" onPress={onMenu} tone="ghost" />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.bg.base,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  card: {
    width: CARD_W,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.95)',
    backgroundColor: 'rgba(255,255,255,0.90)',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 24,
    alignItems: 'center',
    shadowColor: '#3F8EB8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 22,
    elevation: 8,
  },
  crest: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  headline: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headlineWin: {
    color: THEME.colors.accent.primary,
  },
  headlineLose: {
    color: THEME.colors.text.primary,
  },
  subline: {
    marginTop: 8,
    color: THEME.colors.text.tertiary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
  stars: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stats: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  statSlot: {
    flex: 1,
  },
  ctaStack: {
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
});
