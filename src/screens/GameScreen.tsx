import React, { useEffect, useState } from 'react';
import { BackHandler, ImageBackground, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Zap } from 'lucide-react-native';

import IceBoard, { BOARD_W } from '../components/IceBoard';
import PrimaryButton from '../components/PrimaryButton';
import PulseMeter from '../components/PulseMeter';
import ScreenHeader from '../components/ScreenHeader';
import TargetStrip from '../components/TargetStrip';
import TutorialOverlay from '../components/TutorialOverlay';
import { AreaConfig, TUTORIAL_MS } from '../constants/config';
import { THEME } from '../constants/theme';
import { RoundResult, useSonarGame } from '../hooks/useSonarGame';
import { bgGame } from '../assets';

type Props = {
  area: AreaConfig;
  onGameOver: (result: RoundResult) => void;
  onBack: () => void;
};

const LEGEND = [
  { key: 'cold', label: 'COLD', color: '#9AD7F2' },
  { key: 'warm', label: 'WARM', color: '#6DC7C0' },
  { key: 'hit', label: 'HIT', color: '#F2C45C' },
];

export default function GameScreen({ area, onGameOver, onBack }: Props) {
  const game = useSonarGame(area, onGameOver);
  const [tutorial, setTutorial] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setTutorial(false), TUTORIAL_MS);
    return () => clearTimeout(t);
  }, []);

  const { endRound } = game;
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      endRound();
      return true;
    });
    return () => sub.remove();
  }, [endRound]);

  return (
    <View style={styles.root}>
      <ImageBackground source={bgGame} resizeMode="cover" style={styles.bg}>
        <LinearGradient colors={THEME.gradients.gameVeil} style={StyleSheet.absoluteFill} />

        <ScreenHeader title={area.label}
          onBack={onBack}
          rightSlot={
            <View style={styles.pill}>
              <Zap size={16} color={THEME.colors.accent.primary} strokeWidth={2.6} />
              <Text style={styles.pillText}>{'PULSES ' + game.pulsesLeft}</Text>
            </View>
          }
        />

        <TargetStrip total={game.total} found={game.found} />

        <View style={styles.area}>
          <IceBoard
            cells={game.cells}
            pulse={game.pulse}
            disabled={game.over}
            onTapCell={game.sendPulse}
          />

          <View style={styles.legend}>
            {LEGEND.map(l => (
              <View key={l.key} style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: l.color }]} />
                <Text style={styles.legendText}>{l.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bar}>
          <View style={styles.meterRow}>
            <PulseMeter total={area.pulses} left={game.pulsesLeft} />
          </View>
          <PrimaryButton label="GO" Icon={Zap} onPress={game.autoScan} height={64} />
        </View>

        <TutorialOverlay visible={tutorial} width={BOARD_W - 40} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.bg.base,
  },
  bg: {
    flex: 1,
  },
  pill: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(63,142,184,0.12)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.borderStrong,
  },
  pillText: {
    color: THEME.colors.text.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
  },
  area: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 240,
  },
  legend: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  legendItem: {
    height: 30,
    paddingHorizontal: 12,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,255,255,0.62)',
    borderWidth: 1,
    borderColor: THEME.colors.ui.border,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    color: THEME.colors.text.tertiary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  bar: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 92,
    borderRadius: 22,
    gap: 10,
    paddingHorizontal: 14,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.95)',
    ...THEME.shadow.sheet,
  },
  meterRow: {
    height: 44,
    justifyContent: 'center',
  },
});
