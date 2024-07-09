"use client";

// External deps
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Internal deps
import MovementsFilters from "@/components/movements/MovementsFilters/MovementsFilters";
import MovementsCards from "@/components/movements/MovementsCards/MovementsCards";
// import useFetch from "@/hooks/useFetch";
// import { getAllMovementsService } from "@/api/movements/services";
// import type { Movement, AllMovementsServiceGetParams } from "@/api/movements/types";
// import { MOVEMENTS_TYPES } from "@/lib/enums";

const schema = z.object({
  searchValue: z.string().optional(),
  movementType: z.string().optional(),
});

export type MovementsSchema = z.infer<typeof schema>;

function MovementsContainer() {
  const form = useForm({ resolver: zodResolver(schema) });
  // const { response, isPending, fetchData, error } = useFetch<
  //   Movement,
  //   AllMovementsServiceGetParams
  // >(getAllMovementsService, {
  //   filter: MOVEMENTS_TYPES.SUS,
  // });

  // console.log(response);
  // console.log(isPending);
  // console.log(error);

  return (
    <FormProvider {...form}>
      <MovementsFilters />

      <section className="px-6">
        <MovementsCards />
      </section>
    </FormProvider>
  );
}

export default MovementsContainer;
