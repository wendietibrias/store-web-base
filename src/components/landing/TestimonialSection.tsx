"use client";

import useSWR from "swr";
import SectionTitle from "../global/SectionTitle";
import { testimonialKeys } from "@/assets/keys/testimonial";
import { fetchTestimonials } from "@/libs/apis/sanity/testimonial";
import TestimonialCard from "../global/Card/TestimonialCard";
import { Testimonial } from "../../../sanity.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialSkeletonCard from "../global/Skeleton/TestimonialSkeleton";

const TestimonialSection = () => {
  const { data, isLoading } = useSWR(
    testimonialKeys.testimonials,
    fetchTestimonials
  );

  return (
    <section className="container pb-40">
      <SectionTitle
        badgeTitle="Testimonial"
        title="Testimonials"
        alignment="center"
      />
      <div className="mt-10 w-[85%] mx-auto">
        {isLoading ? (
          <TestimonialSkeletonCard itemCount={2} columnCount={2} responsive={true}/>
        ) : (
          <div className="w-full">
            <Carousel 
             opts={{
                loop:true,
             }}
             className="w-full shadow-none flex gap-5">
              <CarouselContent className="shadow-none py-3 w-full">
                {data &&
                  data.map((item: Testimonial, idx: number) => (
                    <CarouselItem className="basis-1/2" key={idx}>
                      <TestimonialCard testimonial={item} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
