import FloatingNav from "@/components/floating-nav";
import NavBar, { HiddenNav } from "@/components/navbar";
import AboutSection from "@/components/sections/about-us";
import CallToActionSection from "@/components/sections/call-to-action";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import OurServices from "@/components/sections/our-services";
import MeetOurTeam from "@/components/sections/about-us";
import SocialProof from "@/components/sections/social-proof";
import TestimonalSection from "@/components/sections/testimonials-section";
import Booker from "@/components/cal-component";

export default function Home() {
  return (
    <div className="absolute inset-0 z-[1]">
      <NavBar />
      <HeroSection />
      <HiddenNav />

      <Booker />
      <SocialProof />
      <AboutSection />
      {/* <MeetOurTeam /> */}
      <OurServices />
      <TestimonalSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
