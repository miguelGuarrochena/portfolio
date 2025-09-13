'use client';

import { Container, Title, Text, Group, Avatar, Stack, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';


export function HeroSection() {
  const { t } = useTranslation();

  return (
    <Container size="lg" py={80}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Group align="center" gap="xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Avatar
              size={200}
              radius="md"
              src="images/miguel.png"
              alt="Miguel Guarrochena"
              style={{
                border: '4px solid var(--mantine-color-blue-6)',
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
              }}
            />
          </motion.div>

          <Stack gap="md" style={{ flex: 1 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Title order={1} size="h1" fw={700}>
                {t.hero.name}
              </Title>
              <Text size="lg" c="dimmed" mt="xs">
                {t.hero.role}
              </Text>
              <Group mt="md" gap="sm">
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  component="a"
                  href="https://www.linkedin.com/in/miguel-guarrochena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin size={24} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  component="a"
                  href="mailto:mikeguarrochena@gmail.com"
                  aria-label="Email"
                >
                  <IconMail size={24} />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  component="a"
                  href="https://github.com/miguelGuarrochena"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <IconBrandGithub size={24} />
                </ActionIcon>
              </Group>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Text size="lg" c="dimmed" maw={600}>
                {t.hero.tagline}
              </Text>
            </motion.div>
          </Stack>
        </Group>
      </motion.div>
    </Container>
  );
}
