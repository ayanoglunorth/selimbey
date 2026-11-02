# Companion routing

Selimbey covers ordinary interface work alone. A specialist is used when it adds depth the baseline lacks, so its long instructions are paid for only when they change the result.

## Rules

1. **Catalog, not filesystem.** Check the skill list the host already provides. Do not scan home directories or guess paths. Names below are matched by description too: a skill with a different name that clearly covers the job counts.
2. **Named wins.** If the user names a skill or asks for its specific method or output, use it, even when Selimbey could produce a general version. If it is not installed, say so; do not imitate it silently.
3. **One direction owner per surface.** Taste, Impeccable's new-work flow, and the style skills (below) each set a visual direction. Use one. Selimbey stays the integrator: stack, states, accessibility, verification.
4. **Pay once, narrowly.** Read the specialist's entry `SKILL.md`, then only the sub-reference or command the task needs. Run its scripts as it instructs. Do not summarize it from memory; a mention is not use.
5. **Absent means continue.** If no suitable specialist is installed, finish with Selimbey. Mention the gap once, in one line, only if it limits the requested result. Never install during a design task; installation belongs to [setup.md](setup.md) and needs approval.
6. **Handoff.** Give the specialist the design read (audience, mode, tone, density), the stack, and the files in scope. After it finishes, apply the Selimbey baseline and the [verification](quality.md#verification) pass to its output.

## Router

| Signal in the request | Specialist | How to use it |
| --- | --- | --- |
| Landing page, marketing site, portfolio, product page; "generic", "AI-looking", "make it award-level"; dashboard or admin screen needing a distinct look | `design-taste-frontend` (Taste Skill) | It deals directions with `scripts/draw.mjs` and checks pages with `scripts/inspect.mjs`; it needs Node 22+ and Chrome, Edge, or Chromium. Pages follow its run; app screens follow its `references/app-screens.md`. Run from the project root: it writes `.taste-skill/`. |
| Critique, audit, polish, simplify, harden, onboard, typeset, layout, colorize, bolder, quieter, animate, adapt, optimize, extract tokens, document the design system, native iOS/Android UI | `impeccable` | Pick the matching command from its Commands table and load only that reference. Its setup step runs `scripts/impeccable context` once per session; follow it. It owns `PRODUCT.md` and `DESIGN.md`. |
| Need a lookup, not a method: palette, font pairing, style names, chart type, UX rule, stack-specific guidance (React, Next, Vue, SwiftUI, Flutter, Compose, shadcn, etc.) | `ui-ux-pro-max` | Run its search script with the right domain or `--stack` and read the answer. Needs Python 3 (`python` on Windows). Do not read its large SKILL.md end to end; read the Search Reference and Query Contract sections. |
| Fine micro-detail: shadows, borders, radii, optical alignment, icon states, enter/exit polish | `make-interfaces-feel-better` | Quick or full review mode. |
| Choreographed or scroll-driven motion beyond CSS transitions | `gsap-*` skills, `motion-design`, `motion-art-direction`, `kinetic-typography` | Pick the one matching the library or technique. |
| Reproduce a screenshot, or an image-first concept | `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile` | Use only when the user wants image-led work or close reproduction. |
| A named brand's look | `awesome-design-md` | Apply the named brand's design language. |
| A specific aesthetic (minimal, brutalist, high-end) | `minimalist-ui`, `industrial-brutalist-ui`, `high-end-visual-design` | One style skill at most; do not stack it with Taste. |
| Existing site that looks cheap or templated, ask is a broad upgrade | `redesign-existing-projects` or Impeccable | Prefer Impeccable if installed; otherwise [redesign.md](redesign.md). |
| Logo, brand identity, banners, slides, social assets | `brand`, `design`, `brandkit`, `slides`, `banner-design`, `social` | Outside UI work; hand off whole. |

## Choosing between overlapping specialists

- Open brief for a public page: Taste. Existing UI needing review or targeted improvement: Impeccable. Need a fact or option list: UI UX Pro Max.
- Taste then Impeccable in sequence is fine (direction, then audit/polish). Taste and a style skill together is not.
- If only one of them is installed, use it for its nearest job and fill the rest from the Selimbey baseline.

## What stays with Selimbey

Accessibility floor, state coverage, responsive checks, the stack-fit rule, and the final verification pass always apply, whichever specialist ran. Specialists do not replace them, and Selimbey does not duplicate their internals.

Routing does not install skills, change permissions, or authorize external actions.
