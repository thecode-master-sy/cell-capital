"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import CellCapitalPrimaryButton from "../cell-capital-button";
import Image from "next/image";
import { gsap } from "gsap";
import {
  ArrowDownRight,
  ArrowUpRight,
  CircleDollarSign,
  Crown,
  Sparkles,
  Trophy,
} from "lucide-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import Slider from "../Slider";

export default function MeetOurTeam() {
  return (
    <div className="bg-background-gray py-30">
      <div className="px-4">
        <div className="grid">
          <h1 className="text-heading-0 font-bold text-center mx-auto">
            About us
          </h1>

          <p className="text-paragraph text-center max-w-[45ch] mx-auto mt-4">
            At Cell Capital, we belive that there are no limits to our ability
            in helping businesses and non-profits get funded! We guid businesses
            and non-profits to bold wins with clarity
          </p>
        </div>
      </div>

      <div className="mt-10 px-4  overflow-hidden w-full md:h-[600px]">
        <img
          src="/about-us.jpg"
          alt="about us image"
          className="object-cover w-full h-full rounded-md"
        />
      </div>

      <div className="mt-40">
        <div className="px-4">
          <h1 className="text-heading-0 font-bold">Meet our team</h1>
        </div>

        <Slider className="mt-4 px-4">
          <div className="bg-white p-4 rounded-md w-about-card">
            <img
              src="/ceo.png"
              alt="value four"
              width={100}
              height={100}
              className="w-full aspect-[1/1.1] rounded-md pointer-events-none"
            />

            <div className="flex justify-between items-center">
              <div className="mt-2 flex flex-col">
                <span className="text-paragraph font-bold">
                  Tochi Chimeremeze
                </span>
                <span className="text-muted-foreground text-caption">
                  Founder and CEO
                </span>
              </div>

              <div>
                <ArrowUpRight
                  size={30}
                  className="text-heading-one cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md w-about-card">
            <img
              src="/vice.jpeg"
              alt="value four"
              width={100}
              height={100}
              className="w-full aspect-[1/1.1] rounded-md pointer-events-none"
            />

            <div className="flex justify-between items-center">
              <div className="mt-2 flex flex-col">
                <span className="text-paragraph font-bold">Nwankwo Nancy</span>
                <span className="text-muted-foreground text-caption">
                  Vice President, Grant Writer
                </span>
              </div>

              <div>
                <ArrowUpRight
                  size={30}
                  className="text-heading-one cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md w-about-card">
            <img
              src="/director-of-media.png"
              alt="value four"
              width={100}
              height={100}
              className="w-full aspect-[1/1.1] rounded-md pointer-events-none"
            />

            <div className="flex justify-between items-center">
              <div className="mt-2 flex flex-col">
                <span className="text-paragraph font-bold">
                  Chineye Nwakego
                </span>
                <span className="text-muted-foreground text-caption">
                  Director of Media
                </span>
              </div>

              <div>
                <ArrowUpRight
                  size={30}
                  className="text-heading-one cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md w-about-card">
            <img
              src="/director-of-adminstration.png"
              alt="value four"
              width={100}
              height={100}
              className="w-full aspect-[1/1.1] rounded-md pointer-events-none"
            />

            <div className="flex justify-between items-center">
              <div className="mt-2 flex flex-col">
                <span className="text-paragraph font-bold">
                  Stephanie Nkemakolam
                </span>
                <span className="text-muted-foreground text-caption">
                  Grant writer, director of adminstration
                </span>
              </div>

              <div>
                <ArrowUpRight
                  size={30}
                  className="text-heading-one cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md w-about-card">
            <img
              src="/director-of-marketing.jpeg"
              alt="value four"
              width={100}
              height={100}
              className="w-full aspect-[1/1.1] rounded-md pointer-events-none"
            />

            <div className="flex justify-between items-center">
              <div className="mt-2 flex flex-col">
                <span className="text-paragraph font-bold">Oluchi Laura</span>
                <span className="text-muted-foreground text-caption">
                  Director of marketing
                </span>
              </div>

              <div>
                <ArrowUpRight
                  size={30}
                  className="text-heading-one cursor-pointer"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <div className="mt-40 px-4">
        <div>
          <h1 className="text-heading-0 font-bold">Our values</h1>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-16 mt-4">
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
                non-profits or social enterprises empowering your vision with.
                the funding you deserve.
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
                Secure funding with a expertly crafted proposal and strategic
                plan designed to make your application shine.
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
      </div>
    </div>
  );
}
