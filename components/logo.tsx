import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex w-[100px] h-[20px] items-center relative  overflow-hidden"
    >
      <img
        className="dark:invert absolute top-1/2 object-cover scale-250 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src="/cell-capital-logo.svg"
        alt="Cell capital logo"
        width={250}
        height={250}
      />
    </Link>
  );
}
