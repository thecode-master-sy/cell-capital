import * as React from "react";

interface IBlobHeroProps {}

export const BlobHero: React.FC<IBlobHeroProps> = (props) => {
  return (
    <div className="min-w-[250px] w-max grid grid-cols-2 grid-rows-2  border-border min-h-[250px] relative overflow-hidden gap-4 opacity-60">
      <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative">
        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] absolute z-[2] top-0 left-1/2 border -translate-x-1/2 -translate-y-[70%] bg-background rounded-b-full"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
        <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div>

        <div className="flex gap-6">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>
      </div>

      <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>

          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>

        <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
        <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div>

        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
          <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full"></div>
        </div>
      </div>

      <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>

          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
        <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>

        <div className="flex gap-6">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>
      </div>

      <div className="border border-black-500 blob-wrapper bg-background space-y-4 p-2 w-min relative overflow-hidden">
        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] absolute z-[2] top-0 left-1/2 border -translate-x-1/2 -translate-y-[70%] bg-background rounded-b-full"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
        </div>

        <div className="w-[40px] h-[30px] absolute top-1/2 left-0 z-[2] translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 bg-background w-[50px] h-[50px] rounded-full"></div>
        <div className="w-[40px] h-[30px] absolute top-1/2 right-0 z-[2] -translate-x-1/2 -translate-y-[50%] bg-background-black"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 left-0 border -translate-y-1/2 -translate-x-[55%] bg-background rounded-full"></div>
        <div className="w-[50px] h-[50px] absolute z-[2] top-1/2 right-0 border -translate-y-1/2 translate-x-[55%] bg-background rounded-full"></div>

        <div className="flex gap-6 relative w-min">
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[50px] h-[50px] rounded-full bg-background-black"></div>
          <div className="w-[40px] h-[30px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background-black"></div>
          <div className="w-[50px] h-[50px] absolute z-[2] bottom-0 left-1/2 border -translate-x-1/2 translate-y-[70%] bg-background rounded-t-full"></div>
        </div>
      </div>
    </div>
  );
};
