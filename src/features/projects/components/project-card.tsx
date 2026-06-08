import Link from "next/link";

import { Badge, Card } from "@/components/ui";
import type { Project } from "@/features/projects/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-zinc-900">
            {project.name}
          </h2>
          <p className="mt-1 text-sm text-zinc-500">{project.slug}</p>
        </div>

        <Badge variant="success">{project.status}</Badge>
      </div>

      <p className="mt-4 text-xs text-zinc-400">
        Created at {new Date(project.createdAt).toLocaleDateString()}
      </p>

      <Link
        href={`/projects/${project.id}`}
        className="mt-4 inline-flex text-sm font-medium text-zinc-950 hover:underline"
      >
        View project
      </Link>
    </Card>
  );
}