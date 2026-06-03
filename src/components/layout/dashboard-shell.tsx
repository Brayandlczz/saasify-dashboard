import type { ReactNode } from "react";

import { DashboardHeader } from "./dashboard-header";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-zinc-50">
      <DashboardHeader />
      {children}
    </div>
  );
}