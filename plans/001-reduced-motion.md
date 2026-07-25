# Plan 001 — Respetar prefers-reduced-motion en reveals e infinitos

Commit base: `022e1b6` · Severidad: HIGH · Categoría: Accesibilidad

## Problema
1. Los reveals de scroll usan `initial={{opacity:0, y/x:...}}` + `whileInView`. Con
   `prefers-reduced-motion: reduce`, el usuario igual recibe todos los desplazamientos.
2. La flecha "Scroll" del hero hace `animate={{ y:[0,4,0] }}` con `repeat: Infinity`
   (movimiento continuo decorativo), sin apagarse con reduced-motion.

Archivos: `HeroSection.tsx`, `AboutSection.tsx`, `SkillsSection.tsx`,
`ExperienceSection.tsx`, `SectionHeader.tsx`, `ProjectsSection.tsx`.

## Objetivo
Con reduced-motion activo: sin desplazamientos ni loops. El contenido aparece
(fade suave o directo), nunca se traslada; la flecha queda estática.

## Implementación (patrón)
Framer expone `useReducedMotion()`. En cada componente con reveal:

```tsx
import { useReducedMotion } from 'framer-motion';
// ...
const reduce = useReducedMotion();

// Reemplazar el initial con desplazamiento por uno condicional:
initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
whileInView={{ opacity: 1, y: 0 }}      // y:0 es no-op cuando initial ya es 0
transition={reduce ? { duration: 0 } : { duration: 0.5, ease: [0.22,1,0.36,1] }}
```

Para la flecha infinita del hero (`HeroSection.tsx`, ambos bloques desktop/mobile):

```tsx
<motion.span
  animate={reduce ? undefined : { y: [0, 4, 0] }}
  transition={reduce ? undefined : { repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
>
```

## Alcance / límites
- No tocar la lógica de negocio ni el layout.
- No eliminar las animaciones para usuarios sin la preferencia.
- El bloque `@media (prefers-reduced-motion: reduce)` de `globals.css` ya cubre
  CSS (orbe del hero, hovers de card, scroll-behavior). Este plan cubre lo de JS/framer.

## Verificación
- DevTools → Rendering → "Emulate prefers-reduced-motion: reduce".
- Scrollear: las secciones aparecen sin trasladarse; la flecha no rebota.
- Sin la preferencia: todo se comporta como hoy.
