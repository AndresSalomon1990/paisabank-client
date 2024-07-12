"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // TODO: style this page
  return (
    <div>
      <h2>Parece que algo ha salido mal :(</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar nuevamente
      </button>
    </div>
  );
}
