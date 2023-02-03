/* @refresh reload */
import { Component } from "solid-js";
import { Menu } from "$elements/Menu";
import { Header } from "$elements/Header";

export const App: Component = () => {
  return (
    <div>
      <div class="w-full">
        <Header as="h1" class="font-header text-4xl">
          Header for Care ()
        </Header>
        <Header>Text text job description something like text and stuff</Header>
      </div>

      <div class="flex items-start">
        <Menu
          isFocused
          items={[
            { label: "Settings", isTitle: true },
            { label: "Matchmaking", name: "matchmaking" },
            { label: "Bebeob", name: "Bebeob" },
            { label: "Invite", name: "Invite" },
            { label: "ripthis", name: "ripthis" },
            { label: "Enabled", options: ["yes", "no"], name: "enabled" },
            { label: "Play", name: "play", color: "primary" },
            {
              label: "Something something text select players lobby game settings choose a race.",
              borderTop: true,
              isText: true,
            },
          ]}
        />
        <Menu
          items={[
            { label: "Players 2/5", isTitle: true },
            { label: "Zhincore", right: "PRO", isPlayer: true },
            { label: "Bastakka", isPlayer: true },
            {},
            {},
            {},
          ]}
        />
      </div>
    </div>
  );
};
