// Internal deps
import { Card as CardComponent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import type { Card } from "@/api/cards/types";
import { ISSUERS } from "@/lib/enums";

interface Props {
  card: Card;
}

function CreditCard({ card }: Readonly<Props>) {
  const isVisa = card.issuer === ISSUERS.VISA;
  const balanceFormatted = new Intl.NumberFormat("es-AR").format(card.balance);

  return (
    <CardComponent className="flex h-48 w-full flex-col gap-2 rounded-[24px] bg-accent px-6 py-4 text-accent-foreground">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-normal">Balance</span>
        {isVisa ? <Icons.Visa /> : <Icons.MasterCard />}
      </div>
      <div className="flex w-fit items-center justify-center gap-2">
        <div className="flex h-[30px] w-12 items-center justify-center rounded bg-gradient-to-tl from-currencyGradientFrom to-currencyGradientTo text-sm font-medium">
          {card.currency}
        </div>
        <span className="text-center text-[22px] font-medium">{balanceFormatted}</span>
      </div>
      <p className="mt-4 text-[22px] font-normal">
        <span className="font-normal">**** **** ****</span> {card.lastDigits}
      </p>
      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-base font-normal">Soy {card.name}</span>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-normal">Exp. date</span>
          <span className="text-[13px] font-normal">{card.expirationDate}</span>
        </div>
      </div>
    </CardComponent>
  );
}

export default CreditCard;
