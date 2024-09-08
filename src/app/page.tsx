import { products } from "@/components/HeroParallaxDemo";
import { HeroParallax } from "@/components/ui/hero-parallax";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Award from "@/components/Award";

export default function Home() {
	return (
		<>
			<HeroParallax products={products} />
			<Services />
			<AboutUs />
			<InfiniteMovingCardsDemo />
			<Award />
		</>
	);
}
