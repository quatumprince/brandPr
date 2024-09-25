"use client";
import { useState } from "react";
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
import { useForm, SubmitHandler } from "react-hook-form";
import { ChevronRight } from "lucide-react";

interface FormData {
	name: string;
	email: string;
	phone: string;
	website: string;
	message: string;
}

export function DialogDemo() {
	// Initialize useForm hook
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormData>();

	// State to control dialog open/close
	const [isOpen, setIsOpen] = useState(false);

	// Define onSubmit handler
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				access_key: process.env.NEXT_PUBLIC_ACCESS_KEY,
				name: data.name,
				email: data.email,
				message: data.message,
				phone: data.phone,
				website: data.website,
			}),
		});

		const result = await response.json();
		if (result.success) {
			// Close the dialog box upon successful submission
			setIsOpen(false);

			// Clear the form after submission
			reset();
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger
				asChild
				className=" cursor-pointer text-lg py-5  bg-transparent "
			>
				<Button variant="line" onClick={() => setIsOpen(true)}>
					Get Started <ChevronRight className="ml-4 -mr-2"/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>
						Ready to Elevate Your Crypto Brand?
					</DialogTitle>
					<DialogDescription>
						Partner with Brand.PR today and let’s build your brand’s
						future in the blockchain world.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="name" className="text-right">
								Your Name
								<sup className="text-red-500 font-bold">*</sup>
							</Label>
							<Input
								id="name"
								placeholder="Priyanshu"
								className="col-span-3"
								{...register("name", {
									required: "Name is required",
								})}
							/>
						</div>
						{errors.name && (
							<p className="text-red-500 -my-2 text-right">
								{errors.name.message}
							</p>
						)}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="email" className="text-right">
								Email
								<sup className="text-red-500 font-bold">*</sup>
							</Label>
							<Input
								id="email"
								placeholder="brandpr@gmail.com"
								className="col-span-3"
								type="email"
								{...register("email", {
									required: "Email is required",
								})}
							/>
						</div>
						{errors.email && (
							<p className="text-red-500 -my-2 text-right">
								{errors.email.message}
							</p>
						)}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="phone" className="text-right">
								Phone
							</Label>
							<Input
								id="phone"
								placeholder="9999999999"
								className="col-span-3"
								type="number"
								{...register("phone", {
									maxLength: {
										value: 10,
										message:
											"Phone number cannot exceed 10 digits",
									},
								})}
							/>
						</div>
						{errors.message && (
							<p className="text-red-500 -my-2 text-right">
								{errors.phone?.message}
							</p>
						)}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="website" className="text-right">
								Website
							</Label>
							<Input
								id="website"
								className="col-span-3"
								placeholder="https://brandpr.io"
								{...register("website")}
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="message" className="text-right">
								Message
								<sup className="text-red-500 font-bold">*</sup>
							</Label>
							<Input
								id="message"
								placeholder="We want to connect with you."
								className="col-span-3"
								{...register("message", {
									required: "Message is required",
								})}
							/>
						</div>
						{errors.message && (
							<p className="text-red-500 -my-2 text-right">
								{errors.message.message}
							</p>
						)}
					</div>
					<DialogFooter>
						<Button type="submit">Send</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
