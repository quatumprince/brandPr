"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} layout={true} />
	));

	return (
		<div className="w-full h-full py-20">
			<h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold  text-neutral-200 font-sans">
				Our Services
			</h2>
			<h4 className="max-w-7xl pl-4 mx-auto text-xl md:text-1xl   text-neutral-100 font-sans">
			Brand PR offers comprehensive services designed to elevate your brand in the Web3space. These services are suitable for a wide range of clients:
			</h4>
			
			<Carousel items={cards} />
		</div>
	);
}

const DummyContent = () => {
	return (
		<>
			{data2.map((data, index) => {
				return (
					<div
						key={"dummy-content" + index}
						className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
					>
						<p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
							<span className="font-bold text-neutral-700">
							Press Releases :
							</span>{" "}
							{data.data}
						</p>
						{/* <Image
							src="https://assets.aceternity.com/macbook.png"
							alt="Macbook mockup from Aceternity UI"
							height="500"
							width="500"
							className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
						/> */}
					</div>
				);
			})}
		</>
	);
};

const data = [
	{
		category: "Public Relations",
		title: "Public Relations.",
		src: "/images/prservice.webp",
		content: <DummyContent />,
	},
	{
		category: "Marketing",
		title: "Launching the new Apple Vision Pro.",
		src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Development",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Event Services",
		title: "Maps for your iPhone 15 Pro Max.",
		src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Community Growth",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "Hiring",
		title: "Hiring for a Staff Software Engineer",
		src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
	{
		category: "iOS",
		title: "Photography just got better.",
		src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		content: <DummyContent />,
	},
];

const data2 = [
	{
		category: "Artificial Intelligence",
		data: "Brand PR specializes in crafting and distributing compelling press releases to showcase your crypto, blockchain, or Web3 project’s milestones, announcements, and achievements.",
		
	},
	{
		category: "Productivity",
		data: "dkflsfjlkf ",
	},
];
