import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/images/brand/logo.webp"
            alt="Logo"
            width={140}
            height={48}
            className="object-contain"
          />

          <p className="mt-2 text-sm text-zinc-600">
            Sign in to your dashboard
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-center text-sm text-zinc-600">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-zinc-950 underline">
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
}