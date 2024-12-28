"use client"

import getMovieData from "@/sanity/sanity.query";
import { useState } from "react";

export default function Home() {

const [data,setdata]=useState({})
  const getData = getMovieData()
  getData
  .then((res)=> setdata(res))
  .catch((err)=>console.log(err))

//  console.log("NAME >>",name)
  return (
  <div className="border-3 w-96 h-32">
    {/* <div> {getData.map((data,i)=>()) */}
{/* }</div> */}
  </div> 
  );
}
