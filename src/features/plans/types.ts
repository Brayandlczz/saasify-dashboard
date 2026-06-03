export type BillingCycle = "MONTHLY" | "ANNUAL";

export type Plan = {
  id: string;
  projectId: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  billingCycle: BillingCycle;
  isPublic: boolean;
  isActive?: boolean;
  createdAt: string;
};

export type CreatePlanPayload = {
  projectId: string;
  name: string;
  slug: string;
  price: number;
  currency: string;
  billingCycle: BillingCycle;
  isPublic: boolean;
};