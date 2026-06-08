import { Card } from "@/components/ui";

import type { Customer } from "../types";

type CustomerCardProps = {
  customer: Customer;
};

export function CustomerCard({ customer }: CustomerCardProps) {
  return (
    <Card>
      <h3 className="text-base font-semibold text-zinc-950">
        {customer.name}
      </h3>

      <p className="mt-1 text-sm text-zinc-500">{customer.email}</p>

      <p className="mt-4 text-xs text-zinc-400">
        External ID: {customer.externalId}
      </p>
    </Card>
  );
}