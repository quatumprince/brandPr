import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "BrandPR",
		template: "%s | BrandPR.io",
	},
	description:
		"Brand PR is an Industry-Leading Public Relations & Marketing Agency. It is your gateway to boosting visibility, credibility, and growth in the world of crypto and blockchain. We combine innovative marketing with cutting-edge PR strategies tailored for the decentralized future. ",
	keywords:
		"Brand PR, Public Relations, Marketing Agency, Crypto PR, Blockchain Marketing, Crypto Public Relations, Blockchain PR, Decentralized Marketing, PR Strategies, Visibility Boost, Credibility Building, Growth in Crypto, Innovative Marketing, Blockchain Growth, Cutting-edge PR",
};


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
			<link rel="shortcut icon" href="/images/logog-min.png" />
			</head>
			<body className={inter.className + "bg-black text-white"}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
