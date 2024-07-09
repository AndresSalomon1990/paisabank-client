// Internal deps
import MovementCard from "@/components/general/MovementCard/MovementCard";
import CreditCard from "@/components/home/CreditCard/CreditCard";
import CreditCardsCarousel from "@/components/home/CreditCardsCarousel/CreditCardsCarousel";
import TopBar from "@/components/home/TopBar/TopBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MOVEMENTS_TYPES } from "@/lib/enums";

const items = [
  <CreditCard
    key={1}
    isVisa
    currency="USD"
    balance={12345.67}
    lastDigits={1234}
    name="Paisanx"
    expDate="09/24"
  />,
  <CreditCard
    key={2}
    currency="USD"
    balance={12345.67}
    lastDigits={1234}
    name="Paisanx"
    expDate="09/24"
  />,
];

function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8 px-6 pt-9">
      <TopBar />
      <CreditCardsCarousel items={items} />

      <section className="flex w-full flex-col gap-6">
        <h4 className="text-xl font-medium">Últimos movimientos</h4>
        {/* 
          Dynamic height calculation for scroll container:
          BottomBar: 96px
          TopBar: 56px
          CardsCarousel: 12rem
          Title: 24px
          Padding top: 2.25rem
          Gaps (x3): 5.5rem
        */}
        <ScrollArea className="h-[calc(100dvh-96px-56px-12rem-24px-2.25rem-5.5rem)]">
          <div className="flex h-full flex-col gap-2">
            <MovementCard type={MOVEMENTS_TYPES.SUS} amount={123} title="Recibo importante" />
            <MovementCard type={MOVEMENTS_TYPES.CASH_IN} amount={123} title="Recibo importante" />
            <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
            <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
            <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
            <MovementCard type={MOVEMENTS_TYPES.CASH_OUT} amount={123} title="Recibo importante" />
          </div>
        </ScrollArea>
      </section>
    </div>
  );
}

export default HomePage;
