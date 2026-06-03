import { ProjectCard } from "@/features/projects/components/project-card";
import { getProjects } from "@/features/projects/projects.api";

export default async function DashboardPage() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-zinc-500">SaaSify</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
            Projects
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Manage your SaaS projects and subscription plans.
          </p>
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