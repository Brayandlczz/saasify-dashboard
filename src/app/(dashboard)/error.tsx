"use client";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({
  reset,
}: ErrorPageProps) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          Something went wrong
        </h1>

        <button
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-zinc-950 px-4 py-2 text-white"
        >
          Try again
        </button>
      </div>
    </main>
  );
}