// Internal deps
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface Props {
  isVisa: boolean;
  currency: string;
  balance: number;
  lastDigits: number;
  name: string;
  expDate: string;
}

function CreditCard({
  isVisa = false,
  currency = "ARS",
  balance = 0,
  lastDigits = 1234,
  name = "Paisanx",
  expDate,
}: Readonly<Props>) {
  return (
    <Card className="flex w-full flex-col gap-2 rounded-[24px] bg-accent px-6 py-4 text-accent-foreground">
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-normal">Balance</span>
        {isVisa ? <Icons.Visa /> : <Icons.MasterCard />}
      </div>
      <div className="flex w-fit items-center justify-center gap-2">
        <div className="flex h-[30px] w-12 items-center justify-center rounded bg-gradient-to-tl from-currencyGradientFrom to-currencyGradientTo text-sm font-medium">
          {currency}
        </div>
        <span className="text-center text-[22px] font-medium">{balance}</span>
      </div>
      <p className="mt-4 text-[22px] font-normal">
        <span className="font-normal">**** **** ****</span> {lastDigits}
      </p>
      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-base font-normal">Soy {name}</span>
        <div className="flex flex-col items-center justify-center gap-1">
          <span className="text-[10px] font-normal">Exp. date</span>
          <span className="text-[13px] font-normal">{expDate}</span>
        </div>
      </div>
    </Card>
  );
}

export default CreditCard;
