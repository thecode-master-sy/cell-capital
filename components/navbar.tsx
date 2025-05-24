"use client";

import Link from "next/link";
import Logo from "./logo";
import { AlignJustify, Box } from "lucide-react";
import { Button } from "./ui/button";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import { useContext, createContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useNavBarContext } from "./providers/navbar-provider";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const siteLinks = [
  {
    label: "Overview",
    pathname: "/",
  },
  {
    label: "Grants",
    pathname: "/grants",
  },
  {
    label: "Business Plan",
    pathname: "/business-plan",
  },
];

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);
export default function NavBar() {
  const { toggleNav } = useNavBarContext();
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center">
        <Logo />
      </div>

      <ul className="hidden lg:flex text-heading-two  items-center gap-7 text-body font-semibold">
        {siteLinks.map((siteLink, index) => (
          <li className="py-1 relative" key={index}>
            <Link href={siteLink.pathname}>{siteLink.label}</Link>
            {pathname == siteLink.pathname && (
              <span className="absolute top-[100%] w-full left-0 bg-background-black h-[1px]" />
            )}
          </li>
        ))}

        <li>
          <a href="#about">About</a>
        </li>
        <li>Get Free Updates</li>
      </ul>

      <div className="flex gap-4  items-center">
        <button className="flex items-center gap-2 text-body cursor-pointer">
          <span>Packages</span>
          <Box size={16} />
        </button>
        <AlignJustify
          size={16}
          className="cursor-pointer md:hidden"
          onClick={() => toggleNav()}
        />
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
            <li className="menu-link-item-holder">
              <Link href="/" onClick={() => toggleNav()}>
                Home
              </Link>
            </li>
          </div>

          <div className="menu-link-item">
            {" "}
            <li className="menu-link-item-holder">Get free updates</li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <Link href="/grants" onClick={() => toggleNav()}>
                Grants
              </Link>{" "}
            </li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <Link href="/business-plan" onClick={() => toggleNav()}>
                Business Plan
              </Link>{" "}
            </li>
          </div>

          <div className="menu-link-item">
            <li className="menu-link-item-holder">
              <a href="#about">About</a>
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
