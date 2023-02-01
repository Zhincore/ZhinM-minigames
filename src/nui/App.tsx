/* @refresh reload */
import { Component } from "solid-js";
import { Menu } from "$elements/Menu";
import { Header } from "$elements/Header";

export const App: Component = () => {
  return (
    <>
      <div>
        <Header as="h1" class="font-header text-4xl">
          Header for Care ()
        </Header>
        <Header>Text text job description something like text and stuff</Header>
      </div>

      <Menu
        isFocused
        items={[
          { label: "Menu Title", isTitle: true },
          { label: "Matchmaking", name: "matchmaking" },
          { label: "Bebeob", name: "Bebeob" },
          { label: "Invite", name: "Invite" },
          { label: "ripthis", name: "ripthis" },
          {},
          { label: "Enabled", right: "no", name: "enabled" },
          {},
          { label: "Zhincore", right: "PRO", isPlayer: true },
          { label: "Bastakka", isPlayer: true },
          {
            label: "Something something text select players lobby game settings choose a race.",
            borderTop: true,
            isText: true,
          },
        ]}
      />
    </>
  );
};
