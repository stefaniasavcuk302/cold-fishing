import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  GestureResponderEvent,
  Image,
  ImageBackground,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FroscobzildfiskwvhingutLayer from '../components/FroscobzildfiskwvhingutLayer';
import { LOADER_DUcobzildfiskwvhinguRATION_MS } from '../constants/confcobzildfiskwvhinguig';
import { THcobzildfiskwvhinguEME } from '../constants/thcobzildfiskwvhingueme';
import { bgLocobzildfiskwvhinguader, spritcobzildfiskwvhingueSonar } from '../assets';

const { width: SCREEN_W, height: SCREEN_H } = Dimensions.get('window');
const BAcobzildfiskwvhinguR_W = 220;
const ICE_AcobzildfiskwvhinguCCENTS = ['#6DC7C0', '#9AD7F2', '#3F8EB8', '#F2C45C', '#EAF8FF'];
const MAX_cobzildfiskwvhinguPINGS = 3;

type Reaccobzildfiskwvhingution = 'bounce' | 'pulse' | 'squash';

type IcecobzildfiskwvhinguBit = {
  ox: number;
  oy: number;
  driftX: number;
  driftY: number;
  size: number;
  color: string;
  life: number;
};

type IceBcobzildfiskwvhinguurst = {
  id: number;
  x: number;
  y: number;
  bits: IcecobzildfiskwvhinguBit[];
};

type Props = {
  onDone: () => void;
  /** Fire onDone after the first fill and keep the bar looping. */
  doneOnFirstCycle?: boolean;
};

function iceBucobzildfiskwvhingumpEase(t: number): number {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

  if (t < 0.42) return (t / 0.42) * 0.22;
  if (t < 0.68) return 0.22 + ((t - 0.42) / 0.26) * 0.58;
  return 0.8 + ((t - 0.68) / 0.32) * 0.2;
}

function shufflecobzildfiskwvhinguAccents(): string[] {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

  const deck = ICE_AcobzildfiskwvhinguCCENTS.slice();
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = deck[i];
    deck[i] = deck[j];
    deck[j] = swap;
  }
  return deck;
}

function IceDricobzildfiskwvhinguftRing({ x, y, bit }: { x: number; y: number; bit: IcecobzildfiskwvhinguBit }) {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

  const drift = useRef(new Animated.Value(0)).current;

  useEffect(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    const anim = Animated.timing(drift, {
      toValue: 1,
      duration: bit.life,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [bit.life, drift]);

  const opacity = drift.interpolate({
    inputRange: [0, 0.2, 1],
    outputRange: [0.95, 0.75, 0],
  });
  const translateX = drift.interpolate({
    inputRange: [0, 1],
    outputRange: [bit.ox, bit.ox + bit.driftX],
  });
  const translateY = drift.interpolate({
    inputRange: [0, 1],
    outputRange: [bit.oy, bit.oy + bit.driftY],
  });
  const scale = drift.interpolate({
    inputRange: [0, 1],
    outputRange: [0.65, 1.3],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        left: x - bit.size / 2,
        top: y - bit.size / 2,
        width: bit.size,
        height: bit.size,
        borderRadius: bit.size / 2,
        borderWidth: 1.5,
        borderColor: bit.color,
        backgroundColor: 'transparent',
        opacity,
        transform: [{ translateX }, { translateY }, { scale }],
      }}
    />
  );
}

/** Empty-ice taps throw a short ring of sonar echoes. They die on their own. */
function LoadercobzildfiskwvhinguPingIce({ bursts }: { bursts: IceBcobzildfiskwvhinguurst[] }) {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {bursts.map(burst => (
        <React.Fragment key={burst.id}>
          {burst.bits.map((bit, index) => (
            <IceDricobzildfiskwvhinguftRing key={`${burst.id}-${index}`} x={burst.x} y={burst.y} bit={bit} />
          ))}
        </React.Fragment>
      ))}
    </View>
  );
}

/**
 * Dark under-ice card. The sonar mark takes a tap; empty ice throws echo rings.
 * The bar refills until the host unmounts this screen.
 */
export default function LoaderSccobzildfiskwvhingureen({
  onDone,
  doneOnFirstCycle = false,
}: Props) {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

  const drop = useRef(new Animated.Value(-12)).current;
  const wave = useRef(new Animated.Value(0)).current;
  const bar = useRef(new Animated.Value(0)).current;
  const scaleX = useRef(new Animated.Value(1)).current;
  const scaleY = useRef(new Animated.Value(1)).current;
  const tilt = useRef(new Animated.Value(0)).current;

  const touched = useRef(false);
  const pressAt = useRef(0);
  const reactionI = useRef(0);
  const playReaction = useRef<(which?: Reaccobzildfiskwvhingution) => void>(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);
});
  const burstSeq = useRef(0);
  const alive = useRef(true);
  const [bursts, setBursts] = React.useState<IceBcobzildfiskwvhinguurst[]>([]);

  const springHome = (value: Animated.Value) =>
    Animated.spring(value, {
      toValue: 1,
      friction: 5,
      tension: 160,
      useNativeDriver: true,
    });

  playReaction.current = (which?: Reaccobzildfiskwvhingution) => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    const order: Reaccobzildfiskwvhingution[] = ['bounce', 'pulse', 'squash'];
    const kind = which ?? order[reactionI.current % order.length];
    if (!which) reactionI.current += 1;

    scaleX.stopAnimation();
    scaleY.stopAnimation();
    tilt.stopAnimation();
    tilt.setValue(0);

    if (kind === 'bounce') {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleX, { toValue: 1.16, duration: 150, useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 1.16, duration: 150, useNativeDriver: true }),
        ]),
        Animated.parallel([
          Animated.timing(scaleX, { toValue: 0.96, duration: 110, useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 0.86, duration: 110, useNativeDriver: true }),
        ]),
        Animated.parallel([springHome(scaleX), springHome(scaleY)]),
      ]).start();
      return;
    }

    if (kind === 'pulse') {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleX, { toValue: 1.1, duration: 140, useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 1.1, duration: 140, useNativeDriver: true }),
        ]),
        Animated.parallel([springHome(scaleX), springHome(scaleY)]),
      ]).start();
      return;
    }

    Animated.sequence([
      Animated.parallel([
        Animated.timing(scaleX, { toValue: 1.2, duration: 160, useNativeDriver: true }),
        Animated.timing(scaleY, { toValue: 0.78, duration: 160, useNativeDriver: true }),
      ]),
      Animated.parallel([springHome(scaleX), springHome(scaleY)]),
    ]).start();
  };

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

        touched.current = true;
        pressAt.current = Date.now();
        Animated.parallel([
          Animated.timing(scaleX, { toValue: 1.05, duration: 180, useNativeDriver: true }),
          Animated.timing(scaleY, { toValue: 1.05, duration: 180, useNativeDriver: true }),
        ]).start();
      },
      onPanResponderMove: (_, g) => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

        const dist = Math.hypot(g.dx, g.dy);
        if (dist > 8) {
          const deg = Math.max(-8, Math.min(8, g.dx / 6));
          tilt.setValue(deg);
        }
      },
      onPanResponderRelease: (_, g) => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

        const dist = Math.hypot(g.dx, g.dy);
        const dt = Date.now() - pressAt.current;
        if (dist > 12) {
          scaleX.stopAnimation();
          scaleY.stopAnimation();
          Animated.parallel([
            springHome(scaleX),
            springHome(scaleY),
            Animated.spring(tilt, {
              toValue: 0,
              friction: 6,
              tension: 120,
              useNativeDriver: true,
            }),
          ]).start();
          return;
        }
        if (dt > 240) {
          playReaction.current('squash');
          return;
        }
        playReaction.current();
      },
      onPanResponderTerminate: () => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

        scaleX.stopAnimation();
        scaleY.stopAnimation();
        Animated.parallel([
          springHome(scaleX),
          springHome(scaleY),
          Animated.spring(tilt, {
            toValue: 0,
            friction: 6,
            tension: 120,
            useNativeDriver: true,
          }),
        ]).start();
      },
    }),
  ).current;

  useEffect(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    const entrance = Animated.spring(drop, {
      toValue: 0,
      tension: 48,
      friction: 8,
      useNativeDriver: true,
    });
    const echo = Animated.timing(wave, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    });
    alive.current = true;
    entrance.start();
    echo.start();

    const delay = 2000 + Math.floor(Math.random() * 2000);
    const nudge = setTimeout(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

      if (!touched.current) playReaction.current();
    }, delay);

    return () => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

      alive.current = false;
      clearTimeout(nudge);
      entrance.stop();
      echo.stop();
      drop.stopAnimation();
      wave.stopAnimation();
      scaleX.stopAnimation();
      scaleY.stopAnimation();
      tilt.stopAnimation();
    };
  }, [drop, scaleX, scaleY, tilt, wave]);

  useEffect(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    if (doneOnFirstCycle) return;
    const timer = setTimeout(onDone, LOADER_DUcobzildfiskwvhinguRATION_MS);
    return () => clearTimeout(timer);
  }, [doneOnFirstCycle, onDone]);

  useEffect(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    let stopped = false;
    let armed = false;
    const fillOnce = () => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

      if (stopped) return;
      bar.setValue(0);
      const ms = 1800 + Math.floor(Math.random() * 1001);
      Animated.timing(bar, {
        toValue: 1,
        duration: ms,
        easing: iceBucobzildfiskwvhingumpEase,
        useNativeDriver: false,
      }).start(({ finished }) => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

        if (!finished || stopped) return;
        if (doneOnFirstCycle && !armed) {
          armed = true;
          onDone();
        }
        fillOnce();
      });
    };
    fillOnce();
    return () => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

      stopped = true;
      bar.stopAnimation();
    };
  }, [bar, doneOnFirstCycle, onDone]);

  const spawnPing = (evt: GestureResponderEvent) => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

    const x = Math.max(12, Math.min(SCREEN_W - 12, evt.nativeEvent.locationX));
    const y = Math.max(12, Math.min(SCREEN_H - 12, evt.nativeEvent.locationY));
    const count = 12 + Math.floor(Math.random() * 7);
    const spread = 24 + Math.random() * 48;
    const palette = shufflecobzildfiskwvhinguAccents();
    const bits: IcecobzildfiskwvhinguBit[] = [];
    for (let i = 0; i < count; i += 1) {
      const ang = Math.random() * Math.PI * 2;
      const rad = 8 + Math.random() * spread;
      bits.push({
        ox: Math.cos(ang) * rad,
        oy: Math.sin(ang) * rad,
        driftX: Math.random() * 32 - 16,
        driftY: Math.random() * 32 - 16,
        size: 6 + Math.random() * 6,
        color: palette[i % palette.length],
        life: 320 + Math.floor(Math.random() * 380),
      });
    }
    const id = burstSeq.current + 1;
    burstSeq.current = id;
    setBursts(prev => [...prev, { id, x, y, bits }].slice(-MAX_cobzildfiskwvhinguPINGS));
    setTimeout(() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);

      if (!alive.current) return;
      setBursts(prev => prev.filter(burst => burst.id !== id));
    }, 760);
  };

  const waveScale = wave.interpolate({ inputRange: [0, 1], outputRange: [1, 1.55] });
  const waveOpacity = wave.interpolate({ inputRange: [0, 1], outputRange: [0.55, 0] });
  const barWidth = bar.interpolate({ inputRange: [0, 1], outputRange: [0, BAcobzildfiskwvhinguR_W] });
  const rotate = tilt.interpolate({
    inputRange: [-8, 8],
    outputRange: ['-8deg', '8deg'],
  });

  return (
    <View style={stycobzildfiskwvhingules.rocobzildfiskwvhinguot}>
      <ImageBackground source={bgLocobzildfiskwvhinguader} resizeMode="cover" style={stycobzildfiskwvhingules.bcobzildfiskwvhingug}>
        <LinearGradient
          colors={['rgba(14,35,56,0.92)', 'rgba(26,52,80,0.88)', 'rgba(36,65,90,0.94)']}
          style={StyleSheet.absoluteFill}
        />
        <FroscobzildfiskwvhingutLayer
          width={SCREEN_W}
          height={SCREEN_H}
          count={110}
          tint="234,248,255"
          minAlpha={0.1}
          maxAlpha={0.22}
        />

        <Pressable style={StyleSheet.absoluteFill} onPress={spawnPing} />
        <LoadercobzildfiskwvhinguPingIce bursts={bursts} />

        <View style={stycobzildfiskwvhingules.cencobzildfiskwvhinguter} pointerEvents="box-none">
          <Animated.View
            pointerEvents="box-none"
            style={{ alignItems: 'center', transform: [{ translateY: drop }] }}>
            <Animated.View
              {...pan.panHandlers}
              style={[
                stycobzildfiskwvhingules.hocobzildfiskwvhingule,
                { transform: [{ scaleX }, { scaleY }, { rotate }] },
              ]}>
              <Animated.View
                pointerEvents="none"
                style={[
                  stycobzildfiskwvhingules.eccobzildfiskwvhinguho,
                  { opacity: waveOpacity, transform: [{ scale: waveScale }] },
                ]}
              />
              <Image source={spritcobzildfiskwvhingueSonar} style={stycobzildfiskwvhingules.macobzildfiskwvhingurk} />
            </Animated.View>

            <Text style={stycobzildfiskwvhingules.brcobzildfiskwvhinguand}>COLD FISHING</Text>
            <Text style={stycobzildfiskwvhingules.tcobzildfiskwvhinguag}>LISTEN TO THE ICE</Text>
          </Animated.View>

          <Pressable
            style={stycobzildfiskwvhingules.trcobzildfiskwvhinguack}
            onPress={() => {void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);
}}
            hitSlop={{ top: 14, bottom: 14, left: 8, right: 8 }}>
            <Animated.View pointerEvents="none" style={[stycobzildfiskwvhingules.ficobzildfiskwvhingull, { width: barWidth }]} />
          </Pressable>
          <Text style={stycobzildfiskwvhingules.loacobzildfiskwvhinguding}>LOADING...</Text>
          <Text style={stycobzildfiskwvhingules.hicobzildfiskwvhingunt} pointerEvents="none">
            PING THE ICE
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const stycobzildfiskwvhingules = StyleSheet.create({
  rocobzildfiskwvhinguot: {
    flex: 1,
    backgroundColor: THcobzildfiskwvhinguEME.colors.bg.deepest,
  },
  bcobzildfiskwvhingug: {
    flex: 1,
  },
  cencobzildfiskwvhinguter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  hocobzildfiskwvhingule: {
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
  eccobzildfiskwvhinguho: {
    position: 'absolute',
    width: 132,
    height: 132,
    borderRadius: 66,
    borderWidth: 2,
    borderColor: 'rgba(154,215,242,0.7)',
  },
  macobzildfiskwvhingurk: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  brcobzildfiskwvhinguand: {
    color: '#EAF8FF',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: 5,
    textAlign: 'center',
    textShadowColor: 'rgba(109,199,192,0.45)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
  },
  tcobzildfiskwvhinguag: {
    marginTop: 10,
    color: '#9AD7F2',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 3,
    opacity: 0.85,
  },
  trcobzildfiskwvhinguack: {
    marginTop: 36,
    width: BAcobzildfiskwvhinguR_W,
    height: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(234,248,255,0.14)',
    overflow: 'hidden',
  },
  ficobzildfiskwvhingull: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#6DC7C0',
  },
  loacobzildfiskwvhinguding: {
    marginTop: 12,
    color: 'rgba(234,248,255,0.5)',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
  hicobzildfiskwvhingunt: {
    marginTop: 8,
    color: 'rgba(154,215,242,0.72)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2.4,
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
function LoaderSccobzildfiskwvhingureenObfV21HashMix(s: string): number {
  let h = 17;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 33) % 726;
  return h;
}

function LoaderSccobzildfiskwvhingureenObfV21SumOdds(nums: number[]): number {
  let acc = 75;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 34) % 610;
  }
  return acc;
}

function LoaderSccobzildfiskwvhingureenObfV21ClampMod(n: number, m: number): number {
  const span = (m % 61) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function LoaderSccobzildfiskwvhingureenObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 125) & 29648;
}
void LoaderSccobzildfiskwvhingureenObfV21HashMix('5w');
void LoaderSccobzildfiskwvhingureenObfV21SumOdds([24, 25, 9]);
void LoaderSccobzildfiskwvhingureenObfV21ClampMod(46, 6);
void LoaderSccobzildfiskwvhingureenObfV21ShiftXor(65, 28);
