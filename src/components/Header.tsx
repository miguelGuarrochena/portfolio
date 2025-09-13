'use client';

import {
  AppShell,
  Group,
  ActionIcon,
  Button,
  Text,
  rem,
  Burger,
  Stack,
  useMantineTheme,
  Drawer,
  Button as MantineButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon, IconWorld, IconDownload, IconMail } from '@tabler/icons-react';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { useState } from 'react';
import { notifications } from '@mantine/notifications';

interface NavItem {
  id: string;
  label: string;
}

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  close: () => void;
}

export function Header({ opened, toggle, close }: HeaderProps) {
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const { t, locale, setLocale } = useTranslation();
  const theme = useMantineTheme();
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
        message: t.contact.notificationMessage || 'Email copied! Feel free to contact me.',
        color: 'teal',
      });
      // Cambiar el estado para mostrar el texto y color de "copiado"
      setEmailCopied(true);
      // Restaurar después de 2 segundos
      setTimeout(() => setEmailCopied(false), 2000);
      close();
    } catch (err) {
      console.error('Error copying email:', err);
    }
  };

  const handleLanguageChange = (value: string | null) => {
    if (value && value !== locale) {
      setLocale(value as 'en' | 'es');
      close();
    }
  };

  const navItems: NavItem[] = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
  ];

  const renderNavItems = () => (
    <Group gap="sm" wrap="nowrap">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="subtle"
          size="sm"
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        leftSection={<IconDownload size={16} />}
        onClick={handleDownloadCV}
      >
        {t.cv.title || 'Download CV'}
      </Button>
      <Button
        variant={emailCopied ? 'light' : 'filled'}
        color={emailCopied ? 'teal' : 'green.9'}
        size="sm"
        leftSection={<IconMail size={16} />}
        onClick={handleCopyEmail}
      >
        {emailCopied ? (t.contact.emailCopied || 'Email copied!') : (t.nav.contact || 'Contact')}
      </Button>
    </Group>
  );

  return (
    <AppShell.Header>
      <Group h="100%" px="md" justify="space-between">
        <Text size="lg" fw={700}>
          MG
        </Text>

        <Group visibleFrom="md" gap="xs" wrap="nowrap">
          {renderNavItems()}
          <MantineButton.Group>
            <MantineButton
              variant={locale === 'en' ? 'filled' : 'outline'}
              size="xs"
              onClick={() => handleLanguageChange('en')}
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
            >
              🇬🇧 EN
            </MantineButton>
            <MantineButton
              variant={locale === 'es' ? 'filled' : 'outline'}
              size="xs"
              onClick={() => handleLanguageChange('es')}
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              🇪🇸 ES
            </MantineButton>
          </MantineButton.Group>

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

        <Group hiddenFrom="md">
          <ActionIcon
            variant="default"
            size="lg"
            aria-label="Toggle color scheme"
            onClick={toggleColorScheme}
            mr="sm"
          >
            {colorScheme === 'light' ? (
              <IconMoon size={20} />
            ) : (
              <IconSun size={20} />
            )}
          </ActionIcon>
          <Burger opened={opened} onClick={toggle} size="sm" />
        </Group>
      </Group>

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
            color={emailCopied ? 'teal' : 'green.9'}
            size="md"
            leftSection={<IconMail size={16} />}
            onClick={() => {
              handleCopyEmail();
              close();
            }}
            fullWidth
          >
            {emailCopied ? (t.nav.copied || 'Copied!') : (t.nav.contact || 'Contact')}
          </Button>
          <MantineButton.Group style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}>
            <MantineButton
              variant={locale === 'en' ? 'filled' : 'outline'}
              size="sm"
              onClick={() => handleLanguageChange('en')}
              style={{ 
                borderTopRightRadius: 0, 
                borderBottomRightRadius: 0,
                flex: 1,
                maxWidth: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              🇬🇧 EN
            </MantineButton>
            <MantineButton
              variant={locale === 'es' ? 'filled' : 'outline'}
              size="sm"
              onClick={() => handleLanguageChange('es')}
              style={{ 
                borderTopLeftRadius: 0, 
                borderBottomLeftRadius: 0,
                flex: 1,
                maxWidth: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              🇪🇸 ES
            </MantineButton>
          </MantineButton.Group>
        </Stack>
      </Drawer>
    </AppShell.Header>
  );
}
