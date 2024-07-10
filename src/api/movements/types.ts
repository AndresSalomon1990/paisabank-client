// Internal deps
import { MOVEMENTS_TYPES } from "@/lib/enums";

export interface AllMovementsServiceGetParams {
  filter?: string;
}

export interface Movement {
  id: number;
  title: string;
  amount: number;
  transactionType: MOVEMENTS_TYPES;
  date: string;
}

export interface MovementsServiceGetResponse {
  success: boolean;
  data: Movement[];
}
