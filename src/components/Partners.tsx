import Image from "next/image";
import React from "react";

const Partners = () => {
	return (
		<section className="bg-background text-white mt-16">
			<div className="mx-auto w-[85%] px-4 pb-8 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold sm:text-4xl pb-8">
					Partners
				</h2>

				<div className="mt-8 flex flex-wrap items-center justify-start gap-8 justify-between">
					{[
						"/awards/awards.svg",
						"/awards/degensummit.png",
						"/awards/web3carnival.svg",
						"/awards/healerverselogo.png",
						"/awards/award2.svg",
						"/awards/award2.svg",
						"/awards/award2.svg",
						"/awards/award2.svg",
					].map((src, index) => (
						<div
							key={index}
							className="w-[40%] sm:w-[40%] md:w-[20%]
							h-full rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
						>
							<Image
								src={src}
								alt="Award"
								width={100}
								height={100}
								className="w-full h-[10vh]  object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
