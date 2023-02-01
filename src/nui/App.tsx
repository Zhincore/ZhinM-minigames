/* @refresh reload */
import { Component } from "solid-js";
import { MenuItem } from "$elements/MenuItem";
import { Menu } from "$elements/Menu";

export const App: Component = () => {
  return (
    <Menu>
      <MenuItem label="Menu title" isTitle />
      <MenuItem label="Matchmaking" />
      <MenuItem />
      <MenuItem label="Enabled" right="no" />
      <MenuItem />
      <MenuItem label="Zhincore" right="pro player" isPlayer />
      <MenuItem label="Zhincore" isPlayer />
      <MenuItem borderTop label="Something something text select players lobby game settings choose a race." isText />
    </Menu>
  );
};
