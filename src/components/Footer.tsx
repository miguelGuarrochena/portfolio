'use client';

import { Container, Text, Group, ActionIcon, Box } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useTranslation } from '@/hooks/useTranslation';
import { notifications } from '@mantine/notifications';
import { Logo } from './Logo';

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

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

  return (
    <Box component="footer" className="section-block" style={{ paddingBottom: '3rem' }}>
      <Container size="lg">
        <Box
          className="surface-card"
          p={{ base: 'lg', md: 'xl' }}
        >
          <Group justify="space-between" align="center" wrap="wrap" gap="lg">
            <Group gap="md">
              <Logo size={32} variant="mark" />
              <div>
                <Text fw={600} size="sm">
                  {t.footer.rights.replace('{year}', String(year))}
                </Text>
                <Text size="sm" c="dimmed">
                  {t.footer.tagline}
                </Text>
              </div>
            </Group>

            <Group gap="sm">
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
                <IconBrandLinkedin size={20} />
              </ActionIcon>
              <ActionIcon
                size="lg"
                variant="subtle"
                radius="xl"
                onClick={handleCopyEmail}
                aria-label="Copy email"
                color="dark"
              >
                <IconMail size={20} />
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
                <IconBrandGithub size={20} />
              </ActionIcon>
            </Group>
          </Group>
        </Box>
      </Container>
    </Box>
  );
}
