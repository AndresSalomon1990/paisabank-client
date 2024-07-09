"use client";

// External deps
import { useState } from "react";
import { useFormContext } from "react-hook-form";

// Internal deps
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { MOVEMENTS_TYPES } from "@/lib/enums";

const options = [
  {
    id: 1,
    value: "",
    label: "Todos",
  },
  {
    id: 2,
    value: MOVEMENTS_TYPES.SUS,
    label: "Débito aut.",
  },
  {
    id: 3,
    value: MOVEMENTS_TYPES.CASH_IN,
    label: "Recibido",
  },
  {
    id: 4,
    value: MOVEMENTS_TYPES.CASH_OUT,
    label: "Enviado",
  },
];

function QuickFilters() {
  const [activeFilter, setActiveFilter] = useState(options[0]);
  const { setValue } = useFormContext();

  const handleClick = (option: (typeof options)[number]) => {
    setActiveFilter(option);
    setValue("movementType", option.value);
  };

  return (
    <ScrollArea>
      <div className="flex w-full items-center gap-[10px]">
        {options.map((option) => (
          <Button
            key={option.id}
            variant="default"
            type="button"
            className={`h-10 w-full rounded-2xl hover:bg-pillActive hover:text-pillActive-foreground bg-${activeFilter.id === option.id ? "pillActive" : "pillInactive"} px-5 text-${activeFilter.id === option.id ? "pillActive" : "pillInactive"}-foreground`}
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
