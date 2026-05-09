'use client';

import { Container, Title, Text, Paper, SimpleGrid, Stack, Group, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandWordpress,
  IconBrandWebflow,
  IconBook,
  IconArrowsShuffle,
  IconRefreshDot,
  IconUsersGroup,
  IconRocket,
  IconClock,
  IconTools,
  IconUsers,
} from '@tabler/icons-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function SkillsSection() {
  const { t } = useTranslation();

  const technicalSkills: Skill[] = [
    { name: 'React', icon: <IconBrandReact size={24} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <IconBrandNextjs size={24} />, color: '#000000' },
    { name: 'JavaScript', icon: <IconBrandJavascript size={24} />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <IconBrandTypescript size={24} />, color: '#3178C6' },
    { name: 'HTML5', icon: <IconBrandHtml5 size={24} />, color: '#E34F26' },
    { name: 'CSS3', icon: <IconBrandCss3 size={24} />, color: '#1572B6' },
    { name: 'WordPress', icon: <IconBrandWordpress size={24} />, color: '#21759B' },
    { name: 'Webflow', icon: <IconBrandWebflow size={24} />, color: '#4353FF' },
  ];

  const softSkillIcons: React.ReactNode[] = [
    <IconBook size={24} key="book" />,
    <IconArrowsShuffle size={24} key="flex" />,
    <IconRefreshDot size={24} key="adapt" />,
    <IconUsersGroup size={24} key="team" />,
    <IconRocket size={24} key="proactive" />,
    <IconClock size={24} key="time" />,
  ];

  return (
    <Container size="lg" py={80} id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title order={2} size="h2" ta="center" mb={50}>
          {t.skills.title}
        </Title>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Paper p="xl" radius="md" withBorder style={{ height: '100%' }}>
            <Group mb="lg" gap="sm">
              <IconTools size={28} />
              <Title order={3} size="h4">
                {t.skills.technical}
              </Title>
            </Group>
            <SimpleGrid cols={3} spacing="md">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    p="md"
                    radius="md"
                    withBorder
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: rem(8),
                      height: '100%',
                      cursor: 'default',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <Text fw={500} size="sm">
                      {skill.name}
                    </Text>
                  </Paper>
                </motion.div>
              ))}
            </SimpleGrid>
          </Paper>

          <Paper p="xl" radius="md" withBorder>
            <Group mb="lg" gap="sm">
              <IconUsers size={28} />
              <Title order={3} size="h4">
                {t.skills.soft}
              </Title>
            </Group>
            <Stack gap="md">
              {t.skills.softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Paper
                    p="md"
                    radius="md"
                    withBorder
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: rem(16),
                      transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                  >
                    <div style={{ color: 'var(--mantine-color-blue-6)' }}>
                      {softSkillIcons[index]}
                    </div>
                    <div>
                      <Text fw={600} mb={4}>
                        {skill.name}
                      </Text>
                      <Text size="sm" c="dimmed">
                        {skill.description}
                      </Text>
                    </div>
                  </Paper>
                </motion.div>
              ))}
            </Stack>
          </Paper>
        </SimpleGrid>
      </motion.div>
    </Container>
  );
}
