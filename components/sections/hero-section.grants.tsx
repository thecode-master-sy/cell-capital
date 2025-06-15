"use client";
import { motion, useScroll, useTransform } from "motion/react";
import CellCapitalPrimaryButton from "../cell-capital-button";
import NavBar from "../navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export default function HeroGrantsSection() {
  return (
    <div className="min-h-screen bg-background-gray pb-16 md:pb-0">
      <MainHero />
      <VideoBackground />
      <MobileVideoBackground />
      <RemainingHeroTextContent />
    </div>
  );
}

function VideoBackground() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["30% 80%", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.9]);
  return (
    <div ref={container} className="relative h-[300vh] hidden md:block">
      <div className="sticky h-[85vh] top-0">
        <div className="w-full h-full top-16 absolute flex flex-col items-center">
          <motion.div
            style={{ scale }}
            className="relative w-[50vw] h-[50vh] rounded-md overflow-hidden"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="min-w-full min-h-full object-cover z-[-1] blur-video"
            >
              <source src="/video/cell-capital-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="backdrop-overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MobileVideoBackground() {
  return (
    <div className="relative md:hidden px-4 mt-10">
      <div className="relative w-full h-[40vh] rounded-md overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="min-w-full min-h-full object-cover z-[-1] blur-video"
        >
          <source src="/video/cell-capital-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="backdrop-overlay"></div>
      </div>
    </div>
  );
}

function RemainingHeroTextContent() {
  return (
    <div className="md:pb-30 mt-10 md:mt-0 px-4">
      <h2 className="md:text-heading-one text-center mx-auto text-paragraph max-w-[40ch]">
        Our all in one grant program handles everything freeing you to
        concentrate on scaling your organization with confidence.
      </h2>
    </div>
  );
}

function MainHero() {
  return (
    <div className="grid  px-4 md:pt-35 pt-30">
      <div className="justify-self-center self-center flex flex-col">
        <div className="mx-auto">
          <h1 className="text-heading-0 font-bold max-w-[20ch]  text-center mx-auto">
            Scale your business while we secure the funding to keep you at the
            top
          </h1>
        </div>

        <CellCapitalPrimaryButton
          color="white"
          size="lg"
          className="mt-2 border-primary border text-[18px]"
        >
          See our grant plans
        </CellCapitalPrimaryButton>

        <p className="max-w-[45ch] mx-auto text-center mt-10 text-heading-one"></p>
      </div>
    </div>
  );
}
