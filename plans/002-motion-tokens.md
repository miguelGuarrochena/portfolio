# Plan 002 — Tokens de motion (easing/duración consistentes)

Commit base: `022e1b6` · Severidad: MEDIUM · Categoría: Cohesión

## Problema
Conviven tres criterios de easing sin sistema:
- Bezier explícito `[0.22, 1, 0.36, 1]` (ProjectsSection, CSS de cards).
- `ease: 'easeInOut'` (doodles, antes de este trabajo).
- Sólo `duration` sin `ease` → spring por defecto de framer (reveals de secciones).

Y no hay tokens de duración compartidos: 0.35 / 0.5 / 0.55 / 0.6 dispersos.

## Objetivo
Una sola fuente de verdad para curvas y duraciones, reutilizada en JS y CSS.

## Implementación
1. `src/lib/motion.ts`:
   ```ts
   export const EASE_OUT = [0.22, 1, 0.36, 1] as const; // entradas
   export const EASE_PEN = [0.33, 0, 0.2, 1] as const;  // trazos doodle
   export const DUR = { fast: 0.35, base: 0.5, slow: 0.6 } as const;
   ```
2. Reemplazar los `transition={{ duration: 0.5 }}` de los reveals por
   `transition={{ duration: DUR.base, ease: EASE_OUT }}` (entradas = ease-out, no spring).
3. En `globals.css`, definir `--ease-out: cubic-bezier(0.22,1,0.36,1)` y usarlo en
   `.surface-card`, `.carousel`—ya no existe—, botones, etc.

## Alcance / límites
- Refactor cosmético: mismos valores percibidos, sólo centralizados.
- No cambiar duraciones drásticamente; unificar, no rediseñar.

## Verificación
- Comparar antes/después: las entradas deben sentirse iguales o un pelín más "crisp"
  (ease-out real en vez de spring con overshoot).
- `grep -rn "duration:" src/` no debería mostrar números sueltos fuera de `motion.ts`.
