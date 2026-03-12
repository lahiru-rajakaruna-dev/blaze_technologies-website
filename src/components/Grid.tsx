import type { ParentProps } from "solid-js";

export default function Grid(props: ParentProps<{}>) {
  return (
    <div class='w-full h-full grid grid-cols-6 grid-rows-4 gap-2'>
      {props.children}
    </div>
  );
}
