import { Button } from "@/components/ui/button";
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

      <Button
        type="submit"
        variant="danger"
      >
        Deactivate
      </Button>
    </form>
  );
}