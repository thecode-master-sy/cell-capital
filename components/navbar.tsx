import Link from "next/link";
import Logo from "./logo";
import { Box } from "lucide-react";
import { Button } from "./ui/button";
import CellCapitalPrimaryButton, {
  CellCapitalSecondaryButton,
} from "./cell-capital-button";

export default function NavBar() {
  return (
    <nav className="px-4 py-2 gap-8 grid grid-cols-[0.8fr_auto_1fr] border-b">
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
          <span>packages</span>
          <Box size={16} />
        </div>

        <CellCapitalPrimaryButton
          color="primary"
          size="sm"
          className="hidden md:flex px-4"
        >
          Book a free consultation
        </CellCapitalPrimaryButton>
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
