import NavBar, { HiddenNav } from "@/components/navbar";
import GrantPackages from "@/components/sections/grant-packages.grant";
import GrantsHeroSection from "@/components/sections/hero-section.grants";

export default function Grant() {
  return (
    <div className="absolute inset-0 z-[1]">
      <HiddenNav />

      <GrantsHeroSection />

      <GrantPackages />
    </div>
  );
}
