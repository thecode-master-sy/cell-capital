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
		<div className="grid grid-cols-6 md:grid-cols-12 lg:grid-cols-16 gap-x-4 gap-y-15 px-4 pt-3 pb-4">
			<div className="col-span-full lg:col-start-3 flex gap-3 flex-col self-end">
				<div>
					<h1 className="text-heading-0 leading-[1.2] hidden md:block">
						$15million secured in debt free
					</h1>
					<h1 className="text-heading-0 hidden md:block">
						grants. You could be next!!{" "}
					</h1>
					<h1 className="text-heading-0 md:hidden">
						$15million secured in debt free grants. You could be next!!
					</h1>
				</div>

				<Button className="uppercase text-caption cursor-pointer max-w-[200px]">
					Book a free consultation
				</Button>
			</div>

			<div className="col-span-full lg:col-start-3">
				<h2 className="text-heading-two hidden md:block">
					At Cell Capital we are passionate about securing grants for
				</h2>
				<h2 className="text-heading-two hidden md:block">
					business & non-profits through expert consulting, research,
				</h2>
				<h2 className="text-heading-two hidden md:block">
					and compelling Grant Proposals or Business Plan
				</h2>

				<h2 className="md:hidden text-heading-two max-w-[60ch]">
					At Cell Capital we are passionate about securing grants for business &
					non-profits through expert consulting, research, and compelling Grant
					Proposals or Business Plan
				</h2>
			</div>

			<p className="uppercase text-caption col-span-5 self-end hidden md:block">
				[ sucess oriented grant writing agency ]
			</p>
			<p className="uppercase text-caption -col-start-1 -col-end-4 ml-auto self-end hidden md:block">
				[ scroll to see more ]
			</p>
		</div>
	);
};
