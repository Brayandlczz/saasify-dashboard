import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="
        mt-2
        w-full
        rounded-lg
        border
        border-zinc-300
        px-3
        py-2
        text-sm
        outline-none
        transition-colors
        focus:border-zinc-950
      "
    />
  );
}