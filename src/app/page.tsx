import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Navbar } from '@/components/Navbar';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Intro } from '@/components/Intro';

export default function Home() {
  return (
    <main className='lg:px-32 md:px-16 px-8 pt-32 pb-12 antialiased flex flex-col justify-center items-center gap-48 bg-gradient-to-br from-[#7eb2ff] to-white to-15%'>
      <Intro />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <p>© {new Date().getFullYear()} Felipe. All rights reserved.</p>
    </main>
  );
}
