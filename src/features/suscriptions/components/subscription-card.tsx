"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Badge, Card } from "@/components/ui";

import type { Customer } from "@/features/customers/types";
import type { Plan } from "@/features/plans/types";
import type { Subscription } from "../types";

type SubscriptionView = Subscription & {
  customer?: Customer;
  plan?: Plan;
};

type SubscriptionCardProps = {
  subscription: SubscriptionView;
};

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
        {label}
      </p>
      <div className="mt-0.5 flex items-center gap-2">
        <p className="break-all font-mono text-xs text-zinc-600">{value}</p>
        <button
          onClick={handleCopy}
          className="shrink-0 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-950"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-green-500" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </div>
  );
}

export function SubscriptionCard({ subscription }: SubscriptionCardProps) {
  const isActive = subscription.status === "active";

  return (
    <Card className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-zinc-950">
            {subscription.customer?.name ?? "Unknown Customer"}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">
            {subscription.plan?.name ?? "Unknown Plan"}
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
            Customer Email
          </p>
          <p className="mt-0.5 text-xs text-zinc-600">
            {subscription.customer?.email ?? "-"}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
            Renews At
          </p>
          <p className="mt-0.5 text-xs text-zinc-600">
            {new Date(subscription.currentPeriodEnd).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="h-px bg-zinc-100" />

      <div className="space-y-2">
        <CopyField label="Subscription ID" value={subscription.id} />
        <CopyField label="Customer ID" value={subscription.customerId} />
        <CopyField label="Plan ID" value={subscription.planId} />
      </div>
    </Card>
  );
}