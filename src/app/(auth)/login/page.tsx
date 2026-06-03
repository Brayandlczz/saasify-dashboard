import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-zinc-950">
            SaaSify
          </h1>

          <p className="mt-2 text-sm text-zinc-600">
            Sign in to your dashboard
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}