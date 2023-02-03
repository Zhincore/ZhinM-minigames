import { Component } from "solid-js";
import { twMerge } from "tailwind-merge";

interface ChevronProps {
  direction?: "top" | "left" | "bottom" | "right";
  class?: string;
}

export const Chevron: Component<ChevronProps> = (props) => {
  return (
    <i
      class={twMerge(
        "mx-1 inline-block h-2 w-2 transform border-t-3 border-l-3 border-current",
        { top: "rotate-45", left: "-rotate-45", bottom: "-rotate-135", right: "rotate-135" }[props.direction],
        props.class
      )}
    />
  );
};
