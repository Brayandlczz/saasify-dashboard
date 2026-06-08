type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div>
      {eyebrow && (
        <p className="text-sm font-medium text-zinc-500">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
        {title}
      </h1>

      {description && (
        <p className="mt-2 text-sm text-zinc-600">
          {description}
        </p>
      )}
    </div>
  );
}