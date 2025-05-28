"use client";
import { ArrowRight } from "lucide-react";
import { CellCapitalSecondaryButton } from "../cell-capital-button";
import Divider from "../divider";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Footer({
  moveValue,
  initial,
}: {
  initial?: number;
  moveValue?: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.set(sectionRef.current, {
        y: initial ? initial : -550,
      });
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: moveValue ? moveValue : -700,
      });
    },
    { scope: sectionRef }
  );
  return (
    <footer className="bg-background-black text-white pt-16 overflow-hidden">
      <div className="grid grid-cols-6 lg:grid-cols-12 md:grid-cols-8 gap-16 px-4">
        <div className="lg:col-span-5 col-span-full">
          <h2 className="text-heading-one">Get Free Grant Updates</h2>

          <form className="flex gap-2 mt-4 items-center max-w-[500px]">
            <input
              placeholder="Your Email"
              className="text-heading-two flex-1 border-cellcapital-light border-b"
            />
            <CellCapitalSecondaryButton>
              <ArrowRight />
            </CellCapitalSecondaryButton>
          </form>
        </div>

        <div className="uppercase text-caption lg:col-start-7">
          <span className="text-muted-foreground">Pages</span>

          <ul className="flex gap-1 flex-col mt-2">
            <li>Home</li>
            <li>Secure grants</li>
            <li>Business plans</li>
            <li>Custom quote</li>
          </ul>
        </div>

        <div className="uppercase text-caption lg:col-start-9 col-start-3">
          <span className="text-muted-foreground">social</span>

          <ul className="flex gap-1 flex-col mt-2">
            <li>Linkedin</li>
            <li> x(twitter)</li>
            <li>Instagram</li>
            <li>Tiktok</li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <div className=" border-t border-cellcapital-light"></div>
        <div className="mt-2 md:flex justify-between text-caption hidden">
          <span>[ 2025COPY RIGHT ]</span>
          <span>[ PERMISSIONS AND TERMS ]</span>
          <span>[ PRIVACY POLICY ]</span>
        </div>
      </div>

      <div className="py-3">
        <h1 className="font-bold text-heading-0 text-center">Cell Capital</h1>
      </div>
    </footer>
  );
}
