/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";
import { App } from "./App";

if (import.meta.env.DEV) {
  if (!("invokeNative" in window)) {
    const backdrop = document.createElement("div");
    backdrop.className = "fixed inset-0 -z-50 blur";
    backdrop.style.background =
      "no-repeat center/cover url('https://static.zhincore.eu/storage/github_ZhinM-holospeed/20220913204900_1.jpg')";
    document.body.appendChild(backdrop);
    document.body.style.backgroundColor = "black";
  }
}

render(() => App({}), document.body);
