import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        "bg-zinc-950 text-white hover:bg-zinc-800",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
    />
  );
}