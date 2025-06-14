"use client";
import NavBar from "@/components/navbar";
import { Button } from "../ui/button";
import CellCapitalPrimaryButton from "../cell-capital-button";
import { ArrowDown, CircleDollarSign, Rocket } from "lucide-react";
import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";

export default function HeroSection() {
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
      <div className="sticky h-[88vh] top-0">
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
    <div className="pb-30 hidden md:block">
      <h2 className="text-heading-one font-bold text-center mx-auto max-w-[40ch]">
        At Cell Capital we are passionate about securing grants for business &
        non-profits through expert consulting, research, and compelling Grant
        Proposals or Business Plan
      </h2>
    </div>
  );
}

const MainHero = () => {
  return (
    <div className="grid  px-4 pt-35">
      <div className="justify-self-center self-center flex flex-col">
        <div className="mx-auto">
          <h1 className="text-heading-0 font-bold max-w-[20ch]  text-center mx-auto">
            $15million secured in debt free Grants. You could be next!
          </h1>
        </div>

        <p className="max-w-[42ch] md:hidden mt-4 text-center mx-auto text-paragraph">
          At Cell Capital we are passionate about securing grants for business
          and non-profits through expert consulting, research, and compelling
          grant proposals or business plan
        </p>

        <Button
          size="sm"
          className="rounded-sm font-semibold mt-4 md:hidden w-max mx-auto"
        >
          Book a consultation
        </Button>
      </div>
    </div>
  );
};
