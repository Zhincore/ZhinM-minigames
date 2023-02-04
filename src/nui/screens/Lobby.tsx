import { Component, onCleanup } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { api } from "$lib/API";
import { Menu } from "$elements/Menu";
import { Header } from "$elements/Header";

export const Lobby: Component = (props) => {
  const navigate = useNavigate();

  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key == "Escape") {
      api.playSound("Back");
      navigate("./leave");
    }
  };
  window.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

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
            { label: "Matchmaking", name: "matchmaking", description: "Make a match" },
            { label: "Bebeob", name: "Bebeob", description: "kedobudan" },
            { label: "Invite", name: "Invite", description: "Invite" },
            { label: "ripthis", right: "ye" },
            { label: "Enabled", options: ["yes", "no"], name: "enabled" },
            { label: "Play", name: "play", color: "primary" },
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
