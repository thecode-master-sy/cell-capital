import CellCapitalPrimaryButton from "../cell-capital-button";

export default function MeetOurTeam() {
	return (
		<div className="bg-background">
			<div className="py-16">
				<div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 px-4 gap-4">
					<p className="uppercase text-caption col-span-full sm:col-span-2">
						[ what sets us apart ]
					</p>

					<div className="lg:col-start-6 sm:col-start-3 md:col-start-4 col-span-full">
						<p className="max-w-[60ch]">
							At Cell Capital, we don’t just chase funding, we make it happen
							with a difference. Our hands-on approach crafts every grant
							proposal and business plan to fit your unique goals, saving you
							time and boosting your odds. With clear steps, fast delivery, and
							a focus on real results, we’re your partner in turning big dreams
							into reality. No fluff, just funding success tailored for you.
							Ready to stand out?
						</p>

						<CellCapitalPrimaryButton color="primary">
							Book a free consultation
						</CellCapitalPrimaryButton>
					</div>
				</div>
			</div>

			<div className="py-16 px-4">
				<h2 className="text-heading-one">The Faces Behind The Brand</h2>
			</div>
		</div>
	);
}
