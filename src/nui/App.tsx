import { Component, onCleanup } from "solid-js";
import { Route, Routes, useNavigate } from "@solidjs/router";
import { LeaveConfirm } from "screens/LeaveConfirm";
import { ClientToNuiEvents } from "~common/nuiAPI";
import { api } from "./lib/API";
import { Lobby } from "./screens/Lobby";

export const App: Component = () => {
  const navigate = useNavigate();

  const onShow: ClientToNuiEvents["show"] = (screen, ...state) => navigate("/" + screen, { state });
  const onHide = () => navigate("/");

  api.on("show", onShow);
  api.on("hide", onHide);

  onCleanup(() => {
    api.off("show", onShow);
    api.off("hide", onHide);
  });

  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/confirmLeave" component={LeaveConfirm} />
    </Routes>
  );
};
