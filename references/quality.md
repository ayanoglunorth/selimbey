# Quality checks

Read this for implementation, review, forms, responsive behavior, interaction, or motion.

## Accessibility and interaction

- Use semantic controls. Keep keyboard order aligned with the visible order and keep focus visible, including near sticky elements and overlays.
- Meet the relevant contrast requirements. Status, validation, selection, and chart data need a cue beyond color.
- Write useful alternatives for meaningful images. Hide decorative images and icons from assistive technology. Name icon-only controls and expose their relevant state.
- Keep headings in order. Use real labels and error associations for fields. Provide a skip route to main content when the page warrants one.
- Critical actions need click, tap, and keyboard paths. Do not make them depend only on hover, drag, or swipe.
- Respect reduced-motion preferences, user text scaling, and browser zoom.

## Forms and feedback

Explain input constraints before errors occur. Keep errors beside the affected field and preserve entered values. A submitted form needs pending feedback and a specific outcome. When several fields fail, add an error summary if it helps recovery. Authentication flows should permit paste and password managers.

Empty states should explain what is missing and offer the next useful action. Match destructive confirmation to the consequence. Disabled controls should not look actionable.

## Responsive and platform behavior

Check a small phone width, a common desktop width, and every breakpoint where the composition changes. Look for overflow, clipped controls, hidden focus, and content under fixed UI. Respect safe areas and platform navigation, text scaling, and system gestures.

## Motion and performance

Motion should communicate feedback, causality, or spatial continuity. It must remain interruptible, keep input available, and avoid layout shift. Use a shared rhythm with a few meaningful animated elements. Simple state feedback usually fits CSS. Seek a specialized motion capability only when deliberate choreography exceeds the existing stack.

Reserve media dimensions or aspect ratios. Load appropriately sized images, defer heavy below-the-fold media, and avoid large visual dependencies without a clear benefit. Keep expensive work out of scroll and resize paths. Use the project’s established list virtualization pattern when the data volume needs it.

Review task flow and accessibility first, then responsive behavior and content hierarchy, then states and feedback, and finally visual polish. Report code-review findings with concrete file and line references.
