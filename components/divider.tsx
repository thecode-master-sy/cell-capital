export default function Divider({ label }: { label: string }) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-caption uppercase self-end">{`[ ${label} ]`}</span>
			<div className="w-full h-[1px] bg-border"></div>
		</div>
	);
}
