"use client";
import CellCapitalPrimaryButton from "../cell-capital-button";
import NavBar from "../navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroGrantsSection() {
  return (
    <div className="min-h-screen overflow-hidden relative text-white grid grid-rows-[min-content_1fr]">
      <NavBar />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 min-w-full min-h-full object-cover z-[-1] blur-video"
      >
        <source src="/video/cell-capital-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="backdrop-overlay"></div>
      <MainHero />
    </div>
  );
}

function MainHero() {
  return (
    <div className="grid grid-rows-[2fr_0.2fr]  px-4 pb-4">
      <div className="justify-self-center self-center flex flex-col">
        <div className="mx-auto">
          <h1 className="text-heading-0 font-bold max-w-[20ch]  text-center uppercase mx-auto">
            Scale your business while we secure the funding to keep you at the
            top
          </h1>
        </div>

        <CellCapitalPrimaryButton color="white" className="mt-2">
          See Our Grant Plans
        </CellCapitalPrimaryButton>

        <p className="max-w-[45ch] mx-auto text-center mt-10 text-heading-one">
          Our all in one grant program handles everything freeing you to
          concentrate on scaling your organization with confidence.
        </p>
      </div>
      <div className="md:self-end flex">
        <p className="uppercase text-caption hidden md:block">
          ( sucess oriented grant writing agency)
        </p>
        <Button
          size="icon"
          className="uppercase ml-auto bg-white rounded-sm cursor-pointer"
          asChild
        >
          <ArrowDown size={20} strokeWidth={1} />
        </Button>
      </div>
    </div>
  );
}
