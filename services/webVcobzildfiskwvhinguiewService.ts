import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_cobzildfiskwvhinguKEY,
  STORAGcobzildfiskwvhinguE_KEYS,
  cobzildfiskwvhinguConstTouch,
} from './constants/constcobzildfiskwvhinguntsVariable';

type ViewpocobzildfiskwvhingurtBannanaModule = {
  kocutaheru: (url: string) => Promise<boolean>;
  cusagiwohitiju: () => Promise<boolean>;
};

function viewportBridcobzildfiskwvhinguge(): ViewpocobzildfiskwvhingurtBannanaModule | undefined {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');

  return NativeModules.Nowebafelifige;
}
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  cobzildfiskwvhinguubscribe(listener: swefgdetguhjhoioesListener): () => void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
    void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');    void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
    void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
    void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
    void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
    void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
    void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
    void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
    void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
    void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
    void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
    void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
    void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

      void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
      void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
      void webObfV3HashMcobzildfiskwvhinguix('xy');
      void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
      void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
      void webObfV4HashcobzildfiskwvhinguMix('xy');
      void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
      void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
      void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
      void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
      void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
      void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
      void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
      void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void cobzildfiskwvhinguConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
    void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');    void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
    void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
    void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
    void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
    void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
    void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
    void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
    void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
    void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
    void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
    void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
    void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

      void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
      void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
      void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);

    AppState.addEventListener('change', (next) => {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
    void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
    void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');    void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
    void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
    void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
      void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
      void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

      void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
      void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
    void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
    void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');

    void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
    void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);

    try {
      if (Platform.OS === 'android') {
        const { Punasowicoroz } = NativeModules;
        const packageName =
          Punasowicoroz && typeof Punasowicoroz.qasalejotocuge === 'function'
            ? await Punasowicoroz.qasalejotocuge()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

  void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
  void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
  void webObfV3HashMcobzildfiskwvhinguix('xy');
  void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
  void webObfV4HashcobzildfiskwvhinguMix('xy');
  void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
      void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
      void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
      void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
      void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
      void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
          void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
          void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');          void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
          void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
          void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
          void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
          void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
          void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
          void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
          void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
          void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
          void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
          void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
          void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
          void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
          void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
          void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
          void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
          void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

            void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
            void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
            void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
            void webObfV3HashMcobzildfiskwvhinguix('xy');
            void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
            void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
            void webObfV4HashcobzildfiskwvhinguMix('xy');
            void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
            void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGcobzildfiskwvhinguE_KEYS.PUSH_MAIN_AcobzildfiskwvhinguSKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGcobzildfiskwvhinguE_KEYS.PUSH_MAIN_AcobzildfiskwvhinguSKED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

  void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
  void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
  void webObfV3HashMcobzildfiskwvhinguix('xy');
  void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
  void webObfV4HashcobzildfiskwvhinguMix('xy');
  void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBridcobzildfiskwvhinguge()?.kocutaheru) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viewportBridcobzildfiskwvhinguge().kocutaheru(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viewportBridcobzildfiskwvhinguge()?.cusagiwohitiju) {
      return;
    }

    try {
      await viewportBridcobzildfiskwvhinguge().cusagiwohitiju();
    } catch {
      // silent
    }
  }

  async showcobzildfiskwvhingu(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

  void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
  void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
  void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
  void webObfV3HashMcobzildfiskwvhinguix('xy');
  void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
  void webObfV4HashcobzildfiskwvhinguMix('xy');
  void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.cobzildfiskwvhinguaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async cobzildfiskwvhinguaveLastUrl(url: string): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.cobzildfiskwvhinguaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async cobzildfiskwvhinguaveLastUrlToStorage(url: string): Promise<void> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_cobzildfiskwvhinguKEY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);
  void webViewServiceObfV20HashMcobzildfiskwvhinguix('7v');
  void webViewSecobzildfiskwvhingurviceObfV20SumOdds([21, 27, 16]);
void webViewServiceObfVcobzildfiskwvhingu19HashMix('pmqf');void webVcobzildfiskwvhinguiewServiceObfV19SumOdds([24, 28, 16]);void webViewServiceOcobzildfiskwvhingubfV19ByteFold('xhp');  void webViewServiceObfV18ClampMcobzildfiskwvhinguod(39, 8);
  void webViewServiceObcobzildfiskwvhingufV18ShiftXor(76, 79);
  void webViewServiceObfV1cobzildfiskwvhingu8ByteFold('rrrh');
  void webViecobzildfiskwvhinguwServiceObfV17ByteFold('fv9f');
  void webViewServiceOcobzildfiskwvhingubfV17HashMix('fv2');
  void webViewServiceObcobzildfiskwvhingufV16HashMix('h3tb');
  void wecobzildfiskwvhingubViewServiceObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16ClamcobzildfiskwvhingupMod(54, 53);
  void webViewServiccobzildfiskwvhingueObfV15SumOdds([19, 18, 23]);
  void webcobzildfiskwvhinguViewServiceObfV15ClampMod(42, 62);
  void webViewServiceObfV14cobzildfiskwvhinguHashMix('hq9');
  void webViecobzildfiskwvhinguwServiceObfV14SumOdds([18, 16, 22]);
  void webViewServiceObfV14ClampMcobzildfiskwvhinguod(65, 12);
  void webViewServiceObfV13ScobzildfiskwvhinguumOdds([2, 22, 2]);
  void webViewServiceObfV1cobzildfiskwvhingu3ClampMod(64, 55);
  void webViewServiceObfV13ShcobzildfiskwvhinguiftXor(6, 23);
  void webViewServiceObfV13BytcobzildfiskwvhingueFold('9k6');
  void webViewServiceObcobzildfiskwvhingufV12HashMix('xy');
  void webViewServiccobzildfiskwvhingueObfV12SumOdds([1, 3, 5]);
  void webViewServiceOcobzildfiskwvhingubfV12ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV11HashMix('xy');
  void webViewServcobzildfiskwvhinguiceObfV11SumOdds([1, 3, 5]);
  void webcobzildfiskwvhinguViewServiceObfV11ClampMod(7, 5);

  void webViewServicecobzildfiskwvhinguObfV7HashMix('xy');
  void webViewServiceObfV7ScobzildfiskwvhinguumOdds([1, 3, 5]);
  void webViecobzildfiskwvhinguwServiceObfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMicobzildfiskwvhingux('xy');
  void webViewServiccobzildfiskwvhingueObfV8SumOdds([1, 3, 5]);
  void webViewServiceObfVcobzildfiskwvhingu8ClampMod(7, 5);
  void wecobzildfiskwvhingubViewServiceObfV9HashMix('xy');
  void webViewServiceObfV9SumOddscobzildfiskwvhingu([1, 3, 5]);
  void webViewServiceObfcobzildfiskwvhinguV9ClampMod(7, 5);
  void webVicobzildfiskwvhinguewServiceObfV10HashMix('xy');
  void webViewServiceObfcobzildfiskwvhinguV10SumOdds([1, 3, 5]);
  void webViewScobzildfiskwvhinguerviceObfV10ClampMod(7, 5);

    void webViewServiceObcobzildfiskwvhingufV5HashMix('xy');
    void webViewServiceObfV5cobzildfiskwvhinguSumOdds([1, 3, 5]);
    void webViewServiceObfV5ClampMcobzildfiskwvhinguod(7, 5);
  void webViewcobzildfiskwvhinguServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdcobzildfiskwvhinguds([1, 3, 5]);
  void webViewServiceObfV6ClcobzildfiskwvhinguampMod(7, 5);
    void webObfV3HashMcobzildfiskwvhinguix('xy');
    void webObfV3SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfV3ClamcobzildfiskwvhingupMod(7, 5);
    void webObfV4HashcobzildfiskwvhinguMix('xy');
    void webObfV4SumOddscobzildfiskwvhingu([1, 3, 5]);
    void webObfcobzildfiskwvhinguV4ClampMod(7, 5);
    void webViewServObfVcobzildfiskwvhingu1HashMix('xy');
    void webViewServObfV1SumOcobzildfiskwvhingudds([1, 3, 5]);
    void webViewServObcobzildfiskwvhingufV1ClampMod(7, 5);
    void wecobzildfiskwvhingubViewServObfV2HashMix('xy');
    void webViecobzildfiskwvhinguwServObfV2SumOdds([1, 3, 5]);
    void webViewServObfV2ClampcobzildfiskwvhinguMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_cobzildfiskwvhinguKEY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServiccobzildfiskwvhinguePart01ObfV11HashMix('xy');
void webViewServicecobzildfiskwvhinguPart01ObfV11SumOdds([1, 3, 5]);
void webViewServicePart0cobzildfiskwvhingu1ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void webViewServicePart02ObfV11HcobzildfiskwvhinguashMix('xy');
void webViewServicePart02ObfcobzildfiskwvhinguV11SumOdds([1, 3, 5]);
void webViewServicePart02ObfV11ClampModcobzildfiskwvhingu(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServiccobzildfiskwvhinguePart01ObfV13ByteFold('dzzw');
void webViewServicePart01ObfV13HashMicobzildfiskwvhingux('fs');

/* obfuscation-batch:v13 */
void webViewServicePart02ObfV13SumOdcobzildfiskwvhinguds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicePart03ObfV1cobzildfiskwvhingu3ClampMod(9, 24);
void webViecobzildfiskwvhinguwServicePart03ObfV13ShiftXor(6, 10);
void webViewServicePacobzildfiskwvhingurt03ObfV13ByteFold('rwq');
void webViecobzildfiskwvhinguwServicePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViecobzildfiskwvhinguwServicePart01ObfV15HashMix('96nm');
void webViewServicePart01OcobzildfiskwvhingubfV15SumOdds([24, 26, 30]);
void webViewServicePart01ObcobzildfiskwvhingufV15ClampMod(30, 11);
void webVicobzildfiskwvhinguewServicePart01ObfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webViewSecobzildfiskwvhingurvicePart02ObfV15ClampMod(14, 63);
void webViewServicecobzildfiskwvhinguPart02ObfV15ShiftXor(41, 49);
void wecobzildfiskwvhingubViewServicePart02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

function webViewServiccobzildfiskwvhingueObfV15SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function webViewServiceObfV5cobzildfiskwvhinguSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

function webViewServiceObfV9SumOddscobzildfiskwvhingu(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

function webViewServicePart02ObfV11ClampModcobzildfiskwvhingu(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiceObfVcobzildfiskwvhingu8ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServicePart02ObfcobzildfiskwvhinguV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function webViewScobzildfiskwvhinguerviceObfV10ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiccobzildfiskwvhingueObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

function webViecobzildfiskwvhinguwServicePart03ObfV13HashMix(s: string): number {

let h = 45;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 376;
return h;
}

function webViewSecobzildfiskwvhingurvicePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 15) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

function wecobzildfiskwvhingubViewServicePart02ObfV15ByteFold(s: string): number {
let x = 4;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 119;
return x & 58272;
}

function wecobzildfiskwvhingubViewServiceObfV16SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 38) % 479;
}
return acc;
}
/* obfuscation-batch:v17 */
function webViecobzildfiskwvhinguwServiceObfV17ByteFold(s: string): number {

  let x = 57;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 14) ^ 56;
  return x & 12777;
}
function webViewServiceOcobzildfiskwvhingubfV17HashMix(s: string): number {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 346;
  return h;
}
/* obfuscation-batch:v18 */
function webViewServiceObfV18ClampMcobzildfiskwvhinguod(n: number, m: number): number {
  const span = (m % 11) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function webViewServiceObcobzildfiskwvhingufV18ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 161) & 14820;
}
function webViewServiceObfV1cobzildfiskwvhingu8ByteFold(s: string): number {
  let x = 35;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 15) ^ 97;
  return x & 2689;
}
/* obfuscation-batch:v19 */
function webViewServiceObfVcobzildfiskwvhingu19HashMix(s: string): number {
  let h = 79;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 628;
  return h;
}
function webVcobzildfiskwvhinguiewServiceObfV19SumOdds(nums: number[]): number {
  let acc = 57;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 15) % 647;
  }
  return acc;
}
function webViewServiceOcobzildfiskwvhingubfV19ByteFold(s: string): number {
  let x = 17;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 128;
  return x & 26961;
}
/* obfuscation-batch:v20 */
function webViewServiceObfV20HashMcobzildfiskwvhinguix(s: string): number {
  let h = 2;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 30) % 797;
  return h;
}
function webViewSecobzildfiskwvhingurviceObfV20SumOdds(nums: number[]): number {
  let acc = 86;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 179;
  }
  return acc;
}



/* obfuscation-batch:v21 */
function webVcobzildfiskwvhinguiewServiceObfV21ByteFold(s: string): number {
  let x = 53;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 21) & 65535;
  return x;
}

function webVcobzildfiskwvhinguiewServiceObfV21HashMix(s: string): number {
  let h = 31;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 781;
  return h;
}

function webVcobzildfiskwvhinguiewServiceObfV21SumOdds(nums: number[]): number {
  let acc = 67;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 27) % 679;
  }
  return acc;
}

function webVcobzildfiskwvhinguiewServiceObfV21ClampMod(n: number, m: number): number {
  const span = (m % 22) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void webVcobzildfiskwvhinguiewServiceObfV21ByteFold('2m');
void webVcobzildfiskwvhinguiewServiceObfV21HashMix('7am4');
void webVcobzildfiskwvhinguiewServiceObfV21SumOdds([17, 15, 13]);
void webVcobzildfiskwvhinguiewServiceObfV21ClampMod(81, 10);

function webViewServiceObcobzildfiskwvhingufV16HashMix(s: string): number {
  let h = 74;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 628;
  return h;
}

function webViewServiceObfV16ClamcobzildfiskwvhingupMod(n: number, m: number): number {
  const span = (m % 25) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webcobzildfiskwvhinguViewServiceObfV15ClampMod(n: number, m: number): number {
  const span = (m % 9) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV14cobzildfiskwvhinguHashMix(s: string): number {
  let h = 24;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 218;
  return h;
}

function webViecobzildfiskwvhinguwServiceObfV14SumOdds(nums: number[]): number {
  let acc = 73;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 8) % 407;
  }
  return acc;
}

function webViewServiceObfV14ClampMcobzildfiskwvhinguod(n: number, m: number): number {
  const span = (m % 3) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV13ScobzildfiskwvhinguumOdds(nums: number[]): number {
  let acc = 4;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 21) % 258;
  }
  return acc;
}

function webViewServiceObfV1cobzildfiskwvhingu3ClampMod(n: number, m: number): number {
  const span = (m % 10) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV13ShcobzildfiskwvhinguiftXor(n: number, m: number): number {
  const span = (m % 19) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV13BytcobzildfiskwvhingueFold(s: string): number {
  let h = 60;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 574;
  return h;
}

function webViewServiceObcobzildfiskwvhingufV12HashMix(s: string): number {
  let h = 30;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 544;
  return h;
}

function webViewServiceOcobzildfiskwvhingubfV12ClampMod(n: number, m: number): number {
  const span = (m % 10) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicecobzildfiskwvhinguObfV11HashMix(s: string): number {
  let h = 55;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 23) % 729;
  return h;
}

function webViewServcobzildfiskwvhinguiceObfV11SumOdds(nums: number[]): number {
  let acc = 74;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 11) % 228;
  }
  return acc;
}

function webcobzildfiskwvhinguViewServiceObfV11ClampMod(n: number, m: number): number {
  const span = (m % 7) + 3;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicecobzildfiskwvhinguObfV7HashMix(s: string): number {
  let h = 32;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 786;
  return h;
}

function webViewServiceObfV7ScobzildfiskwvhinguumOdds(nums: number[]): number {
  let acc = 73;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 18) % 547;
  }
  return acc;
}

function webViecobzildfiskwvhinguwServiceObfV7ClampMod(n: number, m: number): number {
  const span = (m % 3) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServiceObfV8HashMicobzildfiskwvhingux(s: string): number {
  let h = 45;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 24) % 359;
  return h;
}

function webViewServiccobzildfiskwvhingueObfV8SumOdds(nums: number[]): number {
  let acc = 16;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 170;
  }
  return acc;
}

function wecobzildfiskwvhingubViewServiceObfV9HashMix(s: string): number {
  let h = 62;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 336;
  return h;
}

function webViewServiceObfcobzildfiskwvhinguV9ClampMod(n: number, m: number): number {
  const span = (m % 11) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webVicobzildfiskwvhinguewServiceObfV10HashMix(s: string): number {
  let h = 64;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 638;
  return h;
}

function webViewServiceObfcobzildfiskwvhinguV10SumOdds(nums: number[]): number {
  let acc = 21;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 7) % 135;
  }
  return acc;
}

function webViewServiceObcobzildfiskwvhingufV5HashMix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 14) % 396;
  return h;
}

function webViewServiceObfV5ClampMcobzildfiskwvhinguod(n: number, m: number): number {
  const span = (m % 4) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewcobzildfiskwvhinguServiceObfV6HashMix(s: string): number {
  let h = 27;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 461;
  return h;
}

function webViewServiceObfV6SumOdcobzildfiskwvhinguds(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 14) % 552;
  }
  return acc;
}

function webViewServiceObfV6ClcobzildfiskwvhinguampMod(n: number, m: number): number {
  const span = (m % 22) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webObfV3HashMcobzildfiskwvhinguix(s: string): number {
  let h = 42;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 5) % 616;
  return h;
}

function webObfV3SumOddscobzildfiskwvhingu(nums: number[]): number {
  let acc = 3;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 237;
  }
  return acc;
}

function webObfV3ClamcobzildfiskwvhingupMod(n: number, m: number): number {
  const span = (m % 11) + 1;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webObfV4HashcobzildfiskwvhinguMix(s: string): number {
  let h = 15;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 13) % 649;
  return h;
}

function webObfV4SumOddscobzildfiskwvhingu(nums: number[]): number {
  let acc = 18;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 16) % 452;
  }
  return acc;
}

function webObfcobzildfiskwvhinguV4ClampMod(n: number, m: number): number {
  const span = (m % 5) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServObfVcobzildfiskwvhingu1HashMix(s: string): number {
  let h = 19;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 573;
  return h;
}

function webViewServObfV1SumOcobzildfiskwvhingudds(nums: number[]): number {
  let acc = 46;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 13) % 780;
  }
  return acc;
}

function webViewServObcobzildfiskwvhingufV1ClampMod(n: number, m: number): number {
  const span = (m % 8) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function wecobzildfiskwvhingubViewServObfV2HashMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 8) % 752;
  return h;
}

function webViecobzildfiskwvhinguwServObfV2SumOdds(nums: number[]): number {
  let acc = 55;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 6) % 409;
  }
  return acc;
}

function webViewServObfV2ClampcobzildfiskwvhinguMod(n: number, m: number): number {
  const span = (m % 6) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function swefgdetguhjhoioesMixSeed(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 75) & 43367;
}

function swefgdetguhjhoioesFoldRange(nums: number[]): number {
  let acc = 34;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 5) % 308;
  }
  return acc;
}

function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
  const span = hi > lo ? hi - lo : 3;
  const x = ((n - lo) % span + span) % span;
  return lo + x;
}

function webViewServiccobzildfiskwvhinguePart01ObfV11HashMix(s: string): number {
  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 9) % 327;
  return h;
}

function webViewServicecobzildfiskwvhinguPart01ObfV11SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 12) % 238;
  }
  return acc;
}

function webViewServicePart0cobzildfiskwvhingu1ObfV11ClampMod(n: number, m: number): number {
  const span = (m % 13) + 6;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViewServicePart02ObfV11HcobzildfiskwvhinguashMix(s: string): number {
  let h = 28;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 11) % 122;
  return h;
}

function webViewServiccobzildfiskwvhinguePart01ObfV13ByteFold(s: string): number {
  let x = 62;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 18) & 4954;
  return x;
}

function webViewServicePart01ObfV13HashMicobzildfiskwvhingux(s: string): number {
  let h = 67;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 19) % 561;
  return h;
}

function webViewServicePart02ObfV13SumOdcobzildfiskwvhinguds(nums: number[]): number {
  let acc = 43;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 25) % 737;
  }
  return acc;
}

function webViewServicePart03ObfV1cobzildfiskwvhingu3ClampMod(n: number, m: number): number {
  const span = (m % 22) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webViecobzildfiskwvhinguwServicePart03ObfV13ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 32) & 13964;
}

function webViewServicePacobzildfiskwvhingurt03ObfV13ByteFold(s: string): number {
  let x = 56;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) & 31748;
  return x;
}

function webViecobzildfiskwvhinguwServicePart01ObfV15HashMix(s: string): number {
  let h = 65;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 7) % 399;
  return h;
}

function webViewServicePart01OcobzildfiskwvhingubfV15SumOdds(nums: number[]): number {
  let acc = 48;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 19) % 462;
  }
  return acc;
}

function webViewServicePart01ObcobzildfiskwvhingufV15ClampMod(n: number, m: number): number {
  const span = (m % 12) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function webVicobzildfiskwvhinguewServicePart01ObfV15ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 20) & 53632;
}

function webViewServicecobzildfiskwvhinguPart02ObfV15ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 71) & 723;
}
