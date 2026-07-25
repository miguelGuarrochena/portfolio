'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';
import type { CSSProperties, ReactNode } from 'react';

/**
 * Garabatos animados estilo marcador.
 * El trazo se "dibuja" solo (pathLength) al cargar o al entrar en viewport.
 * Todos usan currentColor -> se controla con la clase .doodle (var --doodle).
 *
 * Para que se vean hechos a mano de verdad, cada trazo pasa por un filtro
 * de "temblor" (feTurbulence + feDisplacementMap) que rompe la curva Bézier
 * perfecta, y el timing usa una curva no lineal (rápido al empezar, frena al
 * final) como un trazo de marcador real.
 */

type Trigger = 'load' | 'view';

interface BaseProps {
  trigger?: Trigger;
  delay?: number;
  duration?: number;
  className?: string;
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Curva de un trazo real: arranca decidido y frena al final.
const PEN_EASE = [0.33, 0, 0.2, 1] as const;

// Opacidad < 1 para que el trazo lea como tinta, no como vector plano.
// Funciona en claro y oscuro (no usa blend-mode).
const INK_OPACITY = 0.92;

function useAnim(trigger: Trigger, delay: number, duration: number) {
  const transition = { duration, delay, ease: PEN_EASE };
  if (trigger === 'load') {
    return {
      initial: { pathLength: 0, opacity: 0 },
      animate: { pathLength: 1, opacity: 1 },
      transition,
    };
  }
  return {
    initial: { pathLength: 0, opacity: 0 },
    whileInView: { pathLength: 1, opacity: 1 },
    viewport: { once: true, margin: '-12% 0px' },
    transition,
  };
}

/** Filtro de temblor a mano alzada. `seed` y `scale` varían el carácter. */
function RoughFilter({
  id,
  seed,
  scale,
  baseFrequency,
}: {
  id: string;
  seed: number;
  scale: number;
  baseFrequency: number;
}) {
  return (
    <filter id={id} x="-35%" y="-35%" width="170%" height="170%">
      <feTurbulence
        type="fractalNoise"
        baseFrequency={baseFrequency}
        numOctaves={2}
        seed={seed}
        result="noise"
      />
      <feDisplacementMap
        in="SourceGraphic"
        in2="noise"
        scale={scale}
        xChannelSelector="R"
        yChannelSelector="G"
      />
    </filter>
  );
}

/* ------------------------------------------------------------------ */
/* Flecha curva que apunta a algo (por defecto hacia abajo-derecha)    */
/* ------------------------------------------------------------------ */
export function DoodleArrow({
  trigger = 'view',
  delay = 0,
  duration = 0.95,
  className,
}: BaseProps) {
  const a = useAnim(trigger, delay, duration);
  const fid = `rough-${useId()}`;
  return (
    <svg
      className={`doodle ${className ?? ''}`}
      viewBox="0 0 120 110"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <RoughFilter id={fid} seed={2} scale={3.5} baseFrequency={0.02} />
      </defs>
      <g filter={`url(#${fid})`} opacity={INK_OPACITY}>
        <motion.path
          d="M10 14 C 6 48, 28 80, 70 88"
          strokeWidth={4}
          {...stroke}
          {...a}
        />
        <motion.path
          d="M70 88 L 52 80 M70 88 L 60 70"
          strokeWidth={4}
          {...stroke}
          initial={a.initial}
          {...(trigger === 'load'
            ? { animate: a.animate }
            : { whileInView: (a as any).whileInView, viewport: (a as any).viewport })}
          transition={{ ...a.transition, delay: delay + duration * 0.7 }}
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Círculo dibujado a mano (doble vuelta), se ajusta al contenedor     */
/* ------------------------------------------------------------------ */
export function DoodleCircle({
  trigger = 'view',
  delay = 0,
  duration = 1.05,
  className,
}: BaseProps) {
  const a = useAnim(trigger, delay, duration);
  const fid = `rough-${useId()}`;
  return (
    <svg
      className={`doodle doodle-circle ${className ?? ''}`}
      viewBox="0 0 200 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <RoughFilter id={fid} seed={7} scale={2.4} baseFrequency={0.016} />
      </defs>
      <g filter={`url(#${fid})`} opacity={INK_OPACITY}>
        <motion.path
          d="M104 8 C 38 4, 8 26, 12 52 C 16 82, 78 96, 134 92 C 186 88, 198 60, 188 38 C 178 16, 132 6, 80 8"
          strokeWidth={3}
          {...stroke}
          {...a}
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Subrayado tipo marcador (se ajusta al ancho del contenedor)         */
/* ------------------------------------------------------------------ */
export function DoodleUnderline({
  trigger = 'view',
  delay = 0,
  duration = 0.75,
  className,
}: BaseProps) {
  const a = useAnim(trigger, delay, duration);
  const fid = `rough-${useId()}`;
  return (
    <svg
      className={`doodle doodle-underline ${className ?? ''}`}
      viewBox="0 0 200 24"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <RoughFilter id={fid} seed={4} scale={1.8} baseFrequency={0.03} />
      </defs>
      <g filter={`url(#${fid})`} opacity={INK_OPACITY}>
        <motion.path
          d="M6 14 C 50 6, 110 22, 196 10"
          strokeWidth={5}
          {...stroke}
          {...a}
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Flecha hacia abajo "seguí scrolleando"                              */
/* ------------------------------------------------------------------ */
export function DoodleDownArrow({
  trigger = 'view',
  delay = 0,
  duration = 0.85,
  className,
}: BaseProps) {
  const a = useAnim(trigger, delay, duration);
  const fid = `rough-${useId()}`;
  return (
    <svg
      className={`doodle doodle-down ${className ?? ''}`}
      viewBox="0 0 60 90"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <RoughFilter id={fid} seed={5} scale={3} baseFrequency={0.022} />
      </defs>
      <g filter={`url(#${fid})`} opacity={INK_OPACITY}>
        <motion.path
          d="M30 8 C 22 24, 38 36, 30 54 C 26 64, 32 70, 30 78"
          strokeWidth={4}
          {...stroke}
          {...a}
        />
        <motion.path
          d="M30 80 L 18 64 M30 80 L 42 64"
          strokeWidth={4}
          {...stroke}
          initial={a.initial}
          {...(trigger === 'load'
            ? { animate: a.animate }
            : { whileInView: (a as any).whileInView, viewport: (a as any).viewport })}
          transition={{ ...a.transition, delay: delay + duration * 0.7 }}
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Estrella de 5 puntas dibujada a mano                                */
/* ------------------------------------------------------------------ */
export function DoodleStar({
  trigger = 'view',
  delay = 0,
  duration = 0.7,
  className,
}: BaseProps) {
  const a = useAnim(trigger, delay, duration);
  const fid = `rough-${useId()}`;
  return (
    <svg
      className={`doodle doodle-star ${className ?? ''}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <RoughFilter id={fid} seed={9} scale={1.1} baseFrequency={0.035} />
      </defs>
      <g filter={`url(#${fid})`} opacity={INK_OPACITY}>
        <motion.path
          d="M12 2.4 L14.8 8.6 L21.4 9.2 L16.3 13.8 L17.9 20.3 L12 16.7 L6.1 20.3 L7.7 13.8 L2.6 9.2 L9.2 8.6 Z"
          strokeWidth={2}
          {...stroke}
          {...a}
        />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Etiqueta manuscrita                                                 */
/* ------------------------------------------------------------------ */
export function DoodleLabel({
  children,
  trigger = 'view',
  delay = 0,
  className,
  style,
}: BaseProps & { children: ReactNode; style?: CSSProperties }) {
  const common = {
    initial: { opacity: 0, scale: 0.8, rotate: -6 },
    transition: { duration: 0.4, delay, ease: 'easeOut' as const },
  };
  return (
    <motion.span
      className={`doodle-label ${className ?? ''}`}
      style={style}
      {...common}
      {...(trigger === 'load'
        ? { animate: { opacity: 1, scale: 1, rotate: -6 } }
        : {
            whileInView: { opacity: 1, scale: 1, rotate: -6 },
            viewport: { once: true, margin: '-12% 0px' },
          })}
    >
      {children}
    </motion.span>
  );
}
