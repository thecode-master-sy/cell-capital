import NavBar from "@/components/navbar";
import Footer from "@/components/sections/footer";
import ProductDetails, { Product } from "@/components/sections/product-details";
import CustomQuote from "@/components/sections/call-to-action.grant";
import TestimonalSection from "@/components/sections/testimonials-section";

const product: Product = {
  id: "business-plan",
  productImage: "business-plan.jpeg",
  title: "The Ultimate Business Plan  + Pitch Deck Pack",
  subText:
    "Comprehensive Business Plan + Investor Pitch Deck + Free Strategy Session",
  price: 500,
  description:
    "Cell Capital’s Platinum Business Plan Pack is your ultimate solution for crafting a professional, investor-ready business plan that drives funding success. Designed for businesses and nonprofits aiming to secure grants, loans, or seed capital, this package delivers a comprehensive business plan, a persuasive pitch deck, and a free strategy session to align our work with your vision.",
  included: `Our process starts with a straightforward questionnaire to capture your organization’s mission, goals, and financial needs, followed by a 45-minute free strategy session to refine your funding objectives. Our expert team then develops a comprehensive business plan, including an executive summary, market analysis, organizational structure, financial projections (3-5 years), funding requirements, and growth strategy—tailored to impress investors and grantors. We also create a visually stunning, 10-15 slide pitch deck to complement your plan, designed to captivate stakeholders in presentations. To ensure your satisfaction, we offer three revision rounds for both the plan and deck.`,
  process: [
    "Complete our online questionnaire to share your organization’s story, goals, and funding needs",
    "Schedule your free 45-minute strategy session to discuss your vision and priorities",
    "Our team researches and writes your business plan and pitch deck, delivering drafts within 10-14 business days",
    "Review both deliverables and request up to two revisions for a perfect fit",
    "Receive your final business plan (PDF and editable formats) and pitch deck (PowerPoint or PDF), ready to present to funders.",
  ],
  why: "This package is ideal for organizations serious about securing significant funding. Our business plan provides a clear roadmap for growth, while the pitch deck ensures you make a memorable impression in investor meetings. Our proven expertise in crafting compelling plans maximizes your appeal to banks, investors, and grant programs. You’ll also receive versatile documents you can adapt for multiple funding opportunities, saving you time and effort.",
  whatToExpect:
    "The entire process takes 10-14 business days, depending on your feedback timeline. We prioritize clear communication, keeping you updated from consultation to delivery. Your final deliverables are polished, professional, and ready to use, empowering you to pursue loans, grants, or equity with confidence.",
};

export default function BusinessPlan() {
  return (
    <div>
      <NavBar />
      <ProductDetails product={product} />
      <CustomQuote />
      <TestimonalSection />
      <Footer />
    </div>
  );
}
