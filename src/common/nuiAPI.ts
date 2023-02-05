import { ILobby } from "./ILobby";

export enum UISounds {
  UpDown = "NAV_UP_DOWN",
  LeftRight = "NAV_LEFT_RIGHT",
  Select = "SELECT",
  Back = "BACK",
  Error = "ERROR",
  Slider = "CONTINUOUS_SLIDER",
}
export type UISound = keyof typeof UISounds;

// NUI to Client

export interface NUIToClientEvents {
  playSound(sound: UISound): void;
  exit(): void;
}
export const nuiToClientEventNames: (keyof NUIToClientEvents)[] = ["exit", "playSound"];

// Client to NUI

export interface NUIScreens {
  lobby(lobby: ILobby): void;
}

export interface ClientToNuiEvents {
  show<S extends keyof NUIScreens>(screen: S, ...data: Parameters<NUIScreens[S]>): void;
  hide(): void;
}
