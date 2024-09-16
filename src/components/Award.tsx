import Image from "next/image";
import React from "react";

const Award = () => {
	return (
		<section className="bg-background text-white">
			<div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8 ">
				<h2 className="text-3xl font-bold sm:text-4xl pb-8">
					Awards and Honors
				</h2>

				<div className="mt-8 flex items-center justify-between gap-8  flex-wrap">
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 px-4 pb-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/awards.svg"}
							alt="Awards"
							width={100}
							height={50}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
					<div className="w-[16vw] h-auto rounded-sm border border-gray-800 p-4 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10 ">
						<Image
							src={"/awards/award2.svg"}
							alt="Awards"
							width={100}
							height={100}
							className="w-full h-full  object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Award;
