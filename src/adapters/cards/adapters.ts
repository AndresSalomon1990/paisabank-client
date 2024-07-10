// Internal deps
import { getCardsService } from "@/api/cards/services";

export const getCardsServiceAdapter = async () => {
  try {
    const response = await getCardsService();

    if (!response.success) {
      throw new Error(response.message);
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
