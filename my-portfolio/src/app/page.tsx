export const metadata = {
  title: "Yasith Rashan",
  description: "Welcome to my personal portfolio website.",
  keywords: ["Yasith Rashan", "Yasith", "Portfolio"],
  authors: [{ name: "Yasith Rashan" }],
};



import AboutMe from "./components/AboutMe";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Achievements />
      <Footer />
    </div>
  );
}
