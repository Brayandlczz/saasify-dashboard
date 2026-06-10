"use server";

import { redirect } from "next/navigation";

import { createPlan, deactivatePlan, activatePlan } from "@/features/plans/plans.api";
import type { BillingCycle } from "@/features/plans/types";

export async function createPlanAction(formData: FormData) {
  const projectId = String(formData.get("projectId") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const price = Number(formData.get("price") ?? 0);
  const currency = String(formData.get("currency") ?? "USD").trim();
  const billingCycle = String(
    formData.get("billingCycle") ?? "MONTHLY"
  ) as BillingCycle;
  const isPublic = formData.get("isPublic") === "on";

  if (!projectId || !name || !slug || Number.isNaN(price)) {
    throw new Error("Invalid plan data.");
  }

  await createPlan({
    projectId,
    name,
    slug,
    price,
    currency,
    billingCycle,
    isPublic,
  });

  redirect(`/projects/${projectId}`);
}

export async function deactivatePlanAction(formData: FormData) {
  const projectId = String(formData.get("projectId") ?? "").trim();
  const planId = String(formData.get("planId") ?? "").trim();

  if (!projectId || !planId) {
    throw new Error("Project ID and Plan ID are required.");
  }

  await deactivatePlan(planId);

  redirect(`/projects/${projectId}`);
}

export async function activatePlanAction(formData: FormData) {
  const projectId = String(formData.get("projectId") ?? "").trim();
  const planId = String(formData.get("planId") ?? "").trim();

  if (!projectId || !planId) {
    throw new Error(
      "Project ID and Plan ID are required."
    );
  }

  await activatePlan(planId);

  redirect(`/projects/${projectId}`);
}