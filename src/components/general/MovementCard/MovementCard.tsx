// Internal deps
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { MOVEMENTS_TYPES } from "@/lib/enums";

interface Props {
  type: MOVEMENTS_TYPES;
  amount: number;
  title: string;
}

function MovementCard({ type, amount, title }: Readonly<Props>) {
  // Grab icon and class based on movement type
  const getStyles = () => {
    switch (type) {
      case MOVEMENTS_TYPES.SUS:
        return {
          icon: <Icons.Subscription />,
          class: "susMovement",
          label: "de suscripción",
        };
      case MOVEMENTS_TYPES.CASH_IN:
        return {
          icon: <Icons.CashIn />,
          class: "cashInMovement",
          label: "recibido",
        };

      default:
        return {
          icon: <Icons.CashOut />,
          class: "cashOutMovement",
          label: "enviado",
        };
    }
  };

  return (
    <Card className="flex w-full items-center justify-between rounded-2xl py-6 pe-[18px] ps-4">
      <div className="flex gap-4">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-${getStyles().class}`}
        >
          {getStyles().icon}
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-base font-medium">{title}</span>
          <span className="text-xs font-normal text-muted-foreground">
            Pago {getStyles().label}
          </span>
        </div>
      </div>
      <span className={`text-sm font-normal text-${getStyles().class}-foreground`}>${amount}</span>
    </Card>
  );
}

export default MovementCard;
