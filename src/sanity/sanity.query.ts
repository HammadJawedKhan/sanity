import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export default function getMovieData() {
    return sanityClient.fetch(
        groq`
        *[_type == "movie"]{
  name,
    description,
    image
}`
    )
    
}