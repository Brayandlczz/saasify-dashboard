import type { Plan } from "@/features/plans/types";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: plan.currency,
  }).format(plan.price);

  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-950">{plan.name}</h3>
          <p className="mt-1 text-sm text-zinc-500">{plan.slug}</p>
        </div>

        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
          {plan.isPublic ? "Public" : "Private"}
        </span>
      </div>

      <p className="mt-5 text-2xl font-bold text-zinc-950">
        {formattedPrice}
      </p>

      <p className="mt-1 text-sm text-zinc-500">{plan.billingCycle}</p>
    </article>
  );
}