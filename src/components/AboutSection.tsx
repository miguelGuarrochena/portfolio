'use client';

import { Text, Box, Container, SimpleGrid } from '@mantine/core';
import { motion } from 'framer-motion';
import { useTranslation } from '@/hooks/useTranslation';
import { SectionHeader } from './SectionHeader';
import { DoodleDownArrow } from './Doodle';

export function AboutSection() {
  const { t } = useTranslation();
  const paragraphs = t.about.description.split('\n').filter(Boolean);

  return (
    <Box className="section-block" id="about">
      <Container size="lg">
        <SectionHeader label={t.about.label} title={t.about.title} circle />

        <SimpleGrid cols={{ base: 1, md: 12 }} spacing="xl">
          <Box style={{ gridColumn: 'span 4' }}>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text
                size="sm"
                c="dimmed"
                style={{ letterSpacing: '0.08em', textTransform: 'uppercase' }}
              >
                {t.about.sideLabel}
              </Text>
            </motion.div>
          </Box>

          <StackContent paragraphs={paragraphs} />
        </SimpleGrid>

        <Box className="doodle-keepgoing">
          <DoodleDownArrow delay={0.2} />
        </Box>
      </Container>
    </Box>
  );
}

function StackContent({ paragraphs }: { paragraphs: string[] }) {
  return (
    <Box style={{ gridColumn: 'span 8' }}>
      <Box className="surface-card" p="xl">
        {paragraphs.map((paragraph, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <Text
              size="lg"
              lh={1.75}
              mb={index < paragraphs.length - 1 ? 'lg' : 0}
              style={{ color: 'var(--text-secondary)' }}
            >
              {paragraph}
            </Text>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
