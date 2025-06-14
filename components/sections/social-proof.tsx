"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";




export default function SocialProof() {
  return (
    <div className="bg-primary  relative">
      <div className="py-16 flex flex-col items-center overflow-hidden">
        <div className="flex flex-col">
          <h1 className="font-bold text-heading-0 text-center mx-auto">
            Our funding success
          </h1>
          <div className="mx-auto">
            <p className="max-w-[45ch] md:max-w-[35ch] text-center">
              We have helped a diverse group of clients secure over 15million in
              grant funding to grow and scale their operations and have a
              positive impact on their communities and we can help you too!
            </p>
          </div>
        </div>

        <div className="grid grid-flow-col px-4 gap-7 mt-7 items-center">
          <Image
            width={100}
            height={100}
            src="/social-proof/logo-proof-one.png"
            alt="boomin university logo"
          />

          <Image
            width={100}
            height={100}
            src="/social-proof/logo-proof-two.png"
            alt="sistas cohort logo"
          />

          <Image
            width={100}
            height={100}
            src="/social-proof/logo-proof-three.png"
            alt="angels online "
          />

          <Image
            width={100}
            height={100}
            src="/social-proof/logo-proof-four.png"
            alt="boomin university logo"
          />

          <Image
            width={100}
            height={100}
            src="/social-proof/logo-proof-five.png"
            alt="boomin university logo"
          />
        </div>
      </div>
    </div>
  );
}
