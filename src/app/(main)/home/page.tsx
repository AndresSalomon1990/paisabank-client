// Internal deps
import MovementCard from "@/components/general/MovementCard/MovementCard";
import CreditCard from "@/components/home/CreditCard/CreditCard";
import CreditCardsCarousel from "@/components/home/CreditCardsCarousel/CreditCardsCarousel";
import LastMovements from "@/components/home/LastMovements/LastMovements";
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
    <div className="flex w-full flex-col gap-8 pt-9">
      <section className="px-6">
        <TopBar />
      </section>

      <section className="ps-6">
        <CreditCardsCarousel items={items} />
      </section>

      <section className="flex w-full flex-col gap-6 px-6">
        <h4 className="text-xl font-medium">Últimos movimientos</h4>
        <LastMovements />
      </section>
    </div>
  );
}

export default HomePage;
