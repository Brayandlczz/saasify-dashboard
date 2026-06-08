import { apiClient } from "@/lib/api/client";

import type { Subscription } from "./types";

export async function getSubscriptionsByProjectId(
  projectId: string
): Promise<Subscription[]> {
  const response = await apiClient.get<Subscription[]>("/subscriptions", {
    params: {
      projectId,
    },
  });

  return response.data;
}