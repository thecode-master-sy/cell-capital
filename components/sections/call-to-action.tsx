"use client";
import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton from "../cell-capital-button";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function CallToActionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set(sectionRef.current, {
        y: -600,
      });
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -800,
      });
    },
    { scope: sectionRef }
  );
  return (
    <div ref={sectionRef} className="pb-16 pt-4 bg-background">
      <Divider label="ready to stand out" />

      <div className="px-4 py-24 relative grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full">
          <h1 className="text-heading-0 uppercase text-left md:text-center">
            secure the funding
          </h1>

          <h1 className="text-heading-0 uppercase text-left md:text-center">
            you deserve
          </h1>
        </div>

        <div className="col-span-full sm:col-start-4 lg:col-start-6 mt-4">
          <CellCapitalPrimaryButton color="primary">
            Book a free consultation
          </CellCapitalPrimaryButton>
        </div>
      </div>
    </div>
  );
}
