import { useState } from "react";

interface UseFetchResult<T> {
  data: T | null;
  setData: React.Dispatch<
    React.SetStateAction<T | null>
  >;
  loading: boolean;
  error: Error | null;

  fetchData: (
    url: string,
    options?: RequestInit
  ) => Promise<T | undefined>;
}

export function useFetch<T>(): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(
    null
  );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<Error | null>(null);

  const fetchData = async (
    url: string,
    options?: RequestInit
  ): Promise<T | undefined> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        url,
        options
      );

      if (!response.ok) {
        throw new Error(
          `Error ${response.status}: ${response.statusText}`
        );
      }

      const result = await response.json();

      setData(result);

      return result;
    } catch (err: unknown | Error) {
      setError(err as Error);

      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    setData,
    loading,
    error,
    fetchData,
  };
}