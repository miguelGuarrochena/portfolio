'use client';

import { AppShell, Drawer, Stack, Button, Select } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconDownload, IconMail, IconWorld } from '@tabler/icons-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
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
    link.href = '/cv/Miguel_Guarrochena_Resume.pdf';
    link.download = 'Miguel_Guarrochena_Resume.pdf';
    link.click();
    close();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mikeguarrochena@gmail.com');
      notifications.show({
        title: t.contact.title || 'Contact',
        message: t.contact.emailCopied || 'Email copied! Feel free to contact me.',
        color: 'teal',
      });
      close();
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error copying email:', err);
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
  ];

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        padding="0"
      >
        <Header opened={opened} toggle={toggle} close={close} />
        <AppShell.Main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <Footer />
        </AppShell.Main>
      </AppShell>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        padding="md"
        size="280px"
        zIndex={1000}
      >
        <Stack gap="md">
          <Stack gap="sm">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="subtle"
                size="md"
                onClick={() => scrollToSection(item.id)}
                fullWidth
              >
                {item.label}
              </Button>
            ))}
          </Stack>
          <Button
            variant="outline"
            size="md"
            leftSection={<IconDownload size={16} />}
            onClick={handleDownloadCV}
            fullWidth
          >
            {t.cv.title || 'Download CV'}
          </Button>
          <Button
            variant={emailCopied ? 'light' : 'filled'}
            color={emailCopied ? 'teal' : undefined}
            size="md"
            leftSection={<IconMail size={16} />}
            onClick={handleCopyEmail}
            fullWidth
          >
            {emailCopied ? (t.nav.copied || 'Copied!') : (t.nav.contact || 'Contact')}
          </Button>
          <Select
            label={t.settings?.language || 'Language'}
            value={locale}
            onChange={handleLanguageChange}
            data={[
              { value: 'en', label: 'English' },
              { value: 'es', label: 'Español' },
            ]}
            leftSection={<IconWorld size={16} />}
            style={{ width: '100%' }}
            mt="md"
          />
        </Stack>
      </Drawer>
    </>
  );
}
