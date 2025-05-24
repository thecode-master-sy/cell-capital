import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex w-full items-center">
      <Image
        className="dark:invert"
        src="/cell-capital-logo.svg"
        alt="Cell capital logo"
        width={14}
        height={13}
        priority
      />

      <span className="font-bold text-caption uppercase">ell Capital</span>
    </Link>
  );
}
