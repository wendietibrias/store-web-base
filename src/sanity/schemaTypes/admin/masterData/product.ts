import { defineType, defineField } from "sanity";

export const productSchema = defineType({
  title: "Product",
  name: "product",
  type: "document",
  fields: [
     defineField({
      title: "Product Name",
      name: "name",
      type: "string",
      description: "Insert product name here",
      validation: (rule:any) => rule.required()
    }),
    defineField({
      title:"Show In Catalog",
      type:"boolean",
      initialValue: false,
      name:"isShowInCatalog"
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      description:"Product slug",
      options: {
        source: "name",
        maxLength: 200,
        slugify: (input: any) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      title: "Product Sub Name",
      name: "subName",
      type: "string",
      description: "Insert product sub name here",
      validation: (rule:any) => rule.required()
    }),
    defineField({
      title:"Product Price",
      name:"price",
      type:"number",
      description:"Insert product price here",
      initialValue:0
    }),
    defineField({
      title:"Product Category",
      type:"reference",
      name:"category",
      to: [
        {
           type:'productCategory'
        }
      ]
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
      title: "Sub Deskripsi",
      name: "subDescription",
      type: "text",
      description:"Insert product sub description here",
      validation: (rule:any) => rule.required()
    }),
    defineField({
      title: "Deskripsi Produk",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      description: "Insert product description here",
      validation: (rule:any) => rule.required()
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
      description:"Insert Product thumbnail image here",
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
