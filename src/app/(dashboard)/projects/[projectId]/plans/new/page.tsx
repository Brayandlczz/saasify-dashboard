import { BackButton, PageHeader } from "@/components/ui";
import { CreatePlanForm } from "@/features/plans/components/create-plan-form";

type NewPlanPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function NewPlanPage({ params }: NewPlanPageProps) {
  const { projectId } = await params;

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-2xl">
        <BackButton className="mb-6" />
        <div className="mb-6 text-center">
          <PageHeader
            eyebrow="Plans"
            title="Create plan"
            description="Define a subscription plan for this project."
          />
        </div>

        <CreatePlanForm projectId={projectId} />
      </section>
    </main>
  );
}