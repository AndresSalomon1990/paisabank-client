// Internal deps
import { fetchRequest } from "@/lib/serverActions";
import type { MovementsServiceGetResponse, AllMovementsServiceGetParams } from "./types";

export const getLastMovementsService = async () =>
  fetchRequest<MovementsServiceGetResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/paisabank/movements/last`,
    {
      method: "GET",
    },
  );

export const getAllMovementsService = async (params: AllMovementsServiceGetParams) => {
  const searchParams = new URLSearchParams({
    filter: String(params.filter),
  });

  return fetchRequest<MovementsServiceGetResponse>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/paisabank/movements/all?${searchParams.toString()}`,
    {
      method: "GET",
    },
  );
};
