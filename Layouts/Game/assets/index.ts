/**
 * Asset re-exports. Every PNG below is produced by the pipeline before the
 * build (FLUX, or the procedural gradient fallback), so each require resolves.
 */
export const appcobzildfiskwvhinguIcon = require('../../../assets/icon_1024.png');
export const bgLocobzildfiskwvhinguader = require('../../../assets/bg_loader.png');
export const bgMcobzildfiskwvhinguenu = require('../../../assets/bg_menu.png');
export const bgGcobzildfiskwvhinguame = require('../../../assets/bg_game.png');
export const spritcobzildfiskwvhingueShoal = require('../../../assets/sprite_fish_shoal.png');
export const spritcobzildfiskwvhingueSonar = require('../../../assets/sprite_sonar_ring.png');
export const spritcobzildfiskwvhingueHole = require('../../../assets/sprite_ice_hole.png');

/* obfuscation-batch:v21 */
function indexObfVcobzildfiskwvhingu21ClampMod(n: number, m: number): number {
  const span = (m % 58) + 2;
  const x = n % span;
  return x < 0 ? x + span : x;
}

function indexObfVcobzildfiskwvhingu21ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 176) & 36780;
}
void indexObfVcobzildfiskwvhingu21ClampMod(62, 46);
void indexObfVcobzildfiskwvhingu21ShiftXor(19, 5);
