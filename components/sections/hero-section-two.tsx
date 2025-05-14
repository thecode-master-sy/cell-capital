"use client";
import { BlobHero } from "../blob.hero";
import CellCapitalPrimaryButton from "../cell-capital-button";
import NavBar from "../navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SocialProof from "./social-proof";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionTwo() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      function getScrollAmount() {
        const headerWidth = headerRef.current?.scrollWidth ?? 0;

        return -(headerWidth - window.innerWidth);
      }

      const headerTween = gsap.to(".big-header", {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".big-header",
        start: "top 30%",
        end: () => `+=${getScrollAmount() * -1}`,
        animation: headerTween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    },
    { scope: container }
  );

  return (
    <div
      className="min-h-screen bg-background grid grid-rows-[min-content_1fr_auto]"
      ref={container}
    >
      <NavBar />

      <div className="grid lg:grid-cols-12 grid-cols-6 md:grid-cols-8 gap-4 md:gap-8 py-4 px-4 self-end">
        <div className="col-span-full justify-self-center md:justify-self-start md:col-span-4">
          <BlobHero />
        </div>
        <div className="md:col-start-5 col-span-full grid md:block">
          <div className="hidden sm:block md:hidden lg:block">
            <h1 className="text-heading-one text-center lg:text-left">
              $15 million secured in debt{" "}
            </h1>
            <h1 className="text-heading-one text-center lg:text-left">
              free grants.You could be next!!
            </h1>
          </div>

          <div className="hidden text-center md:text-left md:block lg:hidden">
            <h1 className="text-heading-one ">$15 million secured </h1>
            <h1 className="text-heading-one"> in debt free grants.</h1>
            <h1 className="text-heading-one ">You could be next!!</h1>
          </div>

          <div className="sm:hidden text-center">
            <h1 className="text-heading-one ">$15 million secured in</h1>
            <h1 className="text-heading-one">debt free grants.</h1>
            <h1 className="text-heading-one">You could be next!!</h1>
          </div>

          <div className="sm:hidden md:block lg:hidden my-3 text-center md:text-left">
            <p>At Cell Capital we are passionate about securing </p>
            <p>grants for Businesses & Non-profits through expert</p>
            <p>consulting, research, and compelling Grant </p>
            <p>Proposals or Business Plan</p>
          </div>

          <div className="my-3 text-center lg:text-left hidden sm:block md:hidden lg:block">
            <p>At Cell Capital we are passionate about securing grants for </p>
            <p> Businesses & Non-profits through expert consulting,</p>
            <p>research, and compelling Grant Proposals or Business Plan</p>
          </div>

          <CellCapitalPrimaryButton
            className="px-7 mx-auto md:mx-0"
            color="primary"
          >
            Book a free consultation
          </CellCapitalPrimaryButton>
        </div>
      </div>

      <div className="big-header-wrapper overflow-hidden">
        <h1
          ref={headerRef}
          className="text-heading-0 uppercase w-max big-header"
        >
          Sucess Oriented Grant Writing Agency
        </h1>
      </div>
    </div>
  );
}
