import { deactivatePlanAction } from "@/features/plans/actions";

type DeactivatePlanFormProps = {
  projectId: string;
  planId: string;
};

export function DeactivatePlanForm({
  projectId,
  planId,
}: DeactivatePlanFormProps) {
  return (
    <form action={deactivatePlanAction}>
      <input type="hidden" name="projectId" value={projectId} />
      <input type="hidden" name="planId" value={planId} />

      <button
        type="submit"
        className="text-sm font-medium text-red-600 hover:text-red-700"
      >
        Deactivate
      </button>
    </form>
  );
}