import AboutSection from "@/components/sections/about-section";
import HeroSection from "@/components/sections/hero-section";
import MeetOurTeam from "@/components/sections/our-team";
import SocialProof from "@/components/sections/social-proof";

export default function Home() {
	return (
		<div>
			<HeroSection />
			<SocialProof />
			<AboutSection />
			<MeetOurTeam />
		</div>
	);
}
