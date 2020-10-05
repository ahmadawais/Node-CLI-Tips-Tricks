#!/usr/bin/env node

/**
 * wifi-pswd
 * Get a saved WiFi password
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const alert = require('cli-alerts');
const wifiPassword = require('wifi-password');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const password = await wifiPassword(input[0]);

	alert({
		type: `info`,
		name: `WiFi Password`,
		msg: password
	});

	debug && log(flags);
})();
