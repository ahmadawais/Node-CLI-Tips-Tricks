#!/usr/bin/env node

/**
 * cli-pre-configurable
 * CLI that can be pre-configured with an rc or config file
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const { cosmiconfig } = require('cosmiconfig');
const pkg = require('./package.json');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const explorer = cosmiconfig(pkg.name);
	const data = await explorer.search();
	console.log('data: ', data);
	console.log('name: ', data.config.name);

	debug && log(flags);
})();
