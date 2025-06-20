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
import { useConsultationFormContext } from "./providers/consultation-provider";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
} from "@phosphor-icons/react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useCart } from "./providers/cart-provider";

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
  },
  offscreen: {
    backgroundColor: "white",
  },
};

export default function NavBar() {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: false });
  const { toggleNav } = useNavBarContext();
  const { toggleConsultationForm } = useConsultationFormContext();
  const { cart, toggleCart } = useCart();
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
          <Link href="/#about">About</Link>
        </motion.li>

        <motion.li variants={itemVariants} key={"item-two"}>
          Get free updates
        </motion.li>
      </motion.ul>

      <div className="flex gap-4  items-center fixed top-2 right-4 z-10 ">
        <button
          onClick={toggleCart}
          className="gap-1 items-center hidden md:flex cursor-pointer"
        >
          <ShoppingBag strokeWidth={1} size={20} />
          <span>{cart.length === 0 ? "" : cart.length}</span>
        </button>

        <motion.div
          layout
          variants={floatingNavVariants}
          animate={isInView ? "onscreen" : "offscreen"}
          className="hidden md:flex gap-1 items-center rounded-sm p-1  overflow-hidden"
        >
          <motion.div className="flex gap-2 items-center" layout>
            <Button
              size="sm"
              className="hidden md:flex rounded-sm font-semibold text-sm cursor-pointer"
              onClick={() => toggleConsultationForm()}
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
        </motion.div>
      </div>

      <button
        onClick={toggleCart}
        className="flex mix-blend-difference gap-1 md:hidden items-center text-white fixed right-15 top-[13px] z-10  text-body cursor-pointer"
      >
        <ShoppingBag strokeWidth={1} size={20} />
        <span>{cart.length === 0 ? "" : cart.length}</span>
      </button>
      <AlignJustify
        strokeWidth={1}
        size={30}
        className="cursor-pointer fixed right-4 top-2 md:hidden z-10 mix-blend-difference text-white"
        onClick={() => toggleNav()}
      />
    </nav>
  );
}

export function HiddenNav() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleNav } = useNavBarContext();

  // Variants for the menu overlay
  const overlayVariants = {
    hidden: {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      transition: { duration: 1.24, ease: [0.76, 0, 0.24, 1] }, // power4.inOut equivalent
    },
    visible: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      transition: {
        duration: 1.24,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
      },
    },
  };

  // Variants for the backdrop
  const backdropVariants = {
    hidden: { opacity: 0, display: "none" },
    visible: {
      opacity: 1,
      display: "block",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.24 }, // Offset to sync with overlay
    },
  };

  // Variants for menu items
  const itemVariants = {
    hidden: { y: 75 },
    visible: {
      y: 0,
      transition: {
        y: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        opacity: {
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    },
  };

  return (
    <div ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={cn("fixed inset-0 z-[5] menu-backdrop")}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            ></motion.div>

            <motion.div
              className="fixed ml-auto inset-0 md:w-[60%] z-[10] bg-white py-4 pl-7 pr-4 grid grid-rows-[auto_1fr_auto] menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex justify-end items-center">
                <X size={40} className="cursor-pointer" onClick={toggleNav} />
              </div>

              <ul className="text-hidden-nav font-bold space-y-4 mt-4">
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
                    <motion.li
                      variants={itemVariants}
                      className="menu-link-item-holder"
                    >
                      <Link
                        href={siteLink.pathname}
                        onClick={toggleNav}
                        className="flex gap-7"
                      >
                        <span>0{index + 1}</span>
                        <span>{siteLink.label}</span>
                      </Link>
                    </motion.li>
                  </div>
                ))}

                <div className="menu-link-item text-muted-foreground">
                  <motion.li
                    variants={itemVariants}
                    className="menu-link-item-holder flex gap-7"
                  >
                    <span>04</span>
                    <span>Get free updates</span>
                  </motion.li>
                </div>

                <div className="menu-link-item text-muted-foreground">
                  <motion.li
                    variants={itemVariants}
                    className="menu-link-item-holder"
                  >
                    <a href="#about" className="flex gap-7">
                      <span>05</span>
                      <span>About</span>
                    </a>
                  </motion.li>
                </div>
              </ul>

              <div className="text-caption uppercase flex flex-wrap gap-4 py-4">
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
