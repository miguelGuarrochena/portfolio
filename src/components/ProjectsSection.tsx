'use client';

import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Stack,
  Group,
  Badge,
  AspectRatio,
  Image,
  Modal,
  Button,
  Box,
  Overlay,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { IconExternalLink, IconPlayerPlayFilled } from '@tabler/icons-react';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeader } from './SectionHeader';

type ProjectItem = {
  id: string;
  type: string;
  context: string;
  name: string;
  description: string;
  stack: readonly string[];
  youtubeId: string;
  startSeconds: number;
  url: string;
  image?: string;
};

type ActiveVideo = {
  youtubeId: string;
  startSeconds: number;
  name: string;
} | null;

const FALLBACK_GRADIENTS: Record<string, string> = {
  pickly: 'linear-gradient(135deg, #FF4D6A 0%, #FF8E53 100%)',
  iseo: 'linear-gradient(135deg, #1F4068 0%, #162447 100%)',
  meme: 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
  bellolandia: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
};

function getThumbnailUrl(project: ProjectItem): string | null {
  if (project.image) {
    return project.image;
  }
  if (project.type === 'video' && project.youtubeId) {
    return `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
  }
  return null;
}

export function ProjectsSection() {
  const { t } = useTranslation();
  const [opened, { open, close }] = useDisclosure(false);
  const [activeVideo, setActiveVideo] = useState<ActiveVideo>(null);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleOpenVideo = (project: ProjectItem) => {
    setActiveVideo({
      youtubeId: project.youtubeId,
      startSeconds: project.startSeconds,
      name: project.name,
    });
    open();
  };

  const handleCloseModal = () => {
    close();
    setTimeout(() => setActiveVideo(null), 250);
  };

  const handleImageError = (id: string) => {
    setImageErrors((prev) => (prev[id] ? prev : { ...prev, [id]: true }));
  };

  const items = t.projects.items as readonly ProjectItem[];

  return (
    <Box className="section-block" id="projects">
      <Container size="lg">
        <SectionHeader label={t.projects.label} title={t.projects.title} circle />

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {items.map((project, index) => {
            const isVideo = project.type === 'video';
            const rawThumbnail = getThumbnailUrl(project);
            const thumbnail = imageErrors[project.id] ? null : rawThumbnail;
            const gradient = FALLBACK_GRADIENTS[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                viewport={{ once: true }}
                style={{ height: '100%' }}
              >
                <Box
                  className="surface-card"
                  style={{
                    overflow: 'hidden',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <AspectRatio ratio={16 / 9}>
                    {thumbnail ? (
                      <Box
                        component={isVideo ? 'div' : 'a'}
                        href={isVideo ? undefined : project.url}
                        target={isVideo ? undefined : '_blank'}
                        rel={isVideo ? undefined : 'noopener noreferrer'}
                        onClick={isVideo ? () => handleOpenVideo(project) : undefined}
                        style={{
                          cursor: 'pointer',
                          position: 'relative',
                          width: '100%',
                          height: '100%',
                          display: 'block',
                        }}
                      >
                        <Image
                          src={thumbnail}
                          alt={project.name}
                          fit="cover"
                          w="100%"
                          h="100%"
                          onError={() => handleImageError(project.id)}
                        />
                        {isVideo && (
                          <Overlay
                            color="#000"
                            backgroundOpacity={0.35}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <ActionIcon
                              variant="filled"
                              color="dark"
                              radius="xl"
                              size={64}
                              aria-label={t.projects.viewDemo}
                            >
                              <IconPlayerPlayFilled size={26} />
                            </ActionIcon>
                          </Overlay>
                        )}
                      </Box>
                    ) : (
                      <Box
                        component={isVideo ? 'div' : 'a'}
                        href={isVideo ? undefined : project.url}
                        target={isVideo ? undefined : '_blank'}
                        rel={isVideo ? undefined : 'noopener noreferrer'}
                        onClick={isVideo ? () => handleOpenVideo(project) : undefined}
                        style={{
                          background:
                            gradient ||
                            'linear-gradient(135deg, #4F46E5 0%, #06B6D4 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                          cursor: 'pointer',
                          textDecoration: 'none',
                        }}
                      >
                        <Text
                          fw={600}
                          size="lg"
                          c="white"
                          ta="center"
                          px="md"
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {project.name}
                        </Text>
                      </Box>
                    )}
                  </AspectRatio>

                  <Stack p="lg" gap="xs" style={{ flex: 1 }}>
                    <Text
                      size="xs"
                      c="dimmed"
                      tt="uppercase"
                      fw={600}
                      style={{ letterSpacing: '0.12em' }}
                    >
                      {project.context}
                    </Text>
                    <Title order={3} size="h4" fw={600}>
                      {project.name}
                    </Title>
                    <Text size="sm" c="dimmed" lh={1.6}>
                      {project.description}
                    </Text>
                    <Group gap={6} mt="auto" pt="sm">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="light"
                          size="sm"
                          radius="xl"
                          color="dark"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>

                  <Box p="lg" pt={0}>
                    {isVideo ? (
                      <Button
                        fullWidth
                        variant="light"
                        color="dark"
                        radius="xl"
                        leftSection={<IconPlayerPlayFilled size={16} />}
                        onClick={() => handleOpenVideo(project)}
                      >
                        {t.projects.viewDemo}
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        variant="light"
                        color="dark"
                        radius="xl"
                        rightSection={<IconExternalLink size={16} />}
                        component="a"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t.projects.viewSite}
                      </Button>
                    )}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </SimpleGrid>
      </Container>

      <Modal
        opened={opened}
        onClose={handleCloseModal}
        size="xl"
        title={activeVideo?.name}
        centered
        padding="md"
      >
        {activeVideo && (
          <AspectRatio ratio={16 / 9}>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?start=${activeVideo.startSeconds}&autoplay=1&rel=0`}
              title={activeVideo.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: 0, width: '100%', height: '100%' }}
            />
          </AspectRatio>
        )}
      </Modal>
    </Box>
  );
}
