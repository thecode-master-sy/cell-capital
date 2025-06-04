"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <div className="bg-background-black text-background-black-foreground overflow-hidden pb-16">
      <div className="bg-background-gray">
        <h1 className="text-heading-0 md:text-[5.6vw] font-bold uppercase leading-[100%] text-primary text-center">
          Secure the funding you deserve
        </h1>
      </div>

      <div className="flex flex-col items-center mt-4 gap-4">
        <p className="text-center max-w-[35ch]">
          With over $15m in secured grants, we know what it takes to get funded.
          Let’s do the work for you.
        </p>
        <Button className="bg-primary mx-auto mt-2 border border-white rounded-sm cursor-pointer items-center h-auto px-7 py-2 text-paragraph  font-bold">
          <span className="mr-2  text-black">Book a free consultation</span>
          <ArrowRight className=" text-black" />
        </Button>
      </div>
    </div>
  );
}
