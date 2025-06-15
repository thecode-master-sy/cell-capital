"use client";
import { CircleDollarSign, Crown, Sparkles, Trophy } from "lucide-react";
import { Button } from "../ui/button";

export default function MeetOurTeam() {
  return (
    <div className="bg-background-gray py-16 px-4">
      <div className="w-full grid lg:grid-cols-[1fr_1.8fr] gap-4">
        <div className="bg-[#54514d] text-white  p-4">
          <span className="bg-white text-primary p-3 uppercase font-bold block text-base w-max">
            About our group
          </span>
          <div className="mt-4 grid">
            <div className="mx-auto">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="23"
                  viewBox="0 0 28 23"
                  fill="none"
                >
                  <path
                    d="M7.344 0.855999L11.696 4.312C10.0747 5.976 8.88 7.55466 8.112 9.048C7.344 10.4987 6.96 12.0773 6.96 13.784L4.464 10.904H12.848V22.808H0.752V15.384C0.752 12.6533 1.24267 10.1787 2.224 7.96C3.248 5.69866 4.95467 3.33066 7.344 0.855999ZM21.808 0.855999L26.16 4.312C24.5387 5.976 23.344 7.55466 22.576 9.048C21.808 10.4987 21.424 12.0773 21.424 13.784L18.928 10.904H27.312V22.808H15.216V15.384C15.216 12.6533 15.7067 10.1787 16.688 7.96C17.712 5.69866 19.4187 3.33066 21.808 0.855999Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <p className="max-w-[30ch] mt-7 text-paragraph">
                At Cell Capital, we believe that there are no limits to our
                ability in helping businesses & nonprofits get funded! We guide
                businesses and nonprofits to bold wins with clarity.
              </p>
            </div>

            <Button
              size="lg"
              className="ml-auto uppercase text-base font-bold bg-white rounded-none  text-primary mt-7 cursor-pointer hover:bg-white"
            >
              Learn more
            </Button>
          </div>
        </div>

        <div className="bg-white flex flex-col md:flex-row gap-4 p-4">
          <div className="mx-auto md:m-0">
            <img
              src="/ceo.png"
              alt="value four"
              width={100}
              height={100}
              className="w-[350px] h-full"
            />
          </div>

          <div>
            <span className="block bg-primary text-white uppercase font-bold px-7 py-2 w-max">
              founder and ceo
            </span>

            <p className="md:max-w-[40ch] text-base mt-4 text-paragraph">
              Tochi Chimeremeze is the founder and driving force behind Cell
              Capital. With a deep passion for community development and a
              strong track record in Grant consulting, He launched Cell Capital
              to address the gap between funders and the organizations doing
              critical work on the ground. Prior to founding Cell Capital, Tochi
              worked with local and regional profit businesses, helping them
              develop project proposals, navigate complex funding processes, and
              align their goals with funder priorities.
            </p>

            <p className="md:max-w-[40ch] text-base mt-4 text-paragraph">
              As a leader, Tochi is both strategic and effective, guiding
              clients through funding strategy sessions, reviewing narratives,
              and mentoring early-stage nonprofits on organizational growth.
            </p>
          </div>
        </div>

        <div className="bg-white flex gap-4 p-4 relative min-h-[400px]">
          <span className="block bg-white z-2 absolute inset-4 h-max text-primary uppercase font-bold px-7 py-2 w-max">
            Grant Writer
          </span>
          <div className="absolute inset-0">
            <img
              src="/vice.jpeg"
              alt="value four"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-white flex flex-col md:flex-row gap-4 p-4">
          <div className="mx-auto md:m-0">
            <img
              src="/director-of-media.png"
              alt="value four"
              width={100}
              height={100}
              className="w-[350px] h-full"
            />
          </div>

          <div>
            <span className="block bg-primary sm:w-max text-white uppercase font-bold px-7 py-2">
              Director of media and communications
            </span>

            <p className="md:max-w-[40ch] text-paragraph mt-4">
              Chinenye leads all media and communications at Cell Capital,
              managing both client-facing content and the public voice of the
              brand. With a background in digital storytelling, media
              production, and nonprofit advocacy, she ensures that every message
              Cell Capital puts out is aligned with its mission, values, and
              audience.
            </p>

            <p className="md:max-w-[40ch] text-paragraph mt-4">
              Her work includes overseeing social media campaigns, creating
              internal and external communications strategies, and working
              closely with clients to refine how they speak about their work.
              She also plays a critical role in developing thought leadership
              content for the team and maintaining communication flow between
              departments.
            </p>
          </div>
        </div>

        <div className="bg-white flex gap-4 p-4 relative min-h-[400px]">
          <span className="block bg-white z-2 absolute inset-4 h-max text-primary uppercase font-bold px-7 py-2 w-max">
            Director of adminstration
          </span>
          <div className="absolute inset-0">
            <img
              src="/director-of-adminstration.png"
              alt="team image"
              width={100}
              height={100}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="bg-white flex flex-col md:flex-row gap-4 p-4">
          <div className="mx-auto md:m-0">
            <img
              src="/director-of-marketing.jpeg"
              alt="value four"
              width={100}
              height={100}
              className="w-[300px] h-full"
            />
          </div>

          <div>
            <span className="block bg-primary text-white uppercase font-bold px-7 py-2 w-max">
              Director of Marketing
            </span>

            <p className="md:max-w-[40ch] text-base mt-4 text-paragraph">
              Laura combines her skills in branding, storytelling, and grant
              writing to lead Cell Capital’s marketing efforts. With a
              background in communications and a natural eye for design, she’s
              helped countless organizations present themselves with clarity and
              confidence to funders and partners. Laura joined Cell Capital with
              a dual mission: to elevate how clients tell their stories and to
              ensure the Cell Capital brand reflects the strength of its
              services.
            </p>

            <p className="md:max-w-[40ch] text-paragraph mt-4">
              She plays a key role in shaping both grant narratives and external
              communications, including case studies, client spotlights, and
              educational resources.
            </p>
          </div>
        </div>
      </div>

      <div className="py-16">
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
