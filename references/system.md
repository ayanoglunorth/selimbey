# Design systems and tokens

Read this when work spans several related surfaces, themes, or reusable components. A one-off screen rarely needs a new system layer.

Use three token layers when repetition justifies them:

1. Primitive tokens hold raw scales such as color ramps, spacing steps, radii, font families, and durations.
2. Semantic tokens name a purpose such as `surface`, `text-muted`, `action-primary`, `border-subtle`, or `status-danger`.
3. Component tokens cover a component role such as `button-primary-background` or `dialog-surface`.

Components should consume semantic or component roles instead of raw values. Keep names stable and useful. A value used once does not need a token.

For a shared component, describe its purpose, content rules, responsive behavior, and the states it can reach. These can include default, hover, focus-visible, pressed, selected, disabled, loading, error, and empty. Reuse accessible primitives and the conventions already present in the project.

Map light and dark themes separately when both belong to the product. Test text, borders, overlays, and interaction states in each theme. Use a small elevation and z-index scale. Keep type and spacing scales consistent, while allowing a surface to become denser when the use case supports it.

Treat the project’s current system as the source of truth. Extend it only when repeated use supports the addition.
