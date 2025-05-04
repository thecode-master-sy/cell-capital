"use client";
import Image from "next/image";

export default function SocialProof() {
	return (
		<div className="bg-background py-12 grid gap-20">
			<div className="hidden md:block px-4">
				<p>We have helped a diverse group of clients secure over 15million</p>
				<p>in grant funding to grow and scale their operations and have a </p>
				<p>positive impact on their communities, and we can help you too!</p>
			</div>

			<div className="col-span-full md:hidden px-4">
				<p>
					We have helped a diverse group of clients secure over 15million in
					grant funding to grow and scale their operations and have a positive
					impact on their communities, and we can help you too!
				</p>
			</div>

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
			</div>
		</div>
	);
}
