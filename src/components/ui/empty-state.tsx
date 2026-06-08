type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center">
      <p className="text-sm font-medium text-zinc-950">
        {title}
      </p>

      <p className="mt-1 text-sm text-zinc-500">
        {description}
      </p>
    </div>
  );
}