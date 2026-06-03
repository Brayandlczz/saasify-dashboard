import { notFound } from "next/navigation";

import { PlanCard } from "@/features/plans/components/plan-card";
import { getPlansByProjectId } from "@/features/plans/plans.api";
import { getProjectById } from "@/features/projects/projects.api";

type ProjectDetailPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { projectId } = await params;

  let project;
  let plans;

  try {
    [project, plans] = await Promise.all([
      getProjectById(projectId),
      getPlansByProjectId(projectId),
    ]);
  } catch {
    notFound();
  }

  return (
    <main className="px-6 py-8">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-zinc-500">Project</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
            {project!.name}
          </h1>
          <p className="mt-2 text-sm text-zinc-600">{project!.slug}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Status</p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {project!.status}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Created at</p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {new Date(project!.createdAt).toLocaleDateString()}
            </p>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">Project ID</p>
            <p className="mt-2 break-all text-sm font-semibold text-zinc-950">
              {project!.id}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-zinc-950">Plans</h2>
            <p className="mt-1 text-sm text-zinc-600">
              Subscription plans configured for this project.
            </p>
          </div>

          {plans!.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {plans!.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-zinc-300 bg-white p-8 text-center">
              <p className="text-sm font-medium text-zinc-950">No plans yet</p>
              <p className="mt-1 text-sm text-zinc-500">
                Create your first subscription plan for this project.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}