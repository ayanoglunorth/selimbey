# Selimbey

Selimbey helps coding agents design, improve, and review interfaces. It covers
web, mobile, and desktop work, from a single form to a broader redesign. Before
changing an existing product, it looks at the current interface, components,
brand, and codebase.

The main skill is self-contained. It opens supporting references when a task
calls for them; the design companions below are optional.

## Highlights

- Handles new screens, redesigns, design systems, and reviews in one skill.
- Treats a pricing page differently from a dashboard or an article.
- Works with the project's existing components, tokens, icons, and styling.
- Checks the states and viewports the changed interface actually reaches.
- Uses an available specialist's full instructions when the user names it or requests its particular method or output.

## Installation

Run the interactive installer with Node.js 22.20 or later:

```bash
npx -y github:ayanoglunorth/selimbey
```

Choose one or more agents: Codex, Claude Code, Cursor, Gemini CLI, Antigravity
IDE, or Antigravity CLI (`agy`). Gemini CLI and Antigravity are separate
targets. Then choose the design companions you want; none are selected by
default. The installer uses user scope, skips skill folders it finds, and
reports each result. Restart the agent or open a new chat afterward.

Use `--dry-run` to preview commands without installing. Use `--help` for usage.
On npm 12 or newer, add `--allow-git=root` after `npx` if npm blocks a GitHub
package with `EALLOWGIT`.

For a standard skill-only installation without companion selection:

```bash
npx skills@latest add ayanoglunorth/selimbey --skill selimbey -a codex -g
```

Change `codex` to another agent supported by the [Skills CLI](https://github.com/vercel-labs/skills/blob/main/docs/commands.md).
Selimbey itself has no runtime dependencies. Its installer needs Node.js and
network access.

### Update or install manually

For an existing Skills CLI installation:

```bash
npx skills@latest update selimbey -g
```

The interactive installer skips existing skill folders. For a manual Codex
install, clone this repository into `~/.agents/skills/selimbey` and restart
Codex. Other agents use their own skill directories.

## Optional design companions

The terminal installer offers three independent choices:

| Companion | What it adds | Source |
| --- | --- | --- |
| Impeccable | Detailed interface critique and polish, with agent-specific integrations | [Official site](https://impeccable.style/docs/) |
| Taste Skill (`design-taste-frontend`) | Stronger visual direction for frontend work | [Repository](https://github.com/Leonxlnx/taste-skill) |
| UI UX Pro Max | Searchable styles, palettes, typography, UX guidance, and stack-specific references | [Repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) |

Choose any combination or skip them all. The installer uses the project's
documented terminal method where one exists for the selected agent. It reports
unsupported pairs with a link to manual instructions. Impeccable's global
install provides the skill; its edit hooks are project-specific on some agents.
UI UX Pro Max needs Python 3 when its search script runs.

During ordinary UI work, Selimbey uses an available specialist when the user
names it or requests its particular method or output. It reads that skill's
complete instructions and follows the applicable workflow. It does not install
companions as part of a design task.

## Usage

Invoke Selimbey directly:

```text
$selimbey Redesign this analytics dashboard for faster daily use.
```

Other examples:

```text
$selimbey Review this form for keyboard access and mobile layout issues.
$selimbey Build a pricing page using this project's current components.
```

Codex may also select Selimbey automatically for ordinary UI and UX requests. For an optional check of available design companions after installation, start a new chat and use:

```text
$selimbey setup
```

This chat command checks the capabilities the current host exposes, suggests
verified options for any gaps, and asks before installing. It runs separately
from the terminal installer.

## How it works

1. Read the brief and inspect the product if one exists.
2. Match the work to its surface: **Persuade** for marketing, **Operate** for tools and dashboards, **Read** for content, or **Experience** for portfolios and galleries.
3. Open the reference that fits the job, such as building, redesign, visual direction, or quality.
4. Work in the current stack and check the changed flow at relevant sizes and states.

The [SKILL.md](SKILL.md) file contains the entrypoint and routing table. Guidance in `references/` is loaded only when its situation applies. `agents/openai.yaml` defines display metadata and automatic invocation policy.

## Limitations

- Selimbey provides UI/UX guidance; a task may still require a separate image, motion, brand, browser, or presentation capability.
- Companion installation depends on the selected agent's supported native installer. Unsupported pairs are reported, not silently replaced by a reduced integration.
- Existing product behavior, brand rules, user permissions, and host policy still govern the work.

## Project structure

```text
selimbey/
├── SKILL.md
├── agents/openai.yaml
├── references/
│   ├── build.md
│   ├── companions.md
│   ├── craft.md
│   ├── quality.md
│   ├── redesign.md
│   ├── setup.md
│   ├── system.md
│   └── visual-direction.md
├── install.mjs
├── install.test.mjs
├── package.json
├── LICENSE
└── README.md
```

## Validation

Run `npm test` to check installer choices and failure handling. The skill can also be checked with Codex Skill Creator's `quick_validate.py`. These checks do not install third-party companions; use `--dry-run` to inspect the terminal flow.

## Contributing

Focused issues and pull requests are welcome. Keep the core skill portable, and add specialist guidance only when it improves a concrete UI task.

## License

Released under the [MIT License](LICENSE).
