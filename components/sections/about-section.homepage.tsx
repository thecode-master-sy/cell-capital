"use client";
import Divider from "../divider";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { useRef } from "react";
import { Diamond, Gem } from "lucide-react";

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
    <section className="py-16 bg-white" id="about">
      <div className="px-4 flex justify-between">
        <h1 className="text-heading-0 font-bold">About us</h1>

        <p className="max-w-[40ch]">
          At Cell Capital, we believe that there are no limits to our ability in
          helping businesses & nonprofits get funded! We guide businesses and
          nonprofits to bold wins with clarity.
        </p>
      </div>

      <div className="min-h-screen overflow-hidden relative mt-16 grid grid-rows-[min-content_1fr] z-2">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover z-[-1] blur-video"
        >
          <source src="/video/cell-capital-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="backdrop-overlay"></div>

        <div className="w-full min-h-screen grid text-white relative z-[5] px-4 py-4">
          <div className="flex justify-between">
            <h1 className="text-heading-0 hidden sm:block uppercase font-bold">
              Clarity in Every Step
            </h1>

            <span className="text-heading-0 hidden sm:inline-block font-bold">
              0 1
            </span>

            <h1 className="text-heading-one sm:hidden uppercase font-bold">
              Clarity in Every Step
            </h1>

            <span className="text-heading-one sm:hidden font-bold">0 1</span>
          </div>

          <div className="border-t border-white py-4">
            <p className="max-w-[30ch] text-heading-one">
              We simplify the funding process with clear guidance, ensuring
              clients understand their path to grants or capital without
              confusion.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="px-4 mt-16 flex flex-col gap-x-4 gap-y-7 md:flex-row">
        <div className="md:w-[25%] flex flex-col gap-4">
          <div className="text-heading-two  bg-white border rounded-sm border-primary text-primary uppercase font-bold flex  items-center gap-2 w-max h-min">
            <span className="py-1 px-4 border-r border-primary">
              Our Values
            </span>
            <div className="flex items-center justify-center pr-2">
              <Image
                width={10}
                height={10}
                src="/icons/value.svg"
                alt="value"
                className="w-4 h-4"
              />
            </div>
          </div>

          <div className="bg-white hidden border rounded-sm border-primary p-4 md:flex justify-center items-center h-[300px]">
            <Image
              src="/value-one.svg"
              alt="value one"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-10 md:w-[75%] gap-y-7">
          <div className="md:col-start-2 col-span-full">
            <div className="flex items-center gap-4">
              <span className="p-[3px]  font-bold border border-primary text-primary rounded-[2px]">
                01
              </span>
              <h1 className="uppercase text-heading-one font-[900] text-primary">
                Clarity in Every step
              </h1>
            </div>

            <div className="mt-2">
              <p className="max-w-[45ch]  text-primary">
                We simplify the funding process with clear guidance, ensuring
                clients understand their path to grants or capital without
                confusion.
              </p>
            </div>
          </div>

          <div className="md:col-start-2 col-span-full">
            <div className="flex items-center gap-4">
              <span className="p-[3px]  font-bold border border-[#d3d3d3] text-[#d3d3d3] rounded-[2px]">
                02
              </span>
              <h1 className="uppercase text-heading-one font-[900] text-[#d3d3d3]">
                Results Over Promises
              </h1>
            </div>

            <div className="mt-2">
              <p className="max-w-[45ch] text-muted-foreground">
                We focus on delivering measurable outcomes, like winning grants
                or securing loans, rather than just offering plans.
              </p>
            </div>
          </div>

          <div className="md:col-start-2 col-span-full">
            <div className="flex items-center gap-4">
              <span className="p-[3px]  font-bold border border-[#d3d3d3] text-[#d3d3d3] rounded-[2px]">
                03
              </span>
              <h1 className="uppercase text-heading-one font-[900] text-[#d3d3d3]">
                Partnership with Purpose
              </h1>
            </div>

            <div className="mt-2">
              <p className="max-w-[45ch] text-muted-foreground">
                We work alongside clients as true partners, aligning every
                strategy with their unique vision and goals.
              </p>
            </div>
          </div>

          <div className="md:col-start-2 col-span-full">
            <div className="flex items-center gap-4">
              <span className="p-[3px]  font-bold border border-[#d3d3d3] text-[#d3d3d3] rounded-[2px]">
                04
              </span>
              <h1 className="uppercase text-heading-one font-[900] text-[#d3d3d3]">
                Speed with Precision
              </h1>
            </div>

            <div className="mt-2">
              <p className="max-w-[45ch] text-muted-foreground">
                We move quickly to meet deadlines but never cut corners,
                delivering high-quality work on time.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
