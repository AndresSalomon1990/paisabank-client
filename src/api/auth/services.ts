// Internal deps
import { fetchRequest } from "@/lib/serverActions";
import type { LoginServicePostParams, LoginServicePostResponse } from "./types";

export const loginService = async ({ email, password }: LoginServicePostParams) =>
  fetchRequest<LoginServicePostResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/paisabank/login`,
    {
      method: "POST",
      body: { email, password },
    },
  );
