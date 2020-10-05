#!/usr/bin/env node
const dirName = process.argv[2];

// Execute using child_process.
const { exec } = require('child_process');
exec(`mkdir -p ${dirName}`);

// Execute using execa.
const execa = require('execa');
(async () => {
	await execa(`mkdir`, [`-p`, dirName]);
})();

// Execute using shelljs.
const { mkdir } = require('shelljs');
mkdir(`-p`, dirName);
