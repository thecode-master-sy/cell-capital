import Link from "next/link";
import Logo from "./logo";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export default function NavBar() {
	return (
		<nav className="px-4 py-2 grid grid-cols-6 md:grid-cols-12 lg:grid-cols-16 gap-4 h-min border-b">
			<div className="col-span-3 md:col-span-2 self-center">
				<Logo />
			</div>

			<ul className="hidden lg:flex gap-5 col-span-8 items-center uppercase text-caption font-medium">
				<li>Get free updates</li>
				<li>
					<Link href="/grant">Grants</Link>{" "}
				</li>
				<li>
					<Link href="/grant">Business plan</Link>{" "}
				</li>
				<li>
					<Link href="/grant">About</Link>
				</li>
			</ul>

			<div className="flex gap-4 items-center ml-auto  -col-start-1 md:-col-end-7 lg:-col-end-5 -col-end-4">
				<ShoppingBag size={16} />
				<Button
					size="sm"
					className="uppercase max-w-[200px] bg-cellcapital-light text-caption hidden md:flex cursor-pointer"
				>
					Book a free consultation
				</Button>
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
