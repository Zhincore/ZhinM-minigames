import { Component, onCleanup } from "solid-js";
import { api } from "$lib/API";
import { Menu } from "$elements/Menu";
import { Header } from "$elements/Header";

export const LeaveConfirm: Component = () => {
  const goBack = () => {
    window.history.back();
    api.playSound("Back");
  };

  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key == "Escape") goBack();
  };
  window.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div>
      <Header>Do you really want to leave the lobby?</Header>
      <Menu
        isFocused
        items={[
          {
            label: "Cancel",
            name: "cancel",
            onActivate: goBack,
          },
          {
            label: "Leave",
            name: "leave",
            color: "danger",
            onActivate: () => api.exit(),
          },
        ]}
      />
    </div>
  );
};
