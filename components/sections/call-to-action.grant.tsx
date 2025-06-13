import CellCapitalPrimaryButton from "../cell-capital-button";
import Divider from "../divider";

export default function CallToActionGrantSection() {
  return (
    <div className=" bg-background">
      <div className="px-4 py-16">
        <h1 className="text-heading-0 font-bold max-w-[25ch]">
          Do you have a special request not outlined in our packages?
        </h1>

        <CellCapitalPrimaryButton
          size="lg"
          color="primary"
          className="mt-4  py-7 text-[18px]"
        >
          Request a custom quote
        </CellCapitalPrimaryButton>
      </div>
    </div>
  );
}
