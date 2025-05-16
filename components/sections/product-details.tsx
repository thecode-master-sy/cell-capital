"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Box, Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import Divider from "../divider";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";

gsap.registerPlugin(ScrollTrigger);

export default function ProductDetails() {
  const leftDivRef = useRef<HTMLDivElement>(null);
  const rightDivRef = useRef<HTMLDivElement>(null);
  const progressCircleRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const leftDiv = leftDivRef.current;
      const rightDiv = rightDivRef.current;
      const progressCircle = progressCircleRef.current;
      const containerDiv = containerRef.current;

      if (!leftDiv || !rightDiv || !progressCircle || !containerDiv) return;

      const circumference = 2 * Math.PI * 30; // Radius = 30
      gsap.set(progressCircle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      });

      gsap.set(leftDiv, {
        clipPath: "inset(0 0 0 0)",
        width: "45%", // Initial width
      });
      gsap.set(rightDiv, {
        width: "55%", // Initial width
      });

      // Initialize ScrollTrigger for progress tracking
      // gsap.to(leftDiv, {
      //   scrollTrigger: {
      //     trigger: rightDiv,
      //     start: "top top",
      //     end: "bottom bottom",
      //     scrub: true,
      //     onUpdate: (self) => {
      //       // Update progress bar width
      //       const progress = self.progress * 100;
      //       progressBar.style.width = `${progress}%`;
      //     },
      //     onEnterBack: () => {
      //       // Restore sticky behavior when scrolling back up
      //       leftDiv.style.position = "sticky";
      //       leftDiv.style.top = "0";
      //     },
      //     onLeave: () => {
      //       // Remove sticky when right div content is exhausted
      //       leftDiv.style.position = "static";
      //     },
      //   },
      // });

      gsap.to(leftDiv, {
        scrollTrigger: {
          trigger: rightDiv,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            // Update circular progress
            const progress = self.progress;
            gsap.to(progressCircle, {
              strokeDashoffset: circumference * (1 - progress),
              duration: 0.1,
              ease: "none",
            });
          },
          onEnterBack: () => {
            // Restore sticky behavior
            leftDiv.style.position = "sticky";
            leftDiv.style.top = "0";
            leftDiv.style.height = "100vh";
          },
          onLeave: () => {
            // Remove sticky behavior
            leftDiv.style.position = "relative";
            leftDiv.style.height = "auto";
          },
        },
      });

      // Immediate clip on scroll start
      gsap
        .timeline({
          scrollTrigger: {
            trigger: leftDiv,
            start: "top top", // When top of left div hits viewport top
            toggleActions: "play none none reverse",
          },
        })
        .to(leftDiv, {
          clipPath: "inset(0 calc(100% - 80px) 0 0)", // Clip to show only cancel button

          duration: 0.8,
          ease: "power4.inOut",
        })
        .to(
          ".content",
          {
            opacity: 0,
            duration: 0.5,
            ease: "power4.inOut",
          },
          0
        );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="hidden md:flex items-stretch w-full">
      <div
        ref={leftDivRef}
        className="bg-background-gray w-[45%] py-4 sticky top-0 h-screen"
      >
        <div className="flex items-center gap-2 px-4">
          <span className="flex bg-white justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer relative">
            <svg className="absolute w-16 h-16" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="14" stroke="#e5e7eb" strokeWidth="2" />
              <circle
                ref={progressCircleRef}
                cx="32"
                cy="32"
                r="14"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                transform="rotate(-90 32 32)"
              />
            </svg>

            <X size={14} />
          </span>

          <Link href="/grants" className="content">
            Back to overview
          </Link>
        </div>

        <div className="mt-10 content">
          <h1 className="text-heading-two pl-4 mb-4">Bronze Starter Pack</h1>

          <Divider label="description" />

          <p className="px-4 py-10">
            Welcome to Our Bronze Starter Pack, the perfect entry point for
            businesses and nonprofits looking to secure funding without the
            stress. This package is designed to kickstart your grant journey
            with a professionally written grant proposal, a curated list of
            three premium grant opportunities, and a free consultation to align
            our efforts with your goals.
          </p>

          <div className="py-4 px-4 flex justify-between items-center border-t">
            <div className="flex items-center gap-2">
              <span className="uppercase">Quantity</span>

              <div className="flex items-center gap-2">
                <span className="flex bg-white justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer">
                  <Minus size={14} />
                </span>

                <span>0</span>

                <span className="flex bg-white justify-center items-center rounded-full w-[28px] h-[28px] cursor-pointer">
                  <Plus size={14} />
                </span>
              </div>
            </div>

            <div className="text-heading-two">
              <h1>$300</h1>
            </div>
          </div>

          <div className="w-full flex gap-4 items-center px-4 py-10">
            <CellCapitalSecondaryButton className="flex-1 p-5 justify-between bg-primary rounded-full">
              <span>Buy now</span>
              <ArrowRight size={14} />
            </CellCapitalSecondaryButton>
            <CellCapitalSecondaryButton className="flex-1 p-5 justify-between bg-white rounded-full">
              <span>Add to packages</span>
              <Box size={14} />
            </CellCapitalSecondaryButton>
          </div>
        </div>
      </div>
      <div
        ref={rightDivRef}
        className="bg-background min-h-screen w-[55%] px-4 pt-4"
      >
        <div>
          <h1 className="text-heading-two">What is included?</h1>

          <p className="mt-2">
            Our process begins with a simple questionnaire to gather key details
            about your organization, followed by a 30-minute free consultation
            to discuss your funding needs and vision.Our expert team then crafts
            a comprehensive grant proposal, including an executive summary,
            needs statement, organizational background, budget outline,
            objectives, and evaluation plan—tailored to make your application
            stand out. We also provide a handpicked list of three premium
            grants, carefully selected to match your mission and increase your
            chances of success.To ensure your satisfaction, we offer three
            revision rounds during the proposal development process.
          </p>
        </div>

        <div className="mt-16">
          <h1 className="text-heading-two">Our process</h1>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex gap-2">
              <span>01.</span>

              <span>
                Complete our online questionnaire to share your organization’s
                details and goals.
              </span>
            </div>

            <div className="flex gap-2">
              <span>02.</span>

              <span>
                Schedule your free 30-minute consultation to refine your funding
                strategy
              </span>
            </div>

            <div className="flex gap-2">
              <span>03.</span>

              <span>
                Our team researches and writes your grant proposal, delivering a
                polished draft within 5-7 business days.
              </span>
            </div>

            <div className="flex gap-2">
              <span>04.</span>

              <span>
                Review the draft and request up to one revision for perfection
              </span>
            </div>

            <div className="flex gap-2">
              <span>05.</span>

              <span>
                Receive your final proposal and curated list of three premium
                grants, ready for you to pursue
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h1 className="text-heading-two">
            Why Choose the Bronze Starter Pack?
          </h1>

          <p className="mt-2">
            This package is ideal for organizations new to grants or those with
            limited budgets who want professional support to get started. While
            we cannot guarantee grant approval, our proven formula maximizes
            your application’s potential with clear, compelling content. The
            curated grant list empowers you to apply confidently, and our
            consultation ensures we’re aligned with your priorities.
          </p>
        </div>

        <div className="mt-16">
          <h1 className="text-heading-two">What to Expect</h1>

          <p className="mt-2">
            The entire process takes 5-7 business days, depending on your
            feedback timeline. You’ll receive a ready-to-submit proposal and a
            grant list with detailed summaries to guide your next steps. We’re
            committed to clear communication and high-quality deliverables, so
            you can focus on running your organization while we handle the
            funding details.
          </p>
        </div>

        <div className="mt-16 pb-16">
          <h1 className="text-heading-two">Have any questions?</h1>

          <p className="mt-2">
            {" "}
            Contact us today to learn how the Bronze Starter Pack can help your
            organization thrive.
          </p>

          <CellCapitalSecondaryButton className="bg-background-gray justify-between rounded-full mt-4">
            <span>Contact us</span>
            <ArrowRight size={14} />
          </CellCapitalSecondaryButton>
        </div>
      </div>
    </div>
  );
}
