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
  const response = await apiClient.post<Project>("/projects", payload);

  return response.data;
}