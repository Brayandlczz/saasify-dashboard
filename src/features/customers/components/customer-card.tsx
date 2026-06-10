"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Card } from "@/components/ui";
import type { Customer } from "../types";

type CustomerCardProps = {
  customer: Customer;
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

      <CopyField label="External ID" value={customer.externalId} />
    </Card>
  );
}