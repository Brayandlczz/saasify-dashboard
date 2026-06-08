import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "success" | "neutral" | "danger";
};

export function Badge({
  children,
  variant = "neutral",
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-emerald-50 text-emerald-700":
            variant === "success",

          "bg-zinc-100 text-zinc-700":
            variant === "neutral",

          "bg-red-50 text-red-700":
            variant === "danger",
        }
      )}
    >
      {children}
    </span>
  );
}