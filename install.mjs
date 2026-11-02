#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { pathToFileURL } from 'node:url';
import { parseArgs } from 'node:util';

const project = 'selimbey';
const agents = [
  ['codex', 'Codex'], ['claude-code', 'Claude Code'],
  ['cursor', 'Cursor'], ['gemini-cli', 'Gemini CLI'],
  ['antigravity', 'Antigravity (IDE)'], ['antigravity-cli', 'Antigravity CLI (agy)'],
];
const companions = [
  ['impeccable', 'Impeccable', 'Interface critique and polish', 'https://impeccable.style/docs/'],
  ['design-taste-frontend', 'Taste Skill', 'Visual direction for frontend work', 'https://github.com/Leonxlnx/taste-skill'],
  ['ui-ux-pro-max', 'UI UX Pro Max', 'Searchable design references', 'https://github.com/nextlevelbuilder/ui-ux-pro-max-skill'],
];

export function parseSelection(value, length) {
  if (!value.trim()) return [];
  const parts = value.split(/[ ,]+/);
  if (parts.some(part => !/^[1-9]\d*$/.test(part) || Number(part) > length)) {
    throw new Error(`Enter numbers from 1 to ${length}, separated by commas.`);
  }
  return [...new Set(parts.map(part => Number(part) - 1))];
}

export function parseOptions(argv) {
  const { values } = parseArgs({ args: argv, strict: true, options: {
    agent: { type: 'string', multiple: true }, companion: { type: 'string', multiple: true },
    'all-companions': { type: 'boolean' }, 'dry-run': { type: 'boolean' },
    list: { type: 'boolean' }, help: { type: 'boolean' },
  } });
  const split = list => (list ?? []).flatMap(value => value.split(',')).map(value => value.trim()).filter(Boolean);
  const targets = [...new Set(split(values.agent))];
  const picked = values['all-companions'] ? companions.map(item => item[0]) : [...new Set(split(values.companion))];
  const unknownAgent = targets.find(id => !agents.some(item => item[0] === id));
  if (unknownAgent) throw new Error(`Unknown agent "${unknownAgent}". Use --list to see valid ids.`);
  const unknownCompanion = picked.find(id => !companions.some(item => item[0] === id));
  if (unknownCompanion) throw new Error(`Unknown companion "${unknownCompanion}". Use --list to see valid ids.`);
  return { agents: targets, companions: picked, dryRun: !!values['dry-run'], list: !!values.list, help: !!values.help };
}

function steps(name, agent) {
  const npx = (pkg, ...args) => ['npx', ['-y', pkg, ...args]];
  const provider = { codex: 'codex', 'claude-code': 'claude', cursor: 'cursor', 'gemini-cli': 'gemini', antigravity: 'antigravity' }[agent];
  const native = {
    impeccable: provider && [npx('impeccable@latest', 'install', '-y', `--providers=${provider}`, '--scope=global')],
    'design-taste-frontend': [npx('skills@latest', 'add', 'Leonxlnx/taste-skill', '--skill', 'design-taste-frontend', '-a', agent, '-g', '-y')],
    'ui-ux-pro-max': provider && [npx('ui-ux-pro-max-cli@latest', 'init', '--ai', provider, '--global')],
  };
  return native[name] ?? null;
}

export function installed(name, agent, pathExists = existsSync, home = homedir()) {
  const folder = {
    codex: ['.agents'], 'claude-code': ['.claude'], cursor: ['.cursor'],
    'gemini-cli': ['.gemini'], antigravity: ['.gemini', 'antigravity'],
    'antigravity-cli': ['.gemini', 'antigravity-cli'],
  }[agent];
  if (!folder) return false;
  return pathExists(join(home, ...folder, 'skills', name)) ||
    (agent === 'codex' && pathExists(join(home, '.codex', 'skills', name))) ||
    (agent === 'antigravity' && name === 'impeccable' && pathExists(join(home, '.gemini', 'config', 'skills', name)));
}

function execute(command, args, dryRun) {
  if (dryRun) { console.log(`  ${[command, ...args].join(' ')}`); return; }
  // Windows needs a shell for npx.cmd; passing args alongside shell:true triggers DEP0190. Every arg is a constant or an allow-listed id.
  const result = process.platform === 'win32'
    ? spawnSync([command, ...args].join(' '), { stdio: 'inherit', shell: true })
    : spawnSync(command, args, { stdio: 'inherit' });
  if (result.error || result.status !== 0) throw result.error ?? new Error(`Exit code ${result.status}`);
}

function manualStep(name, agent) {
  const source = companions.find(item => item[0] === name)?.[3];
  return `No verified native terminal install for ${agent}; check ${source} for current instructions.`;
}

export async function install({ agents: targets, companions: selected = [], exists = installed, run = execute, dryRun = false }) {
  const results = [];
  for (const agent of targets) {
    for (const name of [project, ...selected]) {
      if (exists(name, agent)) { results.push({ name, agent, status: 'already installed' }); continue; }
      const commands = name === project
        ? [['npx', ['-y', 'skills@latest', 'add', `ayanoglunorth/${project}`, '--skill', project, '-a', agent, '-g', '-y']]]
        : steps(name, agent);
      if (!commands) { results.push({ name, agent, status: 'manual step' }); continue; }
      try {
        for (const [command, args] of commands) await run(command, args, dryRun);
        // Third-party installers can exit 0 without writing where we look (plugins, project scope), so confirm rather than assume.
        results.push({ name, agent, status: dryRun ? 'planned' : exists(name, agent) ? 'installed' : 'unverified' });
      } catch (error) {
        results.push({ name, agent, status: 'failed', detail: error.message });
      }
    }
  }
  return results;
}

async function choose(reader, title, items, required) {
  while (true) {
    console.log(`\n${title}`);
    items.forEach((item, index) => console.log(`  [ ] ${index + 1}. ${item[1]}${item[2] ? ` — ${item[2]} (${item[3]})` : ''}`));
    const answer = await reader.question(required ? 'Numbers (comma separated): ' : 'Numbers (comma separated; Enter to skip): ');
    try {
      const picked = parseSelection(answer, items.length);
      if (required && !picked.length) throw new Error('Select at least one agent.');
      picked.forEach(index => console.log(`  [x] ${items[index][1]}`));
      return picked.map(index => items[index][0]);
    } catch (error) { console.error(error.message); }
  }
}

async function main() {
  const options = parseOptions(process.argv.slice(2));
  if (options.help) {
    console.log(`Install ${project} with optional companions.
Interactive:      npx -y github:ayanoglunorth/${project} [--dry-run]
Non-interactive:  npx -y github:ayanoglunorth/${project} --agent claude-code,codex [--companion impeccable,ui-ux-pro-max | --all-companions] [--dry-run]
Other:            --list prints valid agent and companion ids.
User scope is the default. Antigravity IDE and Antigravity CLI are separate targets.`);
    return;
  }
  if (options.list) {
    console.log(`Agents:\n${agents.map(item => `  ${item[0]}  ${item[1]}`).join('\n')}\nCompanions:\n${companions.map(item => `  ${item[0]}  ${item[1]} — ${item[2]}`).join('\n')}`);
    return;
  }
  const interactive = !options.agents.length;
  if (interactive && !process.stdin.isTTY) throw new Error('No terminal for prompts. Pass --agent (see --help) to install non-interactively.');
  const reader = interactive ? createInterface({ input: process.stdin, output: process.stdout }) : null;
  try {
    const targets = interactive ? await choose(reader, 'Select target agents', agents, true) : options.agents;
    const selected = interactive ? await choose(reader, 'Optional companions (none selected by default)', companions, false) : options.companions;
    const results = await install({ agents: targets, companions: selected, dryRun: options.dryRun });
    console.log('\nResults');
    for (const result of results) {
      console.log(`  ${result.agent} / ${result.name}: ${result.status}${result.detail ? ` (${result.detail})` : ''}`);
      if (result.status === 'manual step') console.log(`    ${manualStep(result.name, result.agent)}`);
      if (result.status === 'unverified') console.log('    The installer exited cleanly but no skill folder was found where expected; restart the agent and check its skill list.');
    }
    console.log('Restart or open a new chat in your agents to load installed skills.');
    if (results.some(result => result.status === 'failed')) process.exitCode = 1;
  } finally { reader?.close(); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
