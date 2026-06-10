import Image from "next/image";
import { LogoutButton } from "@/features/auth/components/logout-button";

export function DashboardHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Image
          src="/images/brand/logo.webp"
          alt="Logo"
          width={150}
          height={40}
          className="object-contain"
        />

        <nav className="flex items-center gap-4">
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
}