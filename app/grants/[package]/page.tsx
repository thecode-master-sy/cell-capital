import FloatingNav from "@/components/floating-nav";
import NavBar, { HiddenNav } from "@/components/navbar";
import CallToActionGrantSection from "@/components/sections/call-to-action.grant";
import ProductDetails from "@/components/sections/product-details";

export default function GrantPackage() {
  return (
    <div className="absolute inset-0">
      <div className="z-2 relative">
        <NavBar />
      </div>

      <HiddenNav />

      <FloatingNav />

      <ProductDetails />

      <CallToActionGrantSection />
    </div>
  );
}
