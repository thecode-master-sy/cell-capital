import Divider from "../divider";

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
      </div>
    </div>
  );
}
