# Planes de animación — portfolio

Auditoría de motion (skill `improve-animations`) + diagnóstico de diseño (`ui-ux-pro-max`).
Repo chico, auditado inline. Commit base: `022e1b6`.

## Recon
- Stack: Next.js 14 + Mantine 7 + framer-motion 10.
- Motion: reveals `initial/whileInView` en todas las secciones; transiciones CSS en `globals.css`; doodles SVG con `pathLength`.
- Personalidad: portfolio cálido y con toque lúdico (doodles a mano, serif display). No es un dashboard: la sobriedad importa.

## Hallazgos (por leverage)

| # | Sev | Categoría | Ubicación | Hallazgo | Estado |
|---|-----|-----------|-----------|----------|--------|
| 1 | HIGH | Accesibilidad | HeroSection, About/Skills/Experience/Projects, SectionHeader | Los reveals de framer-motion (opacity+desplazamiento) NO están gateados por `prefers-reduced-motion`. La flecha "Scroll" tiene un bounce infinito. Ambas skills lo marcan HIGH. | plan `001` |
| 2 | MEDIUM | Cohesión / tokens | Todo el sitio | Tres criterios de easing conviviendo (bezier explícito, `easeInOut`, spring default de framer) y sin tokens de duración/ease compartidos. | plan `002` |
| 3 | — | Missed opp. (aplicado) | Doodle.tsx | Los trazos eran Bézier perfectas (vectoriales). Se les agregó filtro de temblor + tinta + timing de birome. | ✅ DONE |

## Notas de ui-ux-pro-max
- Confirma: respetar `prefers-reduced-motion` (HIGH), evitar animación continua decorativa (la flecha), animar 1–2 elementos por vista, ease-out en entradas.
- La recomendación de la DB fue "portfolio dark-only + acento azul": **no aplica** — choca con la identidad cálida ya establecida. Se descarta a propósito.
- Tipografía sugerida para lo hecho a mano: Kalam / Patrick Hand (más "marcador" que la Dancing Script actual del label). Opcional, cambio de identidad.

## Orden sugerido
1. `001-reduced-motion.md` — accesibilidad, bajo riesgo, alto valor.
2. `002-motion-tokens.md` — consistencia, refactor cosmético.
