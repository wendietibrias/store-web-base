import { defineField } from "sanity";
import { defineType } from "sanity";

const testimonialSchema = defineType({
    title:"Testimonial",
    type:"document",
    name:"testimonial",
    fields:[
        defineField({
            title:"User Name",
            name:"username",
        }),
        defineField({
            title:"User Occupation",
            name:"occupation"
        }),
        defineField({
            title:"User Rating",
            name:'rating',
            type:"number",
            initialValue:0,
        }),
        defineField({
            title:"User Picture",
            name:"picture",
            type:"image",
        }),
    ],
});

export default testimonialSchema;