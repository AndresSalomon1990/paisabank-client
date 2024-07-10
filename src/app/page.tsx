// External deps
import { redirect } from "next/navigation";

// Internal deps
import { ROUTES } from "@/lib/constants";

function BasePage() {
  return redirect(ROUTES.HOME.path);
}

export default BasePage;
