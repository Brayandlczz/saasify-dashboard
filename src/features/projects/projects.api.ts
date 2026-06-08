import { apiClient } from "@/lib/api/client";
import type { Project, CreateProjectPayload } from "./types";

export async function getProjects(): Promise<Project[]> {
  const response = await apiClient.get<Project[]>("/projects");

  return response.data;
}

export async function getProjectById(projectId: string): Promise<Project> {
  const response = await apiClient.get<Project>(`/projects/${projectId}`);

  return response.data;
}

export async function createProject(
  payload: CreateProjectPayload
): Promise<Project> {
  const response = await apiClient.post<Project>("/projects", {
    id: crypto.randomUUID(),
    ...payload,
    ownerId: "550e8400-e29b-41d4-a716-446655440000",
    status: "active",
    createdAt: new Date().toISOString(),
    settings: {},
  });

  return response.data;
}

export async function rotateProjectApiKey(projectId: string): Promise<Project> {
  const apiKey = `pk_live_${crypto.randomUUID().replaceAll("-", "")}`;

  const response = await apiClient.patch<Project>(`/projects/${projectId}`, {
    apiKey,
  });

  return response.data;
}