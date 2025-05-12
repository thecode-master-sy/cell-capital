import Link from "next/link";
import Logo from "./logo";
import { Box } from "lucide-react";
import { Button } from "./ui/button";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "./cell-capital-button";

export default function NavBar() {
  return (
    <nav className="px-4 py-2 md:gap-8 gap-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 border-b">
      <div className="lg:col-span-2 col-span-3 flex items-center">
        <Logo />
      </div>

      <ul className="hidden lg:flex items-center gap-3 uppercase text-caption lg:col-start-5 lg:col-span-5">
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

      <div className="flex gap-4  items-center col-start-4 col-span-full  lg:col-span-3 ml-auto">
        <div className="uppercase text-caption flex items-center gap-2">
          <span>packages</span>
          <Box size={16} />
        </div>
        <Button
          size="sm"
          className="uppercase max-w-[200px] bg-cellcapital-light text-caption lg:hidden text-white"
        >
          menu
        </Button>
      </div>
    </nav>
  );
}
