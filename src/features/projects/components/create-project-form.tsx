import { createProjectAction } from "@/features/projects/actions";

export function CreateProjectForm() {
  return (
    <form
      action={createProjectAction}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-950"
          >
            Project name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="E-Commerce Platform"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
            required
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="text-sm font-medium text-zinc-950"
          >
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="ecommerce-platform"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
            required
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Create project
        </button>
      </div>
    </form>
  );
}