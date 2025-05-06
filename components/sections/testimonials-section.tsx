import Divider from "../divider";

export default function TestimonalSection() {
	return (
		<div className="bg-background-gray py-16 px-4">
			<h1 className="uppercase text-heading-0">Dont take our word for it.</h1>

			<Divider label="testimonals" className="pt-4" />

			<div>
				<div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12"></div>
			</div>
		</div>
	);
}
