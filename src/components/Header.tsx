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
  onDownloadCV: () => void;
  onCopyEmail: () => void;
  onLanguageChange: (value: string | null) => void;
  onScrollToSection: (sectionId: string) => void;
  emailCopied: boolean;
  locale: string;
  navItems: NavItem[];
}

export function Header({ 
  opened, 
  toggle, 
  close, 
  onDownloadCV, 
  onCopyEmail, 
  onLanguageChange, 
  onScrollToSection, 
  emailCopied, 
  locale, 
  navItems 
}: HeaderProps) {
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const { t } = useTranslation();
  const theme = useMantineTheme();

  const handleCopyEmail = () => {
    onCopyEmail();
    close();
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    close();
  };

  const renderNavItems = () => (
    <Group gap="sm" wrap="nowrap">
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant="subtle"
          size="sm"
          onClick={() => onScrollToSection(item.id)}
        >
          {item.label}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        leftSection={<IconDownload size={16} />}
        onClick={onDownloadCV}
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
                onClick={() => onScrollToSection(item.id)}
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
            onClick={onDownloadCV}
            fullWidth
          >
            {t.cv.title || 'Download CV'}
          </Button>
          <Button
            variant={emailCopied ? 'light' : 'filled'}
            color={emailCopied ? 'teal' : 'green.9'}
            size="md"
            leftSection={<IconMail size={16} />}
            onClick={handleCopyEmail}
            fullWidth
          >
            {emailCopied ? (t.contact.emailCopied || 'Email copied!') : (t.nav.contact || 'Contact')}
          </Button>
          <Group justify="center" mt="md">
            <MantineButton.Group>
              <MantineButton
                variant={locale === 'en' ? 'filled' : 'outline'}
                size="sm"
                onClick={() => handleLanguageChange('en')}
                style={{ 
                  borderTopRightRadius: 0, 
                  borderBottomRightRadius: 0,
                  padding: '0 12px',
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
                  padding: '0 12px',
                }}
              >
                🇪🇸 ES
              </MantineButton>
            </MantineButton.Group>
          </Group>
        </Stack>
      </Drawer>
    </AppShell.Header>
  );
}
