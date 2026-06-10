import { BackButton, PageHeader } from "@/components/ui";
import { CreateProjectForm } from "@/features/projects/components/create-project-form";

export default function NewProjectPage() {
  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-2xl">
        <BackButton className="mb-6" />
        <div className="mb-6 text-center">
          <PageHeader
            eyebrow="Projects"
            title="Create project"
            description="Register a SaaS product that will use SaaSify for plans and entitlements."
          />
        </div>

        <CreateProjectForm />
      </section>
    </main>
  );
}