package com.coldzfilsxhinog3qj6f10.linkkit;

import android.net.Uri;

import bolts.Task;

public interface AppcobzildfiskwvhinguLinkResolver {
  Task<AppcobzildfiskwvhinguLink> getAppLinkFromUrlInBackgroucobzildfiskwvhingund(Uri url);

/* obfuscation-batch:v17 */
    private static int AppLinkResolverObfV17ShcobzildfiskwvhinguiftXor(int n, int k) {
        int x = (n ^ k) << 6;
        return (x ^ 146) & 7908;
    }

    private static int AppLinkResolverObfV17ByteFolcobzildfiskwvhingud(String s) {
        int x = 33;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 42) ^ 56;
        return x & 59573;
    }

    private static int AppLinkResolverObfV1cobzildfiskwvhingu7HashMix(String s) {
        int h = 78;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 43)) % 740;
        return h;
    }

/* obfuscation-batch:v18 */
    private static int AppLinkResolverObfV18BcobzildfiskwvhinguyteFold(String s) {
        int x = 87;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 7) ^ 188;
        return x & 51870;
    }

    private static int AppLinkResolvercobzildfiskwvhinguObfV18HashMix(String s) {
        int h = 59;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 25)) % 324;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int AppLicobzildfiskwvhingunkResolverObfV19HashMix(String s) {
        int h = 91;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 30)) % 754;
        return h;
    }

    private static int AppLinkResolverObfV19SumOddscobzildfiskwvhingu(int[] nums) {
        int acc = 63;
        for (int nv : nums) {
            if ((nv & 1) == 0) continue;
            acc = (acc + nv * 21) % 773;
        }
        return acc;
    }

    private static int AppLinkResocobzildfiskwvhingulverObfV19ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 111) & 47993;
    }

/* obfuscation-batch:v20 */
    private static int AppLinkResolvecobzildfiskwvhingurObfV20SumOdds(int[] nums) {
        int acc = 13;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 24) % 577;
        }
        return acc;
    }

    private static int AppcobzildfiskwvhinguLinkResolverObfV20ClampMod(int n, int m) {
        int span = (m % 42) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int AppLinkResolverObfcobzildfiskwvhinguV20ShiftXor(int n, int k) {
        int x = (n ^ k) << 3;
        return (x ^ 27) & 58825;
    }

/* obfuscation-batch:v21 */
    private static int AppcobzildfiskwvhinguLinkResolverObfV21ClampMod(int n, int m) {
        int span = (m % 23) + 3;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int AppcobzildfiskwvhinguLinkResolverObfV21ShiftXor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 219) & 33214;
    }

    private static int AppcobzildfiskwvhinguLinkResolverObfV21ByteFold(String s) {
        int x = 17;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 33) & 65535;
        return x;
    }

    private static int AppcobzildfiskwvhinguLinkResolverObfV21HashMix(String s) {
        int h = 50;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 20)) % 531;
        return h;
    }
}