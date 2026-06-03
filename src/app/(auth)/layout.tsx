import type { ReactNode } from "react";

import { GuestRoute } from "@/features/auth/components/guest-route";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <GuestRoute>{children}</GuestRoute>;
}