"use server";

// External deps
import { cookies } from "next/headers";

export const fetchRequest = async <T>(
  url: string,
  {
    method,
    headers,
    body,
  }: { method: string; headers?: Record<string, string>; body?: Record<string, any> },
  revalidate: false | number = 0,
) => {
  const token = cookies().get("token")?.value;

  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      token: `${token}`,
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
    ...(revalidate && { next: { revalidate } }),
  });

  return (await res.json()) as T;
};
