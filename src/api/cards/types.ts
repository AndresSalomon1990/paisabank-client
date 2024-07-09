export type Card = {
  id: number;
  issuer: string;
  name: string;
  expDate: string;
  lastDigits: number;
  balance: number;
  currency: string;
};

export interface CardsServiceGetResponse {
  success: boolean;
  data: Card[];
}
