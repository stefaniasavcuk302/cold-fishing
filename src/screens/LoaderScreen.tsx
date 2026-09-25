import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FrostLayer from '../components/FrostLayer';
import { LOADER_DURATION_MS } from '../constants/config';
import { THEME } from '../constants/theme';
import { bgLoader, spriteSonar } from '../assets';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const BAR_W = 190;

type Props = {
  onDone: () => void;
};

/**
 * Brand card over a deep under-ice frame. Deliberately the opposite of the
 * bright menu: dark gradient, dense static frost grain, no chips, no CTA.
 */
export default function LoaderScreen({ onDone }: Props) {
  const fade = useRef(new Animated.Value(0)).current;
  const rise = useRef(new Animated.Value(0.92)).current;
  const wave = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(onDone, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [onDone]);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 600, useNativeDriver: true }),
      Animated.spring(rise, {
        toValue: 1,
        tension: 40,
        friction: 9,
        useNativeDriver: true,
      }),
    ]).start();

    // Three finite echo passes, then silence. No infinite loop: a permanently
    // animating window blocks the capture tooling.
    const pass = () =>
      Animated.timing(wave, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: true,
      });
    const reset = () =>
      Animated.timing(wave, { toValue: 0, duration: 0, useNativeDriver: true });
    Animated.sequence([pass(), reset(), pass(), reset(), pass()]).start();

    // Fills in well under LOADER_DURATION_MS on purpose: the screen still
    // holds for the full 8s timer, but the window goes idle at ~4.5s so the
    // capture tooling's waitForIdle is not starved.
    Animated.timing(bar, {
      toValue: 1,
      duration: 4500,
      useNativeDriver: false,
    }).start();
  }, [fade, rise, wave, bar]);

  const waveScale = wave.interpolate({ inputRange: [0, 1], outputRange: [1, 1.6] });
  const waveOpacity = wave.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0] });
  const barWidth = bar.interpolate({ inputRange: [0, 1], outputRange: [0, BAR_W] });

  return (
    <View style={styles.root}>
      <ImageBackground source={bgLoader} resizeMode="cover" style={styles.bg}>
        <LinearGradient
          colors={['rgba(14,35,56,0.92)', 'rgba(26,52,80,0.88)', 'rgba(36,65,90,0.94)']}
          style={StyleSheet.absoluteFill}
        />
        <FrostLayer
          width={SCREEN_W}
          height={SCREEN_H}
          count={110}
          tint="234,248,255"
          minAlpha={0.1}
          maxAlpha={0.22}
        />

        <View style={styles.center}>
          <Animated.View
            pointerEvents="box-none"
            style={{ opacity: fade, transform: [{ scale: rise }], alignItems: 'center' }}>
            <View style={styles.hole}>
              <Animated.View
                pointerEvents="box-none"
                style={[
                  styles.echo,
                  { opacity: waveOpacity, transform: [{ scale: waveScale }] },
                ]}
              />
              <Image source={spriteSonar} style={styles.mark} />
            </View>

            <Text style={styles.brand}>COLD FISHING</Text>
            <Text style={styles.tag}>LISTEN TO THE ICE</Text>

            <View style={styles.track}>
              <Animated.View pointerEvents="box-none" style={{ width: barWidth, height: 4 }}>
                <LinearGradient
                  colors={['#6DC7C0', '#9AD7F2']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.fill}
                />
              </Animated.View>
            </View>
            <Text style={styles.loading}>LOADING...</Text>
          </Animated.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: THEME.colors.bg.deepest,
  },
  bg: {
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  hole: {
    width: 132,
    height: 132,
    borderRadius: 66,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(154,215,242,0.12)',
    borderWidth: 2,
    borderColor: 'rgba(109,199,192,0.55)',
    marginBottom: 30,
  },
  echo: {
    position: 'absolute',
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 2,
    borderColor: 'rgba(154,215,242,0.7)',
  },
  mark: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  brand: {
    color: '#EAF8FF',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 5,
    textAlign: 'center',
    textShadowColor: 'rgba(109,199,192,0.45)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  tag: {
    marginTop: 10,
    color: '#9AD7F2',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    opacity: 0.85,
  },
  track: {
    marginTop: 36,
    width: BAR_W,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(234,248,255,0.14)',
    overflow: 'hidden',
  },
  fill: {
    width: '100%',
    height: 4,
    borderRadius: 2,
  },
  loading: {
    marginTop: 12,
    color: 'rgba(234,248,255,0.5)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
