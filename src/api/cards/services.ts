// Internal deps
import { fetchRequest } from "@/lib/serverActions";
import type { CardsServiceGetResponse } from "./types";

export const getCards = async (): Promise<CardsServiceGetResponse> =>
  fetchRequest(`${process.env.NEXT_PUBLIC_API_BASE_URL}/paisabank/cards`, {
    method: "GET",
  });
