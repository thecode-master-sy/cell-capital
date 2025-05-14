import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "../cell-capital-button";
import Divider from "../divider";
import { Minus, Plus } from "lucide-react";

export default function OurServices() {
  return (
    <div className="py-16 bg-background-black text-white">
      <h1 className="uppercase text-heading-0 px-4 text-center">
        Our Services
      </h1>

      <Divider
        className="border-cellcapital-light mt-7"
        label="what we offer"
      />

      <div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6  px-4 ">
        <div className="lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">01</span>
            <Minus className="md:hidden" />
          </div>

          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Expert Grant Writing</h2>
              <Minus className="hidden lg:inline-block self-start" />
            </div>

            <div className="mt-2 mb-4">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>

            <CellCapitalSecondaryButton>learn more</CellCapitalSecondaryButton>
          </div>
        </div>

        <div className="lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">02</span>
            <Plus className="md:hidden" />
          </div>
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Grant Alerts Program</h2>
              <Plus className="hidden lg:inline-block self-start" />
            </div>

            <div className="hidden">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>

            <CellCapitalSecondaryButton className="hidden">
              learn more
            </CellCapitalSecondaryButton>
          </div>
        </div>

        <div className="lg:col-start-6 col-span-full py-8 border-b">
          <div className="flex justify-between">
            <span className="text-heading-two ">03</span>
            <Plus className="md:hidden" />
          </div>
          <div>
            <div className="flex justify-between w-full">
              <h2 className="text-heading-two">Business Plans & Pitch Decks</h2>
              <Plus className="hidden lg:inline-block self-start" />
            </div>

            <div className="hidden">
              <p>Focus on running your business, while our experts</p>
              <p>focus on securing the funds to keep you at the top</p>
            </div>
          </div>
          <CellCapitalSecondaryButton className="hidden">
            learn more
          </CellCapitalSecondaryButton>
        </div>
      </div>
    </div>
  );
}
