"use client";
import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function SocialProof() {
	return (
		<div className="bg-background grid pb-16">
			<div className="py-16  px-4">
				<div>
					<h2 className="text-heading-one col-span-full text-indent max-w-[40ch]">
						At Cell Capital we are passionate about securing grants for Business
						and Non-Profits through Expert Consulting, Research, and Compelling
						Grant Proposals or Business Plan
					</h2>
				</div>

				<CellCapitalPrimaryButton className="mt-4" color="primary">
					Explore our services
				</CellCapitalPrimaryButton>
			</div>

			<Divider label="our funding sucess" />

			<div className="py-16 px-4">
				<div className="hidden sm:block">
					<p>We have helped a diverse group of clients secure over 15million</p>
					<p>in grant funding to grow and scale their operations and have a </p>
					<p>positive impact on their communities, and we can help you too!</p>
				</div>

				<div className="sm:hidden col-span-full max-w-[60ch]">
					<p>We have helped a diverse group of clients</p>
					<p>secure over 15million in grant funding to </p>
					<p>grow and scale their operations and have </p>
					<p>a positive impact on their communities,</p>
					<p> and we can help you too!</p>
				</div>
			</div>

			<div className="flex border-y px-4 overflow-hidden">
				<div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
					<Image
						width={100}
						height={100}
						className="w-[35%] min-w-[50px] mix-blend-luminosity "
						src="/social-proof/logo-proof-one.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
					<Image
						width={100}
						height={100}
						className="w-[35%]  min-w-[50px] mix-blend-luminosity"
						src="/social-proof/logo-proof-two.png"
						alt="sistas cohort logo"
					/>
				</div>
				<div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
					<Image
						width={100}
						height={100}
						className="w-[35%]  min-w-[60px] mix-blend-luminosity"
						src="/social-proof/logo-proof-three.png"
						alt="angels online "
					/>
				</div>
				<div className="border-r flex-1 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
					<Image
						width={100}
						height={100}
						className="w-[35%]  min-w-[60px] mix-blend-luminosity"
						src="/social-proof/logo-proof-four.png"
						alt="boomin university logo"
					/>
				</div>
				<div className="border-r flex-1	 px-1 flex items-center justify-center aspect-[1/0.6] min-w-[120px]">
					<Image
						width={100}
						height={100}
						className="w-[35%]  min-w-[60px] mix-blend-luminosity"
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
