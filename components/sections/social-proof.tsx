"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SocialProof() {
  return (
    <div className="relative bg-background-gray px-4">
      <div className="py-16 overflow-hidden">
        <h2 className="text-heading-one font-bold text-center">
          Our funding sucess
        </h2>
        <p className="text-paragraph text-center mt-4 max-w-[45ch] mx-auto">
          We have helped a diverse group of clients secure over $15 million in
          grant funding to grow and scale their operations and have a positive
          impact on their communites and we can hep you too!
        </p>
        <div className="flex flex-wrap gap-4 mt-7 items-center justify-center">
          <div className="bg-white min-w-[150px] cursor-pointer md:flex-1 aspect-[1/0.5] flex justify-center items-center rounded-sm p-4">
            <Image
              width={100}
              height={100}
              src="/social-proof/logo-proof-one.png"
              alt="boomin university logo"
              className="w-[40%]"
            />
          </div>

          <div className="bg-white min-w-[150px] md:flex-1 cursor-pointer aspect-[1/0.5] flex justify-center items-center rounded-sm p-4">
            <Image
              width={100}
              height={100}
              src="/social-proof/logo-proof-two.png"
              alt="sistas cohort logo"
              className="w-[40%]"
            />
          </div>

          <div className="bg-white min-w-[150px] md:flex-1 cursor-pointer aspect-[1/0.5] flex justify-center items-center rounded-sm p-4">
            <Image
              width={100}
              height={100}
              src="/social-proof/logo-proof-three.png"
              alt="angels online "
              className="w-[40%]"
            />
          </div>

          <div className="bg-white md:flex-1 min-w-[150px] cursor-pointer aspect-[1/0.5] flex justify-center items-center rounded-sm p-4">
            <Image
              width={100}
              height={100}
              src="/social-proof/logo-proof-four.png"
              alt="boomin university logo"
              className="w-[40%]"
            />
          </div>

          <div className="bg-white md:flex-1 min-w-[150px] cursor-pointer aspect-[1/0.5] flex justify-center items-center rounded-sm p-4">
            <Image
              width={100}
              height={100}
              src="/social-proof/logo-proof-five.png"
              alt="boomin university logo"
              className="w-[40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
