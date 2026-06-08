import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          404
        </h1>

        <p className="mt-2 text-zinc-600">
          Page not found
        </p>

        <Link
          href="/dashboard"
          className="mt-4 inline-block underline"
        >
          Back to dashboard
        </Link>
      </div>
    </main>
  );
}