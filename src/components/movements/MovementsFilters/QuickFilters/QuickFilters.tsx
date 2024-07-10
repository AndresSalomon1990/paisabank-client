"use client";

// External deps
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";

// Internal deps
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { QUICK_FILTER_OPTIONS } from "@/lib/constants";

function QuickFilters() {
  const [activeFilter, setActiveFilter] = useState(QUICK_FILTER_OPTIONS[0]);
  const { setValue } = useFormContext();

  const handleClick = useCallback((option: (typeof QUICK_FILTER_OPTIONS)[number]) => {
    setActiveFilter(option);
    setValue("movementType", option.value);
  }, []);

  return (
    <ScrollArea>
      <div className="flex w-full items-center gap-[10px]">
        {QUICK_FILTER_OPTIONS.map((option) => (
          <Button
            key={option.id}
            variant="default"
            type="button"
            className={`h-10 w-full rounded-2xl hover:bg-pillActive hover:text-pillActive-foreground ${activeFilter.id === option.id ? "bg-pillActive" : "bg-white"} px-5 ${activeFilter.id === option.id ? "text-pillActive-foreground" : "text-black"}`}
            onClick={() => handleClick(option)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default QuickFilters;
