import { Component, createMemo, onCleanup } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { api } from "$lib/API";
import { Menu } from "$elements/Menu";
import { Header } from "$elements/Header";
import { NUIScreens } from "~common/nuiAPI";
import { IMenuItem } from "~common/IMenuItem";

export const Lobby: Component = () => {
  const navigate = useNavigate();
  const location = useLocation<Parameters<NUIScreens["lobby"]>>();
  const data = createMemo(() => location.state[0]);

  const onKeyDown = (ev: KeyboardEvent) => {
    if (ev.key == "Escape") {
      api.playSound("Back");
      navigate("/confirmLeave");
    }
  };
  window.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <div class="h-[920px] w-[1280px]">
      <div class="w-full">
        <Header as="h1" class="font-header text-4xl">
          {data().title}
        </Header>
        <Header>{data().description}</Header>
      </div>

      <div class="flex items-start">
        <Menu isFocused items={[{ label: "Settings", isTitle: true }, ...data().settings]} />
        <Menu
          items={[
            { label: `Players (${data().players.length}/${data().maxPlayers})`, isTitle: true },
            ...data().players.map((label) => ({ label, isPlayer: true as const })),
            ...Array(data().maxPlayers - data().players.length).fill({}),
          ]}
        />
        <Menu
          items={
            [
              { label: "Details", isTitle: true },
              data().preview && { label: data().title, image: data().preview },
            ].filter((v) => v) as IMenuItem[]
          }
        />
      </div>
    </div>
  );
};
