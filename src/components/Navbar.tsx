import Link from "next/link";
import { Menu, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { DialogDemo } from "./DialogDemo";

export const description =
	"An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export function Navbar() {
	return (
		<div className="flex w-full flex-col ">
			<header className="sticky top-0 flex h-20 items-center gap-4 border-b px-4 text-whitemd:px-6">
				<nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 max-w-7xl mx-auto justify-between w-full">
					<Link href={"/"}>
						<Image
							src="/images/brandprlogo.jpg"
							alt="logo"
							width={160}
							height={120}
						/>
					</Link>
					<div className="flex items-center gap-6 text-lg font-semibold md:text-lg">
						{/* <Link
							href="#"
							className="flex items-center gap-2 text-lg font-semibold md:text-base"
						>
							<Package2 className="h-6 w-6" />
							<span className="sr-only">Acme Inc</span>
						</Link> */}
						<Link
							href="#services"
							className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
						>
							Our Services
						</Link>

						<Link
							href="#about"
							className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
						>
							About
						</Link>

						<Link
							href="#"
							className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
						>
							Blogs
						</Link>
						<Link
							href="#"
							className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
						>
							Conferences
						</Link>
						<DialogDemo />
					</div>
				</nav>
				<Sheet>
					<div className="flex items-center justify-between w-full gap-6 text-lg font-semibold md:text-base md:hidden">
						<Link href={"/"}>
							<Image
								src="/images/logog-min.png"
								alt="logo"
								width={120}
								height={120}
							/>
						</Link>
						<div>
							<SheetTrigger asChild>
								<Button
									variant="outline"
									size="icon"
									className="shrink-0 md:hidden"
								>
									<Menu className="h-5 w-5" />
									<span className="sr-only">
										Toggle navigation menu
									</span>
								</Button>
							</SheetTrigger>
						</div>
					</div>
					<SheetContent side="right">
						<nav className="grid gap-6 text-lg font-medium">
							{/* <Link
								href="#"
								className="flex items-center gap-2 text-lg font-semibold"
							>
								<Package2 className="h-6 w-6" />
								<span className="sr-only">Acme Inc</span>
							</Link> */}
							<Link href="#" className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]">
								Home
							</Link>
							<Link
								href="#"
								className="text-muted-foreground hover:text-foreground"
							>
								About
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
							>
								Our Services
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
							>
								Blogs
							</Link>
							<Link
								href="#"
								className="text-muted-foreground transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#fa0297] to-[#8a0e7d]"
							>
								Conferences
							</Link>
							<DialogDemo />
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</div>
	);
}
