"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";

export function InfiniteMovingPartnersDemo() {
	return (
		<div className="w-[85%] mx-auto ">
			<h2 className="font-bold text-3xl pb-10">Our Media Partners</h2>
			<div className="h-[26rem] bg-background  flex flex-col antialiased items-center justify-start relative overflow-hidden">
				<InfiniteMovingPartners
					items={testimonials1}
					direction="left"
					speed="normal"
				/>
				<InfiniteMovingPartners
					items={testimonials2}
					direction="left"
					speed="normal"
				/>
			</div>
		</div>
	);
}

const testimonials1 = [
	{
		image: "/partners/siam.png",
	},
	{
		image: "/partners/the block.png",
	},
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/UTB.png",
	},
];
const testimonials2 = [
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/ap.png",
	},
	{
		image: "/partners/UTB.png",
	},
];
