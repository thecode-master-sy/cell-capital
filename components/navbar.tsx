"use client";

import Link from "next/link";
import Logo from "./logo";
import { AlignJustify, Box, Instagram, X } from "lucide-react";
import { Button } from "./ui/button";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import { useContext, createContext, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { useNavBarContext } from "./providers/navbar-provider";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";

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
          strokeWidth={1}
          size={30}
          className="cursor-pointer lg:hidden"
          onClick={() => toggleNav()}
        />
      </div>
    </nav>
  );
}

export function HiddenNav() {
  const pathname = usePathname();
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
        .to(
          ".menu-backdrop",
          {
            opacity: 1,
            duration: 0.5,
            ease: "power4.inOut",
          },
          "-=1"
        )
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
      <div
        className={cn(
          "fixed inset-0 z-[5] menu-backdrop opacity-0",
          isOpen ? "block" : "hidden"
        )}
      ></div>

      <div className="fixed ml-auto inset-2 md:w-[60%] z-[10] bg-white py-4 pl-7 pr-4  grid grid-rows-[auto_1fr_auto] rounded-sm menu-overlay">
        <div className="flex justify-end items-center">
          <X size={40} className="cursor-pointer" onClick={() => toggleNav()} />
        </div>

        <ul className="text-heading-0 font-bold space-y-5 mt-4">
          {siteLinks.map((siteLink, index) => (
            <div
              key={index}
              className={cn(
                "menu-link-item",
                pathname === siteLink.pathname
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <li className="menu-link-item-holder">
                <Link
                  href={siteLink.pathname}
                  onClick={() => toggleNav()}
                  className="flex gap-7"
                >
                  <span>0{index + 1}</span>
                  <span>{siteLink.label}</span>
                </Link>
              </li>
            </div>
          ))}

          <div className="menu-link-item text-muted-foreground">
            {" "}
            <li className="menu-link-item-holder flex gap-7">
              <span>04</span>
              <span>Get free updates</span>
            </li>
          </div>

          <div className="menu-link-item text-muted-foreground">
            <li className="menu-link-item-holder">
              <a href="#about" className="flex gap-7">
                <span>05</span>
                <span>About</span>
              </a>
            </li>
          </div>
        </ul>

        <div className="text-caption uppercase flex flex-wrap gap-4 border-t border-primary py-4">
          <Button
            size="sm"
            className="py-1 px-3 bg-background border border-primary cursor-pointer items-center"
          >
            <InstagramLogoIcon />
            <span>instagram</span>
          </Button>
          <Button
            size="sm"
            className="py-1 px-3 bg-background border border-primary cursor-pointer items-center"
          >
            <TwitterLogoIcon />
            <span>X (twitter)</span>
          </Button>
          <Button
            size="sm"
            className="py-1 px-3 bg-background border border-primary cursor-pointer"
          >
            <LinkedinLogoIcon />
            <span>Linkedin</span>
          </Button>
          <Button
            size="sm"
            className="py-1 px-3 bg-background border border-primary cursor-pointer"
          >
            <TiktokLogoIcon />
            <span>Tiktok</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
