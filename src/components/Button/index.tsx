import type { ParentProps } from "solid-js";

export function PrimaryButton(props: ParentProps<{ onClick: () => void }>) {
  return (
    <button
      onclick={props.onClick}
      class='w-fit h-fit px-8 py-2 rounded-sm text-secondary-dark bg-accent-dark font-normal cursor-pointer'
    >
      {props.children}
    </button>
  );
}

export function SecondaryButton(props: ParentProps<{ onClick: () => void }>) {
  return (
    <button
      onclick={props.onClick}
      class='w-fit h-fit px-8 py-2 rounded-sm text-accent-dark bg-transparent font-normal border border-accent-dark cursor-pointer'
    >
      {props.children}
    </button>
  );
}
