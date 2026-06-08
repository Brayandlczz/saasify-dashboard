"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { FormError } from "@/components/feedback";
import { Button, Input } from "@/components/ui";

import { login } from "../auth.api";
import { loginSchema, type LoginFormValues } from "../auth.schema";
import { useAuth } from "../context/auth-context";

export function LoginForm() {
  const router = useRouter();
  const auth = useAuth();

  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormValues) {
    setError(undefined);

    try {
      const response = await login(data);

      auth.login(response.user);

      router.push("/dashboard");
    } catch {
      setError("Invalid email or password.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-zinc-950">
            Email
          </label>

          <Input
            type="email"
            placeholder="dev@example.com"
            {...register("email")}
          />

          {errors.email && (
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-zinc-950">
            Password
          </label>

          <Input
            type="password"
            {...register("password")}
          />

          {errors.password && (
            <p className="mt-1 text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        <FormError message={error} />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Signing in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}