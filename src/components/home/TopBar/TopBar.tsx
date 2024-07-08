// External deps
import Link from "next/link";

// Internal deps
import { Icons } from "@/components/ui/icons";
import { ROUTES } from "@/lib/constants";
import HelloName from "./HelloName";

function TopBar() {
  return (
    <div className="flex w-full items-center justify-between">
      <HelloName />
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
