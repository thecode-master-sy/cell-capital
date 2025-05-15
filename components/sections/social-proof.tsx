"use client";
import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";


export default function SocialProof() {

  return (
    <div className="bg-background grid relative">
      <div className="py-16 overflow-hidden">
        
        <Divider label="our funding sucess" />
        <div className="hidden sm:block px-4 mt-16">
          <p>We have helped a diverse group of clients secure over 15million</p>
          <p>in grant funding to grow and scale their operations and have a </p>
          <p>positive impact on their communities, and we can help you too!</p>
        </div>

        <div className="sm:hidden px-4 mt-16 col-span-full max-w-[60ch]">
          <p>We have helped a diverse group of clients</p>
          <p>secure over 15million in grant funding to </p>
          <p>grow and scale their operations and have </p>
          <p>a positive impact on their communities,</p>
          <p> and we can help you too!</p>
        </div>

        <div className="flex border mt-16">
          <div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/1] min-w-[120px]">
            <Image
              width={100}
              height={100}
              className="w-[35%] min-w-[50px] mix-blend-luminosity "
              src="/social-proof/logo-proof-one.png"
              alt="boomin university logo"
            />
          </div>
          <div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
            <Image
              width={100}
              height={100}
              className="w-[35%]  min-w-[50px] mix-blend-luminosity"
              src="/social-proof/logo-proof-two.png"
              alt="sistas cohort logo"
            />
          </div>
          <div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
            <Image
              width={100}
              height={100}
              className="w-[35%]  min-w-[50px] mix-blend-luminosity"
              src="/social-proof/logo-proof-three.png"
              alt="angels online "
            />
          </div>
          <div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
            <Image
              width={100}
              height={100}
              className="w-[35%]  min-w-[50px] mix-blend-luminosity"
              src="/social-proof/logo-proof-four.png"
              alt="boomin university logo"
            />
          </div>
          <div className="flex-1	 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
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
  );
}
