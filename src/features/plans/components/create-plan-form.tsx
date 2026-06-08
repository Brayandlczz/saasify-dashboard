import { Button, Input } from "@/components/ui";
import { createPlanAction } from "@/features/plans/actions";

type CreatePlanFormProps = {
  projectId: string;
};

export function CreatePlanForm({ projectId }: CreatePlanFormProps) {
  return (
    <form
      action={createPlanAction}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="projectId" value={projectId} />

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-950">
            Plan name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Plan Pro"
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
            placeholder="pro"
            required
          />
          <p className="mt-1.5 text-xs text-zinc-400">
            Only lowercase letters, numbers, and hyphens.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="price" className="text-sm font-medium text-zinc-950">
              Price
            </label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="29.99"
              required
            />
          </div>

          <div>
            <label htmlFor="currency" className="text-sm font-medium text-zinc-950">
              Currency
            </label>
            <Input
              id="currency"
              name="currency"
              type="text"
              defaultValue="USD"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="billingCycle" className="text-sm font-medium text-zinc-950">
            Billing cycle
          </label>
          <select
            id="billingCycle"
            name="billingCycle"
            defaultValue="MONTHLY"
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-950 outline-none transition-colors focus:border-zinc-950"
          >
            <option value="MONTHLY">Monthly</option>
            <option value="ANNUAL">Annual</option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2.5">
          <input
            id="isPublic"
            name="isPublic"
            type="checkbox"
            defaultChecked
            className="h-4 w-4 cursor-pointer rounded border-zinc-300 accent-zinc-950"
          />
          <label htmlFor="isPublic" className="cursor-pointer text-sm text-zinc-700">
            Public plan
          </label>
        </div>

        <div className="h-px bg-zinc-100" />

        <Button type="submit" className="w-full cursor-pointer">
          Create plan
        </Button>
      </div>
    </form>
  );
}