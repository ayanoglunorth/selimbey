#!/usr/bin/env node
import { existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createInterface } from 'node:readline/promises';
import { pathToFileURL } from 'node:url';

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
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32' });
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
        results.push({ name, agent, status: dryRun ? 'planned' : 'installed' });
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
  const args = process.argv.slice(2);
  if (args.includes('--help')) {
    console.log(`Install ${project} with optional companions.\nUsage: npx -y github:ayanoglunorth/${project} [--dry-run]\nSelect one or more agents, then any companions. User scope is the default. Antigravity IDE and Antigravity CLI are separate targets.`);
    return;
  }
  if (args.some(arg => arg !== '--dry-run')) throw new Error('Unknown option. Use --help.');
  if (!process.stdin.isTTY) throw new Error('Interactive terminal required. Use npx skills add for non-interactive installation.');
  const reader = createInterface({ input: process.stdin, output: process.stdout });
  try {
    const targets = await choose(reader, 'Select target agents', agents, true);
    const selected = await choose(reader, 'Optional companions (none selected by default)', companions, false);
    const results = await install({ agents: targets, companions: selected, dryRun: args.includes('--dry-run') });
    console.log('\nResults');
    for (const result of results) {
      console.log(`  ${result.agent} / ${result.name}: ${result.status}${result.detail ? ` (${result.detail})` : ''}`);
      if (result.status === 'manual step') console.log(`    ${manualStep(result.name, result.agent)}`);
    }
    console.log('Restart or open a new chat in your agents to load installed skills.');
    if (results.some(result => result.status === 'failed')) process.exitCode = 1;
  } finally { reader.close(); }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
