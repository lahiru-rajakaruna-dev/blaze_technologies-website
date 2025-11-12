import type { ParentProps } from "solid-js";

export default function Container(props: ParentProps<{}>) {
  return <div class='w-full max-w-5xl h-full mx-auto'>{props.children}</div>;
}
