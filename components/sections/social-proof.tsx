"use client";
import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function SocialProof() {
	return (
		<div className="bg-background pt-4 grid pb-16">
			<Divider label="success orient grant writing agency" />
			<div className="py-16 grid lg:grid-cols-12 md:grid-cols-8 grid-cols-6 gap-y-4 px-4">
				<h2 className="text-heading-one text-indent col-span-full">
					At cell capital we are passionate about securing grants for business &
					non-profits through expert consulting, research, and compelling grant
					groposals or business plan
				</h2>

				<CellCapitalPrimaryButton color="primary">
					Explore our services
				</CellCapitalPrimaryButton>
			</div>

			<div className="py-16 px-4">
				<div className="lg:col-start-6  md:col-start-4 col-span-full hidden sm:block">
					<p>We have helped a diverse group of clients secure over 15million</p>
					<p>in grant funding to grow and scale their operations and have a </p>
					<p>positive impact on their communities, and we can help you too!</p>
				</div>

				<div className="sm:hidden col-span-full max-w-[60ch]">
					<p>
						We have helped a diverse group of clients secure over 15million in
						grant funding to grow and scale their operations and have a positive
						impact on their communities, and we can help you too!
					</p>
				</div>
			</div>

			<div className="grid grid-flow-col auto-cols-fr border-y px-4">
				<div className="border-r px-1 flex items-center justify-center aspect-[1/0.6]">
					<Image
						width={100}
						height={100}
						className="w-[35%] mix-blend-luminosity "
						src="/social-proof/logo-proof-one.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="border-r px-1 flex items-center justify-center">
					<Image
						width={100}
						height={100}
						className="w-[35%] mix-blend-luminosity"
						src="/social-proof/logo-proof-two.png"
						alt="sistas cohort logo"
					/>
				</div>
				<div className="border-r px-1 flex items-center justify-center">
					<Image
						width={100}
						height={100}
						className="w-[35%] mix-blend-luminosity"
						src="/social-proof/logo-proof-three.png"
						alt="angels online "
					/>
				</div>
				<div className="border-r px-1 flex items-center justify-center">
					<Image
						width={100}
						height={100}
						className="w-[35%] mix-blend-luminosity"
						src="/social-proof/logo-proof-four.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="border-r px-1 flex items-center justify-center">
					<Image
						width={100}
						height={100}
						className="w-[35%] mix-blend-luminosity"
						src="/social-proof/logo-proof-five.png"
						alt="boomin university logo"
					/>
				</div>
			</div>
			{/* <

			<div className="flex  border-t border-b">
				<div className="col-span-4 border-r flex items-center justify-center px-4 flex-1 py-12">
					<Image
						width={70}
						height={100}
						src="/social-proof/logo-proof-one.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="col-span-4  border border-r flex px-4 flex-1 items-center justify-center py-12">
					<Image
						width={100}
						height={100}
						src="/social-proof/logo-proof-two.png"
						alt="sistas cohort logo"
					/>
				</div>
				<div className="col-span-4  border border-r flex px-4 flex-1 py-12 items-center justify-center ">
					<Image
						width={100}
						height={100}
						src="/social-proof/logo-proof-three.png"
						alt="angels online "
					/>
				</div>
				<div className="col-span-4  border border-r flex items-center px-4 flex-1 py-12">
					<Image
						width={100}
						height={100}
						src="/social-proof/logo-proof-four.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="col-span-4  border border-r flex items-center justify-center px-4 flex-1 py-12">
					<Image
						width={100}
						height={100}
						src="/social-proof/logo-proof-five.png"
						alt="boomin university logo"
					/>
				</div>
			</div> */}
		</div>
	);
}
