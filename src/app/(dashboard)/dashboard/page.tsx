import Link from "next/link";

import { PageHeader } from "@/components/ui";
import { ProjectCard } from "@/features/projects/components/project-card";
import { getProjects } from "@/features/projects/projects.api";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="px-6 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <PageHeader
            eyebrow="Projects"
            title="Your projects"
            description="Manage your SaaS projects and subscription plans."
          />

          <Link
            href="/projects/new"
            className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
          >
            New project
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}