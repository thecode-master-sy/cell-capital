import NavBar, { HiddenNav } from "@/components/navbar";
import CallToActionGrantSection from "@/components/sections/call-to-action.grant";
import ProductDetails, { Product } from "@/components/sections/product-details";
import TestimonalSection from "@/components/sections/testimonials-section";
import Footer from "@/components/sections/footer";
import { products } from "../../../lib/static";

export default async function GrantPackage({
  params,
}: {
  params: Promise<{ packageId: string }>;
}) {
  const { packageId } = await params;
  return (
    <div className="absolute inset-0">
      <NavBar />

      <HiddenNav />

      <ProductDetails product={products[packageId]} />

      <CallToActionGrantSection />

      <div className="bg-background">
        <TestimonalSection />
      </div>

      <Footer />
    </div>
  );
}
