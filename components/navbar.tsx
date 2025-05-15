"use client";

import Link from "next/link";
import Logo from "./logo";
import { Box } from "lucide-react";
import { Button } from "./ui/button";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "./cell-capital-button";
import { useContext, createContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useNavBarContext } from "./providers/navbar-provider";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
export default function NavBar() {
  const { toggleNav } = useNavBarContext();
  return (
    <nav className="px-4 py-2 md:gap-8 gap-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 border-b">
      <div className="lg:col-span-2 col-span-3 flex items-center">
        <Logo />
      </div>

      <ul className="hidden lg:flex items-center gap-3 uppercase text-caption lg:col-start-5 lg:col-span-5">
        <li>Get free updates</li>
        <li>
          <Link href="/grants">Grants</Link>{" "}
        </li>
        <li>
          <Link href="/business-plan">Business Plan</Link>{" "}
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <div className="flex gap-4  items-center col-start-4 col-span-full  lg:col-span-3 ml-auto">
        <div className="uppercase text-caption flex items-center gap-2">
          <span>packages</span>
          <Box size={16} />
        </div>
        <Button
          size="sm"
          className="uppercase max-w-[200px] bg-cellcapital-light text-caption lg:hidden text-white cursor-pointer rounded-full"
          onClick={() => toggleNav()}
        >
          menu
        </Button>
      </div>
    </nav>
  );
}

export function HiddenNav() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { isOpen, toggleNav } = useNavBarContext();

  const tl = useRef<GSAPTimeline>(null);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.24,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: containerRef }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      <div className="fixed inset-0 z-[10] bg-background-black p-4 text-background-black-foreground grid grid-rows-[auto_1fr_auto] menu-overlay">
        <div className="flex justify-end items-center">
          <CellCapitalSecondaryButton
            className="text-white rounded-full"
            onClick={() => toggleNav()}
          >
            Close
          </CellCapitalSecondaryButton>
        </div>

        <ul className="uppercase text-heading-one space-y-2 mt-16">
          <div className="menu-link-item">
            <li className="menu-link-item-holder">Home</li>
          </div>

          <div className="menu-link-item">
            {" "}
            <li className="menu-link-item-holder">Get free updates</li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <Link href="/grant">Grants</Link>{" "}
            </li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <Link href="/grant">Business Plan</Link>{" "}
            </li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <Link href="/grant">About</Link>
            </li>
          </div>
        </ul>

        <div className="text-caption uppercase flex gap-4">
          <span>instagram</span>
          <span>X (twitter)</span>
          <span>Linkedin</span>
          <span>Tiktok</span>
        </div>
      </div>
    </div>
  );
}
