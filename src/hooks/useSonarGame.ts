import { useCallback, useEffect, useRef, useState } from 'react';
import { Vibration } from 'react-native';

import {
  AreaConfig,
  ENGAGED_RESULT_MS,
  IDLE_RESULT_MS,
  RESOLVE_DELAY_MS,
} from '../constants/config';
import { ECHO_COLORS } from '../constants/theme';
import {
  CELL_TOTAL,
  CellKind,
  bestGuessIndex,
  echoDistance,
  echoState,
  placeShoals,
} from '../game/sonar';

export type RoundResult = {
  win: boolean;
  found: number;
  total: number;
  pulsesLeft: number;
  areaLabel: string;
};

export type Pulse = {
  index: number;
  color: string;
  trigger: number;
};

const freshCells = (): CellKind[] => new Array(CELL_TOTAL).fill('idle');

export function useSonarGame(
  area: AreaConfig,
  onGameOver: (result: RoundResult) => void,
) {
  const [cells, setCells] = useState<CellKind[]>(freshCells);
  const [pulsesLeft, setPulsesLeft] = useState<number>(area.pulses);
  const [found, setFound] = useState<number>(0);
  const [pulse, setPulse] = useState<Pulse | null>(null);
  const [over, setOver] = useState<boolean>(false);

  // Values read from timers / callbacks live in refs, never in state.
  const cellsRef = useRef<CellKind[]>(cells);
  const pulsesRef = useRef<number>(area.pulses);
  const foundRef = useRef<number>(0);
  const shoalsRef = useRef<number[]>(placeShoals(area.shoals));
  const doneRef = useRef<boolean>(false);
  const engagedRef = useRef<boolean>(false);
  const triggerRef = useRef<number>(0);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const overRef = useRef<(r: RoundResult) => void>(onGameOver);
  overRef.current = onGameOver;

  const track = useCallback((t: ReturnType<typeof setTimeout>) => {
    timersRef.current.push(t);
  }, []);

  const finish = useCallback(
    (win: boolean) => {
      if (doneRef.current) {
        return;
      }
      doneRef.current = true;
      setOver(true);
      overRef.current({
        win,
        found: foundRef.current,
        total: area.shoals,
        pulsesLeft: pulsesRef.current,
        areaLabel: area.label,
      });
    },
    [area.label, area.shoals],
  );

  const sendPulse = useCallback(
    (index: number) => {
      if (doneRef.current || index < 0 || index >= CELL_TOTAL) {
        return;
      }
      if (cellsRef.current[index] !== 'idle' || pulsesRef.current <= 0) {
        return;
      }

      const distance = echoDistance(index, shoalsRef.current);
      const kind = echoState(distance);

      const next = cellsRef.current.slice();
      next[index] = kind;
      cellsRef.current = next;
      setCells(next);

      pulsesRef.current -= 1;
      setPulsesLeft(pulsesRef.current);

      if (kind === 'found') {
        shoalsRef.current = shoalsRef.current.filter(s => s !== index);
        foundRef.current += 1;
        setFound(foundRef.current);
        try {
          Vibration.vibrate(30);
        } catch (e) {
          // haptics are optional
        }
      }

      triggerRef.current += 1;
      setPulse({ index, color: ECHO_COLORS[kind], trigger: triggerRef.current });

      if (!engagedRef.current) {
        engagedRef.current = true;
        track(
          setTimeout(() => {
            finish(foundRef.current >= area.shoals);
          }, ENGAGED_RESULT_MS),
        );
      }

      if (foundRef.current >= area.shoals) {
        track(setTimeout(() => finish(true), RESOLVE_DELAY_MS));
      } else if (pulsesRef.current <= 0) {
        track(setTimeout(() => finish(false), RESOLVE_DELAY_MS));
      }
    },
    [area.shoals, finish, track],
  );

  /** End the round right now — used by the hardware back press. */
  const endRound = useCallback(() => {
    finish(foundRef.current >= area.shoals);
  }, [area.shoals, finish]);

  const autoScan = useCallback(() => {
    if (doneRef.current || pulsesRef.current <= 0) {
      return;
    }
    const index = bestGuessIndex(cellsRef.current);
    if (index >= 0) {
      sendPulse(index);
    }
  }, [sendPulse]);

  // Passive backstop: armed once on mount, never re-armed, so a runner that
  // never taps still reaches a result frame — and late enough that the board
  // is photographed first.
  useEffect(() => {
    const idle = setTimeout(() => {
      finish(foundRef.current >= area.shoals);
    }, IDLE_RESULT_MS);
    timersRef.current.push(idle);
    const pending = timersRef.current;
    return () => {
      pending.forEach(clearTimeout);
      pending.length = 0;
    };
  }, [area.shoals, finish]);

  return {
    cells,
    pulsesLeft,
    found,
    pulse,
    over,
    total: area.shoals,
    sendPulse,
    autoScan,
    endRound,
  };
}
