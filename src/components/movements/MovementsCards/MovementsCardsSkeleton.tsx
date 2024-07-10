// Internal deps
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";

export default function MovementsCardsSkeleton() {
  return (
    <ScrollArea className="h-[calc(100dvh-86px-28px-2.5rem-2.5rem-1.5rem-4rem)]">
      <div className="p- flex h-full flex-col gap-4">
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
        <Skeleton className="h-[93px] w-full rounded-2xl" />
      </div>
    </ScrollArea>
  );
}
