'use client';

import { Container, Title, Text, SimpleGrid, Stack, Group, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeader } from './SectionHeader';
import { DoodleDownArrow } from './Doodle';
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandWordpress,
  IconBrandWebflow,
  IconBulb,
  IconPuzzle,
  IconUsers,
  IconRocket,
  IconPalette,
  IconClock,
} from '@tabler/icons-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export function SkillsSection() {
  const { t } = useTranslation();

  const technicalSkills: Skill[] = [
    { name: 'React', icon: <IconBrandReact size={22} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <IconBrandNextjs size={22} />, color: 'var(--text-primary)' },
    { name: 'JavaScript', icon: <IconBrandJavascript size={22} />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <IconBrandTypescript size={22} />, color: '#3178C6' },
    { name: 'HTML5', icon: <IconBrandHtml5 size={22} />, color: '#E34F26' },
    { name: 'CSS3', icon: <IconBrandCss3 size={22} />, color: '#1572B6' },
    { name: 'WordPress', icon: <IconBrandWordpress size={22} />, color: '#21759B' },
    { name: 'Webflow', icon: <IconBrandWebflow size={22} />, color: '#4353FF' },
  ];

  const softSkillIcons: React.ReactNode[] = [
    <IconBulb size={22} key="product" />,
    <IconPuzzle size={22} key="problem" />,
    <IconUsers size={22} key="collab" />,
    <IconRocket size={22} key="autonomy" />,
    <IconPalette size={22} key="design" />,
    <IconClock size={22} key="time" />,
  ];

  return (
    <Box className="section-block" id="skills">
      <Container size="lg">
        <SectionHeader label={t.skills.label} title={t.skills.title} underline />

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <Box className="surface-card" p="xl">
            <Group mb="lg" gap="sm">
              <Title order={3} size="h4" fw={600}>
                {t.skills.technical}
              </Title>
            </Group>
            <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="sm">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p="md"
                    style={{
                      borderRadius: '1rem',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--surface-base)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 8,
                      height: '100%',
                    }}
                  >
                    <div style={{ color: skill.color }}>{skill.icon}</div>
                    <Text fw={500} size="xs" ta="center">
                      {skill.name}
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>

          <Box className="surface-card" p="xl">
            <Group mb="lg" gap="sm">
              <Title order={3} size="h4" fw={600}>
                {t.skills.soft}
              </Title>
            </Group>
            <Stack gap="sm">
              {t.skills.softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                >
                  <Group
                    align="flex-start"
                    gap="md"
                    p="md"
                    style={{
                      borderRadius: '1rem',
                      border: '1px solid var(--border-subtle)',
                      background: 'var(--surface-base)',
                    }}
                  >
                    <Box style={{ color: 'var(--accent)', marginTop: 2 }}>
                      {softSkillIcons[index]}
                    </Box>
                    <div>
                      <Text fw={600} mb={4} size="sm">
                        {skill.name}
                      </Text>
                      <Text size="sm" c="dimmed" lh={1.55}>
                        {skill.description}
                      </Text>
                    </div>
                  </Group>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </SimpleGrid>

        <Box className="doodle-keepgoing">
          <DoodleDownArrow delay={0.2} />
        </Box>
      </Container>
    </Box>
  );
}
