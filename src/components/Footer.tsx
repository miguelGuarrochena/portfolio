'use client';

import { Container, Text, Group, ActionIcon, Divider } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { useTranslation } from '@/hooks/useTranslation';
import { notifications } from '@mantine/notifications';

export function Footer() {
  const { t } = useTranslation();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mikeguarrochena@gmail.com');
      notifications.show({
        title: t.contact.title || 'Contact',
        message: t.contact.notificationMessage || 'Email copied! Feel free to contact me.',
        color: 'teal',
      });
    } catch (err) {
      console.error('Error copying email:', err);
    }
  };

  return (
    <footer>
      <Divider />
      <Container size="lg" py="xl">
        <Group justify="flex-end" align="center">
          
          <Group gap="sm">
            <ActionIcon
              size="lg"
              variant="subtle"
              component="a"
              href="https://www.linkedin.com/in/miguel-guarrochena/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </ActionIcon>
            
            <ActionIcon
              size="lg"
              variant="subtle"
              onClick={handleCopyEmail}
              aria-label="Copy email"
            >
              <IconMail size={20} />
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
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Group>
        </Group>
 
      </Container>
    </footer>
  );
}
