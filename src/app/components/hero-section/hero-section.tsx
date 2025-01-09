import HeroContent from "./hero-content";
import { Spotlight } from "./spotlight";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center relative min-h-[500px] [@media(min-height:793px)]:min-h-[600px]">
      <Spotlight />
      <HeroContent />
    </section>
  );
}
