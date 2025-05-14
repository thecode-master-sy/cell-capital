"use client";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";
import Divider from "../divider";
import { Minus, Plus } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TestimonalSection from "./testimonials-section";

gsap.registerPlugin(useGSAP);

export default function OurServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set(sectionRef.current, {
        y: -200,
      });
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -400,
      });
    },
    { scope: sectionRef }
  );
  return (
    <div
      ref={sectionRef}
      className="pt-16 py-30 bg-background-black text-white"
    >
      <h1 className="uppercase text-heading-0 px-4 text-center">
        Our Services
      </h1>

      <Divider
        className="border-cellcapital-light mt-7"
        label="what we offer"
      />

      <div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6  px-4 ">
        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">01</span>
            <Minus className="md:hidden" />
          </div>

          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Expert Grant Writing</h2>
              <Minus className="hidden lg:inline-block self-start" />
            </div>

            <div className="mt-2 mb-4">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>

            <CellCapitalSecondaryButton>learn more</CellCapitalSecondaryButton>
          </div>
        </div>

        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">02</span>
            <Plus className="md:hidden" />
          </div>
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Grant Alerts Program</h2>
              <Plus className="hidden lg:inline-block self-start" />
            </div>

            <div className="hidden">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>

            <CellCapitalSecondaryButton className="hidden">
              learn more
            </CellCapitalSecondaryButton>
          </div>
        </div>

        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">03</span>
            <Plus className="md:hidden" />
          </div>
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Business Plans & Pitch Decks</h2>
              <Plus className="hidden lg:inline-block self-start" />
            </div>

            <div className="hidden">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>
          </div>
          <CellCapitalSecondaryButton className="hidden">
            learn more
          </CellCapitalSecondaryButton>
        </div>
      </div>

      <TestimonalSection />
    </div>
  );
}
