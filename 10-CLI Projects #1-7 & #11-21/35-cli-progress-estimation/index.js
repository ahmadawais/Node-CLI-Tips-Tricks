#!/usr/bin/env node

/**
 * cli-progress
 * CLI with progress estimation
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */

const createLogger = require('progress-estimator');
const { join } = require('path');

// All configuration keys are optional, but it's recommended to specify a storage location.
// Learn more about configuration options below.
const logger = createLogger({
	storagePath: join(__dirname, '.progress-estimator')
});

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	await logger(sleep(1000), `Another something…`, {
		estimate: 10000,
		id: `task1`
	});

	debug && log(flags);
})();
