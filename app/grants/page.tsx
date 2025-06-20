import NavBar, { HiddenNav } from "@/components/navbar";
import CallToActionGrantSection from "@/components/sections/call-to-action.grant";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import GrantPackages from "@/components/sections/grant-packages.grant";
import GrantsHeroSection from "@/components/sections/hero-section.grants";
import WorkingWithUs from "@/components/sections/working-with-us.grant";
import Booker from "@/components/cal-component";

export default function Grant() {
  return (
    <div className="absolute inset-0 z-[1]">
      <NavBar />
      <HiddenNav />

      <Booker />

      <GrantsHeroSection />

      <GrantPackages />

      <CallToActionGrantSection />

      <WorkingWithUs />

      <Faq />

      <Footer />
    </div>
  );
}
