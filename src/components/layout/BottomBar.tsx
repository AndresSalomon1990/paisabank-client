"use client";

// External deps
import Link from "next/link";
import { usePathname } from "next/navigation";

// Internal deps
import { Icons } from "../ui/icons";
import { Button } from "../ui/button";
import { ROUTES } from "@/lib/constants";

function BottomBar() {
  const pathname = usePathname();

  return (
    <nav className="h-86 z-10 flex w-screen items-center justify-between rounded-t-[24px] bg-white px-14 py-7">
      <Link
        href={ROUTES.HOME.path}
        className={`${pathname === ROUTES.HOME.path ? "text-iconActive-foreground" : "text-iconInactive-foreground"}`}
      >
        <Icons.Home className="icon" />
      </Link>
      <Link
        href={ROUTES.MOVEMENTS.path}
        className={`${pathname === ROUTES.MOVEMENTS.path ? "text-iconActive-foreground" : "text-iconInactive-foreground"}`}
      >
        <Icons.Document className="icon" />
      </Link>
      <Button
        variant="outline"
        className="border-0 bg-white text-iconInactive-foreground hover:bg-transparent"
        size="icon"
      >
        <Icons.Logout size={30} />
      </Button>
    </nav>
  );
}

export default BottomBar;
