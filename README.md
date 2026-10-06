# Selimbey

Selimbey is a portable UI/UX skill for Codex. It covers interface design, redesigns, visual refinement, accessibility, responsive behavior, design systems, and code review. It reads extra guidance only when the task needs it.

## Install

Run this once in a terminal:

```bash
npx skills@latest add ayanoglunorth/selimbey -s selimbey -a codex -g -y
```

Restart Codex after installation if Selimbey does not appear immediately.

The command installs Selimbey for Codex at user scope. It needs Node.js and network access. The skill itself has no runtime dependencies.

### Update

```bash
npx skills@latest update selimbey -g -y
```

### Manual installation

Clone the repository into your Codex skill directory if you prefer Git:

```bash
git clone https://github.com/ayanoglunorth/selimbey.git ~/.codex/skills/selimbey
```

On Windows PowerShell, replace `~/.codex/skills/selimbey` with `$HOME\.codex\skills\selimbey`.

## Use it

Call Selimbey directly:

```text
$selimbey Redesign this analytics dashboard for faster daily use.
```

Codex can also select Selimbey automatically for ordinary UI and UX work.

For a first-run check of optional design companions, use:

```text
$selimbey setup
```

Setup checks the current capability catalog, identifies useful gaps, suggests verified installable options, and asks before installing anything.

## Optional companions

Selimbey works without companion skills. Setup can look for one suitable option in each of these groups:

- UI and UX reference material for interaction patterns, accessibility, responsive behavior, and components.
- Interface critique and refinement for detailed visual review.
- Visual direction for landing pages, portfolios, and frontend art direction.

The names and availability of these capabilities differ across installations. Selimbey uses descriptions from the active catalog instead of expecting a fixed local skill set. It recommends only verified sources and installs only after approval.

Image generation, screenshot reproduction, complex motion, brand work, presentations, and formal UI audits remain task-specific. Selimbey adds them only when a request needs them.

## What it covers

Selimbey supports four surface modes:

- Persuade for marketing pages, campaigns, and pricing.
- Operate for apps, dashboards, tools, and settings.
- Read for documentation, articles, and help.
- Experience for portfolios, galleries, and exhibition sites.

Its references cover interface building, visual craft, quality checks, redesign work, design systems, visual direction, companion discovery, and companion setup.

## Structure

```text
selimbey/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── references/
│   ├── build.md
│   ├── companions.md
│   ├── craft.md
│   ├── quality.md
│   ├── redesign.md
│   ├── setup.md
│   ├── system.md
│   └── visual-direction.md
├── .gitignore
├── LICENSE
└── README.md
```

## Compatibility

Selimbey needs a Codex surface with local skill support. Companion setup depends on the capabilities exposed by that surface. It does not install missing tools, change permissions, or use an unverified source without the user’s approval.

## License

Selimbey is released under the [MIT License](LICENSE).
