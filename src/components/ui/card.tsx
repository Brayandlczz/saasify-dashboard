import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-zinc-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}