"use client";
import NavBar from "@/components/navbar";
import { Button } from "../ui/button";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function HeroSection() {
	return (
		<div className="min-h-screen overflow-hidden relative text-white grid grid-rows-[min-content_1fr]">
			<NavBar />
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 min-w-full min-h-full object-cover z-[-1] blur-video"
			>
				<source src="/video/cell-capital-video.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="backdrop-overlay"></div>
			<MainHero />
		</div>
	);
}

const MainHero = () => {
	return (
		<div className="grid grid-rows-[2fr_0.2fr]  px-4 pb-4">
			<div className="justify-self-center self-center flex flex-col">
				<div className="hidden sm:block ">
					<h1 className="text-heading-0  text-center uppercase">
						$15million Secured
					</h1>
					<h1 className="text-heading-0  text-center uppercase">
						in Debt Free Grants.
					</h1>
					<h1 className="text-heading-0  text-center uppercase">
						You Could be Next!
					</h1>
				</div>
				<div className="sm:hidden">
					<h1 className="text-heading-0 uppercase text-center">
						$15million secured in debt free grants. You could be next!
					</h1>
				</div>
				<CellCapitalPrimaryButton color="white">
					Book a free consultation
				</CellCapitalPrimaryButton>
			</div>
			<div className="md:self-end flex">
				<p className="uppercase text-caption hidden md:block">
					[ sucess oriented grant writing agency ]
				</p>
				<p className="uppercase text-caption md:ml-auto md:mr-0 mx-auto">
					[ scroll to see more ]
				</p>
			</div>
		</div>
	);
};
