"use client";

// External deps
import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

// Internal deps
import { ScrollArea } from "@/components/ui/scroll-area";
import MovementCard from "@/components/general/MovementCard/MovementCard";
import type { Movement } from "@/api/movements/types";
import { filterByConditions } from "@/lib/utils";
import { searchFilterCondition } from "./utils";

interface Props {
  movements: Movement[];
}

function MovementsCards({ movements }: Readonly<Props>) {
  const { watch } = useFormContext();

  const movementsFiltered = useMemo(
    () => filterByConditions(movements, [searchFilterCondition(watch().searchValue)]),
    [movements, watch().searchValue],
  );

  return (
    <ScrollArea className="h-[calc(100dvh-86px-28px-2.5rem-2.5rem-1.5rem-4rem)]">
      {/* 
          Dynamic height calculation for scroll container:
          BottomBar: 86px
          Title: 28px
          SearchBar: 2.5rem
          QuickFilters: 2.5rem
          Padding top: 1.5rem
          Gaps (x3): 4rem
        */}
      <div className="p- flex h-full flex-col gap-4">
        {movementsFiltered.map((movement) => (
          <MovementCard movement={movement} key={movement.id} />
        ))}
      </div>
    </ScrollArea>
  );
}

export default MovementsCards;
