import { ProjectCard } from "@/features/projects/components/project-card";
import { getProjects } from "@/features/projects/projects.api";
import Link from "next/link";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="px-6 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-500">Projects</p>
            <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
              Your projects
            </h1>
            <p className="mt-2 text-sm text-zinc-600">
              Manage your SaaS projects and subscription plans.
            </p>
          </div>
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