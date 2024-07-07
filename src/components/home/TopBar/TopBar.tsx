// External deps
import Link from "next/link";

// Internal deps
import { Icons } from "@/components/ui/icons";
import { ROUTES } from "@/lib/constants";

function TopBar() {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <p className="text-base font-medium text-card-foreground">Hola</p>
        <p className="text-2xl font-semibold text-foreground">Paisanx</p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Link href={ROUTES.MOVEMENTS.path}>
          <Icons.Search />
        </Link>
        {/* TODO: Add notifications feature */}
        <Icons.Notification />
      </div>
    </div>
  );
}

export default TopBar;
