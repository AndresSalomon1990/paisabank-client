// External deps
import Link from "next/link";
import dynamic from "next/dynamic";

// Internal deps
import { Icons } from "@/components/ui/icons";
import { ROUTES } from "@/lib/constants";
import HelloNameSkeleton from "./HelloName/HelloNameSkeleton";

const HelloName = dynamic(() => import("./HelloName/HelloName"), {
  ssr: false,
  loading: () => <HelloNameSkeleton />,
});

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
