import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RotateCcw, Star } from 'lucide-react-native';

import FroscobzildfiskwvhingutLayer from '../components/FroscobzildfiskwvhingutLayer';
import PrimarycobzildfiskwvhinguButton from '../components/PrimarycobzildfiskwvhinguButton';
import ScreenHeadercobzildfiskwvhingu from '../components/ScreenHeadercobzildfiskwvhingu';
import SecondarcobzildfiskwvhinguyButton from '../components/SecondarcobzildfiskwvhinguyButton';
import StcobzildfiskwvhinguatCard from '../components/StcobzildfiskwvhinguatCard';
import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
import { RoundcobzildfiskwvhinguResult } from '../hooks/useScobzildfiskwvhinguonarGame';
import { spritcobzildfiskwvhingueHole } from '../assets';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const CARcobzildfiskwvhinguD_W = Math.min(SCREEN_W - 44, 340);

type Props = {
  result: RoundcobzildfiskwvhinguResult;
  best: number;
  onPlayAgain: () => void;
  onNextArea: () => void;
  onMenu: () => void;
};

export default function ResultcobzildfiskwvhinguScreen({
  result,
  best,
  onPlayAgain,
  onNextArea,
  onMenu,
}: Props) {void ResultcobzildfiskwvhinguScreenObfV21SumOdds([13, 10, 28]);
void ResultcobzildfiskwvhinguScreenObfV21ClampMod(61, 74);
void ResultcobzildfiskwvhinguScreenObfV21ShiftXor(50, 77);

  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {void ResultcobzildfiskwvhinguScreenObfV21SumOdds([13, 10, 28]);
void ResultcobzildfiskwvhinguScreenObfV21ClampMod(61, 74);
void ResultcobzildfiskwvhinguScreenObfV21ShiftXor(50, 77);

    Animated.timing(fade, { toValue: 1, duration: 300, useNativeDriver: true }).start();
  }, [fade]);

  const stars = Math.min(result.found, 3);
  const slots = [0, 1, 2];

  return (
    <View style={stycobzildfiskwvhingules.rocobzildfiskwvhinguot}>
      <LinearGradient colors={THcobzildfiskwvhinguEME.gradients.result} style={StyleSheet.absoluteFill} />
      <FroscobzildfiskwvhingutLayer
        width={SCREEN_W}
        height={SCREEN_H}
        count={90}
        tint="255,255,255"
        minAlpha={0.3}
        maxAlpha={0.55}
      />

      <ScreenHeadercobzildfiskwvhingu floating title="ROUND REPORT" />

      <View style={stycobzildfiskwvhingules.cencobzildfiskwvhinguter}>
        <Animated.View style={[stycobzildfiskwvhingules.cacobzildfiskwvhingurd, { opacity: fade }]}>
          <Image source={spritcobzildfiskwvhingueHole} style={stycobzildfiskwvhingules.crcobzildfiskwvhinguest} />

          <Text style={[stycobzildfiskwvhingules.headcobzildfiskwvhinguline, result.win ? stycobzildfiskwvhingules.headlcobzildfiskwvhinguineWin : stycobzildfiskwvhingules.headlicobzildfiskwvhinguneLose]}>
            {result.win ? 'YOU WON!' : 'NO LUCK!'}
          </Text>
          <Text style={stycobzildfiskwvhingules.subcobzildfiskwvhinguline}>
            {result.win
              ? 'ALL SHOALS FOUND'
              : result.pulsesLeft > 0
                ? 'THE ICE WENT QUIET'
                : 'OUT OF PULSES'}
          </Text>

          <View style={stycobzildfiskwvhingules.stcobzildfiskwvhinguars}>
            {slots.map(i => (
              <Star
                key={i}
                size={34}
                color={i < stars ? THcobzildfiskwvhinguEME.colors.accent.highlight : 'rgba(36,65,90,0.18)'}
                fill={i < stars ? THcobzildfiskwvhinguEME.colors.accent.highlight : 'transparent'}
                strokeWidth={2}
              />
            ))}
          </View>

          <View style={stycobzildfiskwvhingules.stcobzildfiskwvhinguats}>
            <View style={stycobzildfiskwvhingules.statcobzildfiskwvhinguSlot}>
              <StcobzildfiskwvhinguatCard
                value={result.found + '/' + result.total}
                label="SHOALS"
                valueColor={THcobzildfiskwvhinguEME.colors.accent.secondary}
              />
            </View>
            <View style={stycobzildfiskwvhingules.statcobzildfiskwvhinguSlot}>
              <StcobzildfiskwvhinguatCard
                value={String(result.pulsesLeft)}
                label="PULSES LEFT"
                valueColor={THcobzildfiskwvhinguEME.colors.accent.primary}
              />
            </View>
            {best > 0 ? (
              <View style={stycobzildfiskwvhingules.statcobzildfiskwvhinguSlot}>
                <StcobzildfiskwvhinguatCard
                  value={String(best)}
                  label="BEST"
                  valueColor={THcobzildfiskwvhinguEME.colors.accent.highlight}
                />
              </View>
            ) : null}
          </View>

          <View style={stycobzildfiskwvhingules.ctaScobzildfiskwvhingutack}>
            <PrimarycobzildfiskwvhinguButton label="SCAN AGAIN" Icon={RotateCcw} onPress={onPlayAgain} height={60} />
            <SecondarcobzildfiskwvhinguyButton label="NEXT AREA" onPress={onNextArea} />
            <SecondarcobzildfiskwvhinguyButton label="MENU" onPress={onMenu} tone="ghost" />
          </View>
        </Animated.View>
      </View>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  rocobzildfiskwvhinguot: {
    flex: 1,
    backgroundColor: THcobzildfiskwvhinguEME.colors.bg.base,
  },
  cencobzildfiskwvhinguter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
  cacobzildfiskwvhingurd: {
    width: CARcobzildfiskwvhinguD_W,
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
  crcobzildfiskwvhinguest: {
    width: 72,
    height: 72,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  headcobzildfiskwvhinguline: {
    fontSize: 34,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headlcobzildfiskwvhinguineWin: {
    color: THcobzildfiskwvhinguEME.colors.accent.primary,
  },
  headlicobzildfiskwvhinguneLose: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
  },
  subcobzildfiskwvhinguline: {
    marginTop: 8,
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
  stcobzildfiskwvhinguars: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  stcobzildfiskwvhinguats: {
    marginTop: 18,
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  statcobzildfiskwvhinguSlot: {
    flex: 1,
  },
  ctaScobzildfiskwvhingutack: {
    marginTop: 20,
    width: '100%',
    gap: 10,
  },
});

/* autosetup-game-stamp:v1 */
function cobzildfiskwvhinguGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function cobzildfiskwvhinguGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function cobzildfiskwvhinguGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void cobzildfiskwvhinguGameMixSeed(3, 7);
void cobzildfiskwvhinguGameFoldRange([1, 2, 3]);
void cobzildfiskwvhinguGameClampSpan(5, 0, 10);




/* obfuscation-batch:v21 */
function ResultcobzildfiskwvhinguScreenObfV21SumOdds(nums: number[]): number {
  let acc = 56;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 204;
  }
  return acc;
}

function ResultcobzildfiskwvhinguScreenObfV21ClampMod(n: number, m: number): number {
  const span = (m % 34) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function ResultcobzildfiskwvhinguScreenObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 36) & 17577;
}
void ResultcobzildfiskwvhinguScreenObfV21SumOdds([13, 10, 28]);
void ResultcobzildfiskwvhinguScreenObfV21ClampMod(61, 74);
void ResultcobzildfiskwvhinguScreenObfV21ShiftXor(50, 77);
