"use server";

import { redirect } from "next/navigation";

import { createProject } from "@/features/projects/projects.api";

export async function createProjectAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();

  if (!name || !slug) {
    throw new Error("Name and slug are required.");
  }

  await createProject({
    name,
    slug,
  });

  redirect("/dashboard");
}