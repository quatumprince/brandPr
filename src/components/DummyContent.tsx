export const DummyContent = ({
	content,
	title,
}: {
	content: string;
	title: string;
}) => {
	return (
		<>
			return (
			<div
				key={"dummy-content"}
				className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
			>
				<p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
					<span className="font-bold text-neutral-700">
						{title} :
					</span>{" "}
					{content}
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
		</>
	);
};
