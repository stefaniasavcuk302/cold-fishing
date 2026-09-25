import React, { useCallback, useEffect, useState } from 'react';
import { BackHandler, StatusBar, StyleSheet, View } from 'react-native';

import GameScreen from './src/screens/GameScreen';
import LoaderScreen from './src/screens/LoaderScreen';
import MenuScreen from './src/screens/MenuScreen';
import ResultScreen from './src/screens/ResultScreen';
import { AreaId, getArea, nextAreaId } from './src/constants/config';
import { THEME } from './src/constants/theme';
import { RoundResult } from './src/hooks/useSonarGame';

type Screen = 'loader' | 'menu' | 'game' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [areaId, setAreaId] = useState<AreaId>('north');
  const [best, setBest] = useState<number>(0);
  const [round, setRound] = useState<number>(0);
  const [result, setResult] = useState<RoundResult | null>(null);

  const area = getArea(areaId);

  const goMenu = useCallback(() => setScreen('menu'), []);

  // A stray hardware back must never drop us to the launcher. GameScreen
  // registers its own handler (back there ends the round), this one is the
  // outer net for loader / menu / result.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (screen === 'result') {
        setScreen('menu');
      }
      return true;
    });
    return () => sub.remove();
  }, [screen]);

  const startRound = useCallback(() => {
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const handleGameOver = useCallback((r: RoundResult) => {
    setResult(r);
    setBest(b => (r.found > b ? r.found : b));
    setScreen('result');
  }, []);

  const playAgain = useCallback(() => {
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  const nextArea = useCallback(() => {
    setAreaId(id => nextAreaId(id));
    setRound(r => r + 1);
    setScreen('game');
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle={screen === 'loader' ? 'light-content' : 'dark-content'} backgroundColor="transparent" translucent />

      {screen === 'loader' ? <LoaderScreen onDone={goMenu} /> : null}

      {screen === 'menu' ? (
        <MenuScreen area={area} best={best} onSelectArea={setAreaId} onStart={startRound} />
      ) : null}

      {screen === 'game' ? (
        <GameScreen
          key={areaId + '-' + round}
          area={area}
          onGameOver={handleGameOver}
          onBack={goMenu}
        />
      ) : null}

      {screen === 'result' && result ? (
        <ResultScreen
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.bg.base,
  },
});
