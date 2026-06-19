'use client';

import {
  Container,
  Text,
  Group,
  Stack,
  ActionIcon,
  Box,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconArrowDown } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { DoodleArrow, DoodleUnderline, DoodleLabel } from './Doodle';

/** Resalta la palabra "Frontend" con un subrayado dibujado a mano. */
function RoleWithDoodle({ role }: { role: string }) {
  const parts = role.split(/(frontend)/i);
  return (
    <>
      {parts.map((part, i) =>
        /^frontend$/i.test(part) ? (
          <span key={i} className="doodle-underline-host">
            {part}
            <DoodleUnderline trigger="load" delay={0.7} />
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function HeroSection() {
  const { t } = useTranslation();
  const [imageSrc, setImageSrc] = useState('/images/miguel.png');

  const handleImageClick = () => {
    setImageSrc((prev) =>
      prev === '/images/miguel.png'
        ? '/images/miguel_sonrisa.png'
        : '/images/miguel.png'
    );
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mikeguarrochena@gmail.com');
      notifications.show({
        title: t.contact.title,
        message: t.contact.notificationMessage,
        color: 'teal',
      });
    } catch (err) {
      console.error('Error copying email:', err);
    }
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const isSmile = imageSrc.includes('sonrisa');

  return (
    <Box className="section-block hero-section">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="hero-badge">{t.hero.label}</span>
        </motion.div>

        <Box className="hero-main">
          <Stack className="hero-copy" gap="lg">
            <Stack gap="sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                <h1 className="hero-title">{t.hero.name}</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <Text className="hero-role">
                  <RoleWithDoodle role={t.hero.role} />
                </Text>
              </motion.div>
            </Stack>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <p className="hero-tagline">{t.hero.tagline}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <Group gap="xs" className="hero-social">
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  radius="xl"
                  component="a"
                  href="https://www.linkedin.com/in/miguel-guarrochena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  color="dark"
                >
                  <IconBrandLinkedin size={18} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  radius="xl"
                  onClick={handleCopyEmail}
                  aria-label="Copy email"
                  color="dark"
                >
                  <IconMail size={18} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  radius="xl"
                  component="a"
                  href="https://github.com/miguelGuarrochena"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  color="dark"
                >
                  <IconBrandGithub size={18} />
                </ActionIcon>
              </Group>
            </motion.div>

            <motion.div
              className="hero-scroll hero-scroll--desktop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button type="button" className="nav-link" onClick={scrollToAbout} aria-label="Scroll to about">
                <Group gap={6}>
                  <Text size="sm" c="dimmed">
                    Scroll
                  </Text>
                  <motion.span
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                    style={{ display: 'inline-flex' }}
                  >
                    <IconArrowDown size={16} />
                  </motion.span>
                </Group>
              </button>
            </motion.div>
          </Stack>

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Box
              className="hero-photo-frame"
              onClick={handleImageClick}
              role="button"
              tabIndex={0}
              aria-label="Toggle photo"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleImageClick();
                }
              }}
            >
              <Box
                component="img"
                src={imageSrc}
                alt="Miguel Guarrochena"
                className="hero-photo-img"
                data-smile={isSmile ? 'true' : 'false'}
              />
            </Box>

            <Box className="doodle-click-below">
              <DoodleArrow trigger="load" delay={0.9} className="doodle-click-arrow" />
              <DoodleLabel trigger="load" delay={1.15}>
                {t.doodles.clickPhoto}
              </DoodleLabel>
            </Box>
          </motion.div>
        </Box>

        <motion.div
          className="hero-scroll hero-scroll--mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <button type="button" className="nav-link" onClick={scrollToAbout} aria-label="Scroll to about">
            <Group gap={6}>
              <Text size="sm" c="dimmed">
                Scroll
              </Text>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
                style={{ display: 'inline-flex' }}
              >
                <IconArrowDown size={16} />
              </motion.span>
            </Group>
          </button>
        </motion.div>
      </Container>
    </Box>
  );
}
