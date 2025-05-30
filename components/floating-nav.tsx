"use client";
import { useGSAP } from "@gsap/react";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "./cell-capital-button";
import { useNavBarContext } from "./providers/navbar-provider";
import { useRef } from "react";
import { gsap } from "gsap";
import { AlignJustify } from "lucide-react";
import { Button } from "./ui/button";

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
      className="fixed top-2 left-2 right-2 z-[9] flex justify-end floating-nav"
    >
      <div className="flex gap-1 items-center p-1 bg-white border border-primary rounded-sm">
        <Button size="sm" className="rounded-sm font-semibold text-sm">
          Book a consultation
        </Button>
        <AlignJustify
          size={25}
          strokeWidth={1}
          className="cursor-pointer"
          onClick={() => toggleNav()}
        />
      </div>
    </div>
  );
}
