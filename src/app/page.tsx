'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

// Dynamic imports for heavy visual effects (no SSR)
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), {
  ssr: false,
});
const CursorEffect = dynamic(() => import('@/components/CursorEffect'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorEffect />
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
