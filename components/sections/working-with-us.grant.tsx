"use client";
import Divider from "../divider";
import Image from "next/image";
import TestimonalSection from "./testimonials-section";

export default function WorkingWithUs() {
  return (
    <section className="pt-4">
      <div className="py-16">
        <h1 className="text-heading-0 px-4 font-bold">Working with us</h1>
        <div className="grid sm:grid-cols-2 gap-y-16 py-16 px-4">
          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">01.</span>
            </div>
            <div>
              <h1 className="font-bold">Effortless Funding</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                Our all-in-one grant solution handles everything, freeing you to
                concentrate on scaling your organization with confidence.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">02.</span>
            </div>
            <div>
              <h1 className="font-bold">Premium Opportunities</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                Unlock premium grants crafted specifically, for small business,
                non-profits or social enterprises empowering your vision with.
                the funding you deserve.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">03.</span>
            </div>
            <div>
              <h1 className="font-bold">Remain Unique</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                Secure funding with a expertly crafted proposal and strategic
                plan designed to make your application shine.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">04.</span>
            </div>
            <div>
              <h1 className="font-bold">Join the Winning Team</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                Join countless entrepreneurs & change makers in leveraging our
                proven strategies to unlock funding and achieve their dreams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
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
      </div> */}
      <TestimonalSection />
    </section>
  );
}
