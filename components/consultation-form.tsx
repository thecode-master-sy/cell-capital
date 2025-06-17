"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useConsultationFormContext } from "./providers/consultation-provider";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useLenis } from "lenis/react";

export default function ConsultationForm() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleConsultationForm } = useConsultationFormContext();
  const lenis = useLenis();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organizationName: "",
    industry: "",
    fundingGoal: "",
  });

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }

    console.log("has submitted");
  };

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

              <span className="font-bold text-paragraph mt-16 inline-block">
                {step === 1
                  ? "Personal information"
                  : "Organization information"}
              </span>
              <div className="mt-2 border-t border-gray-200" />

              <form className="grid gap-4 mt-4" onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-paragraph">
                        <span>Name</span>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        placeholder="Tochi Chimeremeze"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="text"
                        id="name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-paragraph">
                        <span>Email address</span>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        placeholder="tochi@cellcapital.com"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="email"
                        id="email"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-paragraph">
                        Phone number
                      </label>
                      <input
                        placeholder="08123456789"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="grid gap-2">
                      <label htmlFor="name" className="text-paragraph">
                        <span>Organization name</span>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        placeholder="Cell capital"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="text"
                        id="organization-name"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="email" className="text-paragraph">
                        <span>Organization industry/sector</span>
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        placeholder="transportation"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="text"
                        id="industry"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="phone" className="text-paragraph">
                        Funding goal
                      </label>
                      <input
                        placeholder="$1000"
                        className="p-3 bg-background-gray rounded-sm text-paragraph"
                        type="text"
                        id="funding-goal"
                      />
                    </div>
                  </>
                )}

                <div className="flex justify-end">
                  {step > 1 && (
                    <Button
                      type="button"
                      size="lg"
                      variant="ghost"
                      className="text-paragraph"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    size="lg"
                    className="font-bold w-full max-w-[150px] cursor-pointer rounded-sm"
                  >
                    <span>Continue</span>
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
