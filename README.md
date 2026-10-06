# Selimbey

Selimbey is a portable UI/UX skill for Codex. It helps with interface design, redesigns, visual refinement, accessibility, responsive behavior, design systems, and code review. It uses a small entry file and reads detailed guidance only for the work at hand.

## What it covers

Selimbey supports four surface modes:

- Persuade for marketing pages, campaigns, and pricing.
- Operate for apps, dashboards, tools, and settings.
- Read for documentation, articles, and help.
- Experience for portfolios, galleries, and exhibition sites.

The skill also includes focused references for building interfaces, visual craft, quality checks, redesign work, design systems, visual direction, and companion discovery.

## Installation

Selimbey has no runtime dependencies. Install it in the skill directory used by your Codex environment. The examples below use `~/.codex/skills`, which is the standard Codex location.

### Git on Windows

```powershell
$skillPath = Join-Path $HOME ".codex\skills\selimbey"

if (Test-Path (Join-Path $skillPath ".git")) {
    git -C $skillPath pull --ff-only
} elseif (Test-Path $skillPath) {
    throw "The target exists but is not a Git clone: $skillPath"
} else {
    New-Item -ItemType Directory -Force (Split-Path $skillPath) | Out-Null
    git clone https://github.com/ayanoglunorth/selimbey.git $skillPath
}
```

Run the same command later to update an existing Git installation.

### Git on macOS or Linux

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/ayanoglunorth/selimbey.git ~/.codex/skills/selimbey
```

To update it:

```bash
git -C ~/.codex/skills/selimbey pull --ff-only
```

### ZIP installation

1. Download the repository ZIP from GitHub.
2. Extract it and rename the folder to `selimbey` if needed.
3. Move the folder to your Codex skill directory, usually `~/.codex/skills/selimbey`.
4. Restart Codex if the skill menu does not refresh immediately.

The installed folder must contain `SKILL.md` at its root.

## Usage

Call the skill directly:

```text
$selimbey Redesign this analytics dashboard for faster daily use.
```

Selimbey also allows implicit invocation. A Codex environment can select it for ordinary UI/UX work without an explicit command.

## Companion skills

Selimbey does not bundle image generation, screenshot reproduction, motion libraries, brand tools, presentation tools, or UI-audit tools. Those capabilities vary from one installation to another.

When a task needs one of them, Selimbey checks the capabilities available in the active session, chooses the narrowest suitable specialist, and reads its instructions. If none is available, Selimbey continues with its own guidance. This keeps the package portable and avoids a fixed dependency on someone else’s local skill set.

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
│   ├── system.md
│   └── visual-direction.md
├── .gitignore
├── LICENSE
└── README.md
```

## Compatibility

Selimbey needs a Codex surface that supports local skills. Companion discovery depends on the capabilities exposed by that surface. The skill does not install missing tools, change permissions, or guarantee access to an optional specialist.

## License

Selimbey is released under the [MIT License](LICENSE).
