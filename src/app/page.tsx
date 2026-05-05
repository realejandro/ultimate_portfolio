import { HomeLayout } from "@/layouts/HomeLayout";
import { AboutSection, ContactFormSection, IntroSection, ProjectsSection } from "./components/home";
import { ExperienceSection } from "./components/home/experience/ExperienceSection";
import { SkillsSection } from "./components/home/skills/SkillsSection";
import { EducationComponent } from "./components/home/education/EducationComponent";



export default function Home() {

  return (
      <HomeLayout>
        <IntroSection />
        <AboutSection />
        <ProjectsSection/>
        <EducationComponent />
        <ExperienceSection/>
        <SkillsSection />
        <ContactFormSection/>
      </HomeLayout>
  );
}
