import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex w-full items-center">
      <Image
        className="dark:invert"
        src="/cell-capital-logo.svg"
        alt="Cell capital logo"
        width={16}
        height={18}
        priority
      />

      <span className="md:text-body text-[12px] font-bold uppercase">
        ell Capital
      </span>
    </div>
  );
}
