import sanityClient from "@/libs/services/sanity";
import groq from "groq";

export const fetchTestimonials = () => {
    const testimonials= groq`*[_type=="testimonial"]{
      username,
      slug,
      testimonial,
      occupation,
      picture
    }`;

    return sanityClient.fetch(testimonials);
}