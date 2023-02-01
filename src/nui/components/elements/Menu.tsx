import { createSelector, createSignal, Component, For, createMemo } from "solid-js";
import { IMenuItem, MenuItem } from "./MenuItem";

interface MenuProps {
  isFocused?: boolean;
  onFocusRequest?: () => void;
  items: IMenuItem[];
}

export const Menu: Component<MenuProps> = (props) => {
  const selectableItems = createMemo(() => props.items.filter((item) => !!item.name));

  const [focused, setFocused] = createSignal(selectableItems()[0]);
  const isFocused = createSelector(focused);

  const canFocus = (item: IMenuItem) => item.name && props.isFocused;
  const requestFocus = () => (props.onFocusRequest ? props.onFocusRequest() : null);

  return (
    <ul class="w-72">
      <For each={props.items}>
        {(item) => (
          <MenuItem
            {...item}
            isFocused={canFocus(item) && isFocused(item)}
            onMouseEnter={() => (canFocus(item) ? setFocused(item) : requestFocus())}
          />
        )}
      </For>
    </ul>
  );
};
