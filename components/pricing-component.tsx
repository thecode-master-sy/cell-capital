import { ArrowRight, Check } from "lucide-react";
import { CellCapitalSecondaryButton } from "./cell-capital-button";
import Divider from "./divider";
import Link from "next/link";

type grantPackage = {
  title: string;
  label: string;
  price: string;
  perks: string[];
  packageLink: string;
  isRecommended?: boolean;
};

export default function PricingComponent({
  grantPackage,
}: {
  grantPackage: grantPackage;
}) {
  return (
    <div className="border rounded-sm p-4 bg-white border-primary">
      <div>
        <h2 className="text-heading-two font-medium">{grantPackage.title}</h2>

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
        <CellCapitalSecondaryButton
          className="w-full bg-primary justify-between flex  py-7 text-paragraph"
          asChild
        >
          <Link href={`/grants/${grantPackage.packageLink}`}>
            <span>Add to cart</span>
            <ArrowRight size={14} />
          </Link>
        </CellCapitalSecondaryButton>
      </div>

      <div className="py-4 border-t mt-4">
        <p className="uppercase">what is included</p>

        <div className="space-y-4 mt-4">
          {grantPackage.perks.map((perk, index) => (
            <div className="flex gap-2 items-center" key={index}>
              <Check size={14} className="text-muted-foreground" />
              <span>{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
