import { Badge, Card } from "@/components/ui";
import type { Plan } from "@/features/plans/types";

import { DeactivatePlanForm } from "./deactivate-plan-form";
import { ActivatePlanForm } from "./activate-plan-form";

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
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-zinc-950">
            {plan.name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-zinc-400">{plan.slug}</p>
        </div>

        <Badge variant={isActive ? "success" : "danger"}>
          {isActive ? "Active" : "Inactive"}
        </Badge>
      </div>

      <div className="h-px bg-zinc-100" />

      <div>
        <p className="text-2xl font-bold text-zinc-950">{formattedPrice}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-zinc-400">
          {plan.billingCycle}
        </p>
        <p className="mt-1 text-sm text-zinc-500">
          {plan.isPublic ? "Public plan" : "Private plan"}
        </p>
      </div>

      <div className="mt-5 border-t border-zinc-100 pt-4">
        {isActive ? (
          <DeactivatePlanForm projectId={plan.projectId} planId={plan.id} />
        ) : (
          <ActivatePlanForm projectId={plan.projectId} planId={plan.id} />
        )}
      </div>
    </Card>
  );
}