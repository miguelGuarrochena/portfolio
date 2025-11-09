'use client';

import { Container, Title, Text, Paper, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export function ExperienceSection() {
  const { t } = useTranslation();

  const experiences = [
    {
      key: 'freelance',
      data: t.experience.freelance,
    },
    {
      key: 'bellolandiaNew',
      data: t.experience.bellolandiaNew,
    },
    {
      key: 'mechanized',
      data: t.experience.mechanized,
    },
    {
      key: 'solehann',
      data: t.experience.solehann,
    },
    {
      key: 'bellolandia',
      data: t.experience.bellolandia,
    },
    {
      key: 'bosonit1',
      data: t.experience.bosonit1,
    },
    {
      key: 'bosonit2',
      data: t.experience.bosonit2,
    },
  ];

  return (
    <Box py={80} id="experience" style={{ width: '100%' }}>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Title order={2} size="h2" ta="center" mb="xl">
            {t.experience.title}
          </Title>

          <Stack gap="lg">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Paper p="lg" radius="md" withBorder>
                  <Stack gap="sm">
                    <Title order={3} size="h4">
                      {exp.data.company}
                    </Title>
                    <Text fw={500} c="blue">
                      {exp.data.role}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {exp.data.period}
                    </Text>
                    <Text size="md" lh={1.6}>
                      {exp.data.description}
                    </Text>
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
