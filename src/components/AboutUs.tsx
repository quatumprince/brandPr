import React from "react";

const AboutUs = () => {
	return (
		<div className=" bg-[#151518] mt-4">
			<div className="w-[84%] mx-auto py-12">
				{/* <h2 className="font-bold text-3xl">About Us</h2> */}
				<div className="flex flex-col items-center sm:items-start  sm:flex-row gap-10 justify-between mt-4 h-auto">
					<h5 className="w-full text-center sm:text-start sm:w-[30%] text-2xl font-semibold ">
						CONNECTING TOMORROW’S TECHNOLOGY WITH TODAY’S AUDIENCE
					</h5>
					<div className="w-full sm:w-[50%]">
						<p className="mb-4 text-lg text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quia a, laudantium placeat ducimus quas rem
							dolorum id, dolores alias repellat saepe explicabo
							magnam fuga assumenda in incidunt voluptatibus
							accusantium voluptate!
						</p>
						<p className="text-lg mb-4 text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quia a, laudantium placeat ducimus quas rem
							dolorum id, dolores alias repellat saepe explicabo
							magnam fuga assumenda in incidunt voluptatibus
							accusantium voluptate!
						</p>
						<p className="text-lg text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quia a, laudantium placeat ducimus quas rem
							dolorum id, dolores alias repellat saepe explicabo
							magnam fuga assumenda in incidunt voluptatibus
							accusantium voluptate!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
