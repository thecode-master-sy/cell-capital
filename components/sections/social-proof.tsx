"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialProof() {
  const firstBannerRef = useRef(null);
  const secondBannerRef = useRef<HTMLDivElement | null>(null);
  const bannerContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.to(bannerContainer.current, {
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: 0.5,

        start: 0,

        end: window.innerHeight,

        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-500px",
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
    <div className="bg-white  relative">
      <div className="py-16 overflow-hidden">
        <div className="px-4 flex flex-col md:flex-row gap-y-4 gap-x-4 justify-between">
          <h1 className="text-heading-0 font-bold">Our Funding Success</h1>
          <p className="max-w-[45ch] md:max-w-[35ch]">
            We have helped a diverse group of clients secure over 15million in
            grant funding to grow and scale their operations and have a positive
            impact on their communities and we can help you too!
          </p>
        </div>

        <div ref={bannerContainer} className="flex w-max px-4 gap-4">
          <div ref={firstBannerRef} className="flex gap-4 mt-16">
            <div className="py-4 relative flex-1 flex items-center justify-center min-w-[250px] bg-background aspect-[1/1] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%] min-w-[50px]"
                src="/social-proof/logo-proof-one.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-two.png"
                alt="sistas cohort logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-three.png"
                alt="angels online "
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-four.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-five.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
          </div>

          <div ref={secondBannerRef} className="flex gap-4 mt-16">
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%] min-w-[50px]"
                src="/social-proof/logo-proof-one.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-two.png"
                alt="sistas cohort logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-three.png"
                alt="angels online "
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-four.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
            <div className="py-4 relative flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px] "
                src="/social-proof/logo-proof-five.png"
                alt="boomin university logo"
              />
              <Button
                size="sm"
                className="absolute cursor-pointer bg-white bottom-2 right-2 text-sm rounded-sm border-primary border"
              >
                <span>Learn more</span>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
