"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useConsultationFormContext } from "./providers/consultation-provider";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ConsultationForm() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleConsultationForm } = useConsultationFormContext();

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
              className="fixed ml-auto inset-0 md:w-[60%] z-[20] bg-white px-4  menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="flex justify-end items-start py-4">
                <div
                  onClick={toggleConsultationForm}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <div className="flex justify-center items-center bg-background-gray w-[30px] h-[30px]  p-1 rounded-full">
                    <X size={15} strokeWidth={2} className="cursor-pointer" />
                  </div>
                  <span>close</span>
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
