// Internal deps
import MovementCard from "@/components/general/MovementCard/MovementCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOVEMENTS_TYPES } from "@/lib/enums";

function LastMovements() {
  return (
    <ScrollArea className="h-[calc(100dvh-86px-56px-12rem-24px-2.25rem-5.5rem)]">
      {/* 
          Dynamic height calculation for scroll container:
          BottomBar: 86px
          TopBar: 56px
          CardsCarousel: 12rem
          Title: 24px
          Padding top: 2.25rem
          Gaps (x3): 5.5rem
        */}
      <div className="flex h-full flex-col gap-4">
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

export default LastMovements;
