import { Skeleton } from "@/components/ui/skeleton";

interface TestimonialSkeletonProps {
  itemCount: number;
  columnCount: number;
  responsive: boolean;
}

const TestimonialSkeletonCard = (props: TestimonialSkeletonProps) => {
  const skeletonItems = [];
  const { itemCount, columnCount, responsive } = props;

  for (let startColumn = 0; startColumn < itemCount; startColumn++) {
    skeletonItems.push(startColumn);
  }

  return (
    <div className={`w-full grid grid-cols-${columnCount} w-full gap-3`}>
      {skeletonItems.map((item: number) => (
        <div className="w-full flex items-start gap-3" key={item}>
          <Skeleton className="rounded-full w-[50px] h-[50px]" />
          <div className="flex-1">
            <Skeleton className="w-[30%] h-[10px]" />
            <Skeleton className="w-[20%] h-[10px] mt-1" />
            <div className="mt-3">
              <Skeleton className="w-full h-[10px]"></Skeleton>
              <Skeleton className="w-[80%] h-[10px] mt-1" />
              <Skeleton className="w-[50%] h-[10px] mt-1" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSkeletonCard;
