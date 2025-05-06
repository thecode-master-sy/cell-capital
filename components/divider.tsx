"use client";
import { cn } from "@/lib/utils";

export default function Divider({
	label,
	className,
}: {
	label: string;
	className?: string;
}) {
	return (
		<div className="flex flex-col gap-1">
			<span
				className={cn("text-caption uppercase self-end px-4", className)}
			>{`[ ${label} ]`}</span>
			<div className="w-full border-t"></div>
		</div>
	);
}
