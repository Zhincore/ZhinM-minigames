import { JSX, Component, Show } from "solid-js";
import { omitProps } from "solid-use";
import { twMerge } from "tailwind-merge";
import { Replace } from "~common/utils";

interface IMenuItemBase {
  color?: "primary" | string;
  right?: JSX.Element;
  borderTop?: boolean;
  borderBottom?: boolean;

  name?: never;
  label?: never;
  isTitle?: false;
  isText?: false;
  isPlayer?: false;
  options?: never;
  readonly?: never;
}

type IMenuItemSlot = IMenuItemBase;

type IMenuItemPlayer = Replace<IMenuItemBase, { label: string; isPlayer: true }>;

type IMenuItemText = Replace<IMenuItemBase, { label: string; isText: true }>;

type IMenuItemTitle = Replace<
  IMenuItemBase,
  {
    label: string;
    isTitle: true;
  }
>;

type IMenuItemButton = Replace<
  IMenuItemBase,
  {
    name: string;
    label: string;
    readonly?: boolean;
    options?: { name: string; value?: string | number | boolean }[];
  }
>;

export type IMenuItem = IMenuItemText | IMenuItemPlayer | IMenuItemTitle | IMenuItemButton | IMenuItemSlot;
type MenuItemProps = IMenuItem & JSX.HTMLAttributes<HTMLLIElement> & { isFocused?: boolean };

export const MenuItem: Component<MenuItemProps> = (props) => {
  const htmlProps = omitProps(props, [
    "color",
    "right",
    "borderTop",
    "borderBottom",
    "name",
    "label",
    "isFocused",
    "isTitle",
    "isText",
    "isPlayer",
    "options",
    "readonly",
  ]);

  return (
    <li
      {...htmlProps}
      class={twMerge(
        "my-1 flex w-full justify-between bg-black bg-opacity-60 px-2 py-1",
        props.isTitle && "justify-center bg-accent bg-opacity-100 uppercase",
        props.isText ? "leading-tight" : "h-8",
        props.isPlayer && "border-l-6 border-l-accent-light bg-accent",
        props.borderTop && "border-t-2 border-t-white",
        props.borderBottom && "border-b-2 border-b-white",
        props.name && "cursor-pointer",
        !props.label && "after:invisible after:inline-block after:w-0 after:content-['-']",
        // State:
        props.isFocused && "bg-white bg-opacity-90 text-black"
      )}
      style={{ "background-color": props.color }}
    >
      <span class={props.isPlayer ? "font-header text-xl leading-tight" : ""}>{props.label}</span>

      <Show when={props.right}>
        <span>{props.right}</span>
      </Show>
    </li>
  );
};
