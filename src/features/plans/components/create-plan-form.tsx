type CreatePlanFormProps = {
  projectId: string;
};

export function CreatePlanForm({ projectId }: CreatePlanFormProps) {
  return (
    <form className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      <input type="hidden" name="projectId" value={projectId} />

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-950">
            Plan name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Plan Pro"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
            required
          />
        </div>

        <div>
          <label htmlFor="slug" className="text-sm font-medium text-zinc-950">
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="pro"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="text-sm font-medium text-zinc-950">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="29.99"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-950"
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
          <input
            id="currency"
            name="currency"
            type="text"
            defaultValue="USD"
            className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm uppercase outline-none focus:border-zinc-950"
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

        <button
          type="submit"
          formAction={async (formData) => {
            "use server";

            const { createPlanAction } = await import(
              "@/features/plans/actions"
            );

            await createPlanAction(formData);
          }}
          className="rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Create plan
        </button>
      </div>
    </form>
  );
}