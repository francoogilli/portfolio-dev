import { AboutMeSection } from "./components/about-me/about-me";
import { ContactSection } from "./components/contact/contact";
import { ExperienceSection } from "./components/experience/experience-section";
import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/hero-section/hero-section";
import { ProjectsSection } from "./components/projects/projects";

export default function Home() {
  return (
    <main className="mt-20">
      <div className="mx-auto w-full max-w-7xl px-4">
        <HeroSection />
        <ExperienceSection/>
        <ProjectsSection/>
        <AboutMeSection/>
        <ContactSection/>
      </div>
      <Footer />
    </main>
  );
}
