import { ArrowRight, Check } from "lucide-react";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import Divider from "./divider";

type grantPackage =  {
  title: string,
  label: string
  price: string,
  perks: string[]
}

export default function PricingComponent({
    grantPackage
}: {
    grantPackage: grantPackage
}) {
  return (
    <div className="border rounded-sm p-4">
      <div>
        <h2 className="text-heading-two">{grantPackage.title}</h2>

        <div className="mt-2">
          <p className="lg:max-w-[45ch] sm:max-w-[30ch] text-muted-foreground">
            {grantPackage.label}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-heading-one">{grantPackage.price}</h1>
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
          {
            grantPackage.perks.map((perk, index) => (
              <div className="flex gap-2 items-center" key={index}>
                <Check size={14} className="text-muted-foreground" />
                <span>{perk}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
