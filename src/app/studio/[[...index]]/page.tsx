"use client"
import { sanityConfig } from "@/sanity/sanity.config"
import { NextStudio } from "next-sanity/studio"

function page() {
  return (
  <NextStudio config ={sanityConfig} />
  )
}

export default page