#!/usr/bin/env node

/**
 * cli-sbx
 * A sandbox for testing CLIs
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const figlet = require('figlet');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const printMsg = figlet.textSync(`NodeCLI.com`, {
		font: 'Ghost',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 120,
		whitespaceBreak: true
	});
	console.log(printMsg);

	debug && log(flags);
})();
