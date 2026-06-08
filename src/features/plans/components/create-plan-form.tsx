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
          <Input id="slug" name="slug" type="text" placeholder="pro" required />
        </div>

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
          <label
            htmlFor="currency"
            className="text-sm font-medium text-zinc-950"
          >
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

        <div>
          <label
            htmlFor="billingCycle"
            className="text-sm font-medium text-zinc-950"
          >
            Billing cycle
          </label>
          <select
            id="billingCycle"
            name="billingCycle"
            defaultValue="MONTHLY"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
          >
            <option value="MONTHLY">Monthly</option>
            <option value="ANNUAL">Annual</option>
          </select>
        </div>

        <label className="flex items-center gap-2 text-sm text-zinc-700">
          <input
            name="isPublic"
            type="checkbox"
            defaultChecked
            className="h-4 w-4 rounded border-zinc-300"
          />
          Public plan
        </label>

        <Button type="submit">Create plan</Button>
      </div>
    </form>
  );
}