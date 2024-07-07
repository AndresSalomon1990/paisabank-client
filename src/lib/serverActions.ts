"use server";

// External deps
import { cookies } from "next/headers";
import type { RequestError } from "@/types/global";
import { redirect } from "next/navigation";

// Internal deps
import { ROUTES } from "./constants";

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

  return (await res.json()) as T & RequestError;
};

export const setToken = (token: string) => {
  cookies().set("token", token);
};

export const removeToken = () => {
  cookies().delete("token");
};

export const logout = async () => {
  await removeToken();

  redirect(ROUTES.LOGIN.path);
};
