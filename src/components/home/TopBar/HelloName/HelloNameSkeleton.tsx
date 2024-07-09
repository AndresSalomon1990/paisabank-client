// Internal deps
import { Skeleton } from "@/components/ui/skeleton";

export default function HelloNameSkeleton() {
  return (
    <div className="flex flex-col">
      <p className="text-base font-medium text-card-foreground">Hola</p>
      <Skeleton className="mt-1 h-7 w-40" />
    </div>
  );
}
