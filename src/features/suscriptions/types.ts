export type SubscriptionStatus =
  | "active"
  | "past_due"
  | "cancelled"
  | "expired";

export type Subscription = {
  id: string;
  customerId: string;
  projectId: string;
  planId: string;
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  renewsAt: string;
  createdAt: string;
};