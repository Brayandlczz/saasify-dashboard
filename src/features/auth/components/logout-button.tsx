"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { useAuth } from "../context/auth-context";

export function LogoutButton() {
  const router = useRouter();
  const auth = useAuth();

  function handleLogout() {
    auth.logout();
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="flex cursor-pointer items-center gap-2 text-sm text-zinc-500 hover:text-zinc-950 transition-colors"
    >
      <LogOut className="h-4 w-4 text-red-500" />
      Logout
    </button>
  );
}