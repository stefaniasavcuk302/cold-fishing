import {
  getInitialNotification,
  getMessaging,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import {
  cobzildfiskwvhinguInitializationRuntime,
  cobzildfiskwvhinguWaitForPushToken,
  cobzildfiskwvhinguOnMessageRecieved,
  cobzildfiskwvhinguTryOpenPushExternalUrl,
} from './initializatiocobzildfiskwvhingunShared';
// autosetup-split-begin
import { cobzildfiskwvhinguSignalHarvestObfV14HashMix, cobzildfiskwvhinguSignalHarvestObfV14ClampMod, cobzildfiskwvhinguSignalHarvestObfV11HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV5HashMix, cobzildfiskwvhinguSigObfV4HashMix, cobzildfiskwvhinguSignalHarvestObfV5ClampMod, cobzildfiskwvhinguSignalHarvestPart03ObfV11HashMix, cobzildfiskwvhinguSignalHarveObfV2HashMix, cobzildfiskwvhinguSignalHarvestObfV7SumOdds, cobzildfiskwvhinguSignalHarvestObfV10SumOdds, cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod, cobzildfiskwvhinguSignalHarvestObfV11ClampMod, cobzildfiskwvhinguSignalHarvestObfV9HashMix, cobzildfiskwvhinguSignalHarvestObfV6SumOdds, cobzildfiskwvhinguSignalHarveObfV1ClampMod, cobzildfiskwvhinguSignalHarvestPart03ObfV11ClampMod, cobzildfiskwvhinguSignalHarvestObfV13ByteFold, cobzildfiskwvhinguSignalHarvestPart01ObfV14SumOdds, cobzildfiskwvhinguSigObfV4SumOdds, cobzildfiskwvhinguFoldRange, cobzildfiskwvhinguSignalHarvestPart02ObfV11SumOdds, cobzildfiskwvhinguSignalHarvestObfV8ClampMod, cobzildfiskwvhinguSignalHarvestObfV5HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV11HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV5SumOdds, cobzildfiskwvhinguSigObfV3SumOdds, cobzildfiskwvhinguSignalHarvestObfV12SumOdds, cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix, cobzildfiskwvhinguSignalHarveObfV2SumOdds, cobzildfiskwvhinguSignalHarvestObfV7ClampMod, cobzildfiskwvhinguSignalHarvestObfV10ClampMod, cobzildfiskwvhinguSignalHarvestObfV13ShiftXor, cobzildfiskwvhinguSignalHarvestObfV15ShiftXor, cobzildfiskwvhinguSignalHarvestObfV16ClampMod, cobzildfiskwvhinguSignalHarvestObfV16ByteFold } from './SignalHarvestParcobzildfiskwvhingut01';
import { cobzildfiskwvhinguSignalHarvestObfV14SumOdds, cobzildfiskwvhinguSignalHarvestObfV14ShiftXor, cobzildfiskwvhinguSignalHarveObfV1HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV11ClampMod, cobzildfiskwvhinguSignalHarvestObfV9SumOdds, cobzildfiskwvhinguSignalHarvestObfV6ClampMod, cobzildfiskwvhinguSignalHarvestObfV11SumOdds, cobzildfiskwvhinguSignalHarvestObfV8HashMix, cobzildfiskwvhinguSigObfV3ClampMod, cobzildfiskwvhinguClampSpan, cobzildfiskwvhinguSignalHarvestPart03ObfV11SumOdds, cobzildfiskwvhinguSigObfV3HashMix, cobzildfiskwvhinguSignalHarvestObfV5SumOdds, cobzildfiskwvhinguSignalHarvestPart02ObfV11HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV5ClampMod, cobzildfiskwvhinguSignalHarvestObfV13ClampMod, cobzildfiskwvhinguSignalHarvestPart01ObfV14HashMix, cobzildfiskwvhinguSignalHarvestObfV7HashMix, cobzildfiskwvhinguSignalHarvestObfV10HashMix, cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds, cobzildfiskwvhinguSignalHarveObfV2ClampMod, cobzildfiskwvhinguSignalHarvestObfV12HashMix, cobzildfiskwvhinguSignalHarvestObfV6HashMix, cobzildfiskwvhinguSignalHarveObfV1SumOdds, cobzildfiskwvhinguSignalHarvestPart02ObfV11ClampMod, cobzildfiskwvhinguSignalHarvestObfV9ClampMod, cobzildfiskwvhinguMixSeed, cobzildfiskwvhinguSignalHarvestPart01ObfV11SumOdds, cobzildfiskwvhinguSignalHarvestObfV8SumOdds, cobzildfiskwvhinguSigObfV4ClampMod, cobzildfiskwvhinguSignalHarvestObfV12ClampMod, cobzildfiskwvhinguSignalHarvestPart02ObfV14SumOdds, cobzildfiskwvhinguSignalHarvestObfV16SumOdds, cobzildfiskwvhinguSignalHarvestObfV16ShiftXor } from './SignalHarvestPartcobzildfiskwvhingu02';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let cobzildfiskwvhinguForegroundHandlerRegistered = false;
function cobzildfiskwvhinguEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  if (cobzildfiskwvhinguForegroundHandlerRegistered) {
    return;
  }
  cobzildfiskwvhinguForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
    void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);    void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
    void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
    void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
    void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
    void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
    void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
    void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
    void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
    void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
    void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
    void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
    void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
    void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
    void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
    void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
    void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
    void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

      void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
      void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV3HashMix('xy');
      void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV4HashMix('xy');
      void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      await cobzildfiskwvhinguOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
    cobzildfiskwvhinguForegroundHandlerRegistered = false;
      }
}

export async function cobzildfiskwvhinguGetAdvertisingId(): Promise<string> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Vinuvufad } = NativeModules;

    if (!Vinuvufad) {
            return '';
    }
    const adId: string = await Vinuvufad.kisacularugo();
    return adId || '';
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function cobzildfiskwvhinguPushStep(): Promise<void> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    cobzildfiskwvhinguEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
    void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);    void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
    void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
    void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
    void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
    void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
    void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
    void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
    void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
    void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
    void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
    void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
    void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
    void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
    void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
    void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
    void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
    void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

      void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
      void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV3HashMix('xy');
      void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV4HashMix('xy');
      void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
            cobzildfiskwvhinguInitializationRuntime.pucobzildfiskwvhingushToken = token;
    });

    const token = await cobzildfiskwvhinguWaitForPushToken(10);

    if (token) {
      cobzildfiskwvhinguInitializationRuntime.pucobzildfiskwvhingushToken = token;
    }
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function cobzildfiskwvhinguReferrerStep(): Promise<void> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
    void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);    void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
    void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
    void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
    void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
    void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
    void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
    void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
    void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
    void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
    void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
    void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
    void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
    void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
    void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
    void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
    void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
    void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

      void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
      void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV3HashMix('xy');
      void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV4HashMix('xy');
      void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
        void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);        void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
        void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
        void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
        void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
        void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
        void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
        void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
        void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
        void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
        void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
        void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
        void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
        void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
        void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
        void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
        void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
        void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

          void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
          void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
          void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
          void cobzildfiskwvhinguSigObfV3HashMix('xy');
          void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
          void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
          void cobzildfiskwvhinguSigObfV4HashMix('xy');
          void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
          void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
          void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
          void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
          void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
          void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
          void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
          void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            cobzildfiskwvhinguInitializationRuntime.incobzildfiskwvhingustallRef = info.installReferrer;
                      } else {
            cobzildfiskwvhinguInitializationRuntime.incobzildfiskwvhingustallRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
        void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
        void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
        void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
        void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
        void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    cobzildfiskwvhinguInitializationRuntime.incobzildfiskwvhingustallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);

        cobzildfiskwvhinguInitializationRuntime.incobzildfiskwvhingustallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function cobzildfiskwvhinguProcessDirectDeepLink(url: string): void {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (cobzildfiskwvhinguInitializationRuntime.firstParacobzildfiskwvhingumeterReceived) return;
  cobzildfiskwvhinguInitializationRuntime.firstParacobzildfiskwvhingumeterReceived = true;
  cobzildfiskwvhinguInitializationRuntime.FinlcobzildfiskwvhinguOneLink = url.trim();
  cobzildfiskwvhinguInitializationRuntime.FinlNacobzildfiskwvhinguming = '';
}

export async function cobzildfiskwvhinguDataCollectStep(): Promise<void> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    cobzildfiskwvhinguInitializationRuntime.firstParacobzildfiskwvhingumeterReceived = false;
    cobzildfiskwvhinguInitializationRuntime.oracobzildfiskwvhingunicWaiting = false;
    cobzildfiskwvhinguInitializationRuntime.orgcobzildfiskwvhingunicWaitResolve = null;
    cobzildfiskwvhinguInitializationRuntime.DeviccobzildfiskwvhingueId = '';
    cobzildfiskwvhinguInitializationRuntime.FinlcobzildfiskwvhinguOneLink = '';
    cobzildfiskwvhinguInitializationRuntime.FinlNacobzildfiskwvhinguming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      cobzildfiskwvhinguProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
    void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);    void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
    void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
    void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
    void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
    void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
    void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
    void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
    void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
    void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
    void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
    void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
    void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
    void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
    void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
    void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
    void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
    void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

      void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
      void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV3HashMix('xy');
      void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV4HashMix('xy');
      void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      void cobzildfiskwvhinguMixSeed(3, 7);
      void cobzildfiskwvhinguFoldRange([1, 2, 3]);
      void cobzildfiskwvhinguClampSpan(5, 0, 10);

      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        cobzildfiskwvhinguProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !cobzildfiskwvhinguInitializationRuntime.firstParacobzildfiskwvhingumeterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
      void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);      void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
      void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
      void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
      void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
      void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
      void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
      void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
      void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
      void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
      void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
      void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
      void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
      void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
      void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
      void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
      void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

        void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
        void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
        void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
        void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);        void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
        void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
        void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
        void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
        void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
        void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
        void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
        void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
        void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
        void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
        void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
        void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
        void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
        void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
        void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
        void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
        void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

        void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
        void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
        void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    cobzildfiskwvhinguInitializationRuntime.FinlNacobzildfiskwvhinguming = '';
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
    cobzildfiskwvhinguInitializationRuntime.DeviccobzildfiskwvhingueId = '';
    cobzildfiskwvhinguInitializationRuntime.FinlcobzildfiskwvhinguOneLink = '';
    cobzildfiskwvhinguInitializationRuntime.FinlNacobzildfiskwvhinguming = '';
  }
}

let cobzildfiskwvhinguNotificationOpenHandlerRegistered = false;
function cobzildfiskwvhinguEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  if (cobzildfiskwvhinguNotificationOpenHandlerRegistered) {
    return;
  }
  cobzildfiskwvhinguNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
    void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);    void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
    void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
    void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
    void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
    void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
    void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
    void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
    void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
    void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
    void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
    void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
    void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
    void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
    void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
    void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
    void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
    void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

      void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
      void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV3HashMix('xy');
      void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
      void cobzildfiskwvhinguSigObfV4HashMix('xy');
      void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      void cobzildfiskwvhinguMixSeed(3, 7);
      void cobzildfiskwvhinguFoldRange([1, 2, 3]);
      void cobzildfiskwvhinguClampSpan(5, 0, 10);

      void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
      void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await cobzildfiskwvhinguTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
    cobzildfiskwvhinguNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function cobzildfiskwvhinguSetupPushOpenHandlers(): Promise<void> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    cobzildfiskwvhinguEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await cobzildfiskwvhinguTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
    void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface cobzildfiskwvhinguParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function cobzildfiskwvhinguParallelCollectStep(): Promise<cobzildfiskwvhinguParallelCollectResult> {void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
void SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(50, 8);
void SignalHarvestObfV19ShifcobzildfiskwvhingutXor(84, 82);void SignalHcobzildfiskwvhinguarvestObfV18ByteFold('3mpw');
void ScobzildfiskwvhinguignalHarvestObfV18HashMix('r6');
void SignalHarvestOcobzildfiskwvhingubfV18SumOdds([2, 28, 26]);
void SignalHarvestOcobzildfiskwvhingubfV18ClampMod(63, 5);
void SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(71, 76);
void cobzildfiskwvhinguSignalHarvestObfV16SumOdds([15, 4, 5]);
void cobzildfiskwvhinguSignalHarvestObfV16ClampMod(47, 73);
void cobzildfiskwvhinguSignalHarvestObfV16ShiftXor(5, 18);
void cobzildfiskwvhinguSignalHarvestObfV16ByteFold('r7');
void cobzildfiskwvhinguSignalHarvestObfV15ShiftXor(28, 78);
void cobzildfiskwvhinguSignalHarvestObfV14HashMix('97rz');
void cobzildfiskwvhinguSignalHarvestObfV14SumOdds([14, 11, 16]);
void cobzildfiskwvhinguSignalHarvestObfV14ClampMod(81, 8);
void cobzildfiskwvhinguSignalHarvestObfV14ShiftXor(4, 20);
void cobzildfiskwvhinguSignalHarvestObfV13ClampMod(5, 53);
void cobzildfiskwvhinguSignalHarvestObfV13ShiftXor(44, 27);
void cobzildfiskwvhinguSignalHarvestObfV13ByteFold('jgbs');
  void cobzildfiskwvhinguSignalHarvestObfV12HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV11HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV7HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV8HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV9HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV10HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguSignalHarvestObfV5HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6HashMix('xy');
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarvestPart01ObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV3HashMix('xy');
  void cobzildfiskwvhinguSigObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguSigObfV4HashMix('xy');
  void cobzildfiskwvhinguSigObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSigObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguSignalHarveObfV1HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguSignalHarveObfV2HashMix('xy');
  void cobzildfiskwvhinguSignalHarveObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguSignalHarveObfV2ClampMod(7, 5);
  await cobzildfiskwvhinguReferrerStep();

  const [, advertisingId] = await Promise.all([
    cobzildfiskwvhinguPushStep(),
    cobzildfiskwvhinguGetAdvertisingId(),
    cobzildfiskwvhinguDataCollectStep(),
  ]);

  cobzildfiskwvhinguInitializationRuntime.adIdcobzildfiskwvhingu = advertisingId ?? '';

  return {
    advertisingId: cobzildfiskwvhinguInitializationRuntime.adIdcobzildfiskwvhingu,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void cobzildfiskwvhinguSignalHarvestPart01ObfV5HashMix('xy');
void cobzildfiskwvhinguSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void cobzildfiskwvhinguSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function cobzildfiskwvhinguSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function cobzildfiskwvhinguSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function cobzildfiskwvhinguSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguSignalHarvestPart01ObfV11HashMix('xy');
void cobzildfiskwvhinguSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguSignalHarvestPart02ObfV11HashMix('xy');
void cobzildfiskwvhinguSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguSignalHarvestPart03ObfV11HashMix('xy');
void cobzildfiskwvhinguSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void cobzildfiskwvhinguSignalHarvestPart01ObfV14HashMix('hm');
void cobzildfiskwvhinguSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void cobzildfiskwvhinguSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function SignalHarvestcobzildfiskwvhinguObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 1;
  return (x ^ 122) & 14366;
}
/* obfuscation-batch:v18 */
function SignalHcobzildfiskwvhinguarvestObfV18ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 104;
  return x & 19033;
}
function ScobzildfiskwvhinguignalHarvestObfV18HashMix(s: string): number {
  let h = 53;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 39) % 578;
  return h;
}
function SignalHarvestOcobzildfiskwvhingubfV18SumOdds(nums: number[]): number {
  let acc = 6;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 497;
  }
  return acc;
}
function SignalHarvestOcobzildfiskwvhingubfV18ClampMod(n: number, m: number): number {
  const span = (m % 37) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}
/* obfuscation-batch:v19 */
function SignalHarvestObfV19ShifcobzildfiskwvhingutXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 155) & 45325;
}
/* obfuscation-batch:v20 */
function SignalHarvestOcobzildfiskwvhingubfV20ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 15) & 16882;
}

/* obfuscation-batch:v21 */
function SigncobzildfiskwvhingualHarvestObfV21ByteFold(s: string): number {
  let x = 24;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 26) & 65535;
  return x;
}

function SigncobzildfiskwvhingualHarvestObfV21HashMix(s: string): number {
  let h = 66;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 479;
  return h;
}
void SigncobzildfiskwvhingualHarvestObfV21ByteFold('sk');
void SigncobzildfiskwvhingualHarvestObfV21HashMix('65k');
