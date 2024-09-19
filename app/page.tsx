"use client";

import { Heading, Heross, Footer } from "@/components/Home";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <Heading/>
        <Heross/>
      </div>
      <Footer/>
    </div>
  );
}





