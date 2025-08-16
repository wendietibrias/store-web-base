import { defineType, defineField } from "sanity";

const productCategorySchema = defineType({
  title: "Product Category",
  name: "productCategory",
  type: "document",
  fields: [
    defineField({
      title: "Category Name",
      name: "name",
      type: "string",
      description: "Insert product category name here",
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
  ],
});

export default productCategorySchema;
