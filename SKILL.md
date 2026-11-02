---
name: selimbey
description: Designs, builds, redesigns, and reviews user interfaces for web, mobile, and desktop (screens, pages, dashboards, forms, components, design systems, accessibility and responsive audits). Carries a compact design baseline so ordinary UI work needs no other skill, and routes to installed specialists (Taste, Impeccable, UI UX Pro Max, motion, image, brand) only when a task needs their depth. Use for any UI/UX request, including "make it look better", "review this screen", "redesign", "landing page", or "fix the layout". Not for backend-only work.
---

# Selimbey

Selimbey is a design baseline plus a router. It does ordinary interface work itself, cheaply, and hands specific jobs to an installed specialist so their long instructions are loaded only when they pay off.

## Workflow

1. **Inspect first.** Read the brief, then the product: stack, component library, tokens, icon set, existing screens, and any `PRODUCT.md`, `DESIGN.md`, or design-system files. Keep product facts, behavior, copy, and brand rules unless the request is a redesign. Ask only when a missing fact blocks the work (for example, no product name); otherwise state your reading in one line and continue.
2. **Design read** (new or redesigned surfaces only). One line: audience, surface mode, tone, density, motion level. Pick one coherent direction.
3. **Route.** Open at most one Selimbey reference from the table below. Then apply the companion rules in [companions.md](references/companions.md) to decide whether a specialist is warranted.
4. **Build or edit** in the project's own stack. Cover every state the component can reach.
5. **Verify once.** Run the checks in [quality.md](references/quality.md#verification), fix all findings together, confirm once, stop.

## Surface modes

| Mode | Surfaces | Success looks like |
| --- | --- | --- |
| **Persuade** | marketing, campaigns, pricing, landing pages | the offer is understood and the primary action is obvious |
| **Operate** | apps, dashboards, tools, settings, admin | scanning is fast, controls are predictable, tasks finish |
| **Read** | docs, articles, help, changelogs | comprehension, structure, reading rhythm |
| **Experience** | portfolios, galleries, exhibitions | the artifact leads and the interface recedes |

Pick the mode from the requested surface, not the product: a tool's landing page is Persuade, its docs are Read. Expressiveness scales with the mode: Persuade and Experience can be bold; Operate and Read show craft as precision and restraint.

## Reference map (load one)

| Situation | Reference |
| --- | --- |
| New screen, page, component, or flow | [build.md](references/build.md) |
| Open-ended brief, new visual world, landing page, portfolio | [visual-direction.md](references/visual-direction.md), then [craft.md](references/craft.md) |
| Refine the look of an existing interface | [craft.md](references/craft.md) |
| Substantial upgrade of an existing interface | [redesign.md](references/redesign.md) |
| Tokens, themes, shared components, several related surfaces | [system.md](references/system.md) |
| Audit, accessibility, forms, responsive, motion, final checks | [quality.md](references/quality.md) |
| iOS, Android, desktop apps, or cross-platform | [native.md](references/native.md) |
| Named specialist, or a job beyond the baseline | [companions.md](references/companions.md) |
| `setup`, or the user asks to install a design capability | [setup.md](references/setup.md) |

## Baseline (always apply)

- **Stack discipline.** Use the existing framework, components, tokens, and icon family. Do not add a framework or a second styling system for a visual change.
- **Semantics.** Native elements first (`button`, `a`, `label`, `dialog`). Custom widgets need roles, names, states, and keyboard support.
- **Contrast.** Body text 4.5:1, large text and UI boundaries 3:1. Never use color as the only cue.
- **Targets.** At least 24×24 CSS px (WCAG 2.2); aim for 44×44 pt on touch (48 dp on Android) with 8 px between targets.
- **Type.** Body 16 px or larger on web, 14 px minimum for dense UI. Line length 45–75 characters. Body line-height 1.5–1.7, headings 1.1–1.3.
- **Spacing.** One scale on a 4 px base (4, 8, 12, 16, 24, 32, 48, 64, 96). Related items closer than unrelated groups.
- **States.** Default, hover, focus-visible, pressed, disabled, loading, empty, error, success, and destructive confirmation wherever reachable.
- **Responsive.** Design from 320–375 px up. No horizontal overflow, no content hidden under fixed UI, reflow at 200% zoom.
- **Motion.** 100–300 ms, individual properties (never `transition: all`), transform and opacity, honor `prefers-reduced-motion`, never shift layout.
- **Content.** Real copy and real data shapes. No lorem ipsum, invented testimonials, or fabricated metrics.

## Token discipline

The baseline above is the cheap path. Load more only when it changes the result:

1. SKILL.md only: small fixes and ordinary components.
2. Plus one Selimbey reference: most tasks.
3. Plus one specialist: only per [companions.md](references/companions.md). Read its entry file and only the sub-reference or command the task needs, not its whole tree.

Never load two direction-setting specialists for the same surface.
