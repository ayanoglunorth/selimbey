# Build interfaces

Read this for a new screen, page, component, or feature flow.

Start with the user’s goal, the order of information, and the primary action. Give the main action clear visual and semantic priority. Keep secondary actions available without making them compete. Familiar patterns are usually the best choice unless a different pattern solves a specific problem.

Build from real content and possible states. Add loading, empty, error, success, and permission states when the surface can reach them. Treat destructive actions with care and make recovery possible when the product permits it.

## Persuade

State the audience outcome early. Add evidence, explain the offer, answer the strongest objection, and keep the call to action clear. AIDA can help shape marketing copy: attention, interest, desire, then action. It does not require a fixed page structure. Prefer demonstrations, proof, and useful editorial content over a repeated landing-page template.

## Operate

Put the user’s current task and current state first. Keep navigation stable and back behavior predictable. Match information density to how often the tool is used. Plan sorting, filtering, loading, empty, overflow, and narrow-screen behavior before styling a table. Put rare controls behind progressive disclosure, not routine actions.

## Read

Use a clear title, a useful summary, a logical heading sequence, readable line lengths, and in-page navigation when the material needs it. Long text needs a controlled measure and consistent vertical rhythm. Diagrams, examples, and callouts should help the reader follow the material.

## Experience

Identify the artifact people came to see and make it visible early. Remove decoration that competes with it. Expressive controls can fit this mode when they remain discoverable, operable, and easy to reverse.

## Components and responsive behavior

- Give inputs visible labels, useful helper text, and specific nearby errors. Validate when feedback is useful, rather than on every keystroke.
- Show immediate pending feedback for async actions and a lasting success or failure result. Prevent accidental repeat submissions.
- Keep icon use consistent. Icon-only controls need accessible names and generous hit areas. Decorative icons cannot carry essential meaning.
- Use a dialog for a focused interruption. Prefer inline editing, disclosure, or a side panel for lighter work.
- Keep skeletons close to the content they replace. Use a spinner only when it explains the wait.
- Arrange narrow layouts first, then add columns, sidebars, or persistent controls when space permits. Let important labels wrap before hiding them.
- Reserve space for fixed headers, footers, and bottom actions. Respect platform safe areas.
