"use client";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";
import Divider from "../divider";
import { ArrowRight, Minus, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TestimonalSection from "./testimonials-section";
import { Button } from "../ui/button";
import Image from "next/image";

gsap.registerPlugin(useGSAP);

export default function OurServices() {
  const firstBannerRef = useRef(null);
  const secondBannerRef = useRef<HTMLDivElement | null>(null);
  const bannerContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.to(bannerContainer.current, {
      scrollTrigger: {
        trigger: bannerContainer.current,

        scrub: 0.5,

        start: "top bottom",

        end: "bottom top",

        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-200px",
    });

    const animationFrame = requestAnimationFrame(animate);

    () => cancelAnimationFrame(animationFrame);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstBannerRef.current, { xPercent: xPercent });

    gsap.set(secondBannerRef.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };

  return (
    <div className="bg-background">
      <div>
        <div className="overflow-hidden w-full font-bold uppercase">
          <div
            ref={bannerContainer}
            className="relative grid grid-cols-2 w-max "
          >
            <div
              ref={firstBannerRef}
              className="bg-white p-4 border-y border-primary flex items-center gap-4 w-max text-primary"
            >
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
            </div>

            <div
              ref={secondBannerRef}
              className="bg-white p-4 border-y relative -translate-x-0.5 border-primary flex items-center gap-4 w-max text-primary"
            >
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Services</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="px-4 py-16">
          <div className="grid gap-y-4 gap-x-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 border-t border-primary py-7">
            <h1 className="font-bold col-span-2 md:col-span-3 text-heading-one">
              Expert grant writing
            </h1>

            <div className="sm:col-start-3 md:col-start-4 lg:col-start-6 col-span-full">
              <p className="max-w-[25ch]">
                Focus on running your business, while our experts focus on
                securing the funds to keep you at the top
              </p>
              <Button className="font-bold mt-2 bg-white border border-primary cursor-pointer">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid gap-y-4 gap-x-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 border-t border-primary py-7">
            <h1 className="font-bold col-span-2 md:col-span-3 text-heading-one">
              Grant alerts program
            </h1>

            <div className="sm:col-start-3 md:col-start-4 lg:col-start-6 col-span-full">
              <p className="max-w-[25ch]">
                Stay updated with the latest grant openings, so you don’t miss
                out on mouth-watering opportunities
              </p>
              <Button className="font-bold mt-2 bg-white border border-primary cursor-pointer">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>

          <div className="grid gap-y-4 gap-x-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 border-t border-primary  py-7">
            <h1 className="font-bold col-span-2 md:col-span-3 text-heading-one">
              Business Plans & Pitch Decks
            </h1>

            <div className="sm:col-start-3 md:col-start-4 lg:col-start-6 col-span-full">
              <p className="max-w-[25ch]">
                Secure capital with professional plans that showcase your vision
                and strategy with clarity and confidence. Captivate investors
                with compelling, visually stunning decks designed to secure the
                funding you need.
              </p>
              <Button className="font-bold mt-2 bg-white border border-primary cursor-pointer">
                <span>Learn more</span>
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6  px-4 mt-4 ">
        <p className="sm:col-start-4 lg:col-start-6 col-span-full text-heading-two">
          Our services include:
        </p>
        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-t border-cellcapital-light border-b mt-4 flex gap-4">
          <div className="flex justify-between">
            <span className="text-heading-two ">01</span>
          </div>

          <div className="flex-1">
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Expert Grant Writing</h2>
              <Plus className="inline-block self-start" />
            </div>

            <div className="mt-2 mb-4 hidden">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>

            <CellCapitalSecondaryButton className="hidden">
              learn more
            </CellCapitalSecondaryButton>
          </div>
        </div>

        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-b border-cellcapital-light flex gap-4">
          <div className="flex justify-between">
            <span className="text-heading-two ">02</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Grant Alerts Program</h2>
              <Plus className="inline-block self-start" />
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

        <div className="sm:col-start-4 lg:col-start-6 col-span-full py-8 border-b border-cellcapital-light flex gap-4">
          <div className="flex justify-between">
            <span className="text-heading-two ">03</span>
          </div>
          <div className="flex-1">
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Business Plans & Pitch Decks</h2>
              <Plus className="inline-block self-start" />
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

      <TestimonalSection /> */}
      </div>
    </div>
  );
}
