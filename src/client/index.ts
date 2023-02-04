import { nui } from "./nui";

RegisterCommand("lobby", () => nui.show(), false);

on("onResourceStop", (resourceName: string) => {
  if (GetCurrentResourceName() != resourceName) return;
  nui.kill();
});
