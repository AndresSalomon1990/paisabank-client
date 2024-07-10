"use client";

// External deps
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Internal deps
import MovementsFilters from "@/components/movements/MovementsFilters/MovementsFilters";
import MovementsCards from "@/components/movements/MovementsCards/MovementsCards";
import MovementsCardsSkeleton from "@/components/movements/MovementsCards/MovementsCardsSkeleton";
import useFetch from "@/hooks/useFetch";
import { getAllMovementsServiceAdapter } from "@/adapters/movements/adapters";
import type { Movement, AllMovementsServiceGetParams } from "@/api/movements/types";
import { QUICK_FILTER_OPTIONS } from "@/lib/constants";
import ErrorHandler from "@/components/general/ErrorHandler/ErrorHandler";

const schema = z.object({
  searchValue: z.string().optional(),
  movementType: z.string().optional(),
});

export type MovementsSchema = z.infer<typeof schema>;

function MovementsContainer() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      searchValue: "",
      movementType: QUICK_FILTER_OPTIONS[0].value,
    },
  });
  const { response, isPending, fetchData, error } = useFetch<
    Movement,
    AllMovementsServiceGetParams
  >(
    getAllMovementsServiceAdapter,
    {
      filter: form.watch().movementType,
    },
    false,
  );

  useEffect(() => {
    fetchData();
  }, [form.watch().movementType]);

  return (
    <FormProvider {...form}>
      <MovementsFilters />

      <section className="px-6">
        <ErrorHandler errorMessage={error}>
          {isPending ? (
            <MovementsCardsSkeleton />
          ) : (
            <MovementsCards movements={response.data ?? []} />
          )}
        </ErrorHandler>
      </section>
    </FormProvider>
  );
}

export default MovementsContainer;
