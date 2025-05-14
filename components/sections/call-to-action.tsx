import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function CallToActionSection() {
  return (
    <div className="pb-16 pt-4">
      <Divider label="ready to stand out" />

      <div className="px-4 py-24 relative grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-full">
          <h1 className="text-heading-0 uppercase text-left md:text-center">
            secure the funding
          </h1>

          <h1 className="text-heading-0 uppercase text-left md:text-center">
            you deserve
          </h1>
        </div>

        <div className="col-span-full sm:col-start-4 lg:col-start-6 mt-4">
          <CellCapitalPrimaryButton color="primary">
            Book a free consultation
          </CellCapitalPrimaryButton>
        </div>
      </div>
    </div>
  );
}
