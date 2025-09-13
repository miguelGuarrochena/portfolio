'use client';

import {
  AppShell,
  Group,
  ActionIcon,
  Button,
  Text,
  useMantineColorScheme,
  Tooltip,
  rem,
  Burger,
  Select,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon, IconLanguage, IconDownload, IconMail } from '@tabler/icons-react';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const { toggleColorScheme } = useThemeStore();
  const { t, locale, setLocale } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Asegúrate de que la ruta al archivo sea correcta
    const link = document.createElement('a');
    link.href = '/cv/Miguel_Guarrochena_Resume.pdf';
    link.download = 'Miguel_Guarrochena_Resume.pdf';
    link.click();
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mikeguarrochena@gmail.com');
    } catch (err) {
      console.error('Error al copiar el email:', err);
    }
  };

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Text size="lg" fw={700}>
          MG
        </Text>

        <Group visibleFrom="sm" gap="md">
          <Text
            component="button"
            size="sm"
            onClick={() => scrollToSection('about')}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            {t.nav.about}
          </Text>
          <Text
            component="button"
            size="sm"
            onClick={() => scrollToSection('skills')}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            {t.nav.skills}
          </Text>
          <Text
            component="button"
            size="sm"
            onClick={() => scrollToSection('experience')}
            style={{ cursor: 'pointer', background: 'none', border: 'none' }}
          >
            {t.nav.experience}
          </Text>
          
          <Tooltip label={t.cv.title}>
            <Button
              variant="outline"
              size="sm"
              leftSection={<IconDownload size={16} />}
              onClick={handleDownloadCV}
            >
              {t.cv.download}
            </Button>
          </Tooltip>
          
          <Tooltip label="Copy email">
            <Button
              variant="filled"
              size="sm"
              leftSection={<IconMail size={16} />}
              onClick={handleCopyEmail}
            >
              {t.nav.contact}
            </Button>
          </Tooltip>

          <Select
            size="xs"
            value={locale}
            onChange={(value) => value && setLocale(value as 'en' | 'es')}
            data={[
              { value: 'en', label: 'EN' },
              { value: 'es', label: 'ES' },
            ]}
            leftSection={<IconLanguage size={16} />}
            style={{ width: rem(100) }}
          />

          <ActionIcon
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            onClick={toggleColorScheme}
          >
            {colorScheme === 'light' ? (
              <IconMoon size={20} />
            ) : (
              <IconSun size={20} />
            )}
          </ActionIcon>
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Group>
    </AppShell.Header>
  );
}
