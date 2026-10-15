import { NativeModules } from 'react-native';

const intake = NativeModules.Sizicotogugi;

export async function cobzildfiskwvhinguAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {void cobzildfiskwvhinguCfProtocolObfV21ClampMod(64, 19);
void cobzildfiskwvhinguCfProtocolObfV21ShiftXor(22, 18);
void cobzildfiskwvhinguCfProtocolObfV21ByteFold('3gs');

  return intake.guxesocitugaf(fields, bodyPlain);
}

export async function cobzildfiskwvhinguMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {void cobzildfiskwvhinguCfProtocolObfV21ClampMod(64, 19);
void cobzildfiskwvhinguCfProtocolObfV21ShiftXor(22, 18);
void cobzildfiskwvhinguCfProtocolObfV21ByteFold('3gs');

  return intake.hijitisicadi(JSON.stringify(obj ?? {}));
}

export async function cobzildfiskwvhinguSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {void cobzildfiskwvhinguCfProtocolObfV21ClampMod(64, 19);
void cobzildfiskwvhinguCfProtocolObfV21ShiftXor(22, 18);
void cobzildfiskwvhinguCfProtocolObfV21ByteFold('3gs');

  const text = String(
    (await intake.dasamuruhujado(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => text };
}

/* obfuscation-batch:v21 */
function cobzildfiskwvhinguCfProtocolObfV21ClampMod(n: number, m: number): number {
  const span = (m % 40) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function cobzildfiskwvhinguCfProtocolObfV21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 6;
  return (x ^ 85) & 24484;
}

function cobzildfiskwvhinguCfProtocolObfV21ByteFold(s: string): number {
  let x = 38;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 28) & 65535;
  return x;
}
void cobzildfiskwvhinguCfProtocolObfV21ClampMod(64, 19);
void cobzildfiskwvhinguCfProtocolObfV21ShiftXor(22, 18);
void cobzildfiskwvhinguCfProtocolObfV21ByteFold('3gs');
