"use client";
import {
  StarIcon,
  ArrowFatLeftIcon,
  ArrowFatRightIcon,
} from "@phosphor-icons/react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP);

export default function TestimonalSection() {
  const containerRef = useRef(null);
  const leftButtonRef = useRef<HTMLButtonElement | null>(null);
  const rightButtonRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(
    (context, contextSafe) => {
      const rightButton = rightButtonRef.current;
      const leftButton = leftButtonRef.current;
      if (!contextSafe || !rightButton || !leftButton) return;
      const testimonials: HTMLDivElement[] =
        gsap.utils.toArray(".testimonials");

      const handleRightClick = contextSafe(() => {
        const previousElement = testimonials.find((el) =>
          el.classList.contains("was-active")
        );
        const activeElement = testimonials.find((el) =>
          el.classList.contains("is-active")
        );

        if (!activeElement) return;

        const activeIndex = testimonials.indexOf(activeElement);

        if (activeIndex === testimonials.length - 2) {
          rightButton.disabled = true;
        } else {
          rightButton.disabled = false;
        }

        const nextIndex = (activeIndex + 1) % testimonials.length;

        previousElement && previousElement.classList.remove("was-active");

        const timeline = gsap.timeline({
          onComplete: () => {
            activeElement.classList.remove("is-active");
            activeElement.classList.add("was-active");
            activeElement.classList.add("removed");
            testimonials[nextIndex].classList.add("is-active");
          },
        });

        timeline.to(
          activeElement,
          {
            y: -300,
            duration: 0.5,
            ease: "power2.out",
          },
          0
        );

        const remainingElements = testimonials.filter(
          (el) => !el.classList.contains("removed") && el !== activeElement
        );

        remainingElements.forEach((el, i) => {
          const newIndex = i > activeIndex ? i - 1 : i;

          timeline.to(
            el,
            {
              x: newIndex * 8,
              y: newIndex * 8,
              duration: 0.5,
              ease: "power2.out",
            },
            0
          ); // Start at t=0 for simultaneous animation
        });
      });

      rightButton.addEventListener("click", handleRightClick);
      //leftButton.addEventListener("click", handleLeftClick);

      return () => {
        rightButton.removeEventListener("click", handleRightClick);
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="pt-16 pb-48 bg-background-gray">
      <div className="px-4">
        <h1 className="text-heading-0 font-bold col-span-full text-center">
          Testimonials
        </h1>
      </div>

      <div ref={containerRef}>
        <div className="px-4 gap-4 mt-7 min-h-[450px] overflow-y-hidden relative ">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            <button
              ref={leftButtonRef}
              className="cursor-pointer bg-white p-4 flex  border rounded-sm my-auto border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowFatLeftIcon size={40} />
            </button>
            <button
              ref={rightButtonRef}
              className="cursor-pointer bg-white p-4  border rounded-sm my-auto border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-[0.5] disabled:hover:bg-white disabled:hover:text-primary"
            >
              <ArrowFatRightIcon size={40} />
            </button>
          </div>

          <div className="bg-white absolute  inset-0 flex flex-col border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] z-[6] p-4 mx-auto testimonials is-active">
            <h1 className="pb-4">
              "My work with Cell Capital was exceptional, they were very
              detailed and delivered well before the deadline. I will do a
              follow up review once I receive feedback from grantors. Overall, I
              am satisfied with the work done and will do future business with
              them."
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

          <div className="bg-white absolute inset-0 flex flex-col border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] translate-x-2 translate-y-2 z-[5] p-4 mx-auto testimonials ">
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

          <div className="bg-white flex flex-col absolute inset-0 border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] translate-x-4 translate-y-4 z-[4] p-4 mx-auto testimonials">
            <h1>
              "Cell Capital was an absolute pleasure to work with. Their
              adaptability to the brief and attention to detail made the project
              a success, while their professionalism shone through in every
              aspect. Polite, quick to respond, and always proactive in
              communication"
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

          <div className="bg-white flex flex-col absolute inset-0 border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] translate-x-6 translate-y-6 z-[3] p-4 mx-auto testimonials">
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

          <div className="bg-white flex flex-col absolute inset-0 border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] translate-x-8 translate-y-8 z-[2] p-4 mx-auto testimonials">
            <h1>
              "Fantastic work on behalf of Cell Capital. My company will be
              proud to submit this proposal for grants. The written work has
              flawless English and delivered the proposal in the precise format
              I needed"
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

          <div className="bg-white flex flex-col absolute inset-0 border border-primary rounded-sm min-w-[300px] w-[50vw] min-h-[200px] h-[300px] max-w-[800px] translate-x-10 translate-y-10 z-[1] p-4 mx-auto testimonials">
            <h1>
              "I cannot thank you enough. Words cannot express how much this
              mean to me. I am grateful to you for the work you've done more
              than you'll ever know. You have my deepest thanks"
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

          {/*

         

        
          */}
        </div>
      </div>
    </div>
  );
}
