import React from "react";

const AboutUs = () => {
	return (
		<div className=" bg-[#151518] mt-4" id="about">
			<div className="w-[84%] mx-auto py-12">
				{/* <h2 className="font-bold text-3xl">About Us</h2> */}
				<div className="flex flex-col items-center sm:items-start  sm:flex-row gap-10 justify-between mt-4 h-auto">
					<h5 className="w-full text-center sm:text-start sm:w-[30%] text-2xl font-semibold text-secondaryColor">
					Building Trust and Hype for Web3 and Blockchain Innovations
					</h5>
					<div className="w-full sm:w-[50%]">
						<p className="mb-4 text-lg text-justify">
						Brand PR is a specialized public relations and marketing agency that helps different brands build their communities. We have been serving Web3-based clients globally since 2020. Our crypto and Web3 PR services ensure that your brand&rsquo;s message is heard by the right people at the right time. 

						</p>
						<p className="text-lg mb-4 text-justify">
						Our team has a proven track record of delivering successful PR campaigns. We offer media coverage on top-tier news sites to ensure your crypto project gets the exposure it deserves. Here, clients get innovative solutions from effective media outreach to community building.  

						</p>
						<p className="text-lg text-justify">
						Whether you&aposre launching a new cryptocurrency, a DeFi platform, or an NFT marketplace, our PR strategies are tailored to meet your goals. At Brand PR, we don&apost just promote your project&lsquowe help you build a legacy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
