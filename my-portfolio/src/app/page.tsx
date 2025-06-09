export const metadata = {
  title: "Yasith Rashan",
  description: "Welcome to my personal portfolio website.",
  keywords: ["Yasith Rashan", "Yasith", "Portfolio"],
  authors: [{ name: "Yasith Rashan" }],
};

import AboutMe from "./components/AboutMe";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
    </div>
  );
}
