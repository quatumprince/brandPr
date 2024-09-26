"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
	return (
		<div className="w-[84%] mx-auto pt-20 pb-8">
			<h2 className="font-bold text-3xl">What People Say</h2>
			<div className="h-[26rem] bg-background rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
				<InfiniteMovingCards
					items={testimonials}
					direction="left"
					speed="slow"
				/>
			</div>
		</div>
	);
}

const testimonials = [
	{
		quote: "The level of service we received from Brand PR exceeded our expectations. They handled our press releases, media relations, and even a crisis situation with impeccable professionalism. Their public relations services were crucial in maintaining our brand’s image.",
		name: "David Liu",
		title: "CEO, ByteQuanta Solutions",
	},
	{
		quote: "The team at Brand PR was instrumental in our successful initial coin offering (ICO) launch. Their expertise in crypto marketing, combined with influencer outreach and media relations, ensured we reached the right audience at the right time. They truly delivered on their promise of visibility and trust within the blockchain community.",
		name: "John Davies",
		title: "Founder, TokenShore Network",
	},
	{
		quote: "We partnered with Brand PR for a series of high-profile speaking opportunities and events. Their network in the crypto space is unparalleled, and they helped us secure keynote spots at major conferences. The exposure we gained has been invaluable, and our brand is now recognized as a leading player in Web3.",
		name: "Emily Carter",
		title: "Marketing Director, BlockGenix Technologies",
	},
	{
		quote: "Brand PR’s approach to influencer marketing and social media management was exactly what we needed to boost engagement for our P2E gaming platform. The campaigns they ran were data-driven and yielded impressive results. We’ve seen a huge uptick in user engagement and a stronger community presence.",
		name: "Olivia Martinez",
		title: "COO, PixelPayouts Games",
	},
];
