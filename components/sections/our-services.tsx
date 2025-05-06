import CellCapitalPrimaryButton, {
	CellCapitalSecondaryButton,
} from "../cell-capital-button";
import Divider from "../divider";
import { Minus, Plus } from "lucide-react";

export default function OurServices() {
	return (
		<div className="py-16 bg-background-black text-white">
			<h1 className="uppercase text-heading-0 px-4">Our Services</h1>

			<Divider
				className="border-cellcapital-light mt-4"
				label="what we offer"
			/>

			<div>
				<div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6 border-b px-4 ">
					<span className="text-heading-two pt-8">01</span>
					<div className="lg:col-start-6 col-span-full py-8">
						<div className="flex justify-between w-full">
							<h2 className="text-heading-one">Expert Grant Writing</h2>
							<Minus />
						</div>

						<div className="mt-2 mb-4">
							<p>Focus on running your business, while our experts</p>
							<p>focus on securing the funds to keep you at the top</p>
						</div>

						<CellCapitalSecondaryButton>learn more</CellCapitalSecondaryButton>
					</div>
				</div>

				<div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6 border-b px-4 ">
					<span className="text-heading-two pt-8">02</span>
					<div className="lg:col-start-6 col-span-full py-8">
						<div className="flex justify-between w-full">
							<h2 className="text-heading-one">Grant Alerts Program</h2>
							<Plus className="self-start" />
						</div>

						<div className="hidden">
							<p>Focus on running your business, while our experts</p>
							<p>focus on securing the funds to keep you at the top</p>
						</div>

						<CellCapitalSecondaryButton className="hidden">
							learn more
						</CellCapitalSecondaryButton>
					</div>
				</div>

				<div className="grid sm:grid-cols-8 lg:grid-cols-12 grid-cols-6 border-b px-4 ">
					<span className="text-heading-two pt-8">03</span>
					<div className="lg:col-start-6 col-span-full py-8">
						<div className="flex justify-between w-full">
							<h2 className="text-heading-one">Business Plans & Pitch Decks</h2>
							<Plus />
						</div>

						<div className="hidden">
							<p>Focus on running your business, while our experts</p>
							<p>focus on securing the funds to keep you at the top</p>
						</div>
					</div>
					<CellCapitalSecondaryButton className="hidden">
						learn more
					</CellCapitalSecondaryButton>
				</div>
			</div>
		</div>
	);
}
