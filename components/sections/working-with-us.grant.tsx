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
      <Divider label="working with us" dark />
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
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-heading-two">01</span>
              <h2 className="text-heading-two">Effortless Funding</h2>
            </div>

            <div className="mt-4">
              <p>Our all-in-one grant solution handles </p>

              <p>everything, freeing you to concentrate on </p>

              <p>scaling your organization with confidence</p>
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
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-heading-two">02</span>
              <h2 className="text-heading-two"> Premium Opportunities</h2>
            </div>

            <div className="mt-4">
              <p>Unlock premium grants crafted specifically,</p>

              <p> for small business, non-profits or social </p>

              <p>enterprises empowering your vision with.</p>

              <p>the funding you deserve.</p>
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
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-heading-two">03</span>
              <h2 className="text-heading-two">Remain Unique</h2>
            </div>

            <div className="mt-4">
              <p>Secure funding with a expertly crafted </p>

              <p>proposal and strategic plan designed to make </p>

              <p>your application shine.</p>
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
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-heading-two">04</span>
              <h2 className="text-heading-two">Join the Winning Team</h2>
            </div>

            <div className="mt-4">
              <p>Join countless entrepreneurs & change makers in</p>

              <p>leveraging our proven strategies to unlock </p>
              <p>funding and achieve their dreams.</p>
            </div>
          </div>
        </div>
      </div>
      <TestimonalSection />
    </section>
  );
}
