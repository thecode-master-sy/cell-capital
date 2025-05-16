"use client";
import Divider from "../divider";
import Image from "next/image";
import TestimonalSection from "./testimonials-section";

export default function WorkingWithUs() {
  return (
    <section
      className="bg-background-black text-background-black-foreground pt-4 pb-30"
      id="about"
    >
      <Divider label="our values" />
      <div>
        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 gap-4 px-4 py-16 sticky top-0 bg-background-black text-background-black-foreground border-cellcapital-light">
          <Image
            src="./value-one.svg"
            alt="value one"
            width={100}
            height={100}
            className="min-w-[100px] invert"
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

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16 sticky top-0 z-[2] bg-background-black text-background-black-foreground border-cellcapital-light">
          <Image
            src="./value-two.svg"
            alt="value one"
            width={100}
            height={100}
            className="min-w-[100px] invert"
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

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16 sticky top-0 z-[3] bg-background-black text-background-black-foreground border-cellcapital-light">
          <Image
            src="./value-three.svg"
            alt="value three"
            width={100}
            height={100}
            className="min-w-[100px] invert"
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

        <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 border-t gap-4 px-4 py-16 sticky top-0 z-[4] bg-background-black text-background-black-foreground border-cellcapital-light">
          <Image
            src="./value-four.svg"
            alt="value four"
            width={100}
            height={100}
            className="min-w-[100px] invert"
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
      <TestimonalSection />
    </section>
  );
}
