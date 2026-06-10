import { apiClient } from "@/lib/api/client";

import type {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
  User,
} from "./types";

type UserRecord = User & {
  password: string;
};

export async function login(
  payload: LoginPayload
): Promise<AuthResponse> {
  const response = await apiClient.get<UserRecord[]>("/users");

  const userRecord = response.data.find(
    (candidate) =>
      candidate.email === payload.email &&
      candidate.password === payload.password
  );

  if (!userRecord) {
    throw new Error("Invalid credentials");
  }

  const { password: _password, ...user } = userRecord;

  return {
    user,
    accessToken: crypto.randomUUID(),
    refreshToken: crypto.randomUUID(),
  };
}

export async function register(
  payload: RegisterPayload
): Promise<AuthResponse> {
  const newUser: UserRecord = {
    id: crypto.randomUUID(),
    name: payload.name,
    email: payload.email,
    password: payload.password,
    createdAt: new Date().toISOString(),
  };

  const response = await apiClient.post<UserRecord>("/users", newUser);

  const { password: _password, ...user } = response.data;

  return {
    user,
    accessToken: crypto.randomUUID(),
    refreshToken: crypto.randomUUID(),
  };
}