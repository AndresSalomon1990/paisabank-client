// Internal deps
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CreditCard from "../CreditCard/CreditCard";
import { getCardsService } from "@/api/cards/services";
import { getCardsServiceAdapter } from "@/adapters/cards/adapters";
import ErrorHandler from "@/components/general/ErrorHandler/ErrorHandler";

async function CreditCardsCarousel() {
  const response = await getCardsServiceAdapter();

  return (
    <ErrorHandler errorMessage={response.message}>
      <Carousel className="drop-shadow-xl">
        <CarouselContent>
          {response.data?.map((card) => (
            <CarouselItem key={card.id} className="basis-11/12">
              <CreditCard card={card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </ErrorHandler>
  );
}

export default CreditCardsCarousel;
