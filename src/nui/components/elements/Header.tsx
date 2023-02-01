import { ParentComponent, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { twMerge } from "tailwind-merge";

interface HeaderProps {
  class?: string;
  as?: ValidComponent;
}

export const Header: ParentComponent<HeaderProps> = (props) => {
  return (
    <Dynamic component={props.as || "p"} class={twMerge("[text-shadow:0.1rem_0.1rem_0.2rem_black]", props.class)}>
      {props.children}
    </Dynamic>
  );
};
