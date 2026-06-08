import { Button } from "@/components/ui/button";
import { rotateProjectApiKeyAction } from "@/features/projects/actions";

type RotateApiKeyFormProps = {
  projectId: string;
};

export function RotateApiKeyForm({ projectId }: RotateApiKeyFormProps) {
  return (
    <form action={rotateProjectApiKeyAction}>
      <input type="hidden" name="projectId" value={projectId} />

      <Button
        type="submit"
        variant="secondary"
      >
        Rotate API key
      </Button>
    </form>
  );
}