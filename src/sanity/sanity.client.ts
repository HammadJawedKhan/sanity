import { createClient, type ClientConfig } from "next-sanity";

const sanityClient :ClientConfig = {
    projectId: "htjzmsz1",
    dataset: "production",
    apiVersion: "2024-12-23",
    useCdn: false

}

export default createClient(sanityClient);