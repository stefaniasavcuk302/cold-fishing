import { useCallback, useEffect, useRef, useState } from 'react';
import { Vibration } from 'react-native';

import {
  AreaCcobzildfiskwvhinguonfig,
  ENGAGED_cobzildfiskwvhinguRESULT_MS,
  IDLE_REcobzildfiskwvhinguSULT_MS,
  RESOLVE_cobzildfiskwvhinguDELAY_MS,
} from '../constants/confcobzildfiskwvhinguig';
import { ECHO_cobzildfiskwvhinguCOLORS } from '../constants/thcobzildfiskwvhingueme';
import {
  CELL_cobzildfiskwvhinguTOTAL,
  CellcobzildfiskwvhinguKind,
  bestGuecobzildfiskwvhingussIndex,
  echoDicobzildfiskwvhingustance,
  echocobzildfiskwvhinguState,
  placecobzildfiskwvhinguShoals,
} from '../game/socobzildfiskwvhingunar';

export type RoundcobzildfiskwvhinguResult = {
  win: boolean;
  found: number;
  total: number;
  pulsesLeft: number;
  areaLabel: string;
};

export type Pucobzildfiskwvhingulse = {
  index: number;
  color: string;
  trigger: number;
};

const freshcobzildfiskwvhinguCells = (): CellcobzildfiskwvhinguKind[] => new Array(CELL_cobzildfiskwvhinguTOTAL).fill('idle');

export function useScobzildfiskwvhinguonarGame(
  area: AreaCcobzildfiskwvhinguonfig,
  onGameOver: (result: RoundcobzildfiskwvhinguResult) => void,
) {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

  const [cells, setCells] = useState<CellcobzildfiskwvhinguKind[]>(freshcobzildfiskwvhinguCells);
  const [pulsesLeft, setPulsesLeft] = useState<number>(area.pulses);
  const [found, setFound] = useState<number>(0);
  const [pulse, setPulse] = useState<Pucobzildfiskwvhingulse | null>(null);
  const [over, setOver] = useState<boolean>(false);

  // Values read from timers / callbacks live in refs, never in state.
  const cellsRef = useRef<CellcobzildfiskwvhinguKind[]>(cells);
  const pulsesRef = useRef<number>(area.pulses);
  const foundRef = useRef<number>(0);
  const shoalsRef = useRef<number[]>(placecobzildfiskwvhinguShoals(area.shoals));
  const doneRef = useRef<boolean>(false);
  const engagedRef = useRef<boolean>(false);
  const triggerRef = useRef<number>(0);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const overRef = useRef<(r: RoundcobzildfiskwvhinguResult) => void>(onGameOver);
  overRef.current = onGameOver;

  const track = useCallback((t: ReturnType<typeof setTimeout>) => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

    timersRef.current.push(t);
  }, []);

  const finish = useCallback(
    (win: boolean) => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

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
    (index: number) => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

      if (doneRef.current || index < 0 || index >= CELL_cobzildfiskwvhinguTOTAL) {
        return;
      }
      if (cellsRef.current[index] !== 'idle' || pulsesRef.current <= 0) {
        return;
      }

      const distance = echoDicobzildfiskwvhingustance(index, shoalsRef.current);
      const kind = echocobzildfiskwvhinguState(distance);

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
      setPulse({ index, color: ECHO_cobzildfiskwvhinguCOLORS[kind], trigger: triggerRef.current });

      if (!engagedRef.current) {
        engagedRef.current = true;
        track(
          setTimeout(() => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

            finish(foundRef.current >= area.shoals);
          }, ENGAGED_cobzildfiskwvhinguRESULT_MS),
        );
      }

      if (foundRef.current >= area.shoals) {
        track(setTimeout(() => finish(true), RESOLVE_cobzildfiskwvhinguDELAY_MS));
      } else if (pulsesRef.current <= 0) {
        track(setTimeout(() => finish(false), RESOLVE_cobzildfiskwvhinguDELAY_MS));
      }
    },
    [area.shoals, finish, track],
  );

  /** End the round right now — used by the hardware back press. */
  const endRound = useCallback(() => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

    finish(foundRef.current >= area.shoals);
  }, [area.shoals, finish]);

  const autoScan = useCallback(() => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

    if (doneRef.current || pulsesRef.current <= 0) {
      return;
    }
    const index = bestGuecobzildfiskwvhingussIndex(cellsRef.current);
    if (index >= 0) {
      sendPulse(index);
    }
  }, [sendPulse]);

  // Passive backstop: armed once on mount, never re-armed, so a runner that
  // never taps still reaches a result frame — and late enough that the board
  // is photographed first.
  useEffect(() => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

    const idle = setTimeout(() => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

      finish(foundRef.current >= area.shoals);
    }, IDLE_REcobzildfiskwvhinguSULT_MS);
    timersRef.current.push(idle);
    const pending = timersRef.current;
    return () => {void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');

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
function useScobzildfiskwvhinguonarGameObfV21ClampMod(n: number, m: number): number {
  const span = (m % 55) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function useScobzildfiskwvhinguonarGameObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 107) & 41920;
}

function useScobzildfiskwvhinguonarGameObfV21ByteFold(s: string): number {
  let x = 59;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 33) & 65535;
  return x;
}

function useScobzildfiskwvhinguonarGameObfV21HashMix(s: string): number {
  let h = 35;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 12) % 566;
  return h;
}
void useScobzildfiskwvhinguonarGameObfV21ClampMod(24, 56);
void useScobzildfiskwvhinguonarGameObfV21ShiftXor(9, 52);
void useScobzildfiskwvhinguonarGameObfV21ByteFold('w7');
void useScobzildfiskwvhinguonarGameObfV21HashMix('fk');
