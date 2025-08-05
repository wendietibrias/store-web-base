import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "Product Name",
      name: "name",
      type: "string",
      description: "Insert product name here",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      title: "Product Sub Name",
      name: "subName",
      type: "string",
      description: "Insert product sub name here",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      title: "Sub Deskripsi",
      name: "subDescription",
      type: "text",
    }),
    defineField({
      title: "Deskripsi Produk",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Insert product description here",
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      title: "Product Width",
      name: "width",
      type: "number",
      description: "Insert product width here",
    }),
    defineField({
      title: "Product Height",
      name: "height",
      type: "number",
      description: "Insert product height here",
    }),
    defineField({
      title: "Product Length",
      name: "length",
      type: "number",
      description: "Insert product length here",
    }),
    defineField({
      title: "Product Weight",
      name: "weight",
      type: "number",
      description: "Insert product height here",
    }),
    defineField({
      title:"Product Images",
      name:"productImages",
      type:"array",
      description:"Insert product images here",
      of:[{ type:"image" }]
    }),
    defineField({
      title: "Product Thumbnail Image",
      name: "thumbnailImage",
      type: "image",
      fields: [
        defineField({
          name: "caption",
          type: "string",
        }),
        defineField({
          name: "attribution",
          type: "string",
        }),
      ],
    }),
  ],
});
