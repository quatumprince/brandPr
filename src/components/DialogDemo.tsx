import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DialogDemo() {
	return (
		<Dialog>
			<DialogTrigger
				asChild
				className=" cursor-pointer text-lg py-5 px-4 bg-white text-black hover:bg-white/80 hover:text-black"
			>
				<Button variant="outline">Get Started</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Ready to Elevate Your Crypto Brand?</DialogTitle>
					<DialogDescription>
					Partner with Brand.PR today and let’s build your brand’s future in the blockchain world.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="name" className="text-right">
							Your Name*
						</Label>
						<Input
							id="name"
							placeholder="Priyanshu"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="username" className="text-right">
							Email*
						</Label>
						<Input
							id="username"
							placeholder="brandpr@gmail.com"
							className="col-span-3"
							type="email"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="phone" className="text-right">
							Phone
						</Label>
						<Input
							id="phone"
							placeholder="9999999999"
							className="col-span-3"
							type="number"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="website" className="text-right">
							Website
						</Label>
						<Input
							id="website"
							className="col-span-3"
							placeholder="https://brandpr.io"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="Message" className="text-right">
							Message*
						</Label>
						<Input
							id="Message"
							placeholder="We want to connect with you."
							className="col-span-3"
						/>
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Send</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
