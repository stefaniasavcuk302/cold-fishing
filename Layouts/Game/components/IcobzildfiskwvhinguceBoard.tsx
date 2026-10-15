import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import { GRIDcobzildfiskwvhingu_COLS, GRIDcobzildfiskwvhingu_ROWS } from '../constants/confcobzildfiskwvhinguig';
import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
import { CellcobzildfiskwvhinguKind } from '../game/socobzildfiskwvhingunar';
import { Pucobzildfiskwvhingulse } from '../hooks/useScobzildfiskwvhinguonarGame';
import IceCelcobzildfiskwvhingul from './IceCelcobzildfiskwvhingul';
import SonarRicobzildfiskwvhingung from './SonarRicobzildfiskwvhingung';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

export const BOARcobzildfiskwvhinguD_PAD = 6;
export const BOARD_cobzildfiskwvhinguBORDER = 2;
export const BOARDcobzildfiskwvhingu_FRAME = BOARcobzildfiskwvhinguD_PAD + BOARD_cobzildfiskwvhinguBORDER;

// Height budget: header 88 + target strip 44 + floating-bar reserve 240 + slack.
const AVAcobzildfiskwvhinguIL_H = SCREEN_H - 88 - 44 - 240 - 40;
const BOARcobzildfiskwvhinguD_MAX = Math.min(SCREEN_W - 32, 380, Math.max(228, AVAcobzildfiskwvhinguIL_H));

export const TIcobzildfiskwvhinguLE = Math.floor((BOARcobzildfiskwvhinguD_MAX - 2 * BOARDcobzildfiskwvhingu_FRAME) / GRIDcobzildfiskwvhingu_COLS);
export const GRIcobzildfiskwvhinguD_W = TIcobzildfiskwvhinguLE * GRIDcobzildfiskwvhingu_COLS;
export const GRIcobzildfiskwvhinguD_H = TIcobzildfiskwvhinguLE * GRIDcobzildfiskwvhingu_ROWS;
export const BOAcobzildfiskwvhinguRD_W = GRIcobzildfiskwvhinguD_W + 2 * BOARDcobzildfiskwvhingu_FRAME;
export const BOAcobzildfiskwvhinguRD_H = GRIcobzildfiskwvhinguD_H + 2 * BOARDcobzildfiskwvhingu_FRAME;

type Props = {
  cells: CellcobzildfiskwvhinguKind[];
  pulse: Pucobzildfiskwvhingulse | null;
  disabled: boolean;
  onTapCell: (index: number) => void;
};

export default function IcobzildfiskwvhinguceBoard({ cells, pulse, disabled, onTapCell }: Props) {void IcobzildfiskwvhinguceBoardObfV21ShiftXor(9, 7);
void IcobzildfiskwvhinguceBoardObfV21ByteFold('3gf8');

  const flash = useRef(new Animated.Value(0)).current;
  const foundCount = cells.filter(c => c === 'found').length;
  const lastFound = useRef(0);

  useEffect(() => {void IcobzildfiskwvhinguceBoardObfV21ShiftXor(9, 7);
void IcobzildfiskwvhinguceBoardObfV21ByteFold('3gf8');

    if (foundCount <= lastFound.current) {
      lastFound.current = foundCount;
      return;
    }
    lastFound.current = foundCount;
    Animated.sequence([
      Animated.timing(flash, { toValue: 0.25, duration: 150, useNativeDriver: true }),
      Animated.timing(flash, { toValue: 0, duration: 150, useNativeDriver: true }),
    ]).start();
  }, [foundCount, flash]);

  return (
    <View style={[stycobzildfiskwvhingules.bocobzildfiskwvhinguard, { width: BOAcobzildfiskwvhinguRD_W, height: BOAcobzildfiskwvhinguRD_H }]}>
      <View style={{ width: GRIcobzildfiskwvhinguD_W, height: GRIcobzildfiskwvhinguD_H }}>
        <View style={stycobzildfiskwvhingules.grcobzildfiskwvhinguid}>
          {cells.map((kind, i) => (
            <IceCelcobzildfiskwvhingul
              key={i}
              kind={kind}
              size={TIcobzildfiskwvhinguLE}
              disabled={disabled}
              label={'ICE ' + (i + 1)}
              onPress={() => onTapCell(i)}
            />
          ))}
        </View>
        {pulse ? (
          <SonarRicobzildfiskwvhingung
            index={pulse.index}
            color={pulse.color}
            trigger={pulse.trigger}
            tile={TIcobzildfiskwvhinguLE}
            frame={0}
          />
        ) : null}
      </View>
      <Animated.View
        pointerEvents="none"
        style={[stycobzildfiskwvhingules.flcobzildfiskwvhinguash, { opacity: flash }]}
      />
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  bocobzildfiskwvhinguard: {
    padding: BOARcobzildfiskwvhinguD_PAD,
    borderWidth: BOARD_cobzildfiskwvhinguBORDER,
    borderColor: THcobzildfiskwvhinguEME.colors.surface.line,
    borderRadius: 20,
    backgroundColor: 'rgba(234,248,255,0.60)',
    overflow: 'hidden',
    ...THcobzildfiskwvhinguEME.shadow.card,
  },
  grcobzildfiskwvhinguid: {
    width: GRIcobzildfiskwvhinguD_W,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flcobzildfiskwvhinguash: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#F2C45C',
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
function IcobzildfiskwvhinguceBoardObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 4;
  return (x ^ 120) & 9517;
}

function IcobzildfiskwvhinguceBoardObfV21ByteFold(s: string): number {
  let x = 42;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) & 65535;
  return x;
}
void IcobzildfiskwvhinguceBoardObfV21ShiftXor(9, 7);
void IcobzildfiskwvhinguceBoardObfV21ByteFold('3gf8');
