import { BlobHero } from "../blob.hero";
import CellCapitalPrimaryButton from "../cell-capital-button";
import NavBar from "../navbar";

export default function HeroSectionTwo() {
  return (
    <div className="min-h-screen bg-background grid grid-rows-[min-content_1fr_auto]">
      <NavBar />

      <div className="grid md:grid-cols-2 p-4">
        <div className="py-2">
          <div>
            <h1 className="text-heading-one">$15 million secured in debt </h1>
            <h1 className="text-heading-one">
              free grants.You could be next!!
            </h1>
          </div>

          <div className="my-3">
            <p>At Cell Capital we are passionate about securing grants for </p>
            <p> Businesses & Non-profits through expert consulting,</p>
            <p>research, and compelling GrantProposals or Business Plan</p>
          </div>

          <CellCapitalPrimaryButton className="px-7" color="primary">
            Book a free consultation
          </CellCapitalPrimaryButton>
        </div>
        <div className="justify-self-end py-2">
          <BlobHero />
        </div>
      </div>

      <div className="overflow-hidden self-center">
        <h1 className="text-heading-0 uppercase w-max">
          Sucess Oriented Grant Writing Agency
        </h1>
      </div>
    </div>
  );
}
