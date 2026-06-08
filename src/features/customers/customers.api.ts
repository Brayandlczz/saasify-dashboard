import { apiClient } from "@/lib/api/client";

import type { Customer } from "./types";

export async function getCustomersByProjectId(
  projectId: string
): Promise<Customer[]> {
  const response = await apiClient.get<Customer[]>("/customers", {
    params: {
      projectId,
    },
  });

  return response.data;
}