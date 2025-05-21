import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex w-full items-center">
      <Image
        className="dark:invert"
        src="/cell-capital-logo.svg"
        alt="Cell capital logo"
        width={16}
        height={18}
        priority
      />

      <span className="font-bold uppercase">ell Capital</span>
    </Link>
  );
}
