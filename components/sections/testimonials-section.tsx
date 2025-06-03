"use client";
import { StarIcon } from "@phosphor-icons/react";

export default function TestimonalSection() {
  return (
    <div className="pt-16 pb-48 bg-background-gray">
      <div className="px-4 justify-between items-center gap-y-4 grid md:grid-cols-8 lg:grid-cols-12">
        <h1 className="text-heading-0 font-bold col-span-full">Testimonials</h1>

        <span className="md:col-start-4 lg:col-start-6 max-w-[23ch] col-span-6 font-bold">
          see what our clients are saying
        </span>

        <span className="text-heading-one md:col-start-12 col-span-6 md:justify-self-end">
          1 - 4
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="flex w-max px-4 gap-4 mt-7">
          <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "My work with Cell Capital was exceptional, they were very
              detailed and delivered well before the deadline. I will do a
              follow up review once I receive feedback from grantors. Overall, I
              am satisfied with the work done and will do future business with
              them."
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Jay Graham</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white flex flex-col border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "Cell Capital is the team! They understood my business goals and
              vision and put it on paper. I’m excited to see the results of the
              grant applications and look forward to applying to more grants in
              the future with them!"
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Ronda Ramsey</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "Cell Capital was an absolute pleasure to work with. Their
              adaptability to the brief and attention to detail made the project
              a success, while their professionalism shone through in every
              aspect. Polite, quick to respond, and always proactive in
              communication"
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Julius Barren</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "Cell Capital did an amazing job. They were very detailed and
              understood the assignment!!!! I am beyond pleased with their work,
              and I highly recommend them."
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Rajar Carter</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "Fantastic work on behalf of Cell Capital. My company will be
              proud to submit this proposal for grants. The written work has
              flawless English and delivered the proposal in the precise format
              I needed"
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Crystal Watts</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-white border border-primary rounded-sm min-w-[200px] md:min-w-[300px] p-7">
            <h1 className="max-w-[27ch] md:max-w-[36ch] pb-4">
              "I cannot thank you enough. Words cannot express how much this
              mean to me. I am grateful to you for the work you've done more
              than you'll ever know. You have my deepest thanks"
            </h1>

            <div className="p-4 border-t border-primary mt-auto flex justify-between">
              <span className="font-bold">Paul Henderson</span>

              <div className="flex gap-2">
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
                <StarIcon weight="fill" className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Divider label="testimonals" className="pt-4" dark/>

      

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
            </div> */}
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
  );
}
