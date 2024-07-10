// Internal deps
import type { FilterCondition } from "@/types/global";
import type { Movement } from "@/api/movements/types";

type MovementsFilterCondition = FilterCondition<Movement>;

export const searchFilterCondition =
  (searchValue: string): MovementsFilterCondition =>
  (movement) => {
    // Return all data if searchValue is empty
    if (searchValue === "") return true;

    // Filter by title
    const title = movement.title.toLowerCase();

    return title.includes(searchValue.toLowerCase());
  };
