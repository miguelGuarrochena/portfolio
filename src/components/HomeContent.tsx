'use client';

import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { AboutSection } from './AboutSection';
import { SkillsSection } from './SkillsSection';
import { ProjectsSection } from './ProjectsSection';
import { ExperienceSection } from './ExperienceSection';
import { Footer } from './Footer';
import { useTranslation } from '@/hooks/useTranslation';

export function HomeContent() {
  const [opened, { toggle, close }] = useDisclosure();
  const { t, locale, setLocale } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      close();
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    const isSpanish = locale === 'es';
    const fileName = isSpanish ? 'CV_MiguelGuarrochena.pdf' : 'miguelGuarrochena_Resume.pdf';
    link.href = `/cv/${fileName}`;
    link.download = fileName;
    link.click();
    close();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mikeguarrochena@gmail.com');
      notifications.show({
        title: t.contact.title || 'Contact',
        message: t.contact.notificationMessage || 'Email copied! Feel free to contact me',
        color: 'teal',
        autoClose: 5000,
      });
      setEmailCopied(true);
      close();
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error copying email:', err);
      notifications.show({
        title: 'Error',
        message: 'Failed to copy email. Please try again or manually copy mikeguarrochena@gmail.com',
        color: 'red',
      });
    }
  };

  const handleLanguageChange = async (value: string | null) => {
    if (value && value !== locale) {
      try {
        await setLocale(value as 'en' | 'es');
        close();
      } catch (error) {
        console.error('Error changing language:', error);
      }
    }
  };

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
  ];

  return (
    <AppShell
      header={{ height: 60 }}
      padding="0"
    >
      <Header 
        opened={opened} 
        toggle={toggle} 
        close={close}
        onDownloadCV={handleDownloadCV}
        onCopyEmail={handleCopyEmail}
        onLanguageChange={handleLanguageChange}
        emailCopied={emailCopied}
        locale={locale}
        navItems={navItems}
        onScrollToSection={scrollToSection}
      />
      <AppShell.Main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <Footer />
      </AppShell.Main>
    </AppShell>
  );
}
