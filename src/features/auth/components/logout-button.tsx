"use client";

import { useRouter } from "next/navigation";

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
      className="text-sm text-zinc-600 hover:text-zinc-950"
    >
      Logout
    </button>
  );
}