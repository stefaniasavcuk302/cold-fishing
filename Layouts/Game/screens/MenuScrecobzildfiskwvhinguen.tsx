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

import AcobzildfiskwvhingureaChip from '../components/AcobzildfiskwvhingureaChip';
import PrimarycobzildfiskwvhinguButton from '../components/PrimarycobzildfiskwvhinguButton';
import ScreenHeadercobzildfiskwvhingu from '../components/ScreenHeadercobzildfiskwvhingu';
import SecondarcobzildfiskwvhinguyButton from '../components/SecondarcobzildfiskwvhinguyButton';
import StcobzildfiskwvhinguatCard from '../components/StcobzildfiskwvhinguatCard';
import TutorialOvcobzildfiskwvhinguerlay from '../components/TutorialOvcobzildfiskwvhinguerlay';
import { ARcobzildfiskwvhinguEAS, AreaCcobzildfiskwvhinguonfig, ArecobzildfiskwvhinguaId, TUTORcobzildfiskwvhinguIAL_MS } from '../constants/confcobzildfiskwvhinguig';
import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
import { bgMcobzildfiskwvhinguenu, spritcobzildfiskwvhingueShoal } from '../assets';

type Props = {
  area: AreaCcobzildfiskwvhinguonfig;
  best: number;
  onSelectArea: (id: ArecobzildfiskwvhinguaId) => void;
  onStart: () => void;
};

export default function MenuScrecobzildfiskwvhinguen({ area, best, onSelectArea, onStart }: Props) {void MenuScrecobzildfiskwvhinguenObfV21SumOdds([17, 5, 18]);
void MenuScrecobzildfiskwvhinguenObfV21ClampMod(13, 47);

  const fade = useRef(new Animated.Value(0)).current;
  const float = useRef(new Animated.Value(0)).current;
  const [hint, setHint] = useState(false);

  useEffect(() => {void MenuScrecobzildfiskwvhinguenObfV21SumOdds([17, 5, 18]);
void MenuScrecobzildfiskwvhinguenObfV21ClampMod(13, 47);

    Animated.timing(fade, { toValue: 1, duration: 380, useNativeDriver: true }).start();

    // One finite rise-and-settle pass. The menu must stop moving quickly so
    // the window reports idle for the capture tooling.
    Animated.sequence([
      Animated.timing(float, { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.timing(float, { toValue: 0, duration: 900, useNativeDriver: true }),
    ]).start();
  }, [fade, float]);

  useEffect(() => {void MenuScrecobzildfiskwvhinguenObfV21SumOdds([17, 5, 18]);
void MenuScrecobzildfiskwvhinguenObfV21ClampMod(13, 47);

    if (!hint) {
      return;
    }
    const t = setTimeout(() => setHint(false), TUTORcobzildfiskwvhinguIAL_MS + 1500);
    return () => clearTimeout(t);
  }, [hint]);

  const openHint = useCallback(() => setHint(true), []);
  const bump = float.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });

  return (
    <View style={stycobzildfiskwvhingules.rocobzildfiskwvhinguot}>
      <View style={stycobzildfiskwvhingules.acobzildfiskwvhingurt}>
        <ImageBackground source={bgMcobzildfiskwvhinguenu} resizeMode="cover" style={stycobzildfiskwvhingules.arcobzildfiskwvhingutBg}>
          <LinearGradient
            colors={THcobzildfiskwvhinguEME.gradients.menuFade}
            locations={[0, 0.62, 1]}
            style={StyleSheet.absoluteFill}
          />
          <View style={stycobzildfiskwvhingules.hecobzildfiskwvhinguro}>
            <Animated.View
              pointerEvents="box-none"
              style={{ transform: [{ translateY: bump }] }}>
              <Image source={spritcobzildfiskwvhingueShoal} style={stycobzildfiskwvhingules.heroScobzildfiskwvhinguprite} />
            </Animated.View>
          </View>
        </ImageBackground>

        <ScreenHeadercobzildfiskwvhingu floating
          leftSlot={
            <View style={stycobzildfiskwvhingules.bacobzildfiskwvhingudge}>
              <MapIcon size={16} color={THcobzildfiskwvhinguEME.colors.accent.primary} strokeWidth={2.4} />
              <Text style={stycobzildfiskwvhingules.badgcobzildfiskwvhingueText}>{area.label}</Text>
            </View>
          }
          rightSlot={
            <View style={stycobzildfiskwvhingules.bacobzildfiskwvhingudge}>
              <Star size={16} color={THcobzildfiskwvhinguEME.colors.accent.highlight} strokeWidth={2.4} />
              <Text style={stycobzildfiskwvhingules.badgecobzildfiskwvhinguValue}>{best + ' / ' + area.shoals}</Text>
            </View>
          }
        />
      </View>

      <Animated.View style={[stycobzildfiskwvhingules.shcobzildfiskwvhingueet, { opacity: fade }]}>
        <Text style={stycobzildfiskwvhingules.ticobzildfiskwvhingutle}>COLD FISHING</Text>
        <Text style={stycobzildfiskwvhingules.tagcobzildfiskwvhinguline}>FIND THE SHOALS UNDER THE ICE</Text>

        <View style={stycobzildfiskwvhingules.chcobzildfiskwvhinguips}>
          {ARcobzildfiskwvhinguEAS.map(a => (
            <AcobzildfiskwvhingureaChip
              key={a.id}
              label={a.label}
              active={a.id === area.id}
              onPress={() => onSelectArea(a.id)}
            />
          ))}
        </View>

        <View style={stycobzildfiskwvhingules.stcobzildfiskwvhinguats}>
          <View style={stycobzildfiskwvhingules.statcobzildfiskwvhinguSlot}>
            <StcobzildfiskwvhinguatCard
              value={String(area.shoals)}
              label="SHOALS"
              valueColor={THcobzildfiskwvhinguEME.colors.accent.secondary}
            />
          </View>
          <View style={stycobzildfiskwvhingules.statcobzildfiskwvhinguSlot}>
            <StcobzildfiskwvhinguatCard
              value={String(area.pulses)}
              label="PULSES"
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

        <Text style={stycobzildfiskwvhingules.hintcobzildfiskwvhinguText}>TAP THE ICE TO SEND A PULSE</Text>

        <PrimarycobzildfiskwvhinguButton label="START SONAR" Icon={Waves} onPress={onStart} height={60} />

        <View style={stycobzildfiskwvhingules.secocobzildfiskwvhingundRow}>
          <View style={stycobzildfiskwvhingules.seconcobzildfiskwvhingudSlot}>
            <SecondarcobzildfiskwvhinguyButton label="HOW TO PLAY" onPress={openHint} />
          </View>
          <View style={stycobzildfiskwvhingules.seconcobzildfiskwvhingudSlot}>
            <SecondarcobzildfiskwvhinguyButton label="SETTINGS" onPress={openHint} />
          </View>
        </View>
      </Animated.View>

      <TutorialOvcobzildfiskwvhinguerlay visible={hint} width={300} />
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  rocobzildfiskwvhinguot: {
    flex: 1,
    backgroundColor: THcobzildfiskwvhinguEME.colors.bg.base,
  },
  acobzildfiskwvhingurt: {
    flex: 1,
  },
  arcobzildfiskwvhingutBg: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  hecobzildfiskwvhinguro: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 18,
  },
  heroScobzildfiskwvhinguprite: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  bacobzildfiskwvhingudge: {
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
  badgcobzildfiskwvhingueText: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  badgecobzildfiskwvhinguValue: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    fontVariant: ['tabular-nums' as const],
  },
  shcobzildfiskwvhingueet: {
    backgroundColor: 'rgba(255,255,255,0.88)',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 28,
    ...THcobzildfiskwvhinguEME.shadow.sheet,
  },
  ticobzildfiskwvhingutle: {
    color: THcobzildfiskwvhinguEME.colors.text.primary,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 2,
  },
  tagcobzildfiskwvhinguline: {
    marginTop: 6,
    color: THcobzildfiskwvhinguEME.colors.accent.primary,
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1.4,
  },
  chcobzildfiskwvhinguips: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 10,
  },
  stcobzildfiskwvhinguats: {
    marginTop: 14,
    flexDirection: 'row',
    gap: 10,
  },
  statcobzildfiskwvhinguSlot: {
    flex: 1,
  },
  hintcobzildfiskwvhinguText: {
    marginTop: 14,
    marginBottom: 10,
    color: THcobzildfiskwvhinguEME.colors.text.tertiary,
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.2,
  },
  secocobzildfiskwvhingundRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 10,
  },
  seconcobzildfiskwvhingudSlot: {
    flex: 1,
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
function MenuScrecobzildfiskwvhinguenObfV21SumOdds(nums: number[]): number {
  let acc = 50;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 40) % 779;
  }
  return acc;
}

function MenuScrecobzildfiskwvhinguenObfV21ClampMod(n: number, m: number): number {
  const span = (m % 43) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void MenuScrecobzildfiskwvhinguenObfV21SumOdds([17, 5, 18]);
void MenuScrecobzildfiskwvhinguenObfV21ClampMod(13, 47);
