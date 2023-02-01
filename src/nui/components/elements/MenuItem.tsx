import { JSX, Component, Show } from "solid-js";
import { twMerge } from "tailwind-merge";
import { Replace } from "~common/utils";

interface MenuItemsPropsBase {
  color?: string;
  right?: JSX.Element;
  borderTop?: boolean;
  borderBottom?: boolean;

  label?: never;
  isFocused?: never;
  isTitle?: false;
  isText?: false;
  isPlayer?: false;
}

type MenuItemPropsText = Replace<
  MenuItemsPropsBase,
  | {
      label: string;
      isText: true;
      isPlayer?: false;
    }
  | {
      label?: string;
      isText?: false;
      isPlayer?: boolean;
    }
>;

type MenuItemPropsTitle = Replace<
  MenuItemsPropsBase,
  {
    label: string;
    isTitle: true;
  }
>;

type MenuItemPropsButton = Replace<
  MenuItemsPropsBase,
  {
    label: string;
    isFocused?: boolean;
  }
>;

type MenuItemProps = MenuItemPropsText | MenuItemPropsTitle | MenuItemPropsButton;

export const MenuItem: Component<MenuItemProps> = (props) => {
  return (
    <li
      class={twMerge(
        "my-1 flex w-full justify-between bg-black bg-opacity-60 px-2 py-1",
        props.isTitle && "justify-center bg-accent bg-opacity-100 uppercase",
        props.isText && "leading-tight",
        props.isPlayer && "border-l-6 border-l-accent-light bg-accent",
        props.borderTop && "border-t-2 border-t-white",
        props.borderBottom && "border-b-2 border-b-white",
        !props.label && "after:invisible after:inline-block after:w-0 after:content-['-']",
        // State:
        props.isFocused && "bg-slate-200 text-slate-900"
      )}
      style={{ "background-color": props.color }}
    >
      <span class={props.isPlayer ? "font-bold" : ""}>{props.label}</span>

      <Show when={props.right}>
        <span>{props.right}</span>
      </Show>
    </li>
  );
};
