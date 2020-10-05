#!/usr/bin/env node

/**
 * cli-graphs
 * CLI with graphs and charts
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

const blessed = require('blessed');
const contrib = require('blessed-contrib');
const screen = blessed.screen();

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const line = contrib.line({ label: `Line Grpah` });
	const data = {
		x: [`ONE`, `TWO`, `THREE`, `FOUR`],
		y: [1, 5, 6, 9]
	};

	screen.append(line);
	line.setData([data]);

	screen.key([`q`, `space`, `c`], () => {
		return process.exit(0);
	});

	screen.render();

	debug && log(flags);
})();
