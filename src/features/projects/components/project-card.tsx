import type { Project } from "@/features/projects/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">
            {project.name}
          </h2>

          <p className="mt-1 text-sm text-zinc-500">{project.slug}</p>
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-xs text-zinc-400">
        Created at {new Date(project.createdAt).toLocaleDateString()}
      </p>
    </article>
  );
}