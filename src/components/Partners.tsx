import Image from "next/image";
import React from "react";

const images = [
	"/partners/ap.png",
	"/partners/amb.png",
	"/partners/analytics.png",
	"/partners/chainbits.png",
	"/partners/coin pric.png",
	"/partners/bitsday.png",
	"/partners/bytwork.png",
];

const Partners = () => {
	return (
		<section className="text-white">
			<div className="container px-5 py-24 mx-auto w-[85%]">
				<div className="flex flex-col w-full mb-20">
					<h1 className="text-3xl font-bold sm:text-4xl">
						Our Partners
					</h1>
				</div>
				<div className="flex flex-wrap -m-4">
					{/* Img box */}
					{images.map((src, index) => (
						<div className="p-4 lg:w-1/4 md:w-1/2" key={index}>
							<div className="h-full flex flex-col items-center text-center justify-center justify-start border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10">
								<Image
									alt="team"
									className="flex-shrink-0 rounded-lg w-full h-24  object-center object-cover"
									src={src}
									width={100}
									height={100}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
