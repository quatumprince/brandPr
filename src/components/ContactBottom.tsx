import { DialogDemo } from "./DialogDemo";

const ContactBottom = () => {
	return (
		<div className="w-full  pt-8 mt-4 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-opacity-30 h-[45vh]">
			<div className=" mx-auto max-w-screen-xl mt-8 px-4 pb-8 sm:px-6 lg:px-8 ">
				<h2 className="text-3xl font-bold sm:text-4xl pb-8">
					Contact Us
				</h2>
				<h4 className="w-full sm:w-1/2 mb-3 font-semibold">
					Ready to Elevate Your Crypto Brand?
				</h4>
				<p className="w-full sm:w-1/2">
					Partner with Brand.PR today and let’s build your brand’s
					future in the blockchain world.
				</p>
				<div className="mt-8">
					<DialogDemo />
				</div>
			</div>
		</div>
	);
};

export default ContactBottom;
