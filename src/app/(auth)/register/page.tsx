import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/features/auth/components/register-form";

export default function RegisterPage() {
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
            Create your developer account
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-zinc-950 underline">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}