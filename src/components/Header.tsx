'use client';

import {
  Group,
  ActionIcon,
  Button,
  Burger,
  Stack,
  Drawer,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon, IconDownload, IconMail } from '@tabler/icons-react';
import { useThemeStore } from '@/store/themeStore';
import { useTranslation } from '@/hooks/useTranslation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { Logo } from './Logo';

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
  onScrollToTop: () => void;
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
  onScrollToTop,
  emailCopied,
  locale,
  navItems,
}: HeaderProps) {
  const { colorScheme, toggleColorScheme } = useThemeStore();
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  const handleCopyEmail = () => {
    onCopyEmail();
    close();
  };

  const handleLanguageChange = (lang: string) => {
    onLanguageChange(lang);
    close();
  };

  const renderNavLinks = (mobile = false) =>
    navItems.map((item) => (
      <button
        key={item.id}
        type="button"
        className="nav-link"
        onClick={() => onScrollToSection(item.id)}
        style={mobile ? { width: '100%', textAlign: 'left' } : undefined}
      >
        {item.label}
      </button>
    ));

  return (
    <>
      <Box className="nav-shell">
        <motion.div
          className="nav-bar"
          animate={{
            boxShadow: scrolled
              ? '0 12px 40px rgba(0, 0, 0, 0.08)'
              : '0 8px 28px rgba(0, 0, 0, 0.04)',
          }}
          transition={{ duration: 0.3 }}
        >
          <Box className="nav-bar-inner">
            <Box className="nav-brand">
              <Logo size={28} variant="wordmark" onClick={onScrollToTop} />
            </Box>

            <Group className="nav-links-center" visibleFrom="lg" gap={2} wrap="nowrap">
              {renderNavLinks()}
            </Group>

            <Group className="nav-actions" gap={8} wrap="nowrap">
              <Group visibleFrom="md" gap={8} wrap="nowrap">
                <Button
                  variant="subtle"
                  size="compact-sm"
                  radius="xl"
                  leftSection={<IconDownload size={15} />}
                  onClick={onDownloadCV}
                  color="dark"
                >
                  {t.cv.title}
                </Button>
                <Button
                  variant={emailCopied ? 'light' : 'filled'}
                  color="dark"
                  size="compact-sm"
                  radius="xl"
                  leftSection={<IconMail size={15} />}
                  onClick={handleCopyEmail}
                >
                  {emailCopied ? t.contact.emailCopied : t.nav.contact}
                </Button>
                <Group gap={0} className="lang-toggle">
                  <Button
                    variant={locale === 'en' ? 'filled' : 'subtle'}
                    size="compact-xs"
                    radius="xl"
                    onClick={() => handleLanguageChange('en')}
                    color="dark"
                    px="sm"
                  >
                    EN
                  </Button>
                  <Button
                    variant={locale === 'es' ? 'filled' : 'subtle'}
                    size="compact-xs"
                    radius="xl"
                    onClick={() => handleLanguageChange('es')}
                    color="dark"
                    px="sm"
                  >
                    ES
                  </Button>
                </Group>
              </Group>

              <ActionIcon
                variant="subtle"
                size="lg"
                radius="xl"
                aria-label="Toggle color scheme"
                onClick={toggleColorScheme}
                color="dark"
              >
                {colorScheme === 'light' ? (
                  <IconMoon size={18} />
                ) : (
                  <IconSun size={18} />
                )}
              </ActionIcon>

              <Burger
                hiddenFrom="lg"
                opened={opened}
                onClick={toggle}
                size="sm"
              />
            </Group>
          </Box>
        </motion.div>
      </Box>

      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        padding="lg"
        size="300px"
        zIndex={1000}
        title={t.nav.menu}
      >
        <Stack gap="md">
          <Stack gap={6}>{renderNavLinks(true)}</Stack>
          <Button
            variant="outline"
            size="md"
            radius="xl"
            leftSection={<IconDownload size={16} />}
            onClick={onDownloadCV}
            fullWidth
            color="dark"
          >
            {t.cv.title}
          </Button>
          <Button
            variant={emailCopied ? 'light' : 'filled'}
            color="dark"
            size="md"
            radius="xl"
            leftSection={<IconMail size={16} />}
            onClick={handleCopyEmail}
            fullWidth
          >
            {emailCopied ? t.contact.emailCopied : t.nav.contact}
          </Button>
          <Group justify="center" gap="xs">
            <Button
              variant={locale === 'en' ? 'filled' : 'outline'}
              size="sm"
              radius="xl"
              onClick={() => handleLanguageChange('en')}
              color="dark"
            >
              EN
            </Button>
            <Button
              variant={locale === 'es' ? 'filled' : 'outline'}
              size="sm"
              radius="xl"
              onClick={() => handleLanguageChange('es')}
              color="dark"
            >
              ES
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
}
