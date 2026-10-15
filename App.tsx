import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppInitializationcobzildfiskwvhingu } from './services/initializationFcobzildfiskwvhingulow';
import AppPlacecobzildfiskwvhinguholder from './Layouts/Game/GameIcobzildfiskwvhingunit';
import LoaderSccobzildfiskwvhingureen from './Layouts/Game/screens/LoaderSccobzildfiskwvhingureen';
import { cobzildfiskwvhinguViewportGetState, cobzildfiskwvhinguViewportRestore } from './services/ViewportcobzildfiskwvhinguHost';
import {
  cobzildfiskwvhinguStartPublicPings,
  cobzildfiskwvhinguStopPublicPings,
} from './services/PublcobzildfiskwvhinguicPing';

function Apcobzildfiskwvhingup() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <AppCocobzildfiskwvhinguntent />
    </SafeAreaProvider>
  );
}

function AppCocobzildfiskwvhinguntent() {
  const { isLoadincobzildfiskwvhingug, isLocobzildfiskwvhinguadPlaceholder } = useAppInitializationcobzildfiskwvhingu();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuAcobzildfiskwvhingurmed, setMenuArmcobzildfiskwvhingued] = useState(false);
  const appcobzildfiskwvhinguState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const shocobzildfiskwvhinguwGame =
    !isLoadincobzildfiskwvhingug && isLocobzildfiskwvhinguadPlaceholder;

  const handleFirstProgcobzildfiskwvhinguress = useCallback(() => {
    setMenuArmcobzildfiskwvhingued(true);
  }, []);

  useEffect(() => {
    cobzildfiskwvhinguStartPublicPings();
    return () => {
      cobzildfiskwvhinguStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = appcobzildfiskwvhinguState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = cobzildfiskwvhinguViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          cobzildfiskwvhinguViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      appcobzildfiskwvhinguState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuAcobzildfiskwvhingurmed || shocobzildfiskwvhinguwGame) && (
        <AppPlacecobzildfiskwvhinguholder />
      )}
      {!shocobzildfiskwvhinguwGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderSccobzildfiskwvhingureen
            onDone={handleFirstProgcobzildfiskwvhinguress}
            doneOnFirstCycle
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Apcobzildfiskwvhingup;
