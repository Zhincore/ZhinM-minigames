import { Component, onCleanup } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { api } from "$lib/API";
import { Menu } from "$elements/Menu";

export const LeaveConfirm: Component = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("..");
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
      <header>Do you really want to leave the lobby?</header>
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
