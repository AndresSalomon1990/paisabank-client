// Internal deps
import { ScrollArea } from "@/components/ui/scroll-area";
import MovementCard from "@/components/general/MovementCard/MovementCard";
import { MOVEMENTS_TYPES } from "@/lib/enums";

function MovementsCards() {
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
        <MovementCard type={MOVEMENTS_TYPES.SUS} amount={123} title="Recibo importante" />
        <MovementCard type={MOVEMENTS_TYPES.CASH_IN} amount={123} title="Recibo importante" />
        <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
        <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
        <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
        <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
      </div>
    </ScrollArea>
  );
}

export default MovementsCards;
