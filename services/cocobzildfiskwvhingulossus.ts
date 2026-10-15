/* cipher-id:colossus */
import { NativeModules } from 'react-native';

const cipher = NativeModules.Qolevajaxodud;

export function jemataxofesog(hex: string): Uint8Array {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  const normalized = String(hex || '').trim();
  const out = new Uint8Array(Math.floor(normalized.length / 2));
  for (let i = 0; i < out.length; i++) {
    out[i] = parseInt(normalized.slice(i * 2, i * 2 + 2), 16);
  }
  return out;
}

export function rapobatosisixa(bytes: Uint8Array): string {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0').toUpperCase()).join('');
}

export function cocobzildfiskwvhingulossusEncryptBytes(data: Uint8Array): Uint8Array {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  const hex = String(cipher?.kequjijalo(rapobatosisixa(data)) ?? '');
  return jemataxofesog(hex);
}

export function cocobzildfiskwvhingulossusDecryptBytes(data: Uint8Array): Uint8Array {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  return cocobzildfiskwvhingulossusEncryptBytes(data);
}

export function cocobzildfiskwvhingulossusEncryptHex(plain: string): string {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  try {
    return String(cipher.curenelomivida(String(plain ?? '')) ?? '');
  } catch {
    return '';
  }
}

export function cocobzildfiskwvhingulossusDecryptHex(hex: string): string {void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);

  try {
    const normalized = String(hex || '').trim();
    if (!normalized || normalized.length % 2 !== 0) return '';
    return String(cipher.notarukemu(normalized) ?? '');
  } catch {
    return '';
  }
}

export function hexToBytes(hex: string): Uint8Array {
  void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
  void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);
  return jemataxofesog(hex);
}



/* obfuscation-batch:v21 */
function cocobzildfiskwvhingulossusObfV21SumOdds(nums: number[]): number {
  let acc = 60;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 39) % 416;
  }
  return acc;
}

function cocobzildfiskwvhingulossusObfV21ClampMod(n: number, m: number): number {
  const span = (m % 26) + 9;
  const x = n % span;
  return x < 0 ? x + span : x;
}
void cocobzildfiskwvhingulossusObfV21SumOdds([21, 23, 14]);
void cocobzildfiskwvhingulossusObfV21ClampMod(50, 10);
