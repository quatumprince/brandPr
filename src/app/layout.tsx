import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "BrandPR",
	description:
		"Brand PR is an Industry-Leading Public Relations & Marketing Agency. It is your gateway to boosting visibility, credibility, and growth in the world of crypto and blockchain. We combine innovative marketing with cutting-edge PR strategies tailored for the decentralized future. ",
	icons: [
		{
			url: "/images/logog-min.png",
			sizes: "192x192",
			type: "image/png",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + "bg-black text-white"}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
