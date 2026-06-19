'use client';

import { Stack, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import { DoodleCircle, DoodleUnderline } from './Doodle';

interface SectionHeaderProps {
  label: string;
  title: string;
  align?: 'left' | 'center';
  circle?: boolean;
  underline?: boolean;
}

export function SectionHeader({
  label,
  title,
  align = 'left',
  circle = false,
  underline = false,
}: SectionHeaderProps) {
  return (
    <Stack gap="xs" mb="xl" align={align === 'center' ? 'center' : 'flex-start'}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Text
          size="xs"
          tt="uppercase"
          fw={600}
          c="dimmed"
          style={{ letterSpacing: '0.14em' }}
        >
          {label}
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
      >
        <Title
          order={2}
          className="section-title"
          ta={align}
          style={{ fontFamily: 'var(--font-instrument-serif), Georgia, serif' }}
        >
          {circle ? (
            <span className="doodle-circle-host">
              {title}
              <DoodleCircle delay={0.3} />
            </span>
          ) : underline ? (
            <span className="doodle-underline-host">
              {title}
              <DoodleUnderline delay={0.3} />
            </span>
          ) : (
            title
          )}
        </Title>
      </motion.div>
    </Stack>
  );
}
