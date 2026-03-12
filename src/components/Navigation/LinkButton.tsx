import type { ParentProps } from "solid-js";

export default function LinkButton(
  props: ParentProps<{ link: string; caption: string }>
) {
  return (
    <a href={props.link}>
      <div class='px-6 py-2 bg-secondary-light rounded-full border border-transparent hover:border-accent-base transform-gpu transition-all duration-300 ease-in-out'>
        <p>{props.caption}</p>
      </div>
    </a>
  );
}
