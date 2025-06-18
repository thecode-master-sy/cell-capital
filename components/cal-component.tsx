"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useConsultationFormContext } from "./providers/consultation-provider";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";

type BookerProps = {};

export default function Booker() {
  const { bookerOpen, toggleBooker, clientDetails } =
    useConsultationFormContext();
  const lenis = useLenis();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bookerOpen) {
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
  }, [bookerOpen]);

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay || !bookerOpen) return;

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY;
      overlay.scrollTop += delta;
      e.stopPropagation();
    };

    overlay.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      overlay.removeEventListener("wheel", handleWheel);
    };
  }, [bookerOpen]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  console.log(clientDetails);
  return (
    bookerOpen && (
      <div
        ref={overlayRef}
        className="fixed inset-0 flex justify-center z-[100] gap-4 overflow-y-auto p-4 py-12 menu-backdrop"
      >
        <div className="absolute right-2 top-2">
          <div
            onClick={toggleBooker}
            className="flex gap-2 items-center cursor-pointer"
          >
            <div className="flex justify-center items-center bg-background-gray w-[30px] h-[30px]  p-1 rounded-full">
              <X size={15} strokeWidth={2} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <Cal
          namespace="30min"
          calLink="cell-capital/30min"
          style={{ width: "100%", height: "600px" }}
          config={{
            layout: "month_view",
            theme: "light",
            name: clientDetails.name,
            email: clientDetails.email,
          }}
        />
      </div>
    )
  );
}
