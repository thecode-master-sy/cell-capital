"use client";
import { useGSAP } from "@gsap/react";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "./cell-capital-button";
import { useNavBarContext } from "./providers/navbar-provider";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function FloatingNav() {
  const { toggleNav } = useNavBarContext();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      function getScrollAmount() {}

      // Create animation to reveal nav when scrolling past 100vh
      gsap.to(container.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1.24,
        scrollTrigger: {
          trigger: document.body,
          start: "top -100vh",
          end: "top -100vh",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed top-0 left-0 right-0 z-[9] flex justify-end floating-nav"
    >
      <div className="flex gap-1 p-4">
        <CellCapitalSecondaryButton
          className="rounded-full text-white"
          onClick={() => toggleNav()}
        >
          Menu
        </CellCapitalSecondaryButton>
      </div>
    </div>
  );
}
