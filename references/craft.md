# Visual craft

Read this for visual direction, landing pages, implementation polish, or an interface that feels generic.

Choose a visual character that suits the audience and the surface. It might be restrained editorial, crisp utility, tactile premium, playful, technical, or something defined by the brief. Decide the typography, palette behavior, density, surface treatment, imagery, and motion as one system. The choices should reinforce one another.

Hierarchy comes before decoration. Use content order, type scale, contrast, alignment, and space to direct attention. One display family and one text family usually cover a surface. Keep body text readable, let headings wrap naturally, and use tabular figures where aligned data benefits from them.

## Layout and surfaces

Choose a structure that suits the content: editorial flow, split view, task canvas, data grid, narrative stack, or modular comparison. Tile grids work for distinct items that people need to scan or compare. They are not a default layout.

Use a deliberate spacing rhythm. Related items belong closer together than unrelated groups. Align asymmetric content by eye when geometric centering looks wrong. Avoid turning every region into a card. Borders can show structure or state. Shadows can show elevation. Keep nested corners visually related and use a small, consistent elevation scale.

## Color, imagery, and icons

Give color clear roles: canvas, surface, primary text, muted text, border, action, and status. Pair functional color with text, an icon, or another cue. Treat a dark theme as its own tested set of surfaces and contrast pairs.

Use imagery to demonstrate a product, establish a real editorial mood, or carry information. Keep framing, crop choices, and color treatment consistent. Preserve official marks and their required clear space.

Use one icon family with a consistent stroke or fill style at each level of the hierarchy. Align icons with nearby text and use the project’s theme mechanism for state changes.

## Finishing details

- Target individual properties in transitions. Do not use `transition: all`.
- Give press states immediate feedback without moving surrounding content.
- Prefer transforms and opacity for motion. Use keyframes for staged sequences. Respect reduced-motion preferences.
- Make focus, selection, pressed, disabled, and error states distinguishable without color alone.
- Check font rendering, image outlines, icon spacing, repeated-row rhythm, and nested corner radii.

Avoid familiar filler patterns unless the product content truly calls for them: copied hero layouts, repeated empty cards, decorative status pills, arbitrary blur, layered cards, emoji controls, invented testimonials, placeholder text, and motion without a reason.
