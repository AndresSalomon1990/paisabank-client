// Internal deps
import MovementsContainer from "@/containers/movements/MovementsContainer/MovementsContainer";

function MovementsPage() {
  return (
    <div className="flex w-full flex-col gap-6 pt-6">
      <h1 className="m-0 px-6 text-xl font-medium">Movimientos</h1>

      <MovementsContainer />
    </div>
  );
}

export default MovementsPage;
