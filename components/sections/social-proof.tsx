"use client";
import Image from "next/image";

export default function SocialProof() {
  return (
    <div className="bg-white  relative">
      <div className="py-16 overflow-hidden">
        <div className="px-4 flex flex-col md:flex-row gap-y-4 gap-x-4 justify-between">
          <h1 className="text-heading-0 font-bold">Our Funding Success</h1>
          <p className="max-w-[45ch] md:max-w-[35ch]">
            We have helped a diverse group of clients secure over 15million in
            grant funding to grow and scale their operations and have a positive
            impact on their communities and we can help you too!
          </p>
        </div>

        <div className="flex w-max">
          <div className="flex gap-4 mt-16 px-4">
            <div className="py-4 flex-1 flex items-center justify-center min-w-[250px] bg-background aspect-[1/1] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%] min-w-[50px]"
                src="/social-proof/logo-proof-one.png"
                alt="boomin university logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-two.png"
                alt="sistas cohort logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-three.png"
                alt="angels online "
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-four.png"
                alt="boomin university logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px]"
                src="/social-proof/logo-proof-five.png"
                alt="boomin university logo"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-16 px-4">
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%] min-w-[50px]"
                src="/social-proof/logo-proof-one.png"
                alt="boomin university logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px] mix-blend-luminosity"
                src="/social-proof/logo-proof-two.png"
                alt="sistas cohort logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px] mix-blend-luminosity"
                src="/social-proof/logo-proof-three.png"
                alt="angels online "
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px] mix-blend-luminosity"
                src="/social-proof/logo-proof-four.png"
                alt="boomin university logo"
              />
            </div>
            <div className="py-4 flex-1 flex items-center justify-center bg-background min-w-[250px] border border-primary rounded-sm cursor-pointer">
              <Image
                width={100}
                height={100}
                className="w-[35%]  min-w-[50px] mix-blend-luminosity"
                src="/social-proof/logo-proof-five.png"
                alt="boomin university logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
