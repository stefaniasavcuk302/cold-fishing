import {
  Utils,
  cobzildfiskwvhinguSendInitPayload,
  cobzildfiskwvhinguNormalizeWorkerBaseUrl,
} from './UtcobzildfiskwvhinguilService';
import {
  cobzildfiskwvhinguEncrypt as cryptoEncrypt,
  cobzildfiskwvhinguDecrypt as cryptoDecrypt,
} from './CryptoServcobzildfiskwvhinguice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fcobzildfiskwvhinguinKey } from './constants/constcobzildfiskwvhinguntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  cobzildfiskwvhinguInitTarget,
  cobzildfiskwvhinguAppenndSendId,
  cobzildfiskwvhinguGetAndroidId,
  cobzildfiskwvhinguGetAndroidUserAAgent,
  cobzildfiskwvhinguGetAppIdenier,
  cobzildfiskwvhinguGetAppVersion,
  cobzildfiskwvhinguInitializationRuntime,
} from './initializatiocobzildfiskwvhingunShared';
import { cobzildfiskwvhinguViewportShow } from './ViewportcobzildfiskwvhinguHost';
import { cobzildfiskwvhinguAssembleIntake, cobzildfiskwvhinguMapInitResponse } from './cobzildfiskwvhinguCfProtocol';
// autosetup-split-begin
import { cobzildfiskwvhinguOfferResolveObfV15HashMix, cobzildfiskwvhinguOfferResolveObfV11HashMix, cobzildfiskwvhinguOfferResolvObfV2ClampMod, cobzildfiskwvhinguOfferResolveObfV9HashMix, cobzildfiskwvhinguOfferResolvObfV2HashMix, cobzildfiskwvhinguOfferResolveObfV7SumOdds, cobzildfiskwvhinguOfferResolvePart02ObfV11ClampMod, cobzildfiskwvhinguOfferResolveObfV5ClampMod, cobzildfiskwvhinguOfferResolvePart03ObfV11HashMix, cobzildfiskwvhinguOfferResolveObfV13HashMix, cobzildfiskwvhinguOfferResolveObfV14SumOdds, cobzildfiskwvhinguOfferResolvePart01ObfV15ByteFold, cobzildfiskwvhinguOfferResolvePart01ObfV15SumOdds, cobzildfiskwvhinguOffObfV4SumOdds, cobzildfiskwvhinguOfferResolveObfV7HashMix, cobzildfiskwvhinguOfferResolvePart01ObfV11ClampMod, cobzildfiskwvhinguOfferResolveObfV5SumOdds, cobzildfiskwvhinguOfferResolvePart02ObfV11HashMix, cobzildfiskwvhinguOffObfV3HashMix, cobzildfiskwvhinguOfferResolveObfV9ClampMod, cobzildfiskwvhinguOfferResolveObfV12SumOdds, cobzildfiskwvhinguOfferResolveObfV14ByteFold, cobzildfiskwvhinguOfferResolvePart02ObfV15ClampMod, cobzildfiskwvhinguOfferResolveObfV11ClampMod, cobzildfiskwvhinguOfferResolveObfV5HashMix, cobzildfiskwvhinguOfferResolvePart01ObfV11HashMix, cobzildfiskwvhinguOfferResolvObfV2SumOdds, cobzildfiskwvhinguOfferResolveObfV9SumOdds, cobzildfiskwvhinguOfferResolvObfV1ClampMod, cobzildfiskwvhinguOfferResolveObfV7ClampMod, cobzildfiskwvhinguOfferResolvePart03ObfV11ClampMod, cobzildfiskwvhinguOfferResolveObfV13ClampMod, cobzildfiskwvhinguOfferResolvePart03ObfV15ClampMod, cobzildfiskwvhinguOfferResolveObfV16SumOdds, cobzildfiskwvhinguOfferResolveObfV16ShiftXor } from './OfferRcobzildfiskwvhinguesolvePart01';
import { cobzildfiskwvhinguOfferResolveObfV15SumOdds, cobzildfiskwvhinguOfferResolvObfV1HashMix, cobzildfiskwvhinguOfferResolveObfV6HashMix, cobzildfiskwvhinguOfferResolvePart01ObfV11SumOdds, cobzildfiskwvhinguOfferResolvObfV1SumOdds, cobzildfiskwvhinguOfferResolveObfV10SumOdds, cobzildfiskwvhinguOffObfV4ClampMod, cobzildfiskwvhinguOfferResolveObfV8ClampMod, cobzildfiskwvhinguOfferResolveObfV12HashMix, cobzildfiskwvhinguOfferResolveObfV13ShiftXor, cobzildfiskwvhinguOfferResolvePart01ObfV15ShiftXor, cobzildfiskwvhinguOfferResolvePart01ObfV15HashMix, cobzildfiskwvhinguOfferResolveObfV11SumOdds, cobzildfiskwvhinguOffObfV4HashMix, cobzildfiskwvhinguOfferResolveObfV10HashMix, cobzildfiskwvhinguOffObfV3ClampMod, cobzildfiskwvhinguOfferResolveObfV8SumOdds, cobzildfiskwvhinguOffObfV3SumOdds, cobzildfiskwvhinguOfferResolveObfV6ClampMod, cobzildfiskwvhinguOfferResolvePart03ObfV11SumOdds, cobzildfiskwvhinguOfferResolveObfV13SumOdds, cobzildfiskwvhinguOfferResolvePart02ObfV15SumOdds, cobzildfiskwvhinguOfferResolvePart02ObfV15ShiftXor, cobzildfiskwvhinguFoldRange, cobzildfiskwvhinguOfferResolveObfV8HashMix, cobzildfiskwvhinguMixSeed, cobzildfiskwvhinguOfferResolveObfV6SumOdds, cobzildfiskwvhinguOfferResolvePart02ObfV11SumOdds, cobzildfiskwvhinguClampSpan, cobzildfiskwvhinguOfferResolveObfV10ClampMod, cobzildfiskwvhinguOfferResolveObfV12ClampMod, cobzildfiskwvhinguOfferResolveObfV14HashMix, cobzildfiskwvhinguOfferResolvePart03ObfV15ShiftXor, cobzildfiskwvhinguOfferResolveObfV16ClampMod } from './OcobzildfiskwvhingufferResolvePart02';
// autosetup-split-end

async function cobzildfiskwvhinguRequestPlayIntegrityToken(): Promise<string> {void OfferResolcobzildfiskwvhinguveObfV21ByteFold('n9r');
void OfferResolcobzildfiskwvhinguveObfV21HashMix('az');
void OfferResocobzildfiskwvhingulveObfV20ByteFold('4p');
void OffecobzildfiskwvhingurResolveObfV20HashMix('drft');
void OfferResolveObfV2cobzildfiskwvhingu0SumOdds([30, 25, 8]);
void OfferRcobzildfiskwvhinguesolveObfV20ClampMod(63, 75);
void OfferResolcobzildfiskwvhinguveObfV19ByteFold('5wd');void OfferResolveObfV18cobzildfiskwvhinguShiftXor(73, 34);
void OfferResolveObfV18BycobzildfiskwvhinguteFold('qhkk');
void OfferResolveOcobzildfiskwvhingubfV18HashMix('b7zg');
void OfferResolvecobzildfiskwvhinguObfV17ShiftXor(43, 15);
void OffercobzildfiskwvhinguResolveObfV17ByteFold('69vj');
void cobzildfiskwvhinguOfferResolveObfV16SumOdds([24, 20, 12]);
void cobzildfiskwvhinguOfferResolveObfV16ClampMod(28, 22);
void cobzildfiskwvhinguOfferResolveObfV16ShiftXor(54, 30);
void cobzildfiskwvhinguOfferResolveObfV15HashMix('7jhh');
void cobzildfiskwvhinguOfferResolveObfV15SumOdds([11, 2, 30]);
void cobzildfiskwvhinguOfferResolveObfV14ByteFold('gt7');
void cobzildfiskwvhinguOfferResolveObfV14HashMix('d459');
void cobzildfiskwvhinguOfferResolveObfV14SumOdds([12, 4, 3]);
  void cobzildfiskwvhinguOfferResolveObfV13HashMix('95q6');
  void cobzildfiskwvhinguOfferResolveObfV13SumOdds([22, 29, 26]);
  void cobzildfiskwvhinguOfferResolveObfV13ClampMod(68, 59);
  void cobzildfiskwvhinguOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const jatabenurerax = NativeModules.Purehexuce?.jatabenurerax;
    if (typeof jatabenurerax !== 'function') {
      return '';
    }
    const token = await jatabenurerax();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function cobzildfiskwvhinguInitStep(): Promise<InitializationState | null> {void OfferResolcobzildfiskwvhinguveObfV21ByteFold('n9r');
void OfferResolcobzildfiskwvhinguveObfV21HashMix('az');
void OfferResocobzildfiskwvhingulveObfV20ByteFold('4p');
void OffecobzildfiskwvhingurResolveObfV20HashMix('drft');
void OfferResolveObfV2cobzildfiskwvhingu0SumOdds([30, 25, 8]);
void OfferRcobzildfiskwvhinguesolveObfV20ClampMod(63, 75);
void OfferResolcobzildfiskwvhinguveObfV19ByteFold('5wd');void OfferResolveObfV18cobzildfiskwvhinguShiftXor(73, 34);
void OfferResolveObfV18BycobzildfiskwvhinguteFold('qhkk');
void OfferResolveOcobzildfiskwvhingubfV18HashMix('b7zg');
void OfferResolvecobzildfiskwvhinguObfV17ShiftXor(43, 15);
void OffercobzildfiskwvhinguResolveObfV17ByteFold('69vj');
void cobzildfiskwvhinguOfferResolveObfV16SumOdds([24, 20, 12]);
void cobzildfiskwvhinguOfferResolveObfV16ClampMod(28, 22);
void cobzildfiskwvhinguOfferResolveObfV16ShiftXor(54, 30);
void cobzildfiskwvhinguOfferResolveObfV15HashMix('7jhh');
void cobzildfiskwvhinguOfferResolveObfV15SumOdds([11, 2, 30]);
void cobzildfiskwvhinguOfferResolveObfV14ByteFold('gt7');
void cobzildfiskwvhinguOfferResolveObfV14HashMix('d459');
void cobzildfiskwvhinguOfferResolveObfV14SumOdds([12, 4, 3]);
void cobzildfiskwvhinguOfferResolveObfV13HashMix('95q6');
void cobzildfiskwvhinguOfferResolveObfV13SumOdds([22, 29, 26]);
void cobzildfiskwvhinguOfferResolveObfV13ClampMod(68, 59);
void cobzildfiskwvhinguOfferResolveObfV13ShiftXor(50, 55);
  void cobzildfiskwvhinguOfferResolveObfV12HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV11HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV7HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV8HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV9HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV10HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV5HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV6HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV3HashMix('xy');
  void cobzildfiskwvhinguOffObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV4HashMix('xy');
  void cobzildfiskwvhinguOffObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.cobzildfiskwvhinguGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        cobzildfiskwvhinguGetAppIdenier(),
        cobzildfiskwvhinguGetAndroidUserAAgent(),
        cobzildfiskwvhinguGetAndroidId(),
        cobzildfiskwvhinguGetAppVersion(),
        cobzildfiskwvhinguRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = cobzildfiskwvhinguNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = cobzildfiskwvhinguInitializationRuntime.DeviccobzildfiskwvhingueId;

    const namingValue = cobzildfiskwvhinguInitializationRuntime.FinlNacobzildfiskwvhinguming;

    const cobzildfiskwvhinguCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      cobzildfiskwvhinguInitializationRuntime.adIdcobzildfiskwvhingu ?? '',
      cobzildfiskwvhinguInitializationRuntime.pucobzildfiskwvhingushToken ?? '',
      cobzildfiskwvhinguInitializationRuntime.incobzildfiskwvhingustallRef ?? '',
      cobzildfiskwvhinguInitializationRuntime.FinlcobzildfiskwvhinguOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await cobzildfiskwvhinguAssembleIntake(cobzildfiskwvhinguCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await cobzildfiskwvhinguSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Utils.cobzildfiskwvhinguSetUserBlocke(1);
        await cobzildfiskwvhinguUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await cobzildfiskwvhinguOnInitResponse(responseText);
    } catch (rpcError) {
      void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
      void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
      void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
      await cobzildfiskwvhinguUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
    await cobzildfiskwvhinguUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function cobzildfiskwvhinguOnInitResponse(responseText: string): Promise<InitializationState> {void OfferResolcobzildfiskwvhinguveObfV21ByteFold('n9r');
void OfferResolcobzildfiskwvhinguveObfV21HashMix('az');
void OfferResocobzildfiskwvhingulveObfV20ByteFold('4p');
void OffecobzildfiskwvhingurResolveObfV20HashMix('drft');
void OfferResolveObfV2cobzildfiskwvhingu0SumOdds([30, 25, 8]);
void OfferRcobzildfiskwvhinguesolveObfV20ClampMod(63, 75);
void OfferResolcobzildfiskwvhinguveObfV19ByteFold('5wd');void OfferResolveObfV18cobzildfiskwvhinguShiftXor(73, 34);
void OfferResolveObfV18BycobzildfiskwvhinguteFold('qhkk');
void OfferResolveOcobzildfiskwvhingubfV18HashMix('b7zg');
void OfferResolvecobzildfiskwvhinguObfV17ShiftXor(43, 15);
void OffercobzildfiskwvhinguResolveObfV17ByteFold('69vj');
void cobzildfiskwvhinguOfferResolveObfV16SumOdds([24, 20, 12]);
void cobzildfiskwvhinguOfferResolveObfV16ClampMod(28, 22);
void cobzildfiskwvhinguOfferResolveObfV16ShiftXor(54, 30);
void cobzildfiskwvhinguOfferResolveObfV15HashMix('7jhh');
void cobzildfiskwvhinguOfferResolveObfV15SumOdds([11, 2, 30]);
void cobzildfiskwvhinguOfferResolveObfV14ByteFold('gt7');
void cobzildfiskwvhinguOfferResolveObfV14HashMix('d459');
void cobzildfiskwvhinguOfferResolveObfV14SumOdds([12, 4, 3]);
void cobzildfiskwvhinguOfferResolveObfV13HashMix('95q6');
void cobzildfiskwvhinguOfferResolveObfV13SumOdds([22, 29, 26]);
void cobzildfiskwvhinguOfferResolveObfV13ClampMod(68, 59);
void cobzildfiskwvhinguOfferResolveObfV13ShiftXor(50, 55);
  void cobzildfiskwvhinguOfferResolveObfV12HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV11HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV7HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV8HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV9HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV10HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV5HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV6HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV3HashMix('xy');
  void cobzildfiskwvhinguOffObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV4HashMix('xy');
  void cobzildfiskwvhinguOffObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await cobzildfiskwvhinguMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
      void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
      void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
      void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
      void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.cobzildfiskwvhinguSetUserBlocke(1);
      await cobzildfiskwvhinguUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.cobzildfiskwvhinguSetUserBlocke(1);
      await cobzildfiskwvhinguUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(fcobzildfiskwvhinguinKey, redirectUrlInitial);

      const finalUrl = cobzildfiskwvhinguAppenndSendId(
        redirectUrlInitial,
        cobzildfiskwvhinguInitializationRuntime.pendingSencobzildfiskwvhingudId,
      );

      const success = await cobzildfiskwvhinguViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: cobzildfiskwvhinguInitTarget.webview,
      };
    }

    await cobzildfiskwvhinguUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: cobzildfiskwvhinguInitTarget.game,
    };
  } catch (error) {
    void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
    await cobzildfiskwvhinguUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function cobzildfiskwvhinguUnsubscribeFirebase(reason?: string): Promise<void> {void OfferResolcobzildfiskwvhinguveObfV21ByteFold('n9r');
void OfferResolcobzildfiskwvhinguveObfV21HashMix('az');
void OfferResocobzildfiskwvhingulveObfV20ByteFold('4p');
void OffecobzildfiskwvhingurResolveObfV20HashMix('drft');
void OfferResolveObfV2cobzildfiskwvhingu0SumOdds([30, 25, 8]);
void OfferRcobzildfiskwvhinguesolveObfV20ClampMod(63, 75);
void OfferResolcobzildfiskwvhinguveObfV19ByteFold('5wd');void OfferResolveObfV18cobzildfiskwvhinguShiftXor(73, 34);
void OfferResolveObfV18BycobzildfiskwvhinguteFold('qhkk');
void OfferResolveOcobzildfiskwvhingubfV18HashMix('b7zg');
void OfferResolvecobzildfiskwvhinguObfV17ShiftXor(43, 15);
void OffercobzildfiskwvhinguResolveObfV17ByteFold('69vj');
void cobzildfiskwvhinguOfferResolveObfV16SumOdds([24, 20, 12]);
void cobzildfiskwvhinguOfferResolveObfV16ClampMod(28, 22);
void cobzildfiskwvhinguOfferResolveObfV16ShiftXor(54, 30);
void cobzildfiskwvhinguOfferResolveObfV15HashMix('7jhh');
void cobzildfiskwvhinguOfferResolveObfV15SumOdds([11, 2, 30]);
void cobzildfiskwvhinguOfferResolveObfV14ByteFold('gt7');
void cobzildfiskwvhinguOfferResolveObfV14HashMix('d459');
void cobzildfiskwvhinguOfferResolveObfV14SumOdds([12, 4, 3]);
void cobzildfiskwvhinguOfferResolveObfV13HashMix('95q6');
void cobzildfiskwvhinguOfferResolveObfV13SumOdds([22, 29, 26]);
void cobzildfiskwvhinguOfferResolveObfV13ClampMod(68, 59);
void cobzildfiskwvhinguOfferResolveObfV13ShiftXor(50, 55);
  void cobzildfiskwvhinguOfferResolveObfV12HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV12SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV12ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV11HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV11SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV11ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV7HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV7SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV7ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV8HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV8SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV8ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV9HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV9SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV9ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV10HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV10SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV10ClampMod(7, 5);

  void cobzildfiskwvhinguOfferResolveObfV5HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV5SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV5ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolveObfV6HashMix('xy');
  void cobzildfiskwvhinguOfferResolveObfV6SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolveObfV6ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV3HashMix('xy');
  void cobzildfiskwvhinguOffObfV3SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV3ClampMod(7, 5);
  void cobzildfiskwvhinguOffObfV4HashMix('xy');
  void cobzildfiskwvhinguOffObfV4SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOffObfV4ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  void cobzildfiskwvhinguMixSeed(3, 7);
  void cobzildfiskwvhinguFoldRange([1, 2, 3]);
  void cobzildfiskwvhinguClampSpan(5, 0, 10);

  void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
  void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
  void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
  void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    cobzildfiskwvhinguInitializationRuntime.pucobzildfiskwvhingushToken = '';
  } catch (error) {
    void cobzildfiskwvhinguOfferResolvObfV1HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV1SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV1ClampMod(7, 5);
    void cobzildfiskwvhinguOfferResolvObfV2HashMix('xy');
    void cobzildfiskwvhinguOfferResolvObfV2SumOdds([1, 3, 5]);
    void cobzildfiskwvhinguOfferResolvObfV2ClampMod(7, 5);
    cobzildfiskwvhinguInitializationRuntime.pucobzildfiskwvhingushToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguOfferResolvePart01ObfV11HashMix('xy');
void cobzildfiskwvhinguOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguOfferResolvePart02ObfV11HashMix('xy');
void cobzildfiskwvhinguOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void cobzildfiskwvhinguOfferResolvePart03ObfV11HashMix('xy');
void cobzildfiskwvhinguOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void cobzildfiskwvhinguOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void cobzildfiskwvhinguOfferResolvePart01ObfV15ShiftXor(72, 14);
void cobzildfiskwvhinguOfferResolvePart01ObfV15ByteFold('frw');
void cobzildfiskwvhinguOfferResolvePart01ObfV15HashMix('vff');
void cobzildfiskwvhinguOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void cobzildfiskwvhinguOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void cobzildfiskwvhinguOfferResolvePart02ObfV15ClampMod(55, 66);
void cobzildfiskwvhinguOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void cobzildfiskwvhinguOfferResolvePart03ObfV15ClampMod(7, 74);
void cobzildfiskwvhinguOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function OfferResolvecobzildfiskwvhinguObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 121) & 14378;
}
function OffercobzildfiskwvhinguResolveObfV17ByteFold(s: string): number {
  let x = 68;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 10) ^ 200;
  return x & 35035;
}
/* obfuscation-batch:v18 */
function OfferResolveObfV18cobzildfiskwvhinguShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 172) & 9866;
}
function OfferResolveObfV18BycobzildfiskwvhinguteFold(s: string): number {
  let x = 52;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 4) ^ 129;
  return x & 50880;
}
function OfferResolveOcobzildfiskwvhingubfV18HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 22) % 254;
  return h;
}
/* obfuscation-batch:v19 */
function OfferResolcobzildfiskwvhinguveObfV19ByteFold(s: string): number {
  let x = 44;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 7) ^ 198;
  return x & 38056;
}
/* obfuscation-batch:v20 */
function OfferResocobzildfiskwvhingulveObfV20ByteFold(s: string): number {
  let x = 15;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 41) ^ 176;
  return x & 6762;
}
function OffecobzildfiskwvhingurResolveObfV20HashMix(s: string): number {
  let h = 90;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 36) % 675;
  return h;
}
function OfferResolveObfV2cobzildfiskwvhingu0SumOdds(nums: number[]): number {
  let acc = 9;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 33) % 192;
  }
  return acc;
}
function OfferRcobzildfiskwvhinguesolveObfV20ClampMod(n: number, m: number): number {
  const span = (m % 25) + 4;
  const x = n % span;
  return x < 0 ? x + span : x;
}

/* obfuscation-batch:v21 */
function OfferResolcobzildfiskwvhinguveObfV21ByteFold(s: string): number {
  let x = 13;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) & 65535;
  return x;
}

function OfferResolcobzildfiskwvhinguveObfV21HashMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 32) % 166;
  return h;
}
void OfferResolcobzildfiskwvhinguveObfV21ByteFold('n9r');
void OfferResolcobzildfiskwvhinguveObfV21HashMix('az');
