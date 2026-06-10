import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`
        mt-2
        w-full
        rounded-lg
        border
        border-zinc-300
        bg-white
        px-3
        py-2
        text-sm
        text-zinc-950
        outline-none
        transition-colors
        placeholder:text-zinc-400
        focus:border-zinc-950
        ${className}
      `}
    />
  );
}