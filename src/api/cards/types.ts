// Internal deps
import { ISSUERS } from "@/lib/enums";

export type Card = {
  id: number;
  issuer: ISSUERS;
  name: string;
  expirationDate: string;
  lastDigits: number;
  balance: number;
  currency: string;
};

export interface CardsServiceGetResponse {
  success: boolean;
  data: Card[];
}
