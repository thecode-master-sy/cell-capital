"use client";
import NavBar from "@/components/navbar";
import { Button } from "../ui/button";

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
		<div className="grid  px-4 pb-4">
			<div className="justify-self-center self-center flex flex-col">
				<div className="hidden lg:block">
					<h1 className="text-heading-0 uppercase text-center leading-[1.2] hidden md:block">
						$15million secured in debt
					</h1>
					<h1 className="text-heading-0 uppercase hidden md:block text-center">
						free grants. You could be next!
					</h1>
				</div>
				<div className="hidden sm:block lg:hidden">
					<h1 className="text-heading-0 uppercase text-center leading-[1.2]">
						$15million secured
					</h1>
					<h1 className="text-heading-0 uppercase text-center">
						in debt free grants.
					</h1>
					<h1 className="text-heading-0 uppercase text-center">
						You could be next!
					</h1>
				</div>
				<div className="sm:hidden">
					<h1 className="text-heading-0 uppercase text-center leading-[1.2]">
						$15million secured in debt free grants. You could be next!
					</h1>
				</div>
				<Button
					size="lg"
					className="uppercase text-caption rounded-none px-7 cursor-pointer mt-4 mx-auto"
				>
					Book a free consultation
				</Button>
			</div>
			<div className="self-end flex">
				<p className="uppercase text-caption">
					[ sucess oriented grant writing agency ]
				</p>
				<p className="uppercase text-caption ml-auto">[ scroll to see more ]</p>
			</div>
		</div>
	);
};
