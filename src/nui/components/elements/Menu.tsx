import { ParentComponent } from "solid-js";

export const Menu: ParentComponent = (props) => {
  return <ul class="w-72">{props.children}</ul>;
};
