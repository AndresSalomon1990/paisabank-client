// External deps
import type { ReactElement } from "react";

// Internal deps
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Props {
  items: ReactElement[];
}

function CreditCardsCarousel({ items }: Readonly<Props>) {
  return (
    <Carousel className="drop-shadow-xl">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={`${index}-${new Date().getTime()}`} className="basis-11/12">
            {item}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CreditCardsCarousel;
