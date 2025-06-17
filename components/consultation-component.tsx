"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useConsultationFormContext } from "./providers/consultation-provider";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

import { useLenis } from "lenis/react";
import ConsultationForm from "./consultation-form";

export default function ConsultationComponent() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleConsultationForm } = useConsultationFormContext();
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "auto";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      overlay.scrollTop += delta;
      e.stopPropagation();
    };

    overlay.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      overlay.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const overlayVariants = {
    hidden: {
      clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
      transition: { duration: 1.24, ease: [0.76, 0, 0.24, 1] },
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
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.24 },
    },
  };

  return (
    <div ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={cn("fixed inset-0 z-[10] menu-backdrop")}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={toggleConsultationForm}
            ></motion.div>

            <motion.div
              ref={overlayRef}
              className="fixed ml-auto overflow-y-scroll pt-10 pb-4 inset-0 md:w-[55%] z-[20] bg-background px-4  menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="absolute right-2 top-2">
                <div
                  onClick={toggleConsultationForm}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div className="flex justify-center items-center bg-background-gray w-[30px] h-[30px]  p-1 rounded-full">
                    <X size={15} strokeWidth={2} className="cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h2 className="text-heading-one font-bold">
                  Talk to us about your funding needs
                </h2>
                <p className="max-w-[45ch]  text-paragraph mt-2">
                  We offer a free consultation, which includes tips and
                  suggestions on what steps you can take, including everything
                  you need for a successful grant request!
                </p>
              </div>

              <ConsultationForm />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
