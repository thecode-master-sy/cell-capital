"use client";
import { BlobHero } from "../blob.hero";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";
import NavBar from "../navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SocialProof from "./social-proof";
import { useNavBarContext } from "../providers/navbar-provider";

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
        start: "top 70%",
        end: () => `+=${getScrollAmount() * -1}`,
        animation: headerTween,
        scrub: 1,
        invalidateOnRefresh: true,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative">
      <div className="min-h-[80vh] sm:min-h-screen bg-background grid grid-rows-[min-content_1fr_auto]">
        <NavBar />

        <div className="grid lg:grid-cols-12 grid-cols-6 md:grid-cols-8 gap-4 md:gap-8 py-4 px-4 self-start  h-full">
          <div className="md:col-start-3 lg:col-start-5 col-start-2 col-span-full grid h-full">
            <div className="hidden lg:block">
              <h1 className="text-heading-one ">Scale your business while</h1>
              <h1 className="text-heading-one ">we secure funding to keep</h1>
              <h1 className="text-heading-one ">you at the top.</h1>
            </div>

            <div className="hidden sm:block lg:hidden">
              <h1 className="text-heading-one ">Scale your business while</h1>
              <h1 className="text-heading-one ">we secure funding to keep</h1>
              <h1 className="text-heading-one ">you at the top.</h1>
            </div>

            <div className=" sm:hidden ">
              <h1 className="text-heading-one ">
                Scale your business while we secure funding to keep you at the
                top.
              </h1>
            </div>

            <div className="hidden md:block text-heading-two mt-auto">
              <p>
                Our all-in-one grant solution handles everything freeing you{" "}
              </p>
              <p>
                {" "}
                to concentrate on scaling your organization with confidence.
              </p>
            </div>

            <div className="md:hidden  text-heading-two mt-auto">
              <p>
                Our all-in-one grant solution handles everything freeing you to
                concentrate on scaling your organization with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="big-header-wrapper overflow-hidden ">
          <h1
            ref={headerRef}
            className="text-heading-0 uppercase w-max big-header"
          >
            Sucess Oriented Grant Writing Agency
          </h1>
        </div>
      </div>
    </div>
  );
}
