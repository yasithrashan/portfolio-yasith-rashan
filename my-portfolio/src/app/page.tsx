export const metadata = {
  title: "Yasith Rashan",
  description: "Welcome to my personal portfolio website.",
  keywords: ["Yasith Rashan", "Yasith", "Portfolio"],
  authors: [{ name: "Yasith Rashan" }],
  // icons: {
  //   icon: "/logo.svg",
  // },
};



import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}
