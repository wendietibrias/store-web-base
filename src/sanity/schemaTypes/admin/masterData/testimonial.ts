import { defineField } from "sanity";
import { defineType } from "sanity";

const testimonialSchema = defineType({
  title: "Testimonial",
  type: "document",
  name: "testimonial",
  fields: [
    defineField({
      title: "User Name",
      name: "username",
      type: "string",
      description: "Insert username here",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "username",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "User Occupation",
      name: "occupation",
      type:"string",
      description: "Insert user occupation here",
    }),
    defineField({
      title: "User Rating",
      name: "rating",
      type: "number",
      initialValue: 0,
      description: "Insert user rating here",
    }),
    defineField({
      title: "User Picture",
      name: "picture",
      type: "image",
      description: "Insert user picture here",
    }),
  ],
});

export default testimonialSchema;
