import NavBar, { HiddenNav } from "@/components/navbar";
import CallToActionGrantSection from "@/components/sections/call-to-action.grant";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import GrantPackages from "@/components/sections/grant-packages.grant";
import GrantsHeroSection from "@/components/sections/hero-section.grants";
import WorkingWithUs from "@/components/sections/working-with-us.grant";

export default function Grant() {
  return (
    <div className="absolute inset-0 z-[1]">
      <HiddenNav />

      <GrantsHeroSection />

      <GrantPackages />

      <CallToActionGrantSection />

      <WorkingWithUs />

      <Faq />

      <Footer initial={-10} moveValue={-100} />
    </div>
  );
}
