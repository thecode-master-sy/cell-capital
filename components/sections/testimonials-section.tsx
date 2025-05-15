"use client";
import Divider from "../divider";
import { CornerDownRight, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

export default function TestimonalSection() {
  return (
    <div className="py-16 bg-background-black text-background-black-foreground">
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
                    detailed
                  </span>
                </p>

                <p>
                  and delivered well before the deadline. I will do a follow up
                  once review
                </p>

                <p>
                  {" "}
                  I receive feedback from grantors. Overall, I am satisfied with
                  the work
                </p>

                <p>done and will do future business with them.</p>
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
      </div>
    </div>
  );
}
