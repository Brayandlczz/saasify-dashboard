export type ProjectStatus = "active" | "suspended";

export type Project = {
  id: string;
  name: string;
  slug: string;
  ownerId: string;
  status: ProjectStatus;
  createdAt: string;
  settings?: Record<string, unknown>;
};

export type CreateProjectPayload = {
  name: string;
  slug: string;
};