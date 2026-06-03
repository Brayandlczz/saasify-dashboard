import { CreatePlanForm } from "@/features/plans/components/create-plan-form";

type NewPlanPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function NewPlanPage({ params }: NewPlanPageProps) {
  const { projectId } = await params;

  return (
    <main className="px-6 py-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-zinc-500">Plans</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
            Create plan
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Define a subscription plan for this project.
          </p>
        </div>

        <CreatePlanForm projectId={projectId} />
      </section>
    </main>
  );
}