"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

export const ImageFadeAnimation = ({ images }: { images: string[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // GSAP animation setup
  const { contextSafe } = useGSAP(
    () => {
      if (!containerRef.current) return;

      // Select all img elements in the container
      const imgElements = Array.from(
        containerRef.current.querySelectorAll("img")
      );

      // Reverse and exclude the first image
      const targets = imgElements.reverse().slice(1);

      // GSAP animation
      gsap.to(targets, {
        autoAlpha: 0,
        delay: 2,
        repeat: -1,
        repeatDelay: 1.5,
        stagger: { each: 2 },
      });
    },
    { scope: containerRef }
  );

  // Preload images to prevent delays
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <div id="images" ref={containerRef} className="relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Hero image ${index + 1}`}
          width={600}
          height={600}
          className="w-full object-center object-cover z-0 will-change-transform"
        />
      ))}
      <img
        src={images[0]}
        alt="Hero image clone"
        width={600}
        height={600}
        className="w-full object-center object-cover z-0 will-change-transform"
      />
    </div>
  );
};
