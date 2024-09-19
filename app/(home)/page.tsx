"use client";
import { Heading, Footer } from "@/app/(home)/_components";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-start text-center md:text-left gap-y-8 flex-1">
      <div className="min-h-full flex flex-col ">
        <Heading />
      </div>
      <Footer />
    </div>
  );
}





