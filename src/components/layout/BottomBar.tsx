"use client";

// External deps
import Link from "next/link";
import { usePathname } from "next/navigation";

// Internal deps
import { Icons } from "../ui/icons";
import { Button } from "../ui/button";
import { ROUTES } from "@/lib/constants";
import { logout } from "@/lib/serverActions";
import { useToast } from "../ui/use-toast";

function BottomBar() {
  const pathname = usePathname();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      description: "Vuelve pronto :)",
      variant: "paisabank",
    });

    // Remove name from localStorage
    localStorage.removeItem("name");

    logout();
  };

  return (
    <nav className="h-86 z-10 flex w-full items-center justify-between rounded-t-[24px] bg-white px-14 py-7 drop-shadow-2xl">
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
        className="hover:text-iconInactive- border-0 bg-white text-iconInactive-foreground hover:bg-transparent"
        size="icon"
        onClick={handleLogout}
      >
        <Icons.Logout size={30} />
      </Button>
    </nav>
  );
}

export default BottomBar;
