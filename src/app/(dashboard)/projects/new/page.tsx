import { CreateProjectForm } from "@/features/projects/components/create-project-form";

export default function NewProjectPage() {
  return (
    <main className="px-6 py-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-zinc-500">Projects</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-zinc-950">
            Create project
          </h1>
          <p className="mt-2 text-sm text-zinc-600">
            Register a SaaS product that will use SaaSify for plans and
            entitlements.
          </p>
        </div>

        <CreateProjectForm />
      </section>
    </main>
  );
}