import { createSelector, createSignal, Component, For, createMemo, onCleanup } from "solid-js";
import { IMenuItem, MenuItem } from "./MenuItem";

interface MenuProps {
  isFocused?: boolean;
  onFocusRequest?: () => void;
  items: IMenuItem[];
}

export const Menu: Component<MenuProps> = (props) => {
  const canItemFocus = (item: IMenuItem) => item.name && props.isFocused;
  const requestFocus = () => (props.onFocusRequest ? props.onFocusRequest() : null);

  const selectableItems = createMemo(() => props.items.filter((item) => !!item.name));
  const [focusedItem, setFocusedItem] = createSignal(-1);
  const isItemFocused = createSelector<number, IMenuItem>(
    focusedItem,
    (item, i) => item == props.items[i] && canItemFocus(item)
  );

  const moveFocus = (dir: 1 | -1) => {
    const items = selectableItems();
    const itemCount = props.items.length;
    if (!items.length) return;
    setFocusedItem((i) => {
      do {
        i = (i + dir + itemCount) % itemCount;
      } while (!items.includes(props.items[i]));
      return i;
    });
  };
  moveFocus(1);

  const onKeyDown = (ev: KeyboardEvent) => {
    if (!props.isFocused) return;
    switch (ev.key) {
      case "ArrowDown":
        moveFocus(1);
        break;
      case "ArrowUp":
        moveFocus(-1);
        break;
    }
  };

  window.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <ul class="mx-0.5 w-72">
      <For each={props.items}>
        {(item, i) => (
          <MenuItem
            {...item}
            isFocused={isItemFocused(item)}
            onMouseEnter={() => (canItemFocus(item) ? setFocusedItem(i()) : requestFocus())}
          />
        )}
      </For>
    </ul>
  );
};
