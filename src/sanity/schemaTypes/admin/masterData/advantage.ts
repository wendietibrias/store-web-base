import { defineField } from "sanity";
import { defineType } from "sanity";

const advantageSchema = defineType({
    title:"Advantage",
    name:"advantage",
    type:"document",
    fields: [
        defineField({
             title:"Title",
             name:"title",
             type:"string",
             description:"Insert titlt here",
             validation: (rule:any) => rule.required()
        }),
        defineField({
            title:"Sub title",
            type:"string",
            name:"subTitle",
            description:"Insert sub title here"
        }),
        defineField({
            title:"Description",
            type:"text",
            name:"description",
            description:"Insert description here"
        }),
    ]
});

export default advantageSchema;