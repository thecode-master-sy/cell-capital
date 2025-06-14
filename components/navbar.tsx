"use client";

import Link from "next/link";
import Logo from "./logo";
import { AlignJustify, ShoppingBag, X } from "lucide-react";
import { Button } from "./ui/button";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import { useRef, useEffect } from "react";
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
import { motion, useInView, AnimatePresence } from "motion/react";

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

const navItemContainer = {
  onscreen: {
    translateY: 0,
  },
  offscreen: {
    translateY: -10,
  },
};

// Variants for individual nav items
const itemVariants = {
  onscreen: {
    opacity: 1,
    translateY: 0,
  },
  offscreen: {
    opacity: 0,
    translateY: -5,
  },
};

const floatingNavVariants = {
  onscreen: {
    backgroundColor: "transparent",
    borderWidth: "0px",
  },
  offscreen: {
    backgroundColor: "white",
    borderWidth: "1px",
  },
};

export default function NavBar() {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: false, initial: true });
  const { toggleNav } = useNavBarContext();
  const pathname = usePathname();
  return (
    <nav
      ref={elementRef}
      className="flex items-center justify-between absolute top-0 h-[40vh] bg-background-gray text-navbar"
    >
      <div className="flex items-center fixed left-4 top-4 z-10">
        <Logo />
      </div>

      <motion.ul
        variants={navItemContainer}
        animate={isInView ? "onscreen" : "offscreen"}
        transition={{
          staggerChildren: 0.1,
          staggerDirection: -1,
          duration: 0.5,
        }}
        className="hidden lg:flex items-center gap-7 z-10 font-semibold mix-blend-difference text-white fixed top-2 left-1/2 right-1/2 -translate-x-1/2 w-max"
      >
        {siteLinks.map((siteLink, index) => (
          <motion.li
            className="py-1 relative "
            key={index}
            variants={itemVariants}
          >
            <Link href={siteLink.pathname}>{siteLink.label}</Link>
            {pathname == siteLink.pathname && (
              <span className="absolute top-[100%] w-full left-0 bg-white h-[2px]" />
            )}
          </motion.li>
        ))}

        <motion.li variants={itemVariants} key={"item-one"}>
          <a href="#about">About</a>
        </motion.li>

        <motion.li variants={itemVariants} key={"item-two"}>
          Get free updates
        </motion.li>
      </motion.ul>

      <div className="flex gap-4  items-center fixed top-2 right-4 z-10 ">
        <button className="flex items-center gap-2 text-body cursor-pointer">
          <ShoppingBag size={16} />
        </button>
        <motion.div
          layout
          variants={floatingNavVariants}
          animate={isInView ? "onscreen" : "offscreen"}
          className="flex gap-1 items-center rounded-sm p-1 border-primary overflow-hidden"
        >
          <motion.div layout>
            <Button
              size="sm"
              className="rounded-sm font-semibold text-sm hidden md:flex"
            >
              Book a consultation
            </Button>
          </motion.div>

          <AnimatePresence>
            {!isInView && (
              <motion.div
                animate={{
                  opacity: 1,
                }}
                className="hidden lg:inline-block opacity-0"
              >
                <AlignJustify
                  strokeWidth={1}
                  size={24}
                  className="cursor-pointer "
                  onClick={() => toggleNav()}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <AlignJustify
            strokeWidth={1}
            size={30}
            className="cursor-pointer lg:hidden"
            onClick={() => toggleNav()}
          />
        </motion.div>
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
        .timeline({
          paused: true,
          onStart: () => {
            gsap.set(".menu-backdrop", { display: "block" });
          },
          onReverseComplete: () => {
            gsap.set(".menu-backdrop", { display: "none" });
          },
        })
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
        className={cn("fixed inset-0 z-[5] menu-backdrop opacity-0 hidden")}
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
