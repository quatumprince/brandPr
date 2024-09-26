import {
	Facebook,
	Instagram,
	Linkedin,
	Locate,
	LocateFixedIcon,
	MapPin,
	Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-background lg:grid lg:grid-cols-5">
			<div className="relative block h-32 lg:col-span-2 lg:h-full">
				<img
					src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
					alt=""
					className="absolute inset-0 h-full w-full object-cover"
				/>
			</div>

			<div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div>
						<p>
							<span className="text-xs uppercase tracking-wide text-white">
								{" "}
								Call us{" "}
							</span>

							<a
								href="#"
								className="block text-2xl font-medium text-white/60  hover:opacity-75 sm:text-3xl"
							>
								+44 7403234099
							</a>
						</p>

						<ul className="mt-8 space-y-1 text-sm text-white/60">
							<li>
								71-75 Shelton Street, London, England WC2H 9JQ,
								GB
							</li>
							<li>Weekend: 10am - 3pm</li>
						</ul>

						<ul className="mt-8 flex gap-6">
							<li>
								<Link
									href="https://www.facebook.com/BrandPR.io/"
									rel="noreferrer"
									target="_blank"
									className="text-white/60 transition hover:opacity-75"
								>
									<Facebook />
								</Link>
							</li>
							<li>
								<Link
									href="https://www.linkedin.com/company/brandpr-io/"
									rel="noreferrer"
									target="_blank"
									className="text-white/60 transition hover:opacity-75"
								>
									<Linkedin />
								</Link>
							</li>
							<li>
								<Link
									href="https://x.com/BrandPR_io"
									rel="noreferrer"
									target="_blank"
									className="text-white/60 transition hover:opacity-75"
								>
									<Twitter />
								</Link>
							</li>
							<li>
								<Link
									href="https://www.instagram.com/brandpr.io/"
									rel="noreferrer"
									target="_blank"
									className="text-white/60 transition hover:opacity-75"
								>
									<Instagram />
								</Link>
							</li>
						</ul>
					</div>

					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div>
							<p className="font-medium text-white">Services</p>

							<ul className="mt-6 space-y-4 text-sm">
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										PR Services{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Marketing{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Development{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Event Development{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Community Growth{" "}
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<p className="font-medium text-white">Company</p>

							<ul className="mt-6 space-y-4 text-sm">
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										About{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Contact{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Events{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Partners{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Blogs{" "}
									</Link>
								</li>
								{/* <li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										Blog{" "}
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-white/60 transition hover:opacity-75"
									>
										{" "}
										About{" "}
									</Link>
								</li> */}
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-gray-100 pt-12">
					<div className="sm:flex sm:items-center sm:justify-between">
						<ul className="flex flex-wrap gap-4 text-xs">
							<li>
								<a
									href="#"
									className="text-gray-500 transition hover:opacity-75"
								>
									{" "}
									Terms & Conditions{" "}
								</a>
							</li>

							<li>
								<a
									href="#"
									className="text-gray-500 transition hover:opacity-75"
								>
									{" "}
									Privacy Policy{" "}
								</a>
							</li>

							{/* <li>
								<a
									href="#"
									className="text-gray-500 transition hover:opacity-75"
								>
									{" "}
									Cookies{" "}
								</a>
							</li> */}
						</ul>

						<p className="mt-8 text-xs text-gray-500 sm:mt-0">
							&copy; 2024. BrandPR. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
