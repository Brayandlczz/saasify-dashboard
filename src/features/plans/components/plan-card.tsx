import { Badge, Card } from "@/components/ui";
import type { Plan } from "@/features/plans/types";

import { DeactivatePlanForm } from "./deactivate-plan-form";

type PlanCardProps = {
  plan: Plan;
};

export function PlanCard({ plan }: PlanCardProps) {
  const isActive = plan.isActive ?? true;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: plan.currency,
  }).format(plan.price);

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-950">{plan.name}</h3>
          <p className="mt-1 text-sm text-zinc-500">{plan.slug}</p>
        </div>

        <Badge variant={isActive ? "neutral" : "danger"}>
          {isActive ? (plan.isPublic ? "Public" : "Private") : "Inactive"}
        </Badge>
      </div>

      <p className="mt-5 text-2xl font-bold text-zinc-950">
        {formattedPrice}
      </p>

      <p className="mt-1 text-sm text-zinc-500">{plan.billingCycle}</p>

      {isActive && (
        <div className="mt-5 border-t border-zinc-100 pt-4">
          <DeactivatePlanForm projectId={plan.projectId} planId={plan.id} />
        </div>
      )}
    </Card>
  );
}