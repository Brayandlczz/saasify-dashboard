import Link from "next/link";
import { Plus } from "lucide-react";

import { PageHeader } from "@/components/ui";
import { ProjectCard } from "@/features/projects/components/project-card";
import { getProjects } from "@/features/projects/projects.api";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-start justify-between gap-4">
          <PageHeader
            eyebrow="Projects"
            title="Your projects"
            description="Manage your SaaS projects and subscription plans..."
          />

          <Link
            href="/projects/new"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-xl border border-dashed border-zinc-300 py-16 text-center">
            <p className="text-sm font-medium text-zinc-500">No projects yet</p>
            <p className="mt-1 text-xs text-zinc-400">
              Create your first project to get started.
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}