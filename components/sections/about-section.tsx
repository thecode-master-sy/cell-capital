"use client";
import Divider from "../divider";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -200,
      });
    },
    { scope: sectionRef }
  );
  return (
    <div ref={sectionRef} className="bg-background-gray pt-16 pb-30">
      <div className="px-4 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        <h1 className="text-heading-0 uppercase text-left  sm:text-center col-span-full">
          About us
        </h1>
        <div className="pt-4 pb-16 hidden sm:block sm:col-start-3 md:col-start-4 lg:col-start-6 col-span-full">
          <p>At Cell Capital, we believe that there are no limits to our </p>
          <p>ability in helping businesses & nonprofits get funded! We</p>
          <p>guide businesses and nonprofits to bold wins with clarity.</p>
        </div>
        <div className="pt-4 pb-16 sm:hidden block max-w-[40ch] col-span-full">
          <p>
            At Cell Capital, we believe that there are no limits to our ability
            in helping businesses & nonprofits get funded! We guide businesses
            and nonprofits to bold wins with clarity.
          </p>
        </div>
      </div>

      <Divider label="our values" />
      <div>
        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 gap-4 px-4 py-16">
          <Image
            src="./value-one.svg"
            alt="value one"
            width={100}
            height={100}
            className="min-w-[100px]"
          />

          <div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
            <div className="flex flex-col gap-2">
              <span className="text-caption hidden sm:inline">[01]</span>
              <h2 className="text-heading-two">Clarity in every step</h2>
            </div>

            <div className="mt-4">
              <p>We simplify the funding process with clear</p>

              <p>guidance, ensuring clients understand their</p>

              <p>path to grants or capital without confusion.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16">
          <Image
            src="./value-two.svg"
            alt="value one"
            width={100}
            height={100}
            className="min-w-[100px]"
          />

          <div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
            <div className="flex flex-col gap-2">
              <span className="text-caption hidden sm:inline">[02]</span>
              <h2 className="text-heading-two"> Results over promises</h2>
            </div>

            <div className="mt-4">
              <p>We focus on delivering measurable outcomes,</p>

              <p>like winning grants or securing loans, rather </p>

              <p>than just offering plans.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16">
          <Image
            src="./value-three.svg"
            alt="value three"
            width={100}
            height={100}
            className="min-w-[100px]"
          />

          <div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
            <div className="flex flex-col gap-2">
              <span className="text-caption hidden sm:inline">[03]</span>
              <h2 className="text-heading-two"> Partnership with purpose</h2>
            </div>

            <div className="mt-4">
              <p>We work alongside clients as true partners, </p>

              <p>aligning every strategy with their unique </p>

              <p>vision and goals.</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16">
          <Image
            src="./value-four.svg"
            alt="value four"
            width={100}
            height={100}
            className="min-w-[100px]"
          />

          <div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
            <div className="flex flex-col gap-2">
              <span className="text-caption hidden sm:inline">[04]</span>
              <h2 className="text-heading-two">Speed with Precision</h2>
            </div>

            <div className="mt-4">
              <p>We move quickly to meet deadlines but </p>

              <p>never cut corners, delivering high-quality </p>
              <p>work on time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
