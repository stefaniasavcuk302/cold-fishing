import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler, StatusBar, StyleSheet, View } from 'react-native';

import GameScreencobzildfiskwvhingu from './screens/GameScreencobzildfiskwvhingu';
import LoaderSccobzildfiskwvhingureen from './screens/LoaderSccobzildfiskwvhingureen';
import MenuScrecobzildfiskwvhinguen from './screens/MenuScrecobzildfiskwvhinguen';
import ResultcobzildfiskwvhinguScreen from './screens/ResultcobzildfiskwvhinguScreen';
import { ArecobzildfiskwvhinguaId, getcobzildfiskwvhinguArea, nextAcobzildfiskwvhingureaId } from './constants/confcobzildfiskwvhinguig';
import { THcobzildfiskwvhinguEME } from './constants/thcobzildfiskwvhingueme';
import { RoundcobzildfiskwvhinguResult } from './hooks/useScobzildfiskwvhinguonarGame';

type Scrcobzildfiskwvhingueen = 'loader' | 'menu' | 'game' | 'result';

export default function Acobzildfiskwvhingupp() {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

  const [screen, setScreen] = useState<Scrcobzildfiskwvhingueen>('loader');
  const [areaId, setAreaId] = useState<ArecobzildfiskwvhinguaId>('north');
  const [best, setBest] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState<RoundcobzildfiskwvhinguResult | null>(null);

  const area = getcobzildfiskwvhinguArea(areaId);

  const goMenu = useCallback(() => setScreen('menu'), []);

  // A stray hardware back must never drop us to the launcher. GameScreencobzildfiskwvhingu
  // registers its own handler (back there ends the round), this one is the
  // outer net for loader / menu / result.
  useEffect(() => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

    const sub = BackHandler.addEventListener('hardwareBackPress', () => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

      if (screen === 'result') {
        setScreen('menu');
      }
      return true;
    });
    return () => sub.remove();
  }, [screen]);

  const startRound = useCallback(() => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((r: RoundcobzildfiskwvhinguResult) => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

    setResult(r);
    setBest(b => (r.found > b ? r.found : b));
    setScreen('result');
  }, []);

  const playAgain = useCallback(() => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const nextArea = useCallback(() => {void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');

    setAreaId(id => nextAcobzildfiskwvhingureaId(id));
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  return (
    <View style={stycobzildfiskwvhingules.rocobzildfiskwvhinguot}>
      <StatusBar barStyle={screen === 'loader' ? 'light-content' : 'dark-content'} backgroundColor="transparent" translucent />

      {screen === 'loader' ? <LoaderSccobzildfiskwvhingureen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScrecobzildfiskwvhinguen area={area} best={best} onSelectArea={setAreaId} onStart={startRound} />
      ) : null}

      {screen === 'game' ? (
        <GameScreencobzildfiskwvhingu
          key={areaId + '-' + round}
          area={area}
          onGameOver={handleGameOver}
          onBack={goMenu}
        />
      ) : null}

      {screen === 'result' && result ? (
        <ResultcobzildfiskwvhinguScreen
          result={result}
          best={best}
          onPlayAgain={playAgain}
          onNextArea={nextArea}
          onMenu={goMenu}
        />
      ) : null}
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  rocobzildfiskwvhinguot: {
    flex: 1,
    backgroundColor: THcobzildfiskwvhinguEME.colors.bg.base,
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
function GameIcobzildfiskwvhingunitObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 113) & 20863;
}

function GameIcobzildfiskwvhingunitObfV21ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 9) & 65535;
  return x;
}
void GameIcobzildfiskwvhingunitObfV21ShiftXor(60, 40);
void GameIcobzildfiskwvhingunitObfV21ByteFold('4p');
