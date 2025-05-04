import { Button } from "./ui/button";

export default function CellCapitalPrimaryButton() {
	return (
		<Button
			size="lg"
			className="uppercase text-caption bg-white text-foreground rounded-none px-7 cursor-pointer mt-4 mx-auto"
		>
			Book a free consultation
		</Button>
	);
}

export function CellCapitalSecondaryButton() {
	return (
		<Button
			size="sm"
			className="uppercase text-caption bg-cellcapital-light rounded-none cursor-pointer hidden md:flex"
		>
			Book a free consultation
		</Button>
	);
}
