import { defineField } from "sanity";
import { defineType } from "sanity";

export const bannerSchema = defineType({
     title:"Banner",
     name:"banner",
     type:"document",
     fields:[
        defineField({
             title:"Banner Title",
             name:"title",
             type:"string",
        }),
        defineField({
            title:"Banner Activation",
            name:"isActive",
            type:"booelan",
            initialValue: false,
        }),
        defineField({
            title:"Banner Subtitle",
            name:"subtitle",
            type:'string'
        }),
        defineField({
            title:"Banner Description",
            name:"description",
            type:"text",
        }),
        defineField({
            title:"Banner Images",
            name:"bannerImages",
            type:"array",
            of:[{ type:"image" }]
        }),
     ],
});

export default bannerSchema;