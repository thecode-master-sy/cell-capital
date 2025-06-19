"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useConsultationFormContext } from "./providers/consultation-provider";
import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";

type Booking = {
  videoCallUrl: string;
  title: string;
  startTime: string;
};

export default function Booker() {
  const {
    bookerOpen,
    toggleBooker,
    clientDetails: {
      organizationName,
      industry,
      fundingGoal,
      phoneNumber,
      email,
      name,
    },
  } = useConsultationFormContext();
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
    console.log("the useeffect is running again");

    (async function () {
      const cal = await getCalApi({ namespace: "30min" });

      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      cal("on", {
        action: "bookingSuccessful",
        callback: async (e) => {
          if (
            !organizationName ||
            !industry ||
            !fundingGoal ||
            !phoneNumber ||
            !email ||
            !name
          ) {
            return; // Skip setup if any value is empty
          }
          console.log(e.detail, "this is the e details");
          const {
            data: { booking },
          } = e.detail;

          const { videoCallUrl, title, startTime } = booking as Booking;

          try {
            const response = await fetch(
              "https://api.cellcapital.org/api/bookings",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  meetingName: title,
                  scheduledDate: startTime,
                  organizationName,
                  clientEmail: email,
                  fundingGoal,
                  phoneNumber,
                  meetingLink: videoCallUrl,
                  industry,
                }),
              }
            );
            const result = await response.json();

            if (!response.ok) {
              console.error(
                "Failed to create Notion entry:",
                result.errors || result.error
              );
            } else {
              console.log("Notion entry created:", result.pageId);
            }
          } catch (error) {
            console.error("Error creating booking:", error);
          }
        },
      });
    })();
  }, [organizationName, industry, fundingGoal, phoneNumber, email, name]);

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
            name: name,
            email: email,
          }}
        />
      </div>
    )
  );
}
