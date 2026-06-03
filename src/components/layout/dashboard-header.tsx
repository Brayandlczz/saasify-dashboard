import { LogoutButton } from "@/features/auth/components/logout-button";

export function DashboardHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div>
          <p className="text-sm font-semibold text-zinc-950">SaaSify</p>
          <p className="text-xs text-zinc-500">Developer Dashboard</p>
        </div>

        <nav className="flex items-center gap-4">
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}