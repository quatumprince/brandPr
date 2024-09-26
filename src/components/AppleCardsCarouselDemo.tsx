"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { DummyContent } from "./DummyContent";

export function AppleCardsCarouselDemo() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} layout={true} />
	));

	return (
		<div className="w-full h-full pt-20">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-200 font-sans">
				Our Services
			</h2>
			<h4 className="max-w-7xl pl-4 pt-8 mx-auto text-xl md:text-1xl   text-neutral-100 ">
				Brand PR offers comprehensive services designed to elevate your
				brand in the Web3space. These services are suitable for a wide
				range of clients:
			</h4>

			<Carousel items={cards} />
		</div>
	);
}



const data = [
	{
		category: "Public Relations",
		title: "Public Relations.",
		src: "/images/prservice.webp",
		content: <DummyContent title="title re" content="Press Releases " />,
	},
	{
		category: "Marketing",
		title: "Launching the new Apple Vision Pro.",
		src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title5" content="lorem ipsum " />,
	},
	{
		category: "Development",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title5" content="lorem ipsum jkfdslflk" />,
	},
	{
		category: "Event Services",
		title: "Maps for your iPhone 15 Pro Max.",
		src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title5" content="sdkldjfklsjflk"/>,
	},
	{
		category: "Community Growth",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title5" content="fjsldkjfls"/>,
	},
	{
		category: "Hiring",
		title: "Hiring for a Staff Software Engineer",
		src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title" content="dklfjsla;"/>,
	},
	{
		category: "iOS",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent title="title5" content="fsjldfja"/>,
	},
];
