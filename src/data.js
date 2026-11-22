// Static game data: weapons, skins, names and arena config.

export const WEAPONS = [
  {
    id: 'rifle', name: 'AR-7 BLASTER', short: 'AR-7', kind: 'auto',
    damage: 21, headMult: 2, rate: 0.105, mag: 30, reserve: 180,
    reload: 1.9, spread: 0.013, adsSpread: 0.004, range: 140, pellets: 1,
    adsZoom: 0.82, recoil: 0.019, auto: true, icon: '▰', unlock: 0,
  },
  {
    id: 'smg', name: 'SMG-9 BUZZSAW', short: 'SMG-9', kind: 'auto',
    damage: 13, headMult: 1.8, rate: 0.072, mag: 40, reserve: 240,
    reload: 1.6, spread: 0.022, adsSpread: 0.009, range: 90, pellets: 1,
    adsZoom: 0.88, recoil: 0.014, auto: true, icon: '▤', unlock: 0,
  },
  {
    id: 'shotgun', name: 'BOOMSTICK 12', short: 'BOOM', kind: 'pump',
    damage: 11, headMult: 1.6, rate: 0.78, mag: 8, reserve: 48,
    reload: 2.4, spread: 0.075, adsSpread: 0.05, range: 55, pellets: 8,
    adsZoom: 0.9, recoil: 0.055, auto: false, icon: '▥', unlock: 0,
  },
  {
    id: 'sniper', name: 'LONGSHOT RAIL', short: 'RAIL', kind: 'bolt',
    damage: 82, headMult: 2, rate: 1.35, mag: 6, reserve: 36,
    reload: 2.6, spread: 0.03, adsSpread: 0.0012, range: 220, pellets: 1,
    adsZoom: 0.42, recoil: 0.07, auto: false, icon: '▯', unlock: 0,
  },
]

export const GUN_SKINS = [
  { id: 'factory', name: 'Factory Issue', body: 0x56657d, accent: 0x2e3a4d, glow: 0x5cc8ff, price: 0, rarity: 'STARTER' },
  { id: 'carbon', name: 'Carbon Black', body: 0x262b36, accent: 0x11151d, glow: 0xff6a3d, price: 0, rarity: 'STARTER' },
  { id: 'mint', name: 'Mint Condition', body: 0x3fd8a4, accent: 0x14775c, glow: 0xd6ffe9, price: 150, rarity: 'COMMON' },
  { id: 'sunset', name: 'Sunset Pop', body: 0xff8a4c, accent: 0xd63d76, glow: 0xffd166, price: 220, rarity: 'COMMON' },
  { id: 'toxic', name: 'Toxic Slime', body: 0x9be634, accent: 0x3e7a12, glow: 0xd9ff70, price: 320, rarity: 'RARE' },
  { id: 'ice', name: 'Frostbite', body: 0x9fdcff, accent: 0x4f8fd0, glow: 0xe8fbff, price: 380, rarity: 'RARE' },
  { id: 'gold', name: 'Golden Boy', body: 0xffc93c, accent: 0xb8780d, glow: 0xfff2a8, price: 600, rarity: 'EPIC' },
  { id: 'galaxy', name: 'Galaxy Gyro', body: 0x5b3fa8, accent: 0x241752, glow: 0xff6de3, price: 800, rarity: 'LEGENDARY' },
]

export const AVATAR_SKINS = [
  { id: 'classic', name: 'Classic Noob', torso: 0xffcf33, arms: 0xffcf33, legs: 0x2f6fd0, head: 0xffd8a8, hat: 'cap', hatColor: 0xe93b3b, price: 0, rarity: 'STARTER' },
  { id: 'ninja', name: 'Neo Ninja', torso: 0x2c2f4a, arms: 0x2c2f4a, legs: 0x1d2038, head: 0xe8bb92, hat: 'headband', hatColor: 0x5ce1b9, price: 0, rarity: 'STARTER' },
  { id: 'candy', name: 'Candy Rush', torso: 0xff77b0, arms: 0xffa8cf, legs: 0x7d5ce0, head: 0xffd9b8, hat: 'cat', hatColor: 0xff5f9e, price: 180, rarity: 'COMMON' },
  { id: 'sand', name: 'Sandstorm', torso: 0xe0b566, arms: 0xc99a4e, legs: 0x6d7a52, head: 0xa97540, hat: 'helmet', hatColor: 0xbba36d, price: 240, rarity: 'COMMON' },
  { id: 'cyber', name: 'Cyber Blue', torso: 0x2d7ee8, arms: 0x39a2ff, legs: 0x16345e, head: 0xd8a878, hat: 'visor', hatColor: 0x46f0ff, price: 380, rarity: 'RARE' },
  { id: 'frosty', name: 'Frosty', torso: 0xbfefff, arms: 0x8ad4ff, legs: 0x3f77a8, head: 0xeaf9ff, hat: 'beanie', hatColor: 0xffffff, price: 420, rarity: 'RARE' },
  { id: 'gold', name: 'Golden Hero', torso: 0xffc93c, arms: 0xffdb73, legs: 0xb8780d, head: 0xffd8a8, hat: 'crown', hatColor: 0xffd447, price: 650, rarity: 'EPIC' },
  { id: 'void', name: 'Void Knight', torso: 0x3b2d63, arms: 0x4b3780, legs: 0x1b1430, head: 0xc8a2e8, hat: 'horns', hatColor: 0x9b5cff, price: 900, rarity: 'LEGENDARY' },
]

export const MELEE_SKINS = [
  { id: 'pipe', name: 'Trusty Pipe', body: 0xa9b4c4, accent: 0x5d6878, glow: 0xffffff, price: 0, rarity: 'STARTER' },
  { id: 'bat', name: 'Home Run', body: 0xb2763f, accent: 0x5e3a1c, glow: 0xffd166, price: 160, rarity: 'COMMON' },
  { id: 'katana', name: 'Pixel Katana', body: 0xd8e7ff, accent: 0x2b3d5c, glow: 0x8ef0ff, price: 340, rarity: 'RARE' },
  { id: 'neon', name: 'Neon Bat', body: 0x34e0b0, accent: 0x0d7a5c, glow: 0xaaffdf, price: 500, rarity: 'EPIC' },
]

export const GRENADE_SKINS = [
  { id: 'classic', name: 'Classic Grenade', body: 0x4a5a3a, accent: 0x222b1c, glow: 0xff9b3d, price: 0, rarity: 'STARTER' },
  { id: 'cherry', name: 'Cherry Bomb', body: 0xff4d6d, accent: 0x8c1e33, glow: 0xffd166, price: 180, rarity: 'COMMON' },
  { id: 'themed', name: 'Block Bomb', body: 0x4aa8ff, accent: 0x1d4f8a, glow: 0x9fe8ff, price: 350, rarity: 'RARE' },
  { id: 'nuke', name: 'Mini Nuke', body: 0xffc93c, accent: 0x7a4c0a, glow: 0xff5e3d, price: 700, rarity: 'LEGENDARY' },
]

export const BOT_NAMES = [
  'NoobMaster69', 'BlockyBoi', 'xX_Rocket_Xx', 'SquareJoe', 'TinyTitan',
  'PixelPunch', 'CubeQueen', 'RespawnKing', 'ToastyBlock', 'BrickBoss',
]

export const RESPAWN_TIPS = [
  'Tip: Headshots deal double damage.',
  'Tip: Grab glowing health crates to heal up.',
  'Tip: Hold right click to aim down sights.',
  'Tip: The high ground gives you the best angle.',
  'Tip: Press V to swing your melee weapon.',
  'Tip: Press G to toss a grenade around cover.',
]

export const ALL_SKINS = { avatar: AVATAR_SKINS, gun: GUN_SKINS, melee: MELEE_SKINS, grenade: GRENADE_SKINS }

export const MATCH_DURATION = 300
export const KILL_TARGET = 20
export const ARENA_HALF = 38
