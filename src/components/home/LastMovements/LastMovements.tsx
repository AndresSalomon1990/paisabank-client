// Internal deps
import MovementCard from "@/components/general/MovementCard/MovementCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOVEMENTS_TYPES } from "@/lib/enums";
import { getLastMovementsServiceAdapter } from "@/adapters/movements/adapters";
import ErrorHandler from "@/components/general/ErrorHandler/ErrorHandler";

async function LastMovements() {
  const response = await getLastMovementsServiceAdapter();

  return (
    <ErrorHandler errorMessage={response.message}>
      <ScrollArea className="h-[calc(100dvh-86px-56px-13rem-24px-2.25rem-5.5rem)]">
        {/* 
          Dynamic height calculation for scroll container:
          BottomBar: 86px
          TopBar: 56px
          CardsCarousel: 13rem
          Title: 24px
          Padding top: 2.25rem
          Gaps (x3): 5.5rem
        */}
        <div className="flex h-full flex-col gap-4">
          {response.data?.map((movement) => <MovementCard movement={movement} key={movement.id} />)}
        </div>
      </ScrollArea>
    </ErrorHandler>
  );
}

export default LastMovements;
