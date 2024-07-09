// Internal deps
import CreditCardsCarousel from "@/components/home/CreditCardsCarousel/CreditCardsCarousel";
import CreditCardsCarouselSkeleton from "@/components/home/CreditCardsCarousel/CreditCardsCarouselSkeleton";
import LastMovements from "@/components/home/LastMovements/LastMovements";
import TopBar from "@/components/home/TopBar/TopBar";
import { Suspense } from "react";

function HomePage() {
  return (
    <div className="flex w-full flex-col gap-8 pt-9">
      <section className="px-6">
        <TopBar />
      </section>

      <section className="ps-6">
        <Suspense fallback={<CreditCardsCarouselSkeleton />}>
          <CreditCardsCarousel />
        </Suspense>
      </section>

      <section className="flex w-full flex-col gap-6 px-6">
        <h4 className="text-xl font-medium">Últimos movimientos</h4>
        <LastMovements />
      </section>
    </div>
  );
}

export default HomePage;
