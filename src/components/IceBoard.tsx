import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

import { GRID_COLS, GRID_ROWS } from '../constants/config';
import { THEME } from '../constants/theme';
import { CellKind } from '../game/sonar';
import { Pulse } from '../hooks/useSonarGame';
import IceCell from './IceCell';
import SonarRing from './SonarRing';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');

export const BOARD_PAD = 6;
export const BOARD_BORDER = 2;
export const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;

// Height budget: header 88 + target strip 44 + floating-bar reserve 240 + slack.
const AVAIL_H = SCREEN_H - 88 - 44 - 240 - 40;
const BOARD_MAX = Math.min(SCREEN_W - 32, 380, Math.max(228, AVAIL_H));

export const TILE = Math.floor((BOARD_MAX - 2 * BOARD_FRAME) / GRID_COLS);
export const GRID_W = TILE * GRID_COLS;
export const GRID_H = TILE * GRID_ROWS;
export const BOARD_W = GRID_W + 2 * BOARD_FRAME;
export const BOARD_H = GRID_H + 2 * BOARD_FRAME;

type Props = {
  cells: CellKind[];
  pulse: Pulse | null;
  disabled: boolean;
  onTapCell: (index: number) => void;
};

export default function IceBoard({ cells, pulse, disabled, onTapCell }: Props) {
  const flash = useRef(new Animated.Value(0)).current;
  const foundCount = cells.filter(c => c === 'found').length;
  const lastFound = useRef(0);

  useEffect(() => {
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
    <View style={[styles.board, { width: BOARD_W, height: BOARD_H }]}>
      <View style={{ width: GRID_W, height: GRID_H }}>
        <View style={styles.grid}>
          {cells.map((kind, i) => (
            <IceCell
              key={i}
              kind={kind}
              size={TILE}
              disabled={disabled}
              label={'ICE ' + (i + 1)}
              onPress={() => onTapCell(i)}
            />
          ))}
        </View>
        {pulse ? (
          <SonarRing
            index={pulse.index}
            color={pulse.color}
            trigger={pulse.trigger}
            tile={TILE}
            frame={0}
          />
        ) : null}
      </View>
      <Animated.View
        pointerEvents="none"
        style={[styles.flash, { opacity: flash }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    padding: BOARD_PAD,
    borderWidth: BOARD_BORDER,
    borderColor: THEME.colors.surface.line,
    borderRadius: 20,
    backgroundColor: 'rgba(234,248,255,0.60)',
    overflow: 'hidden',
    ...THEME.shadow.card,
  },
  grid: {
    width: GRID_W,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  flash: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#F2C45C',
  },
});
