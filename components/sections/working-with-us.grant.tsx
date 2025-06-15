"use client";
import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import TestimonalSection from "./testimonials-section";

export default function WorkingWithUs() {
  return (
    <section className="pt-4 bg-background-gray">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-16 mt-4 px-4">
        <div className="bg-white p-7 rounded-md">
          <div>
            <CircleDollarSign className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Effortless Funding
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Our all-in-one grant solution handles everything, freeing you to
              concentrate on scaling your organization with confidence.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Crown className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Premium Opportunities
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Unlock premium grants crafted specifically, for small business,
              non-profits or social enterprises empowering your vision with. the
              funding you deserve.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Sparkles className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">Remain Unique</h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Secure funding with a expertly crafted proposal and strategic plan
              designed to make your application shine.
            </p>
          </div>
        </div>

        <div className="bg-white p-7 rounded-md">
          <div>
            <Trophy className="w-icon h-icon" />
            <h2 className="font-bold text-paragraph mt-12">
              Join the Winning Team
            </h2>
          </div>

          <div className="mt-2">
            <p className="text-paragraph max-w-[30ch]">
              Join countless entrepreneurs & change makers in leveraging our
              proven strategies to unlock funding and achieve their dreams.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <TestimonalSection />
      </div>
    </section>
  );
}
