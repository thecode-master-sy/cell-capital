import Divider from "../divider";
import PricingComponent from "../pricing-component";

const grantPackages = [
  {
    title: "Bronze Starter Pack",
    label:
      "For organizations new to grants or those with limited budgets who want professional support to get started",
    price: "$300",
    perks: [
      "Comprehensive Grant Proposal",
      "A List of 3 Premium Grants",
      "Free Consultation ( 30 minutes )",
      "3 Revision Rounds",
    ],
    packageLink: "bronze",
  },
  {
    title: "Get On The Move!",
    label:
      "Ideal For organizations eager to pursue multiple funding opportunities with expert support",
    price: "$500",
    perks: [
      "Comprehensive Grant Proposal",
      "A List of 4 Premium Grants",
      "Writing & Application for 3 Grants of your choice",
      "Free Consultation( 30 minutes )",
      "3 Revision Rounds",
    ],
    packageLink: "get-on-the-move",
  },
  {
    title: "Go All The Way!!",
    label:
      "Perfect For organizations committed to pursuing every funding opportunity with maximum impact",
    price: "$1000",
    perks: [
      "Comprehensive Grant Proposal",
      "A List of 5 Premium Grants",
      "Writing & Application for 5 Grants of your choice",
      "Free Consultation( 45 minutes )",
      "3 Revision Rounds",
    ],
    packageLink: "go-all-the-way",
  },
];

export default function GrantPackages() {
  return (
    <div className="py-16">
      <Divider label="grant packages" />

      <div className="py-16 px-4">
        <div className="hidden md:block">
          <h1 className="text-heading-one">Our grant packages simplify the</h1>
          <h1 className="text-heading-one">
            complex grant application process
          </h1>
        </div>

        <div className=" sm:hidden">
          <h1 className="text-heading-one">
            Our grant packages simplify the complex grant application process
          </h1>
        </div>

        <div className="grid md:grid-cols-3 mt-16 gap-4">
          {grantPackages.map((grantPackage, index) => (
            <PricingComponent grantPackage={grantPackage} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
