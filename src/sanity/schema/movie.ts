export const movieSchema = {
  name: "movie",
    title:"Movie",
       type: "document",
       fields : [
    {
        name: "name",
        title: "movie name",
        type : "string"

    },
    {
        name: "description",
        title: "description name",
        type : "string",

    },
    {
        name: "image",
        title: "image name",
        type : "image",

    },
]
}