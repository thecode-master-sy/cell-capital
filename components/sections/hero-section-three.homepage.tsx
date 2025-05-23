"use client";
import Image from "next/image";
import NavBar from "../navbar";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);

export default function HeroSectionThree() {
  const currentImageRef = useRef<HTMLImageElement>(null); // Ref for current image
  const nextImageRef = useRef<HTMLImageElement>(null); // Ref for next image
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const bannerRef = useRef<HTMLDivElement | null>(null);

  // Array of image sources for cycling
  const images = [
    "/hero-image-one.jpg",
    "/hero-image-seven.jpg",
    "/hero-image-six.jpg",
  ];

  // Clip-path animation with useGSAP
  const { contextSafe } = useGSAP(
    () => {
      // Initial setup: Hide next image with clip-path (top)
      gsap.set(nextImageRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", // Fully hidden at top
      });
    },
    { scope: currentImageRef }
  );

  const clipPathTransition = contextSafe(() => {
    if (!nextImageRef.current || !currentImageRef.current) {
      console.warn("Image refs are not defined, skipping transition");
      return;
    }

    const nextIndex = (currentIndex + 1) % images.length;
    nextImageRef.current.src = images[nextIndex];

    gsap.to(nextImageRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 3,
      ease: "power2.inOut",
      overwrite: "auto", // Prevent overlapping animations
      onComplete: () => {
        if (currentImageRef.current && nextImageRef.current) {
          currentImageRef.current.src = images[nextIndex];
          gsap.set(currentImageRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          });
          gsap.set(nextImageRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          });
          setCurrentIndex(nextIndex);
          // Schedule next transition
          gsap.delayedCall(2, clipPathTransition); // 5s total (3s animation + 2s delay)
        }
      },
    });
  });

  useEffect(() => {
    // Start first transition
    gsap.delayedCall(2, clipPathTransition);

    // Pause/resume animations based on page visibility
    const handleVisibilityChange = () => {
      if (document.hidden) {
        gsap.ticker.sleep(); // Pause GSAP animations
      } else {
        gsap.ticker.wake(); // Resume GSAP animations
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      gsap.killTweensOf([
        currentImageRef.current,
        nextImageRef.current,
        bannerRef.current,
      ]);
    };
  }, [clipPathTransition]);

  // useEffect(() => {
  //   images.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  return (
    <div className="bg-background-gray">
      <NavBar />

      <h1 className="text-heading-0  text-center mt-7 max-w-[22ch] px-4 mx-auto pb-2">
        $15 million secured in debt free grants. You could be next!
      </h1>

      <div className="flex relative h-[700px] z-1 overflow-hidden">
        <div className="flex  flex-col absolute w-full top-0 z-[1]">
          <div className="bg-background-gray flex justify-center">
            <p className="max-w-[50ch] text-center p-4">
              At Cell Capital we are passionate about securing grants for
              business & non-profits through expert consulting, research, and
              compelling Grant Proposals or Business Plan
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary border border-black mx-auto mt-2  text-black rounded-sm cursor-pointer items-center h-auto px-4 py-2 text-paragraph text-[20px]"
          >
            <span className="mr-2">Book a free consultation</span>
            <div className="p-1 rounded-full border border-black">
              <ArrowUpRight strokeWidth={1} />
            </div>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 uppercase font-bold overflow-hidden z-1">
          <div
            ref={bannerRef}
            className="bg-white p-4 border-y border-black flex items-center gap-4 w-max text-primary"
          >
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h2 className="text-heading-0">
                Success Oriented Grant Writing Agency
              </h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">
                Success Oriented Grant Writing Agency
              </h2>
            </div>
            <div className="flex items-center gap-4 whitespace-nowrap">
              <h2 className="text-heading-0">
                Success Oriented Grant Writing Agency
              </h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">
                Success Oriented Grant Writing Agency
              </h2>
            </div>
          </div>
        </div>
        <img
          ref={currentImageRef}
          width={100}
          height={100}
          className="w-full object-center object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 z-0 will-change-transform"
          src="/hero-image-one.jpg"
          alt=""
        />
        <img
          ref={nextImageRef}
          width={100}
          height={100}
          className="w-full object-center object-cover absolute top-1/2 left-1/2 z-0  -translate-x-1/2 -translate-y-1/2 will-change-transform"
          src="/hero-image-six.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
