import Link from "next/link";
import { notFound } from "next/navigation";

import { Card, EmptyState, PageHeader } from "@/components/ui";
import { PlanCard } from "@/features/plans/components/plan-card";
import { getPlansByProjectId } from "@/features/plans/plans.api";
import { RotateApiKeyForm } from "@/features/projects/components/rotate-api-key-form";
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

  let project!: Awaited<ReturnType<typeof getProjectById>>;
  let plans!: Awaited<ReturnType<typeof getPlansByProjectId>>;

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
          <PageHeader
            eyebrow="Project"
            title={project.name}
            description={project.slug}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-sm font-medium text-zinc-500">Status</p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {project.status}
            </p>
          </Card>

          <Card>
            <p className="text-sm font-medium text-zinc-500">Created at</p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {new Date(project.createdAt).toLocaleDateString()}
            </p>
          </Card>

          <Card>
            <p className="text-sm font-medium text-zinc-500">Project ID</p>
            <p className="mt-2 break-all text-sm font-semibold text-zinc-950">
              {project.id}
            </p>
          </Card>
        </div>

        <Card className="mt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">API key</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Rotate the project API key used by external backends.
              </p>

              <p className="mt-4 break-all rounded-lg bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                {project.apiKey ?? "No API key generated yet"}
              </p>
            </div>

            <RotateApiKeyForm projectId={project.id} />
          </div>
        </Card>

        <div className="mt-10">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-zinc-950">Plans</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Subscription plans configured for this project.
              </p>
            </div>

            <Link
              href={`/projects/${project.id}/plans/new`}
              className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              New plan
            </Link>
          </div>

          {plans.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No plans yet"
              description="Create your first subscription plan for this project."
            />
          )}
        </div>
      </section>
    </main>
  );
}