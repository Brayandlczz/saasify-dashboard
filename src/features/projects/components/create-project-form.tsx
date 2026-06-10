import { Input } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { createProjectAction } from "@/features/projects/actions";

export function CreateProjectForm() {
  return (
    <form
      action={createProjectAction}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-950">
            Project name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="E-Commerce Platform"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="text-sm font-medium text-zinc-950">
            Slug
          </label>
          <Input
            id="slug"
            name="slug"
            type="text"
            placeholder="ecommerce-platform"
            required
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Used as a unique identifier. Only lowercase letters, numbers, and hyphens.
          </p>
        </div>

        <div className="h-px bg-zinc-100" />

        <Button type="submit" className="w-full cursor-pointer">
          Create project
        </Button>
      </div>
    </form>
  );
}