import NavBar, { HiddenNav } from "@/components/navbar";
import CallToActionGrantSection from "@/components/sections/call-to-action.grant";
import ProductDetails, { Product } from "@/components/sections/product-details";
import TestimonalSection from "@/components/sections/testimonials-section";
import Footer from "@/components/sections/footer";

const products: Record<string, Product> = {
  bronze: {
    productImage: "grant-package-one.jpg",
    title: "Bronze Starter Pack",
    subText:
      "Comprehensive Grant Proposal + A List of 3 Premium Grants + Free Consultation",
    price: "$300",
    description:
      "Welcome to Our Bronze Starter Pack, the perfect entry point for businesses and nonprofits looking to secure funding without the stress. This package is designed to kickstart your grant journey with a professionally written grant proposal, a curated list of three premium grant opportunities, and a free consultation to align our efforts with your goals.",
    included: `Our process begins with a simple questionnaire to gather key details about your organization, followed by a 30-minute free consultation to discuss your funding needs and vision.
    Our expert team then crafts a comprehensive grant proposal, including an executive summary, needs statement, organizational background, budget outline, objectives, and evaluation plan—tailored to make your application stand out. We also provide a handpicked list of three premium grants, carefully selected to match your mission and increase your chances of success.
    To ensure your satisfaction, we offer three revision rounds during the proposal development process.`,
    process: [
      "Complete our online questionnaire to share your organization’s details and goals",
      "Schedule your free 30-minute consultation to refine your funding strategy",
      "Our team researches and writes your grant proposal, delivering a polished draft within 5-7 business days",
      "Review the draft and request up to one revision for perfection",
      "Receive your final proposal and curated list of three premium grants, ready for you to pursue",
    ],
    why: "This package is ideal for organizations new to grants or those with limited budgets who want professional support to get started. While we cannot guarantee grant approval, our proven formula maximizes your application’s potential with clear, compelling content. The curated grant list empowers you to apply confidently, and our consultation ensures we’re aligned with your priorities.",
    whatToExpect:
      "The entire process takes 5-7 business days, depending on your feedback timeline. You’ll receive a ready-to-submit proposal and a grant list with detailed summaries to guide your next steps. We’re committed to clear communication and high-quality deliverables, so you can focus on running your organization while we handle the funding details.",
  },
};

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
