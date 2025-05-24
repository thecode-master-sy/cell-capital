"use client";
import Image from "next/image";
import NavBar from "../navbar";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionThree() {
  const currentImageRef = useRef<HTMLImageElement>(null); // Ref for current image
  const nextImageRef = useRef<HTMLImageElement>(null); // Ref for next image
  const [currentIndex, setCurrentIndex] = useState(0); // Track current image index
  const firstBannerRef = useRef(null);
  const secondBannerRef = useRef<HTMLDivElement | null>(null);
  const bannerContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  // Array of image sources for cycling
  const images = [
    "/hero-image-one.jpg",
    "/hero-image-seven.jpg",
    "/hero-image-six.jpg",
  ];

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

  // const { contextSafe } = useGSAP(
  //   () => {
  //     gsap.set(nextImageRef.current, { opacity: 0 });
  //   },
  //   { scope: currentImageRef }
  // );

  // const crossfade = contextSafe(() => {
  //   const nextIndex = (currentIndex + 1) % images.length;

  //   nextImageRef.current!.src = images[nextIndex];

  //   // GSAP timeline for crossfade
  //   gsap
  //     .timeline({
  //       onComplete: () => {
  //         // Update current image to next image
  //         currentImageRef.current!.src = images[nextIndex];
  //         gsap.set(currentImageRef.current, { opacity: 1 });
  //         gsap.set(nextImageRef.current, { opacity: 0 });
  //         setCurrentIndex(nextIndex); // Update index
  //       },
  //     })
  //     .to(currentImageRef.current, {
  //       opacity: 0,
  //       duration: 1,
  //       ease: "power2.inOut",
  //     })
  //     .to(
  //       nextImageRef.current,
  //       {
  //         opacity: 1,
  //         duration: 1,
  //         ease: "power2.inOut",
  //       },
  //       "-=1"
  //     );
  // });

  // useEffect(() => {
  //   const interval = setInterval(crossfade, 5000);
  //   return () => clearInterval(interval); // Cleanup
  // }, [crossfade]);

  return (
    <div className="bg-background-gray">
      <NavBar />

      <h1 className="text-heading-0  text-center pt-16 max-w-[15ch] sm:max-w-[22ch] px-4 mx-auto font-bold">
        $15 million secured in debt free grants. You could be next!
      </h1>

      <div className="bg-background-gray flex justify-center">
        <p className="max-w-[40ch] sm:max-w-[50ch] text-center p-4">
          At Cell Capital we are passionate about securing grants for business &
          non-profits through expert consulting, research, and compelling Grant
          Proposals or Business Plan
        </p>
      </div>

      <div className="flex relative h-[600px] z-1 overflow-hidden">
        <div className="flex  flex-col absolute w-full top-0 z-[1]">
          <Button className="bg-primary border border-black  mx-auto mt-2   text-primary rounded-sm cursor-pointer items-center h-auto px-7 py-2 text-paragraph  font-bold">
            <span className="mr-2">Book a free consultation</span>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 uppercase font-bold z-1">
          <div ref={bannerContainer} className="relative flex w-max">
            <div
              ref={firstBannerRef}
              className="bg-white p-4 border-y border-black flex items-center gap-4 w-max text-primary"
            >
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

            <div
              ref={secondBannerRef}
              className="bg-white p-4 border-y border-black flex items-center gap-4 w-max text-primary"
            >
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
          className="w-full object-center object-cover z-0 will-change-transform absolute inset-0 h-full"
          src="/hero-image-one.jpg"
          alt=""
        />
        <img
          ref={nextImageRef}
          width={100}
          height={100}
          className="w-full object-center object-cover will-change-transform opacity-0 absolute inset-0 h-full"
          src="/hero-image-six.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
