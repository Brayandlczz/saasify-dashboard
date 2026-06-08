import { apiClient } from "@/lib/api/client";
import type { CreatePlanPayload, Plan } from "./types";

export async function getPlansByProjectId(projectId: string): Promise<Plan[]> {
  const response = await apiClient.get<Plan[]>("/plans", {
    params: {
      projectId,
    },
  });

  return response.data;
}

export async function createPlan(payload: CreatePlanPayload): Promise<Plan> {
  const response = await apiClient.post<Plan>("/plans", {
    id: crypto.randomUUID(),
    ...payload,
    createdAt: new Date().toISOString(),
  });

  return response.data;
}

export async function deactivatePlan(planId: string): Promise<Plan> {
  const response = await apiClient.patch<Plan>(`/plans/${planId}`, {
    isActive: false,
    isPublic: false,
  });

  return response.data;
}