import { useState } from "react";

export function useMutation<T>(fn: (context: T) => Promise<any>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  async function mutation(context: T) {
    setIsLoading(true);
    return fn(context)
      .catch((error) => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }

  return { mutation, isLoading, error };
}
