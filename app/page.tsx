import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection/>
    </div>
  );
}