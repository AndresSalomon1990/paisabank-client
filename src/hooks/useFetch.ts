"use client";

// External
import { useState, useEffect, useCallback } from "react";

interface Response<T> {
  success: boolean;
  data?: T[];
  message?: string;
}

interface UseFetch<T = any> {
  response: Response<T>;
  isPending: boolean;
  error: any;
  fetchData: () => Promise<void>;
}

/*
  This hooks was created to call a service from client side with a server action.
  It handles pending and error states.
  Retry function: is used to call the server action again on error.
  automaticFetchData: is used to make the first call by the hook.
  If it is false, you have to do it manually
*/
const useFetch = <T, P = undefined>(
  serverAction: (params?: any) => Promise<Response<T>>,
  params?: P,
  automaticFetchData: boolean = true,
  initialIsPendingState: boolean = true,
): UseFetch<T> => {
  const [response, setResponse] = useState<any>(null);
  const [isPending, setIsPending] = useState<boolean>(initialIsPendingState);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      // Reset states on each call
      setIsPending(true);
      setError("");

      const res = await serverAction(params);

      if (!res.success) {
        throw new Error(res.message);
      }

      setIsPending(false);
      setResponse(res);
      setError("");
    } catch (err: any) {
      setIsPending(false);
      setError(err.message);
    }
  }, [params]);

  useEffect(() => {
    if (automaticFetchData) {
      fetchData();
    }
  }, []);

  return {
    response,
    isPending,
    error,
    fetchData,
  };
};

export default useFetch;
