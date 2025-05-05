import Divider from "../divider";

export default function AboutSection() {
	return (
		<div className="bg-background-gray py-16">
			<div className="px-4">
				<h1 className="text-heading-0 uppercase">About us</h1>
				<div className="pt-4 pb-16">
					<p>At Cell Capital, we believe that there are no limits to our </p>
					<p>ability in helping businesses & nonprofits get funded! We</p>
					<p>guide businesses and nonprofits to bold wins with clarity.</p>
				</div>
			</div>

			<Divider label="our values" />
			<div></div>
		</div>
	);
}
