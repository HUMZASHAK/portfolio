import AmbientBlobs from "./components/AmbientBlobs";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
import AchievementsSection from "./sections/AchievementsSection";
import BlogsSection from "./sections/BlogsSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import CurrentlyLearningSection from "./sections/CurrentlyLearningSection";
import DsaSection from "./sections/DsaSection";
import GithubSection from "./sections/GithubSection";
import HeroSection from "./sections/HeroSection";
import LearningJourneySection from "./sections/LearningJourneySection";
import ProjectsSection from "./sections/ProjectsSection";
import ResumeSection from "./sections/ResumeSection";
import SkillsSection from "./sections/SkillsSection";
import TechStackSection from "./sections/TechStackSection";
import WhyHireMeSection from "./sections/WhyHireMeSection";
import ServicesSection from "./sections/ServicesSection";
import ExperienceEducationSection from "./sections/ExperienceEducationSection";

function App() {
  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-[#050816]">
      <CursorGlow />
      <AmbientBlobs />
      <ParticleField />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyHireMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <LearningJourneySection />
      <CertificationsSection />
      <AchievementsSection />
      <GithubSection />
      <DsaSection />
      <BlogsSection />
      <ResumeSection />
      <TechStackSection />
      <CurrentlyLearningSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
