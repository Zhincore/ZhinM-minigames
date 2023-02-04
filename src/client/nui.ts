/**
 * Some of these function may be inspired by https://github.com/manups4e/ScaleformUI
 */
import { ClientToNuiEvents, NUIToClientEvents, nuiToClientEventNames, UISound, UISounds } from "~common/nuiAPI";

for (const key of nuiToClientEventNames) {
  RegisterNuiCallbackType(key);
}

class NUI implements NUIToClientEvents, ClientToNuiEvents {
  private active = false;

  constructor() {
    for (const key of nuiToClientEventNames) {
      on(`__cfx_nui:${key}`, (args, cb) => {
        cb((this[key] as () => unknown).apply(this, args));
      });
    }

    setTick(() => {
      if (this.active) SetMouseCursorVisibleInMenus(false);
    });
  }

  sendEvent<E extends keyof ClientToNuiEvents>(eventName: E, ...args: Parameters<ClientToNuiEvents[E]>) {
    return SendNuiMessage(JSON.stringify({ eventName, args }));
  }

  exit() {
    this.hide();
  }

  playSound(sound: UISound) {
    PlaySoundFrontend(-1, UISounds[sound], "HUD_FRONTEND_DEFAULT_SOUNDSET", false);
  }

  show() {
    if (this.active) return;
    PlaySoundFrontend(-1, "Hit_In", "PLAYER_SWITCH_CUSTOM_SOUNDSET", false);
    ActivateFrontendMenu("FE_MENU_VERSION_EMPTY_NO_BACKGROUND", true, -1);
    SetPauseMenuActive(true);
    AnimpostfxPlay("PauseMenuIn", 800, true);
    SetMouseCursorVisibleInMenus(false);
    SetPlayerControl(PlayerId(), false, 0);
    SetNuiFocus(true, true);
    this.sendEvent("show", "lobby");
    this.active = true;
  }

  hide() {
    if (!this.active) return;
    PlaySoundFrontend(-1, "Hit_Out", "PLAYER_SWITCH_CUSTOM_SOUNDSET", false);
    ActivateFrontendMenu("FE_MENU_VERSION_EMPTY_NO_BACKGROUND", true, -1);
    SetPauseMenuActive(false);
    AnimpostfxStop("PauseMenuIn");
    AnimpostfxPlay("PauseMenuOut", 800, false);
    SetPlayerControl(PlayerId(), true, 0);
    SetNuiFocus(false, false);
    this.sendEvent("hide");
    this.active = false;
  }

  kill() {
    if (!this.active) return;
    AnimpostfxStop("PauseMenuIn");
    AnimpostfxPlay("PauseMenuOut", 1, false);
    SetMouseCursorVisibleInMenus(true);
    SetPauseMenuActive(false);
    if (!IsPlayerControlOn(PlayerId())) SetPlayerControl(PlayerId(), true, 0);
  }
}

export const nui = new NUI();
