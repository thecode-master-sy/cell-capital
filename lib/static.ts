import { Product } from "@/components/sections/product-details";

export const products: Record<string, Product> = {
  bronze: {
    id: "bronze",
    productImage: "grant-package-one.jpg",
    title: "Bronze Starter Pack",
    subText:
      "Comprehensive Grant Proposal + A List of 3 Premium Grants + Free Consultation",
    price: 300,
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

  "get-on-the-move": {
    id: "get-on-the-move",
    productImage: "grant-package-two.jpg",
    title: "Get On The Move",
    subText:
      "Comprehensive Grant Proposal + A List of 4 Premium Grants + Writing & Application for 3 Grants of your choice + Free Consultation",
    price: 500,
    description:
      "Cell Capital’s Get on the Move!! package is your all-in-one solution for businesses and nonprofits ready to accelerate their funding journey. For just $500, we deliver a professionally written grant proposal, a curated list of four premium grants, full writing and application support for three grants of your choice, and a free consultation to ensure your strategy is on point. This package is designed to save you time and boost your chances of securing the funds you need.",
    included: `We start with an easy-to-complete questionnaire to understand your organization’s mission and funding goals, followed by a 30-minute free consultation to dive deeper into your needs. Our team then crafts a comprehensive grant proposal, including an executive summary, needs assessment, organizational background, budget proposal, objectives, and evaluation components—customized to impress grant reviewers. We also research and provide a list of four premium grants tailored to your sector, whether you’re a business, nonprofit, or social enterprise. From this list (or your own preferences), you’ll select three grants, and we’ll handle the writing and application process for each, submitting them on your behalf using your contact information for direct updates. To ensure quality, we offer two revision rounds for the proposal draft.`,
    process: [
      "Fill out our online questionnaire to share your organization’s story and goals",
      "Book your free 30-minute consultation to align on strategy and priorities",
      "Our team writes your grant proposal and researches four premium grants, delivering drafts within 7-10 business days.",
      "Review the proposal and request up to two revisions for a perfect fit",
      "Choose three grants from our list or elsewhere, and we’ll write and submit applications within 3-5 additional business days",
      "Receive your final proposal, grant list, and confirmation of submissions, ready to track progress",
    ],
    why: "This package is perfect for organizations eager to pursue multiple funding opportunities with expert support. By handling the writing and application for three grants, we remove the burden of complex submissions, letting you focus on growth. While grant approval isn’t guaranteed, our strategic approach and tailored proposals are built to maximize your success rate. You’ll also gain a versatile proposal you can repurpose for future applications, plus insights from our grant list to keep funding on your radar.",
    whatToExpect:
      "The full process takes 10-15 business days, depending on grant requirements and your feedback. We’ll keep you informed every step of the way, ensuring transparency and alignment. Your applications will be submitted with your contact details, so you’ll receive direct updates from grantors. Our goal is to empower you with the tools and confidence to secure funding now and in the future.",
  },

  "go-all-the-way": {
    id: "go-all-the-way",
    productImage: "grant-package-three.jpg",
    title: "Go All The Way!!",
    subText:
      "Comprehensive Grant Proposal + A List of 5 Premium Grants + Writing & Application for all 5 Grants + Free Consultation.",
    price: 1000,
    description:
      "Cell Capital’s Go All the Way! package is the ultimate funding solution for ambitious businesses and nonprofits ready to maximize their grant potential. For $1,000, we provide a professionally written grant proposal, a curated list of five premium grants, complete writing and application support for all five grants, and a free consultation to craft a winning strategy. This comprehensive package is designed to deliver unmatched value, positioning your organization for funding success.",
    included: `Our process begins with a detailed questionnaire to capture your organization’s mission, goals, and funding needs, followed by a 45-minute free consultation to refine your approach. Our expert team then develops a comprehensive grant proposal, including an executive summary, needs statement, organizational background, detailed budget, objectives, and evaluation plan—crafted to captivate grant reviewers. We also research and deliver a list of five premium grants, carefully matched to your sector and goals, whether you’re a startup, nonprofit, or social enterprise. For all five grants, we handle the full writing and application process, submitting each on your behalf using your contact information so you stay in the loop. To ensure perfection, we offer three revision rounds for the proposal draft, giving you confidence in the final product.`,
    process: [
      "Complete our online questionnaire to share your organization’s vision and needs",
      " Schedule your free 45-minute consultation to build a tailored funding strategy",
      "Our team writes your grant proposal and researches five premium grants, delivering drafts within 10-14 business days",
      "Review the proposal and request up to three revisions for precision.",
      "We write and submit applications for all five grants within 5-7 additional business days, depending on requirements.",
      "Receive your final proposal, grant list, and submission confirmations, equipped to track your applications.",
    ],
    why: "This package is ideal for organizations committed to pursuing every funding opportunity with maximum impact. By managing the writing and application for five grants, we save you countless hours while increasing your odds of success. While we can’t guarantee grant awards, our proven expertise and meticulous process are designed to position your applications at the top. Plus, you’ll receive a reusable proposal and valuable grant insights to fuel your funding journey long-term.",
    whatToExpect:
      "The entire process takes 15-21 business days, depending on grant complexity and your feedback speed. We prioritize clear communication, keeping you updated from consultation to submission. Your applications will use your contact details, ensuring you receive all grantor updates directly. With Cell Capital, you’re not just getting a service—you’re gaining a partner dedicated to your growth.",
  },
};
