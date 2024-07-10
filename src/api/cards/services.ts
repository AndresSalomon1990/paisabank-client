// Internal deps
import { fetchRequest } from "@/lib/serverActions";
import type { CardsServiceGetResponse } from "./types";

export const getCardsService = async () =>
  fetchRequest<CardsServiceGetResponse>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/paisabank/cards`, {
    method: "GET",
  });
