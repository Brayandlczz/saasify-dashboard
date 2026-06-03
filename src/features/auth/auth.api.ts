import { apiClient } from "@/lib/api/client";

import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "./types";

export async function login(
  payload: LoginPayload
): Promise<AuthResponse> {
  const response = await apiClient.get("/users");

  const user = response.data.find(
    (candidate: { email: string; password: string }) =>
      candidate.email === payload.email &&
      candidate.password === payload.password
  );

  if (!user) {
    throw new Error("Invalid credentials");
  }

  return {
    user,
    accessToken: crypto.randomUUID(),
    refreshToken: crypto.randomUUID(),
  };
}

export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  const response = await apiClient.post("/users", payload);

  return {
    user: response.data,
    accessToken: crypto.randomUUID(),
    refreshToken: crypto.randomUUID(),
  };
}