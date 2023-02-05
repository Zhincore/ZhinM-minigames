import { nui } from "./nui";

RegisterCommand(
  "lobby",
  () =>
    nui.show("lobby", {
      title: "Tron",
      description: "Dont die",
      preview: "https://static.zhincore.eu/Obsessions/20210902_171120.jpg",
      settings: [
        { label: "peepee", name: "a" },
        { label: "Leave", name: "leave", color: "danger" },
      ],
      players: ["Zhincore"],
      maxPlayers: 5,
    }),
  false
);

on("onResourceStop", (resourceName: string) => {
  if (GetCurrentResourceName() != resourceName) return;
  nui.kill();
});
