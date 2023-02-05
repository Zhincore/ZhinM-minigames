import { IMenuItemOpt, IMenuItemSlot } from "./IMenuItem";

export interface ILobby {
  title: string;
  description: string;
  preview?: string;
  details?: IMenuItemSlot[];

  settings: IMenuItemOpt[];

  players: string[];
  maxPlayers: number;
}
