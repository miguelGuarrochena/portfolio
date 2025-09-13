'use client';

import { Title, Text, Paper, Box, Container, } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <Box py={80} id="about" style={{ width: '100%' }}>
        <Container size="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Title order={2} size="h2" ta="center" mb="xl">
          {t.about.title}
        </Title>
            <Paper p="xl" radius="md" withBorder h="100%">
              <Text size="lg" lh={1.6}>
                {t.about.description}
              </Text>
            </Paper>
       
      </motion.div>
      </Container>
    </Box>
  );
}
