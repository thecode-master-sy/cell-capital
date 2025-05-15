import FloatingNav from "@/components/floating-nav";
import { HiddenNav } from "@/components/navbar";
import AboutSection from "@/components/sections/about-section";
import CallToActionSection from "@/components/sections/call-to-action";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section-two";
import OurServices from "@/components/sections/our-services";
import MeetOurTeam from "@/components/sections/our-team";
import SocialProof from "@/components/sections/social-proof";
import TestimonalSection from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <div className="absolute inset-0 z-[1]">
      {/* <HeroSection /> */}
      <HeroSection />
      <HiddenNav />
      <FloatingNav />
      <AboutSection />
      <MeetOurTeam />
      <OurServices />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
