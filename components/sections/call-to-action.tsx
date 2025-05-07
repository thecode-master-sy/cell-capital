import Image from "next/image";
import Divider from "../divider";
import CellCapitalPrimaryButton from "../cell-capital-button";

export default function CallToActionSection() {
	return (
		<div className="pb-16 pt-4">
			<Divider label="ready to stand out" />

			<div className="px-4 py-24 relative">
				<h1 className="text-heading-0 uppercase">
					We Know what it takes to get
				</h1>

				<h1 className="text-heading-0 uppercase">
					funded let us do the work for you
				</h1>

				<CellCapitalPrimaryButton color="primary">
					Book a free consultation
				</CellCapitalPrimaryButton>
			</div>
		</div>
	);
}
