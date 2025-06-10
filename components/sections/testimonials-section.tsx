"use client";
import { StarIcon } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import Slider from "../Slider";

export default function TestimonalSection() {
  const containerRef = useRef(null);

  return (
    <div className="pt-16 pb-48 bg-background-gray">
      <div className="px-4">
        <h1 className="text-heading-0 font-bold col-span-full text-center">
          Testimonials
        </h1>
      </div>

      <Slider className="mt-7">
        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1 className="pb-4">
            "My work with Cell Capital was exceptional, they were very detailed
            and delivered well before the deadline. I will do a follow up review
            once I receive feedback from grantors. Overall, I am satisfied with
            the work done and will do future business with them."
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Jay Graham</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1>
            "Cell Capital is the team! They understood my business goals and
            vision and put it on paper. I’m excited to see the results of the
            grant applications and look forward to applying to more grants in
            the future with them!"
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Ronda Ramsey</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1>
            "Cell Capital was an absolute pleasure to work with. Their
            adaptability to the brief and attention to detail made the project a
            success, while their professionalism shone through in every aspect.
            Polite, quick to respond, and always proactive in communication"
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Julius Barren</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1>
            "Cell Capital did an amazing job. They were very detailed and
            understood the assignment!!!! I am beyond pleased with their work,
            and I highly recommend them."
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Rajar Carter</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1>
            "Fantastic work on behalf of Cell Capital. My company will be proud
            to submit this proposal for grants. The written work has flawless
            English and delivered the proposal in the precise format I needed"
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Crystal Watts</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[300px] w-[45vw] min-h-[200px] h-[300px] max-w-[800px] p-4">
          <h1>
            "I cannot thank you enough. Words cannot express how much this mean
            to me. I am grateful to you for the work you've done more than
            you'll ever know. You have my deepest thanks"
          </h1>

          <div className="p-4 border-t border-primary mt-auto flex justify-between">
            <span className="font-bold">Paul Henderson</span>

            <div className="flex gap-2">
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
              <StarIcon weight="fill" className="text-primary" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
