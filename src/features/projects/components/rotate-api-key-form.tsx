import { rotateProjectApiKeyAction } from "@/features/projects/actions";

type RotateApiKeyFormProps = {
  projectId: string;
};

export function RotateApiKeyForm({ projectId }: RotateApiKeyFormProps) {
  return (
    <form action={rotateProjectApiKeyAction}>
      <input type="hidden" name="projectId" value={projectId} />

      <button
        type="submit"
        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-100"
      >
        Rotate API key
      </button>
    </form>
  );
}