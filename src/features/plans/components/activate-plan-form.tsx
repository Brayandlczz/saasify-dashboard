import { Button } from "@/components/ui";

import { activatePlanAction } from "../actions";

type ActivatePlanFormProps = {
  projectId: string;
  planId: string;
};

export function ActivatePlanForm({
  projectId,
  planId,
}: ActivatePlanFormProps) {
  return (
    <form action={activatePlanAction}>
      <input
        type="hidden"
        name="projectId"
        value={projectId}
      />

      <input
        type="hidden"
        name="planId"
        value={planId}
      />

      <Button
        type="submit"
        variant="secondary"
      >
        Activate
      </Button>
    </form>
  );
}