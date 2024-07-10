// Internal deps
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export default function LastMovementsSkeleton() {
  return (
    <ScrollArea className="h-[calc(100dvh-86px-56px-12rem-24px-2.25rem-5.5rem)]">
      <div className="flex h-full flex-col gap-4">
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
      </div>
    </ScrollArea>
  );
}
