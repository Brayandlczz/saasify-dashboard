import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "success";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors",
        "disabled:cursor-not-allowed disabled:opacity-60",
        {
          "bg-zinc-950 text-white hover:bg-zinc-800":
            variant === "primary",

          "border border-zinc-300 bg-white text-zinc-950 hover:bg-zinc-100":
            variant === "secondary",

          "bg-red-600 text-white hover:bg-red-700":
            variant === "danger",

          "bg-emerald-600 text-white hover:bg-emerald-700":
            variant === "success",
        },
        className
      )}
    />
  );
}