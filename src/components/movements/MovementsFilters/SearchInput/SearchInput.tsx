"use client";

// External deps
import { useFormContext } from "react-hook-form";

// Internal deps
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/ui/icons";

function SearchInput() {
  const { register } = useFormContext();

  return (
    <Input
      id="searchValue"
      type="text"
      placeholder="Ingresa un nombre o servicio"
      className="py-4 ps-10 drop-shadow-xl placeholder:text-xs focus-visible:ring-1 focus-visible:ring-accent"
      startIcon={Icons.Search}
      {...register("searchValue")}
    />
  );
}

export default SearchInput;
