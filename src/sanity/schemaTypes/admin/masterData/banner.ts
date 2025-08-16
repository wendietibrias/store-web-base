import { defineField } from "sanity";
import { defineType } from "sanity";

export const bannerSchema = defineType({
  title: "Banner",
  name: "banner",
  type: "document",
  fields: [
    defineField({
      title: "Banner Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "Banner Activation",
      name: "isActive",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "Banner Subtitle",
      name: "subtitle",
      type: "string",
    }),
    defineField({
      title: "Banner Description",
      name: "description",
      type: "text",
    }),
    defineField({
      title: "Banner Images",
      name: "bannerImages",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      title: "Banner Mobile Images",
      name: "mobileBannerImages",
      type: "array",
      of: [{ type: "image" }],
    }),
  ],
});

export default bannerSchema;
