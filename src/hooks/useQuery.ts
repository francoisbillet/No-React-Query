import { useState, useEffect } from "react";

export function useQuery<T>(fn: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setIsLoading(true);
    fn()
      .then((data: T) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
}
