import { ArrowRight, Check } from "lucide-react";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import Divider from "./divider";

export default function PricingComponent() {
  return (
    <div className="border rounded-sm p-4">
      <div>
        <h2 className="text-heading-two">Bronze Starter Pack</h2>

        <div className="mt-2">
          <p className="lg:max-w-[45ch] sm:max-w-[30ch] text-muted-foreground">
            For organizations new to grants or those with limited budgets who
            want professional support to get started
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-heading-one">$300</h1>
        <p className="text-muted-foreground uppercase text-caption">
          oneoff purchase
        </p>
      </div>

      <div className="mt-4">
        <CellCapitalSecondaryButton className="w-full bg-background-black flex justify-between py-7 text-background-black-foreground">
          <span>Add to cart</span>
          <ArrowRight size={14} />
        </CellCapitalSecondaryButton>
      </div>

      <div className="py-4 border-t mt-4">
        <p className="uppercase">[what is included]</p>

        <div className="space-y-4 mt-4">
          <div className="flex gap-2 items-center">
            <Check size={14} className="text-muted-foreground" />
            <span>Comprehensive Grant Proposal</span>
          </div>

          <div className="flex gap-2 items-center">
            <Check size={14} className="text-muted-foreground" />
            <span>A List of 3 Premium Grants</span>
          </div>

          <div className="flex gap-2 items-center">
            <Check size={14} className="text-muted-foreground" />
            <span>Free Consultation ( 30 minutes )</span>
          </div>

          <div className="flex gap-2 items-center">
            <Check size={14} className="text-muted-foreground" />
            <span>3 Revision Rounds</span>
          </div>
        </div>
      </div>
    </div>
  );
}
