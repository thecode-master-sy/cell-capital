import Image from "next/image";
import NavBar from "../navbar";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight, Sparkle } from "lucide-react";
export default function HeroSectionThree() {
  return (
    <div className="min-h-screen bg-background-gray">
      <NavBar />

      <h1 className="text-heading-0 uppercase text-center mt-7 max-[25ch] px-4 pb-2">
        $15 million secured in debt free grants. You could be Next
      </h1>

      <div className="flex relative">
        <div className="flex  flex-col absolute w-full top-0 z-[1]">
          <div className="bg-background-gray flex justify-center">
            <p className="max-w-[55ch] text-heading-two  text-center p-4">
              At Cell Capital we are passionate about securing grants for
              business & non-profits through expert consulting, research, and
              compelling Grant Proposals or Business Plan
            </p>
          </div>
          <Button
            size="lg"
            className="bg-primary border border-black mx-auto mt-2  text-black text-base rounded-sm uppercase font-bold cursor-pointer items-center h-auto px-7 py-3"
          >
            <span className="mr-2">Book a free consultation</span>
            <div className="p-1 rounded-full border-[1.5] border-black">
              <ArrowUpRight strokeWidth={2} />
            </div>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 uppercase font-bold overflow-hidden">
          <div className="bg-white p-4 border-t border-black flex gap-4 w-max text-primary">
            <h2 className="text-heading-one w-max">
              Focus on scaling your business
            </h2>

            <span className="text-heading-0 self-center">*</span>

            <h2 className="text-heading-one w-max">
              We will get you the funds to keep you at the top
            </h2>
          </div>
          <div className="bg-primary p-4 border-y border-black flex w-max gap-4">
            <h2 className="text-heading-one w-max">
              Success Oriented Grant Writing Agency
            </h2>

            <span className="text-heading-0 self-center">*</span>

            <h2 className="text-heading-one w-max">
              Success Oriented Grant Writing Agency
            </h2>
          </div>
        </div>
        <img
          width={100}
          height={100}
          className="w-full h-screen md:h-auto object-cover"
          src="/hero-image-two.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
