"use client"
import { Skeleton } from "../ui/skeleton";

interface SkeletonProps {
   itemCount: number;
   columnCount: number;
   responsive: boolean;
}

const SkeletonCard = (props: SkeletonProps) => {
    const { itemCount } = props;
    const skeletonItems = [];

    for(let startColumn = 0; startColumn < itemCount; startColumn++){
        skeletonItems.push(startColumn);
    }

    return (
        <>
         <div className="w-full grid grid-cols-3 gap-5">
            {skeletonItems.map((item) => (
                 <div className="w-full" key={item}>
                     <Skeleton className="rounded-md h-[300px] w-full" />
                     <div className="w-full mt-3 flex justify-between items-center">
                        <div>
                            <Skeleton className="w-[150px] h-[10px]"/>
                            <Skeleton className="w-[95px] mt-2  h-[10px]"/>
                        </div>
                        <Skeleton className="w-[50px] h-[10px]" />
                    </div>
                    <Skeleton className="w-full h-[25px] mt-3"/>
                 </div>
            ))}
         </div>
        </>
    )
}

export default SkeletonCard;