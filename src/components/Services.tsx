import React from "react";
import { CanvasRevealEffectDemo } from "./CanvasRevealEffectDemo";

const Services = () => {
	return (
		<div className="w-[84%] mx-auto mt-36 ">
			<h2 className="font-bold text-3xl">Our Services</h2>
			<div className="flex flex-wrap sm:flex-nowrap  sm:gap-10">
				<CanvasRevealEffectDemo />
				<CanvasRevealEffectDemo />
				<CanvasRevealEffectDemo />
				<CanvasRevealEffectDemo />
			</div>
		</div>
	);
};

export default Services;
