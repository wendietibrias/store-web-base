import { defineField } from "sanity";
import { defineType } from "sanity";

const serviceSchema = defineType({
  title: "Service",
  name: "service",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description: "Insert Service Title here",
    }),
    defineField({
      title: "Sub Title",
      name: "subTitle",
      type: "string",
      description: "Insert Service Sub Title here",
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      description: "Insert Service Description here",
    }),
    defineField({
        title:"Service Icon Image",
        name:"serviceImage",
        type:"image",
        description: "Insert Service Image here",
    })
  ],
});

export default serviceSchema;
