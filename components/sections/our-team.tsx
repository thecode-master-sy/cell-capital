"use client";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import CellCapitalPrimaryButton from "../cell-capital-button";
import Image from "next/image";
import { gsap } from "gsap";
import { ArrowDownRight } from "lucide-react";

gsap.registerPlugin(useGSAP);

export default function MeetOurTeam() {
  const firstBannerRef = useRef(null);
  const secondBannerRef = useRef<HTMLDivElement | null>(null);
  const bannerContainer = useRef(null);
  let xPercent = 0;
  let direction = -1;

  // Array of image sources for cycling
  const images = [
    "/hero-image-one.jpg",
    "/hero-image-seven.jpg",
    "/hero-image-six.jpg",
  ];

  useEffect(() => {
    gsap.to(bannerContainer.current, {
      scrollTrigger: {
        trigger: document.documentElement,

        scrub: 0.5,

        start: 0,

        end: window.innerHeight,

        onUpdate: (e) => (direction = e.direction * -1),
      },

      x: "-500px",
    });

    const animationFrame = requestAnimationFrame(animate);

    () => cancelAnimationFrame(animationFrame);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstBannerRef.current, { xPercent: xPercent });

    gsap.set(secondBannerRef.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };
  return (
    <div className="bg-background-gray py-16">
      <div className="px-4">
        <h2 className="text-heading-0 font-bold ">
          The faces behind the brand
        </h2>

        <p className="max-w-[60ch] mt-4">
          At Cell Capital, we don’t just chase funding, we make it happen with a
          difference. Our hands-on approach crafts every grant proposal and
          business plan to fit your unique goals, saving you time and boosting
          your odds. With clear steps, fast delivery, and a focus on real
          results, we’re your partner in turning big dreams into reality. No
          fluff, just funding success tailored for you. Ready to stand out?
        </p>
      </div>

      <div className="px-4 pt-7 overflow-hidden">
        <div className="flex gap-4 w-max">
          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/ceo.png"
                alt="value four"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">
                  Tochi Chimeremeze
                </span>
                <span className="text-muted-foreground text-caption">
                  Founder and CEO
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/vice.png"
                alt="value four"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">
                  Nwankwo Nancy
                </span>
                <span className="text-muted-foreground text-caption">
                  Grant Writer
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/director-of-media.png"
                alt="director of media"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">
                  Chineye Nwakego
                </span>
                <span className="text-muted-foreground text-caption">
                  Director of Media and Communications
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/director-of-adminstration.png"
                alt="director of adminstration"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">
                  Stephanie Nkemakolam
                </span>
                <span className="text-muted-foreground text-caption">
                  Grant Writer, Director of Adminstration
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/director-of-marketing.jpeg"
                alt="director of marketing"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">Oluchi Laura</span>
                <span className="text-muted-foreground text-caption">
                  Director of Marketing
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-white p-4 border-primary border rounded-sm">
            <div>
              <img
                src="/director-of-marketing.jpeg"
                alt="director of marketing"
                width={100}
                height={100}
                className="w-[300px] h-[400px] rounded-sm"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="grid gap-1 mt-4">
                <span className="text-heading-two font-bold">
                  Promise Nwaegerue
                </span>
                <span className="text-muted-foreground text-caption">
                  Grant Writer, Financial Plans Expert
                </span>
              </div>

              <ArrowDownRight
                size={30}
                className="text-muted-foreground cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="overflow-hidden w-full font-bold uppercase">
          <div
            ref={bannerContainer}
            className="relative grid grid-cols-2 w-max "
          >
            <div
              ref={firstBannerRef}
              className="bg-white p-4 border-y border-primary flex items-center gap-4 w-max text-primary"
            >
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
            </div>

            <div
              ref={secondBannerRef}
              className="bg-white p-4 border-y relative -translate-x-0.5 border-primary flex items-center gap-4 w-max text-primary"
            >
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
              <h2 className="text-heading-0">Our Values</h2>
              <span>
                <Image
                  width={30}
                  height={30}
                  src="/icons/asterisk-solid.svg"
                  alt="asterisk"
                />
              </span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-y-16 py-16 px-4">
          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">01.</span>
            </div>
            <div>
              <h1 className="font-bold">Clarity in every step</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                We simplify the funding process with clear guidance, ensuring
                clients understand their path to grants or capital without
                confusion.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">02.</span>
            </div>
            <div>
              <h1 className="font-bold">Results over promises</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                We focus on delivering measurable outcomes, like winning grants
                or securing loans, rather than just offering plans.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">03.</span>
            </div>
            <div>
              <h1 className="font-bold">Partnership with purpose</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                We work alongside clients as true partners, aligning every
                strategy with their unique vision and goals.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div>
              <span className="text-heading-0 font-bold">04.</span>
            </div>
            <div>
              <h1 className="font-bold">Speed with precision</h1>
            </div>

            <div>
              <p className="max-w-[30ch]">
                We move quickly to meet deadlines but never cut corners,
                delivering high-quality work on time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-16">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 px-4 gap-4">
       

          <div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
            <p className="max-w-[60ch]">
              At Cell Capital, we don’t just chase funding, we make it happen
              with a difference. Our hands-on approach crafts every grant
              proposal and business plan to fit your unique goals, saving you
              time and boosting your odds. With clear steps, fast delivery, and
              a focus on real results, we’re your partner in turning big dreams
              into reality. No fluff, just funding success tailored for you.
              Ready to stand out?
            </p>

            <CellCapitalPrimaryButton color="primary" className="mt-4">
              Book a free consultation
            </CellCapitalPrimaryButton>
          </div>
        </div>
      </div> */}

      {/* <div className="pt-16 pb-30">
       

        <div className="border-t hidden gap-4 mt-4 px-4 py-4 lg:grid lg:grid-cols-[1.5fr_1.45fr]">
          <div className="grid grid-cols-3 gap-2">
            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/ceo.png"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Tochi Chimeremeze</span>
                <span className="text-muted-foreground text-caption">
                  Founder and CEO
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/vice.png"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Nwankwo Nancy</span>
                <span className="text-muted-foreground text-caption">
                  Vice President, Grant Writer
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/director-of-media.png"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Chineye Nwakego</span>
                <span className="text-muted-foreground text-caption">
                  Director of Media and
                </span>
                <span className="text-muted-foreground text-caption">
                  Communiations
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/director-of-adminstration.png"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Stephanie Nkemakolam</span>
                <span className="text-muted-foreground text-caption">
                  Grant Writer, Director of
                </span>
                <span className="text-muted-foreground text-caption">
                  adminstration
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/director-of-marketing.jpeg"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Oluchi Laura</span>
                <span className="text-muted-foreground text-caption">
                  Director of Marketing
                </span>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <Image
                  src="/director-of-adminstration.png"
                  alt="value four"
                  width={100}
                  height={100}
                  className="w-[150px] h-[200px]"
                />
              </div>

              <div className="flex flex-col">
                <span>Promise Nwaegerue</span>
                <span className="text-muted-foreground text-caption">
                  Grant Writer
                </span>
                <span className="text-muted-foreground text-caption">
                  Financial Plans Expert
                </span>
              </div>
            </div>
          </div>

          <div className="grid">
            <div className="flex justify-between text-caption ">
              <span>[ FOUNDER AND CEO ]</span>
              <span>[ TOCHI CHIMEREMEZE ]</span>
            </div>

            <div className="flex flex-col gap-4">
              <p>
                Tochi Chimeremeze is the founder and driving force behind Cell
                Capital. With a deep passion for community development and a
                strong track record in Grant consulting, He launched Cell
                Capital to address the gap between funders and the organizations
                doing critical work on the ground. Prior to founding Cell
                Capital, Tochi worked with local and regional profit businesses,
                helping them develop project proposals, navigate complex funding
                processes, and align their goals with funder priorities.
              </p>

              <p>
                As a leader, Tochi is both strategic and effective, guiding
                clients through funding strategy sessions, reviewing narratives,
                and mentoring early-stage nonprofits on organizational growth.
                His work is rooted in the belief that financial access can
                unlock generational change, and he brings that philosophy to
                every partnership. He continues to work closely with small
                business owners and executives to ensure their mission is
                fundable and impactful, bringing their ideas into life.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:hidden border-t border-b px-4 mt-4 py-4 flex gap-4 overflow-hidden">
          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/ceo.png"
                alt="ceo png"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Tochi Chimeremeze</span>
              <span className="text-muted-foreground text-caption">
                [ Founder and Ceo ]
              </span>
            </div>
          </div>
          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/vice.png"
                alt="ceo png"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Nwankwo Nancy</span>
              <span className="text-muted-foreground text-caption">
                [ Vice President, Grant Writer ]
              </span>
            </div>
          </div>
          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/director-of-media.png"
                alt="director of media"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Chineye Nwakego</span>
              <span className="text-muted-foreground text-caption">
                [ Director of Media and Communiations ]
              </span>
            </div>
          </div>
          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/director-of-adminstration.png"
                alt="vice president"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Stephanie Nkemakolam</span>
              <span className="text-muted-foreground text-caption">
                [ Grant Writer, Director of Adminstration ]
              </span>
            </div>
          </div>

          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/ceo.png"
                alt="ceo png"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Laura Oluchi</span>
              <span className="text-muted-foreground">[ Founder and Ceo ]</span>
            </div>
          </div>
          <div className="min-w-[350px] flex gap-4">
            <div>
              <Image
                src="/director-of-media.png"
                alt="ceo png"
                width={100}
                height={100}
                className="w-[100px] h-[120px]"
              />
            </div>

            <div className="flex flex-col justify-between">
              <span>Nwaegerue Promise</span>
              <span className="text-muted-foreground">
                [ Grant Writer and Financial Plans Expert ]
              </span>
            </div>
          </div>
        </div>

        <div className="py-8 px-4 flex flex-col gap-4 lg:hidden">
          <p>
            Tochi Chimeremeze is the founder and driving force behind Cell
            Capital. With a deep passion for community development and a strong
            track record in Grant consulting, He launched Cell Capital to
            address the gap between funders and the organizations doing critical
            work on the ground. Prior to founding Cell Capital, Tochi worked
            with local and regional profit businesses, helping them develop
            project proposals, navigate complex funding processes, and align
            their goals with funder priorities.
          </p>

          <p>
            {" "}
            As a leader, Tochi is both strategic and effective, guiding clients
            through funding strategy sessions, reviewing narratives, and
            mentoring early-stage nonprofits on organizational growth. His work
            is rooted in the belief that financial access can unlock
            generational change, and he brings that philosophy to every
            partnership. He continues to work closely with small business owners
            and executives to ensure their mission is fundable and impactful,
            bringing their ideas into life.
          </p>
        </div>
      </div> */}
    </div>
  );
}
