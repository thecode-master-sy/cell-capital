"use client";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

interface IBlobHeroProps {}

export const BlobHero: React.FC<IBlobHeroProps> = (props) => {
  const container = useRef(null);

  useGSAP(
    () => {
      CustomEase.create("easeInOutCubic", "0.65, 0, 0.35, 1");

      let isForward = true;

      const firstCellTimeLine = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
          onRepeat: function () {
            isForward = !isForward; // Toggle direction
            this.timeScale(isForward ? 1 : 2); // Slow forward, fast reverse
          },
        })
        .add("start")
        .add("mid");

      firstCellTimeLine.to(
        ".first-cell-second-ball",
        {
          translateX: 0,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "start"
      );

      firstCellTimeLine.to(
        [".first-cell-top-notch"],
        {
          translateX: 40,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "start"
      );

      firstCellTimeLine.to(
        ".first-cell-second-notch",
        {
          translateX: -5,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "start"
      );

      firstCellTimeLine.to(
        ".first-cell-third-ball",
        {
          translateX: 74,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "start"
      );

      firstCellTimeLine.to(
        ".first-cell-fourth-ball",
        {
          translateX: 0,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "start"
      );

      firstCellTimeLine.to(".first-cell-third-ball", {
        translateY: 0,
        duration: 1,
        ease: "easeInOutCubic",
      });

      firstCellTimeLine.to(
        ".first-cell-fourth-ball",
        {
          translateY: 0,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "-=1"
      );

      firstCellTimeLine.to(
        ".first-cell-second-notch",
        {
          translateY: -14,
          duration: 1,
          ease: "easeInOutCubic",
        },
        "-=1"
      );

      firstCellTimeLine.to(".first-cell-third-ball", {
        translateX: 0,
        duration: 1,
        ease: "easeInOutCubic",
      });
    },
    { scope: container }
  );

  return (
    // <div
    //   ref={container}
    //   className="min-w-[250px] w-max  border-border min-h-[250px] relative overflow-hidden gap-4 opacity-60"
    // >
    //   <div className="border border-red-500 blob-wrapper bg-background space-y-4 p-2 w-min relative">
    //     {/* <div className="w-[50px] h-[50px] absolute z-[2] top-0 left-1/2 border -translate-x-1/2 -translate-y-[70%] bg-background rounded-b-full"></div> */}

    //     {/* <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div> */}
    //     <div className="w-[50px] h-[50px] rounded-full bg-background-black relative first-ball"></div>
    //     <div className="w-[50px] h-[50px] rounded-full bg-background-black relative"></div>
    //     <div className="w-[50px] h-[50px] rounded-full bg-background-black relative"></div>
    //     <div className="w-[50px] h-[50px] rounded-full bg-background-black relative"></div>

    //     {/* <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
    //     <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div> */}
    //     {/* <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div> */}
    //   </div>

    //   <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
    //     <div className="flex gap-6 relative w-min">
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>

    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //     </div>

    //     <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
    //     <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
    //     <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
    //     <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>
    //     <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div>

    //     <div className="flex gap-6 relative w-min">
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full"></div>
    //     </div>
    //   </div>

    //   <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
    //     <div className="flex gap-6 relative w-min">
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>

    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //     </div>

    //     <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
    //     <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
    //     <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>

    //     <div className="flex gap-6">
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //     </div>
    //   </div>

    //   <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
    //     <div className="flex gap-6 relative w-min">
    //       <div className="w-[50px] h-[50px] absolute z-[2] top-0 left-1/2 border -translate-x-1/2 -translate-y-[70%] bg-background rounded-b-full"></div>
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //     </div>

    //     <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
    //     <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
    //     <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
    //     <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>
    //     <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div>

    //     <div className="flex gap-6 relative w-min">
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
    //       <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
    //       <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full"></div>
    //     </div>
    //   </div>
    // </div>

    <div
      ref={container}
      className="min-w-[250px]  min-h-[250px] bg-background blob-wrapper px-2 py-2 grid grid-cols-2 gap-4  opacity-60 relative"
    >
      <div className="relative grid grid-cols-2 gap-6 overflow-hidden">
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4] first-cell-first-ball" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative -translate-x-[74px] first-cell-second-ball" />

        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative  -translate-y-[74px] first-cell-third-ball" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative -translate-y-[74px] -translate-x-[74px] first-cell-fourth-ball" />

        <div className="w-[40px] h-[30px] absolute top-[10px] left-[5px] bg-background-black top-notch first-cell-top-notch"></div>
        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[60px] h-[60px] rounded-full middle-curve"></div>
        <div className="w-[50px] h-[50px] absolute z-[5] top-0 left-1/2 border -translate-x-1/2 -translate-y-[70%] bg-background rounded-b-full top-curve" />
        <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2]  -translate-y-[54px]  -translate-x-[79px] bg-background-black left-notch first-cell-second-notch"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 -translate-y-1/2 translate-x-[70%] bg-background rounded-full right-curve"></div>
      </div>

      <div className="relative grid grid-cols-2 gap-6 overflow-hidden">
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4]" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative " />

        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4]" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative " />

        <div className="w-[40px] h-[30px] absolute bottom-[10px] left-[40px] bg-background-black bottom-notch"></div>
        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[60px] h-[60px] rounded-full middle-curve"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full bottom-curve" />
        <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2]  -translate-y-[50%] bg-background-black left-notch"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 -translate-y-1/2 translate-x-[70%] bg-background rounded-full right-curve"></div>
      </div>

      <div className="relative grid grid-cols-2 gap-6 overflow-hidden">
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4] " />

        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4]" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative " />

        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[60px] h-[60px] rounded-full middle-curve"></div>

        <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2]  -translate-y-[50%] bg-background-black left-notch"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 -translate-y-1/2 -translate-x-[70%] bg-background rounded-full left-curve"></div>
      </div>

      <div className="relative grid grid-cols-2 gap-6 overflow-hidden">
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative z-[4]" />

        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative" />
        <div className="w-[50px] h-[50px] rounded-full bg-background-black relative " />

        <div className="w-[40px] h-[30px] absolute bottom-[10px] left-[40px] bg-background-black bottom-notch"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full bottom-curve" />
        <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2]  -translate-y-[50%] bg-background-black left-notch"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 -translate-y-1/2 -translate-x-[70%] bg-background rounded-full left-curve"></div>

        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[60px] h-[60px] rounded-full middle-curve"></div>
      </div>
    </div>
  );
};
