"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";

import { useRouter } from "next/navigation";
import { login } from "../auth.api";
import { useAuth } from "../context/auth-context";

import {
  loginSchema,
  type LoginFormValues,
} from "../auth.schema";


export function LoginForm() {

  const router = useRouter();
  const auth = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormValues) {
    try {
      const response = await login(data);

      auth.login(response.user);

      router.push("/dashboard");
    } catch {
      alert("Invalid credentials");
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

        <button
          type="submit"
          className="
            w-full
            rounded-lg
            bg-zinc-950
            px-4
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-zinc-800
          "
        >
          Login
        </button>
      </div>
    </form>
  );
}