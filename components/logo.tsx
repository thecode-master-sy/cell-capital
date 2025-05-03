import Image from "next/image";

export default function Logo() {
	return (
		<div className="flex">
			<Image
				className="dark:invert w-[var(--fs-base-text)]"
				src="/cell-capital-logo.svg"
				alt="Cell capital logo"
				width={16}
				height={18}
				priority
			/>
			<span className="text-base font-bold text-white self-end">
				ell Capital
			</span>
		</div>
	);
}
