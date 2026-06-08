"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { FormError } from "@/components/feedback";
import { Button, Input } from "@/components/ui";

import { register as registerUser } from "../auth.api";
import { registerSchema, type RegisterFormValues } from "../auth.schema";
import { useAuth } from "../context/auth-context";

export function RegisterForm() {
  const router = useRouter();
  const auth = useAuth();

  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterFormValues) {
    setError(undefined);

    try {
      const response = await registerUser(data);

      auth.login(response.user);

      router.push("/dashboard");
    } catch {
      setError("Could not create account.");
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
            Name
          </label>

          <Input
            type="text"
            placeholder="Your name"
            {...register("name")}
          />

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

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
          {isSubmitting
            ? "Creating account..."
            : "Create account"}
        </Button>
      </div>
    </form>
  );
}