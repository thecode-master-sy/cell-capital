import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function CellCapitalPrimaryButton({
	children,
	color,
	className,
}: {
	children: React.ReactNode;
	color: "primary" | "white";
	className?: string;
}) {
	const containerStyles = {
		primary: "bg-primary",
		white: "bg-white",
	};
	const objectStyles = {
		white: "bg-primary",
		primary: "bg-background-black opacity-60",
	};
	return (
		<Button
			size="lg"
			className={cn(
				"uppercase text-caption text-foreground rounded-sm px-7 cursor-pointer mt-4 mx-auto",
				containerStyles[color],
				className
			)}
		>
			<span>{children}</span>
			<span
				className={cn("h-2 w-2 rounded-full bg-primary", objectStyles[color])}
			></span>
		</Button>
	);
}

export function CellCapitalSecondaryButton() {
	return (
		<Button
			size="sm"
			className="uppercase text-caption bg-cellcapital-light rounded-sm cursor-pointer hidden md:flex"
		>
			Book a free consultation
		</Button>
	);
}
