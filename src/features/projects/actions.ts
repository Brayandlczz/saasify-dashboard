"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  createProject,
  rotateProjectApiKey,
} from "@/features/projects/projects.api";

export async function createProjectAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();

  if (!name || !slug) {
    throw new Error("Name and slug are required.");
  }

  await createProject({ name, slug });

  redirect("/dashboard");
}

export async function rotateProjectApiKeyAction(
  _state: { success: boolean } | null,
  formData: FormData
) {
  const projectId = String(formData.get("projectId") ?? "").trim();

  if (!projectId) {
    throw new Error("Project ID is required.");
  }

  await rotateProjectApiKey(projectId);

  revalidatePath(`/projects/${projectId}`);

  return { success: true };
}