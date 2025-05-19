import Hero from '@/components/hero/hero';
import About from '@/components/about/about';
import Skills from '@/components/skills/skills';
import Projects from '@/components/projects/projects';
import Contact from '@/components/contact/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />  {/* ✅ Projects section */}
      <Contact />
    </>
  );
}
