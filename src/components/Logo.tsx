'use client';

import { Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { LogoMark } from './LogoMark';

interface LogoProps {
  size?: number;
  variant?: 'mark' | 'wordmark';
  onClick?: () => void;
}

export function Logo({ size = 40, variant = 'wordmark', onClick }: LogoProps) {
  return (
    <Box
      component={onClick ? 'button' : 'div'}
      onClick={onClick}
      aria-label="Miguel Guarrochena"
      className="logo-button"
      style={{
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: onClick ? 'pointer' : 'default',
        display: 'inline-flex',
        color: 'var(--text-primary)',
      }}
    >
      <motion.div
        whileHover={onClick ? { scale: 1.02 } : undefined}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <LogoMark size={size} variant={variant} />
      </motion.div>
    </Box>
  );
}
