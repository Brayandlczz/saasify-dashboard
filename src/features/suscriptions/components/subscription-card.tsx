import { Badge, Card } from "@/components/ui";

import type { Subscription } from "../types";

type SubscriptionCardProps = {
  subscription: Subscription;
};

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const isActive = subscription.status === "active";

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-zinc-950">
            Subscription
          </h3>

          <p className="mt-1 break-all text-sm text-zinc-500">
            {subscription.id}
          </p>
        </div>

        <Badge variant={isActive ? "success" : "danger"}>
          {subscription.status}
        </Badge>
      </div>

      <div className="mt-4 space-y-1 text-sm text-zinc-600">
        <p>Plan ID: {subscription.planId}</p>
        <p>Customer ID: {subscription.customerId}</p>
        <p>
          Ends at:{" "}
          {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
        </p>
      </div>
    </Card>
  );
}