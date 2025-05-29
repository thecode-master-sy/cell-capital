"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
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
    <div className="bg-background-black text-background-black-foreground overflow-hidden pb-16">
      <div
        ref={bannerContainer}
        className="relative flex w-max uppercase font-bold"
      >
        <div
          ref={firstBannerRef}
          className="bg-white p-4 border-y border-primary flex items-center gap-4 w-max text-primary banner-child"
        >
          <h2 className="text-heading-0">Secure the funding you deserve</h2>
          <span>
            <Image
              width={30}
              height={30}
              src="/icons/asterisk-solid.svg"
              alt="asterisk"
            />
          </span>
          <h2 className="text-heading-0">Secure the funding you deserve</h2>
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
          className="bg-white p-4 border-y border-primary flex items-center gap-4 w-max text-primary banner-child"
        >
          <h2 className="text-heading-0">Secure the funding you deserve</h2>
          <span>
            <Image
              width={30}
              height={30}
              src="/icons/asterisk-solid.svg"
              alt="asterisk"
            />
          </span>
          <h2 className="text-heading-0">Secure the funding you deserve</h2>
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

      <div className="flex flex-col items-center mt-4 gap-4">
        <p className="text-center max-w-[35ch]">
          With over $15m in secured grants, we know what it takes to get funded.
          Let’s do the work for you.
        </p>
        <Button className="bg-primary mx-auto mt-2 border border-white rounded-sm cursor-pointer items-center h-auto px-7 py-2 text-paragraph  font-bold">
          <span className="mr-2  text-black">Book a free consultation</span>
          <ArrowRight className=" text-black" />
        </Button>
      </div>
    </div>
  );
}
