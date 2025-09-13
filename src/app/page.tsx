'use client';

import { AppShell } from '@mantine/core';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="0"
    >
      <Header />
      <AppShell.Main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
