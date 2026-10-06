---
name: selimbey
description: Design, redesign, improve, or review web, mobile, and desktop interfaces with clear visual direction, practical UX, and production-ready implementation guidance. Use for ordinary UI/UX work. Excludes brand identity packages, slide decks, and image-only requests.
---

# Selimbey

Use Selimbey for interface work. Read the brief and inspect the existing product before changing it. Keep the current product facts, behavior, copy, brand rules, and styling conventions unless the request calls for a redesign.

Load only the reference that affects the work:

| Situation | Reference |
| --- | --- |
| New screen, feature, page, or component | [build.md](references/build.md) |
| New visual direction, landing page, portfolio, or an open-ended brief | [visual-direction.md](references/visual-direction.md), then [craft.md](references/craft.md) |
| Visual refinement of an existing interface | [craft.md](references/craft.md) |
| A substantial upgrade to an existing interface | [redesign.md](references/redesign.md) |
| Shared components, tokens, themes, or multiple related surfaces | [system.md](references/system.md) |
| Implemented UI, audit, form, responsive behavior, or motion | [quality.md](references/quality.md) |
| A task may benefit from another locally available capability | [companions.md](references/companions.md) |

For a new or redesigned surface, begin with one design read: product purpose, audience, surface mode, visual character, density, and motion level. Pick one coherent direction.

## Surface modes

- **Persuade:** marketing, campaigns, and pricing. Explain the offer and make the primary action obvious.
- **Operate:** apps, dashboards, tools, and settings. Support scanning, predictable controls, and task completion.
- **Read:** documentation, articles, and help. Support comprehension with good structure and reading rhythm.
- **Experience:** portfolios, galleries, and exhibition sites. Keep the artifact central and reduce competing interface elements.

The surface determines the treatment. A campaign can be expressive. A dense operational screen may need restraint. Use dark mode, tile grids, animation, marketing frameworks, and art-directed presentation when they serve the work.

## Baseline

- Use the project’s current stack, component set, tokens, icon family, and styling approach. Avoid adding a framework or a second styling system for a visual change.
- Prefer semantic HTML and native or installed accessible primitives. Cover the states a component can actually reach, including focus, loading, empty, error, and destructive actions where relevant.
- Start from the narrowest relevant viewport. Avoid horizontal overflow, content hidden by persistent controls, inaccessible actions, and motion that shifts layout.
- Check the changed flow at the relevant sizes and themes. Include keyboard use and reduced motion when they apply. Inspect once, fix the findings together, confirm once, and stop.
