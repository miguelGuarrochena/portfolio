'use client';

import { Container, Title, Text, Stack, Box, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeader } from './SectionHeader';
import { DoodleArrow, DoodleLabel } from './Doodle';

export function ExperienceSection() {
  const { t } = useTranslation();

  const experiences = [
    { key: 'freelance', data: t.experience.freelance },
    { key: 'bellolandiaNew', data: t.experience.bellolandiaNew },
    { key: 'mechanized', data: t.experience.mechanized },
    { key: 'solehann', data: t.experience.solehann },
    { key: 'bellolandia', data: t.experience.bellolandia },
    { key: 'bosonit1', data: t.experience.bosonit1 },
    { key: 'bosonit2', data: t.experience.bosonit2 },
  ];

  return (
    <Box className="section-block" id="experience">
      <Container size="lg">
        <SectionHeader label={t.experience.label} title={t.experience.title} />

        <Stack gap="md">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Box
                className="surface-card"
                p={{ base: 'lg', md: 'xl' }}
                style={index === 0 ? { position: 'relative', overflow: 'visible' } : undefined}
              >
                {index === 0 && (
                  <Box className="doodle-current">
                    <DoodleLabel delay={0.2}>{t.doodles.current}</DoodleLabel>
                    <DoodleArrow delay={0.1} />
                  </Box>
                )}
                <Group align="flex-start" wrap="nowrap" gap="xl">
                  <Text className="experience-index" visibleFrom="sm">
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Stack gap="xs" style={{ flex: 1 }}>
                    <Group justify="space-between" align="flex-start" wrap="wrap" gap="xs">
                      <Title order={3} size="h4" fw={600}>
                        {exp.data.company}
                      </Title>
                      <Text size="sm" c="dimmed" style={{ whiteSpace: 'nowrap' }}>
                        {exp.data.period}
                      </Text>
                    </Group>
                    <Text fw={500} style={{ color: 'var(--accent)' }}>
                      {exp.data.role}
                    </Text>
                    <Text size="md" lh={1.7} c="dimmed">
                      {exp.data.description}
                    </Text>
                  </Stack>
                </Group>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
