import { Replace } from "./utils";

interface IMenuItemBase {
  color?: "primary" | "danger";
  label?: string;
  right?: string;
  borderTop?: boolean;
  borderBottom?: boolean;

  name?: never;
  description?: never;
  isTitle?: false;
  isText?: false;
  image?: never;
  isPlayer?: false;
  options?: never;
  onActivate?: never;
  onChosen?: never;
}

export type IMenuItemSlot = IMenuItemBase;

export type IMenuItemPlayer = Replace<IMenuItemBase, { label: string; isPlayer: true }>;

export type IMenuItemText = Replace<IMenuItemBase, { label: string; isText: true }>;
export type IMenuItemImage = Replace<IMenuItemBase, { label?: string; image: string; isText?: boolean }>;

export type IMenuItemTitle = Replace<
  IMenuItemBase,
  {
    label: string;
    isTitle: true;
  }
>;

export type IMenuItemButton = Replace<
  IMenuItemBase,
  {
    name: string;
    label: string;
    description?: string;
    onActivate?: () => void;
  }
>;

export type IMenuItemList = Replace<
  IMenuItemButton,
  {
    options: string[];
    onActivate?: never;
    onChosen?: (index: number) => void;
  }
>;

export type IMenuItemOpt = IMenuItemButton | IMenuItemList;

export type IMenuItem =
  | IMenuItemSlot
  | IMenuItemText
  | IMenuItemPlayer
  | IMenuItemTitle
  | IMenuItemButton
  | IMenuItemList;
