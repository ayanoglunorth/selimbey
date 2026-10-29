# Companion setup

Read this when the user asks for `$selimbey setup`, requests recommended companions, or asks Selimbey to install a design capability.

Selimbey covers ordinary interface work without any companion. Setup is optional. Its purpose is to find useful gaps in the current environment without adding overlapping skills by default.

This chat-based setup is separate from the terminal installer documented in the README. The terminal installer offers Impeccable, Taste Skill (`design-taste-frontend`), and UI UX Pro Max when Selimbey is first installed. Here, inspect the live environment before making any recommendation.

## Check the current environment

Use the live capability catalog as the source of truth. Look for installed capabilities in these groups:

- UI and UX reference material for interaction patterns, accessibility, responsive behavior, and components.
- Interface critique or refinement for detailed visual review and polish.
- Visual direction for distinctive landing pages, portfolios, or frontend art direction.

Report the installed match in each group. Treat a capability as present when its description clearly covers the group, even if its name differs. Do not recommend a second skill for a group that already has a suitable match.

## Recommend before installing

For each missing group, describe the benefit in one short sentence and name only candidates with a verified source from the current capability catalog, a supported marketplace, or a URL supplied by the user. Explain when a candidate overlaps with Selimbey. Do not invent a repository, package name, plugin, or installation command.

Known candidates to verify against the current host are [Impeccable](https://impeccable.style/docs/) for critique and polish, [Taste Skill](https://github.com/Leonxlnx/taste-skill) for frontend visual direction, and [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) for searchable design references. Offer only the ones that fill a real gap.

Ask for approval before every installation or plugin enablement. The user may approve one candidate, several candidates, or none.

## Install after approval

Use a locally available skill installer, plugin manager, or the source’s own documented installation method. Read the selected installer’s instructions before running it. Install only the approved capability and report where it was installed. If no verified installer or source is available, state that a source URL is needed.

Do not install a broad collection of design skills in one step. One capable skill per group is normally enough. Motion, image generation, brand, presentation, and screenshot-reproduction capabilities stay optional until a task needs them.
