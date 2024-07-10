// Internal deps
import { getLastMovementsService, getAllMovementsService } from "@/api/movements/services";
import type { AllMovementsServiceGetParams } from "@/api/movements/types";

export const getLastMovementsServiceAdapter = async () => {
  try {
    const response = await getLastMovementsService();

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

export const getAllMovementsServiceAdapter = async (params: AllMovementsServiceGetParams) => {
  try {
    const response = await getAllMovementsService(params);

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
