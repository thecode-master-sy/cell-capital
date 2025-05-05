export default function Divider({ label }: { label: string }) {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-caption uppercase self-end px-4">{`[ ${label} ]`}</span>
			<div className="w-full border-t"></div>
		</div>
	);
}
