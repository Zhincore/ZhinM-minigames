import { JSX, Component, Show, createSignal, onCleanup, on, createEffect } from "solid-js";
import { omitProps } from "solid-use";
import { twMerge } from "tailwind-merge";
import { api } from "$lib/API";
import { Replace } from "~common/utils";
import { Chevron } from "./Chevron";

export interface IMenuItemBase {
  color?: "primary" | "danger";
  label?: string;
  right?: JSX.Element;
  borderTop?: boolean;
  borderBottom?: boolean;

  name?: never;
  description?: never;
  isTitle?: false;
  isText?: false;
  isPlayer?: false;
  options?: never;
  onActivate?: never;
  onChosen?: never;
}

export type IMenuItemSlot = IMenuItemBase;

export type IMenuItemPlayer = Replace<IMenuItemBase, { label: string; isPlayer: true }>;

export type IMenuItemText = Replace<IMenuItemBase, { label: string; isText: true }>;

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

export type IMenuItem =
  | IMenuItemSlot
  | IMenuItemText
  | IMenuItemPlayer
  | IMenuItemTitle
  | IMenuItemButton
  | IMenuItemList;

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
  ]);
  const [chosen, setChosen] = createSignal(0);

  createEffect(
    on(
      chosen,
      () => {
        api.playSound("LeftRight");
        props.onChosen?.(chosen());
      },
      { defer: true }
    )
  );

  const activate = () => {
    api.playSound("Select");
    props.onActivate?.();
  };

  const onKeyDown = (ev: KeyboardEvent) => {
    if (!props.isFocused) return;
    const itemCount = props.options?.length;
    switch (ev.key) {
      case "ArrowLeft":
        if (itemCount) setChosen((i) => (itemCount + i - 1) % itemCount);
        break;
      case "ArrowRight":
        if (itemCount) setChosen((i) => (i + 1) % itemCount);
        break;
      case "Enter":
      case " ":
        activate();
        break;
    }
  };

  window.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <li
      onClick={activate}
      {...htmlProps}
      class={twMerge(
        "my-1 flex w-full justify-between bg-black bg-opacity-60 px-2 py-1",
        props.isTitle && "justify-center bg-accent bg-opacity-90 uppercase",
        props.isText && "leading-tight",
        props.isPlayer && "border-l-6 border-l-accent-light bg-accent",
        props.borderTop && "border-t-2 border-t-white",
        props.borderBottom && "border-b-2 border-b-white",
        props.name && "cursor-pointer",
        !props.label && "after:invisible after:inline-block after:w-0 after:content-['-']",
        { primary: "bg-accent", danger: "bg-red-800" }[props.color],
        // State:
        props.isFocused && "bg-white bg-opacity-90 text-black"
      )}
    >
      <span class={props.isPlayer ? "font-header" : ""}>{props.label}</span>

      <Show when={props.right}>
        <span>{props.right}</span>
      </Show>
      <Show when={props.options}>
        <Show when={props.isFocused} fallback={<span>{props.options[chosen()]}</span>}>
          <span>
            <Chevron direction="left" />
            {props.options[chosen()]}
            <Chevron direction="right" />
          </span>
        </Show>
      </Show>
    </li>
  );
};
