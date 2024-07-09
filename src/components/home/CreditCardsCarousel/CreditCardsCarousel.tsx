// Internal deps
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import CreditCard from "../CreditCard/CreditCard";
import { getCardsService } from "@/api/cards/services";

async function CreditCardsCarousel() {
  const cards = await getCardsService();

  return (
    <Carousel className="drop-shadow-xl">
      <CarouselContent>
        {cards.data.map((card) => (
          <CarouselItem key={card.id} className="basis-11/12">
            <CreditCard card={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CreditCardsCarousel;
