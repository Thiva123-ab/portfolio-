import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Goals } from "@/components/goals";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Goals />
      <Contact />
    </main>
  );
}
