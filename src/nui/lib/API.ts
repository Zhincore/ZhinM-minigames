import { EventEmitter } from "eventemitter3";
import { ClientToNuiEvents, NUIToClientEvents, UISound } from "~common/nuiAPI";

const parentResourceName = GetParentResourceName();

class API extends EventEmitter<ClientToNuiEvents> implements NUIToClientEvents {
  constructor() {
    super();
    window.addEventListener("message", (ev) => this.emit(ev.data.eventName, ...ev.data.args));
  }

  private async sendEvent<E extends keyof NUIToClientEvents>(eventName: E, ...args: Parameters<NUIToClientEvents[E]>) {
    if (!("invokeNative" in window)) return null;
    return fetch(`https://${parentResourceName}/${eventName}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(args),
    }).catch(console.error);
  }

  playSound(sound: UISound) {
    this.sendEvent("playSound", sound);
  }

  exit() {
    this.sendEvent("exit");
  }
}

export const api = new API();
