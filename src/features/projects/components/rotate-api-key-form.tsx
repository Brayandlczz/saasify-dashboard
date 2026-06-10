"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { rotateProjectApiKeyAction } from "@/features/projects/actions";

type RotateApiKeyFormProps = {
  projectId: string;
};

export function RotateApiKeyForm({ projectId }: RotateApiKeyFormProps) {
  const [state, formAction, isPending] = useActionState(
    rotateProjectApiKeyAction,
    null
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="projectId" value={projectId} />

      <Button
        type="submit"
        variant={state?.success ? "success" : "secondary"}
        disabled={isPending}
      >
        {isPending ? "Rotating..." : state?.success ? "Rotated!" : "Rotate API key"}
      </Button>
    </form>
  );
}