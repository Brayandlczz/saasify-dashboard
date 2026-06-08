import { Badge, Card } from "@/components/ui";
import type { Subscription } from "../types";

type SubscriptionCardProps = {
  subscription: Subscription;
};

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const isActive = subscription.status === "active";

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-950">
            Subscription
          </h3>
          <p className="mt-0.5 truncate font-mono text-xs text-zinc-400">
            {subscription.id}
          </p>
        </div>

        <Badge variant={isActive ? "success" : "danger"}>
          {subscription.status}
        </Badge>
      </div>

      <div className="h-px bg-zinc-100" />

      <div className="grid grid-cols-2 gap-y-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Plan ID
          </p>
          <p className="mt-0.5 font-mono text-xs text-zinc-600">
            {subscription.planId}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Customer ID
          </p>
          <p className="mt-0.5 font-mono text-xs text-zinc-600">
            {subscription.customerId}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Ends at
          </p>
          <p className="mt-0.5 text-xs text-zinc-600">
            {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Card>
  );
}