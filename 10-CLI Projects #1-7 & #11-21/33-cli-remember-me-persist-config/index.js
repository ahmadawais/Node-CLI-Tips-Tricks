#!/usr/bin/env node

/**
 * cli-remember-me
 * CLI that can persist some data
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const { Input } = require('enquirer');
const Conf = require('conf');
const config = new Conf();

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	let name = config.get(`name`);

	if (!name) {
		const askName = await new Input({
			message: `Please enter your name`
		}).run();

		config.set(`name`, askName);
		name = askName;
	}

	console.log('name: ', name);

	debug && log(flags);
})();
