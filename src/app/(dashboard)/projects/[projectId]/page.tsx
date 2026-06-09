import Link from "next/link";
import { notFound } from "next/navigation";
import { Plus } from "lucide-react";

import { BackButton, Card, EmptyState, PageHeader } from "@/components/ui";
import { CustomerCard } from "@/features/customers/components/customer-card";
import { getCustomersByProjectId } from "@/features/customers/customers.api";
import { PlanCard } from "@/features/plans/components/plan-card";
import { getPlansByProjectId } from "@/features/plans/plans.api";
import { RotateApiKeyForm } from "@/features/projects/components/rotate-api-key-form";
import { getProjectById } from "@/features/projects/projects.api";
import { SubscriptionCard } from "@/features/suscriptions/components/subscription-card";
import { getSubscriptionsByProjectId } from "@/features/suscriptions/subscriptions.api";

type ProjectDetailPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { projectId } = await params;

  let project!: Awaited<ReturnType<typeof getProjectById>>;
  let plans!: Awaited<ReturnType<typeof getPlansByProjectId>>;
  let customers!: Awaited<ReturnType<typeof getCustomersByProjectId>>;
  let subscriptions!: Awaited<ReturnType<typeof getSubscriptionsByProjectId>>;

  try {
    [project, plans, customers, subscriptions] = await Promise.all([
      getProjectById(projectId),
      getPlansByProjectId(projectId),
      getCustomersByProjectId(projectId),
      getSubscriptionsByProjectId(projectId),
    ]);
  } catch {
    notFound();
  }

  const customersMap = new Map(
    customers.map((customer) => [customer.id, customer])
  );

  const plansMap = new Map(plans.map((plan) => [plan.id, plan]));

  const subscriptionsView = subscriptions.map((subscription) => ({
    ...subscription,
    customer: customersMap.get(subscription.customerId),
    plan: plansMap.get(subscription.planId),
  }));

  return (
    <main className="px-6 py-10">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10">
          <BackButton className="mb-4 text-sm text-zinc-400 hover:text-zinc-200 transition-colors" />
          <PageHeader
            eyebrow="Project"
            title={project.name}
            description={project.slug}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Status
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {project.status}
            </p>
          </Card>

          <Card>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Created at
            </p>
            <p className="mt-2 text-lg font-semibold text-zinc-950">
              {new Date(project.createdAt).toLocaleDateString()}
            </p>
          </Card>

          <Card>
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Project ID
            </p>
            <p className="mt-2 break-all font-mono text-sm font-semibold text-zinc-950">
              {project.id}
            </p>
          </Card>
        </div>

        <Card className="mt-4">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <h2 className="text-sm font-semibold text-zinc-950">API Key</h2>
              <p className="mt-0.5 text-xs text-zinc-500">
                Used by external backends to authenticate with SaaSify.
              </p>
              <p className="mt-3 break-all rounded-lg bg-zinc-50 px-3 py-2 font-mono text-xs text-zinc-600">
                {project.apiKey ?? "No API key generated yet"}
              </p>
            </div>

            <RotateApiKeyForm projectId={project.id} />
          </div>
        </Card>

        <div className="mt-12">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-950">Plans</h2>
              <p className="mt-0.5 text-sm text-zinc-500">
                Subscription plans configured for this project.
              </p>
            </div>

            <Link
              href={`/projects/${project.id}/plans/new`}
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              <Plus className="h-4 w-4" />
              New plan
            </Link>
          </div>

          {plans.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No plans yet"
              description="Create your first subscription plan for this project."
            />
          )}
        </div>

        <div className="mt-12">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-zinc-950">Customers</h2>
            <p className="mt-0.5 text-sm text-zinc-500">
              Customers registered through the developer API.
            </p>
          </div>

          {customers.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {customers.map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No customers yet"
              description="Customers are created programmatically through the SaaSify API."
            />
          )}
        </div>

        <div className="mt-12 mb-10">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-zinc-950">
              Subscriptions
            </h2>
            <p className="mt-0.5 text-sm text-zinc-500">
              Active and historical subscriptions created through the API.
            </p>
          </div>

          {subscriptionsView.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {subscriptionsView.map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  subscription={subscription}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No subscriptions yet"
              description="Subscriptions are created and renewed through the SaaSify API."
            />
          )}
        </div>
      </section>
    </main>
  );
}