"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  label?: string;
  className?: string;
};

export function BackButton({ label = "Back", className }: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`cursor-pointer inline-flex items-center gap-1.5 text-sm font-medium text-zinc-950 hover:text-zinc-600 transition-colors ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </button>
  );
}