import { test } from 'node:test';
import assert from 'node:assert/strict';
import { join } from 'node:path';
import { parseSelection, install, installed } from './install.mjs';

test('multi-selection accepts several entries and an empty optional selection', () => {
  assert.deepEqual(parseSelection('1, 3', 4), [0, 2]);
  assert.deepEqual(parseSelection('', 3), []);
  assert.throws(() => parseSelection('1; rm -rf /', 3));
});

test('all selected agents receive the main skill and selected native companions', async () => {
  const calls = [];
  const results = await install({
    agents: ['codex', 'gemini-cli'], companions: ['impeccable', 'ui-ux-pro-max'],
    exists: () => false,
    run: async (command, args) => { calls.push([command, args]); if (args.includes('--ai') && args.includes('codex')) throw new Error('failed'); },
  });
  assert.equal(results.find(x => x.name === 'ui-ux-pro-max' && x.agent === 'codex').status, 'failed');
  assert.equal(results.find(x => x.name === 'ui-ux-pro-max' && x.agent === 'gemini-cli').status, 'installed');
  assert.equal(calls.filter(([, args]) => args.includes('ayanoglunorth/selimbey')).length, 2);
  assert.ok(calls.some(([, args]) => args.includes('--providers=codex')));
});

test('existing install is skipped, and no companion is installed when none selected', async () => {
  const calls = [];
  const results = await install({ agents: ['cursor'], companions: [], exists: () => true, run: async (...call) => calls.push(call) });
  assert.equal(results.length, 1);
  assert.equal(results[0].status, 'already installed');
  assert.equal(calls.length, 0);
});

test('Antigravity and Gemini are separate targets; UI UX Pro Max uses current package', async () => {
  const calls = [];
  const results = await install({ agents: ['antigravity', 'antigravity-cli'], companions: ['impeccable', 'design-taste-frontend', 'ui-ux-pro-max'], exists: () => false, run: async (...call) => calls.push(call) });
  assert.equal(results.find(x => x.agent === 'antigravity-cli' && x.name === 'impeccable').status, 'manual step');
  assert.ok(calls.some(([, args]) => args.includes('ui-ux-pro-max-cli@latest') && args.includes('antigravity')));
  assert.ok(!calls.some(([, args]) => args.includes('uipro-cli@latest')));
  assert.ok(calls.some(([, args]) => args.includes('antigravity-cli') && args.includes('design-taste-frontend')));
});

test('existing check uses Antigravity and Gemini global directories', () => {
  const paths = [];
  for (const agent of ['antigravity', 'antigravity-cli', 'gemini-cli']) {
    installed('selimbey', agent, path => { paths.push(path); return false; }, '/home/test');
  }
  assert.ok(paths.includes(join('/home/test', '.gemini', 'antigravity', 'skills', 'selimbey')));
  assert.ok(paths.includes(join('/home/test', '.gemini', 'antigravity-cli', 'skills', 'selimbey')));
  assert.ok(paths.includes(join('/home/test', '.gemini', 'skills', 'selimbey')));
});
