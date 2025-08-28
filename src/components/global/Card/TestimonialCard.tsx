import Image from "next/image";
import { Testimonial } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

export interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const { username,occupation,picture,testimonial:testi,rating } = testimonial;

  return (
    <div className="w-full rounded-lg shadow-md p-4 shadow-gray-200">
        <div className="flex items-start gap-x-4">
            <Image src={urlFor(picture!).url()} alt={name!} width={50} height={50} className="rounded-full" objectFit="cover" loading="lazy"/>
            <div className="flex-1">
                <h5 className="font-extrabold">{username}</h5>
                <p className="text-[0.85rem]  mb-2">{occupation}</p>
                <p className="text-[0.8rem] text-alternative-secondary">{testi}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard;