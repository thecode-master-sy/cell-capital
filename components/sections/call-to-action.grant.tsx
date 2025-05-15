import CellCapitalPrimaryButton from "../cell-capital-button";
import Divider from "../divider";

export default function CallToActionGrantSection() {
  return (
    <div className=" bg-background">
      <div className="py-4">
        <Divider label="custom quote" />
      </div>
      <div className="px-4 py-16">
        <h1 className="text-heading-one max-w-[30ch]">
          Do you have a special request not outlined in our packages?
        </h1>

        <CellCapitalPrimaryButton color="primary" className="mt-4">
          Request a custom quote
        </CellCapitalPrimaryButton>
      </div>
    </div>
  );
}
