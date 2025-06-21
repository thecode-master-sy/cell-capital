"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLenis } from "lenis/react";
import { useCart } from "./providers/cart-provider";
import CartItemComponent from "./cart-item";
import { Button } from "./ui/button";
import Link from "next/link";
import PaymentComponent from "./payment-component";

export default function CartComponent() {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleCart, cart, getCartTotal } = useCart();
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
              onClick={toggleCart}
            ></motion.div>

            <motion.div
              ref={overlayRef}
              className="fixed ml-auto overflow-auto pt-10 pb-4 inset-0 md:w-[55%] z-[20] bg-background px-4  menu-overlay"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {cart.length === 0 ? (
                <div className="flex gap-2 flex-col justify-center h-full items-center">
                  <button
                    onClick={toggleCart}
                    className="flex gap-2 items-center fixed top-2 right-2 cursor-pointer ml-auto"
                  >
                    <div className="flex justify-center items-center bg-background-gray w-[30px] h-[30px]  p-1 rounded-full">
                      <X size={15} strokeWidth={2} className="cursor-pointer" />
                    </div>
                  </button>
                  <p className="text-paragraph max-w-[35ch] text-center">
                    Your cart is empty at the moment, check out our Grant
                    packages and Business plan
                  </p>
                  <Button onClick={toggleCart} className="font-bold" asChild>
                    <Link href="/grants#packages">
                      Continue to grant packages
                    </Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="fixed top-0 z-[10] py-4 w-full md:w-[55%]  flex justify-between  px-4 bg-background  border-black right-0">
                    <div>
                      <h2 className="text-heading-one font-bold">
                        Order summary
                      </h2>
                    </div>
                    <button
                      onClick={toggleCart}
                      className="flex gap-2 items-center cursor-pointer ml-auto"
                    >
                      <div className="flex justify-center items-center bg-background-gray w-[30px] h-[30px]  p-1 rounded-full">
                        <X
                          size={15}
                          strokeWidth={2}
                          className="cursor-pointer"
                        />
                      </div>
                    </button>
                  </div>

                  <div className="md:pt-18 md:pb-30 py-10  grid gap-4">
                    {cart.map((item) => (
                      <CartItemComponent key={item.id} product={item} />
                    ))}
                  </div>

                  <div className="fixed bottom-0 py-4 w-full md:w-[55%]  flex items-center justify-between  px-4 bg-background  border-black right-0">
                    <div>
                      <p className="text-muted-foreground">Total</p>
                      <h2 className="text-heading-one tracking-wide font-bold">
                        ${getCartTotal()}
                      </h2>
                    </div>
                    <div>
                      <PaymentComponent
                        items={cart.map((item) => ({
                          priceId: item.priceId,
                          quantity: item.quantity,
                        }))}
                      >
                        Checkout
                      </PaymentComponent>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
