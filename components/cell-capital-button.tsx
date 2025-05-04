import { Button } from "./ui/button";

export default function CellCapitalPrimaryButton() {
	return (
		<Button
			size="sm"
			className="uppercase rounded-none bg-cellcapital-light px-4 text-caption hidden md:flex cursor-pointer"
		>
			Book a free consultation
		</Button>
	);
}
