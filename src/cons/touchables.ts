export type HitSlop = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export const smallHitSlop: HitSlop = {
  top: 10,
  bottom: 10,
  left: 20,
  right: 20,
};

export const mediumHitSlop: HitSlop = {
  top: 20,
  bottom: 20,
  left: 40,
  right: 40,
};
