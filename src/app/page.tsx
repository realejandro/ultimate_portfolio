import { HomeLayout } from "@/layouts/HomeLayout";
import { AboutSection, ContactFormSection, IntroSection, ProjectsSection, ServicesSection } from "./components/home";
import { ExperienceSection } from "./components/home/experience/ExperienceSection";
import { SkillsSection } from "./components/home/skills/SkillsSection";
import { EducationComponent } from "./components/home/education/EducationalSection";



export default function Home() {

  return (
      <HomeLayout>
        <IntroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection/>
        <EducationComponent />
        <ExperienceSection/>
        <SkillsSection />
        <ContactFormSection/>
      </HomeLayout>
  );
}
