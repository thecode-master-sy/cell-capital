import Link from "next/link";
import Logo from "./logo";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { CellCapitalSecondaryButton } from "./cell-capital-button";

export default function NavBar() {
	return (
		<nav className="px-4 py-2 grid grid-cols-[1fr_auto_1fr] border-b">
			<Logo />

			<ul className="hidden lg:flex items-center gap-3 uppercase text-caption">
				<li>Get free updates</li>
				<li>
					<Link href="/grant">Grants</Link>{" "}
				</li>
				<li>
					<Link href="/grant">Business Plan</Link>{" "}
				</li>
				<li>
					<Link href="/grant">About</Link>
				</li>
			</ul>

			<div className="flex gap-4 col-start-3 items-center  ml-auto">
				<div className="uppercase text-caption flex items-center gap-2">
					<span>cart</span>
					<ShoppingBag size={16} />
				</div>

				<CellCapitalSecondaryButton />
				<Button
					size="sm"
					className="uppercase max-w-[200px] bg-cellcapital-light text-caption lg:hidden"
				>
					menu
				</Button>
			</div>
		</nav>
	);
}
