import { Card } from "@/components/ui";
import type { Customer } from "../types";

type CustomerCardProps = {
  customer: Customer;
};

export function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div>
        <h3 className="text-base font-semibold text-zinc-950">
          {customer.name}
        </h3>
        <p className="mt-0.5 text-sm text-zinc-500">{customer.email}</p>
      </div>

      <div className="h-px bg-zinc-100" />

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
          External ID
        </p>
        <p className="mt-1 font-mono text-xs text-zinc-600">
          {customer.externalId}
        </p>
      </div>
    </Card>
  );
}