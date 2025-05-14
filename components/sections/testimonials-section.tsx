"use client";
import Divider from "../divider";
import { CornerDownRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

export default function TestimonalSection() {
  return (
    <div className="py-16 bg-background-black text-background-black-foreground">
      <h1 className="uppercase text-heading-one px-4">
        Dont take our word for it.
      </h1>

      <Divider label="testimonals" className="pt-4" />

      <div className="pt-12">
        <div className="grid gap-y-2 grid-cols-6 md:grid-cols-8 lg:grid-cols-12 px-4">
          <div>
            <span>[1/4]</span>
          </div>

          <div className="sm:col-start-4 lg:col-start-6 col-span-full ">
            <div>
              <h2 className="uppercase text-heading-two font-medium">
                Jay Graham
              </h2>

              <div className="text-heading-two mt-3 hidden md:block">
                <p className="flex gap-2">
                  <CornerDownRight size={16} className="mt-2" />
                  <span>
                    My work with Cell Capital was exceptional, they were very
                  </span>
                </p>

                <p>
                  detailed and delivered well before the deadline. I will do a
                  follow up
                </p>

                <p>
                  review once I receive feedback from grantors. Overall, I am
                </p>

                <p>
                  satisfied with the work done and will do future business with
                  them.
                </p>
              </div>

              <div className="md:hidden text-heading-two mt-3">
                <h2>
                  My work with Cell Capital was exceptional, they were very
                  detailed and delivered well before the deadline. I will do a
                  follow up review once I receive feedback from grantors.
                  Overall, I am satisfied with the work done and will do future
                  business with them.
                </h2>
              </div>
            </div>
            {/* <div className="hidden md:block">
              <h2>
                "My work with Cell Capital was exceptional, they were very
              </h2>

              <h2>
                detailed and delivered well before the deadline. I will do a
                follow up
              </h2>

              <h2>
                review once I receive feedback from grantors. Overall, I am
              </h2>

              <h2>
                satisfied with the work done and will do future business with
                them."
              </h2>
            </div>

            <div className="md:hidden">
              <h2>
                My work with Cell Capital was exceptional, they were very
                detailed and delivered well before the deadline. I will do a
                follow up review once I receive feedback from grantors. Overall,
                I am satisfied with the work done and will do future business
                with them.
              </h2>
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 px-4 mt-4">
          <div className="md:flex gap-2 items-center self-end hidden">
            <MoveLeft />
            <MoveRight />
          </div>

          {/* <div className="gap-2 flex lg:col-start-6 col-span-full justify-between">
            <div className="flex flex-col gap-1">
              <div className="w-[80px] h-[80px] bg-white"></div>
              <span className="self-end">Jay Graham</span>
            </div>

            <div className="flex gap-2 items-center self-end md:hidden">
              <MoveLeft />
              <MoveRight />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
