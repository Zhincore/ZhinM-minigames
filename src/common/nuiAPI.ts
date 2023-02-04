export enum UISounds {
  UpDown = "NAV_UP_DOWN",
  LeftRight = "NAV_LEFT_RIGHT",
  Select = "SELECT",
  Back = "BACK",
  Error = "ERROR",
  Slider = "CONTINUOUS_SLIDER",
}
export type UISound = keyof typeof UISounds;

export interface NUIToClientEvents {
  playSound(sound: UISound): void;
  exit(): void;
}
export const nuiToClientEventNames: (keyof NUIToClientEvents)[] = ["exit", "playSound"];

export interface ClientToNuiEvents {
  show(screen: string): void;
  hide(): void;
}
