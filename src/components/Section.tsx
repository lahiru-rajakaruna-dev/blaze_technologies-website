import type { ParentProps } from "solid-js";

export default function Section(props: ParentProps<{}>) {
  return (
    <section class='w-full h-screen px-8 py-24 snap-start'>
      {props.children}
    </section>
  );
}
