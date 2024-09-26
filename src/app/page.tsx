import { products } from "@/components/HeroParallaxDemo";
import { HeroParallax } from "@/components/ui/hero-parallax";
import AboutUs from "@/components/AboutUs";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import Award from "@/components/Award";
import ContactBottom from "@/components/ContactBottom";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import Partners from "@/components/Partners";
import { InfiniteMovingPartnersDemo } from "@/components/InfiniteMovingPartnersDemo";

export default function Home() {
	return (
		<>
			<HeroParallax products={products} />
			<AppleCardsCarouselDemo />
			<Partners />
			<InfiniteMovingPartnersDemo />
			<AboutUs />
			<Award />
			<ContactBottom />
			<InfiniteMovingCardsDemo />
		</>
	);
}
