#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');

const version = JSON.parse(fs.readFileSync('package.json')).version;
const [major, minor, patch] = version.split('.').map(Number);

let lastTag;
try {
  lastTag = execSync('git describe --tags --abbrev=0 2>/dev/null').toString().trim();
} catch {
  lastTag = '';
}

const logCmd = lastTag ? `git log ${lastTag}..HEAD --format=%B` : 'git log --format=%B';
const commits = execSync(logCmd).toString().split('\n\n').filter(Boolean);

let bump = null;
for (const msg of commits) {
  const header = msg.split('\n')[0];
  const breaking = msg.includes('BREAKING CHANGE:') || header.includes('!');
  const match = header.match(/^(\w+)(?:\([^)]+\))?(!?):/);
  if (!match) continue;

  if (breaking || match[2] === '!') bump = 'major';
  else if (match[1] === 'feat' && bump !== 'major') bump = 'minor';
  else if (['fix', 'perf'].includes(match[1]) && !bump) bump = 'patch';
}

if (bump === 'major') console.log(`${major + 1}.0.0`);
else if (bump === 'minor') console.log(`${major}.${minor + 1}.0`);
else if (bump === 'patch') console.log(`${major}.${minor}.${patch + 1}`);
else console.log(version);
