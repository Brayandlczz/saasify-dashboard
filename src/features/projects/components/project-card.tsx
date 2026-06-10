import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge, Card } from "@/components/ui";
import type { Project } from "@/features/projects/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-zinc-900">
            {project.name}
          </h2>
          <p className="mt-0.5 truncate text-xs text-zinc-400">
            {project.slug}
          </p>
        </div>

        <Badge variant="success">{project.status}</Badge>
      </div>

      <div className="h-px bg-zinc-100" />

      <div className="flex items-center justify-between">
        <p className="text-xs text-zinc-400">
          Created {new Date(project.createdAt).toLocaleDateString()}
        </p>

        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-zinc-950 hover:underline"
        >
          View project
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </Card>
  );
}