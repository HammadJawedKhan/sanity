import { defineConfig } from "sanity";
import { structureTool} from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaType } from "./schema";


export const sanityConfig = defineConfig(
    {
        name: "default",
        title: "studio",
        projectId: "htjzmsz1",
        dataset: "production",
        plugins: [structureTool(), visionTool()],
        basePath: "/studio",
        schema:{
            types: schemaType
        }
    }
)