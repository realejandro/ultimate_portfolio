import { HomeLayout } from "@/layouts/HomeLayout";
import { AboutSection, ContactFormSection, IntroSection, ProjectsSection } from "./components/home";
import { ExperienceSection } from "./components/home/experience/ExperienceSection";



export default function Home() {

  return (
      <HomeLayout>
        <IntroSection />
        <AboutSection />
        <ProjectsSection/>
        <ExperienceSection/>
        <ContactFormSection/>
      </HomeLayout>
  );
}
