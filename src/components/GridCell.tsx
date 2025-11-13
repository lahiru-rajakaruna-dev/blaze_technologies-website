import type { ParentProps } from "solid-js";

const StartingColumnOptions = {
  1: "col-start-1",
  2: "col-start-2",
  3: "col-start-3",
  4: "col-start-4",
  5: "col-start-5",
};

const ColumnSpanOptions = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
};

const StartingRowOptions = {
  1: "row-start-1",
  2: "row-start-2",
  3: "row-start-3",
  4: "row-start-4",
};

const RowSpanOptions = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
};

type TStartingColumn = keyof typeof StartingColumnOptions;
type TColumnSpan = keyof typeof ColumnSpanOptions;
type TStartingRow = keyof typeof StartingRowOptions;
type TRowSpan = keyof typeof RowSpanOptions;

export default function GridCell(
  props: ParentProps<{
    StartingColumn: TStartingColumn;
    StartingRow: TStartingRow;
    ColumnSpan: TColumnSpan;
    RowSpan: TRowSpan;
    id?: string;
  }>
) {
  return (
    <div
      id={props.id ?? undefined}
      class={`relative w-full h-full p-8 rounded-2xl 
        ${StartingColumnOptions[props.StartingColumn]}
        ${StartingRowOptions[props.StartingRow]}
        ${ColumnSpanOptions[props.ColumnSpan]}
        ${RowSpanOptions[props.RowSpan]}
        bg-secondary-base drop-shadow-md drop-shadow-secondary-light border border-accent-light`}
    >
      {props.children}
    </div>
  );
}
