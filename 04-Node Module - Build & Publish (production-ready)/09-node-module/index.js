/**
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
const chalk = require('chalk');
const sym = require('log-symbols');
const green = chalk.green;
const greenI = chalk.green.inverse;
const red = chalk.red;
const redI = chalk.red.bold.inverse;
const orange = chalk.keyword('orange');
const orangeI = chalk.keyword('orange').inverse;
const blue = chalk.blue;
const blueI = chalk.blue.inverse;

module.exports = options => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``
	};
	const opts = {...defaultOptions, ...options};
	const {type, msg, name} = opts;
	const printName = name ? name : type.toUpperCase();

	if (type === `success`) {
		console.log(`\n${sym.success}  ${greenI(` ${printName} `)} ${green(msg)}\n`);
	}

	if (type === `warning`) {
		console.log(`\n${sym.warning}  ${orangeI(` ${printName} `)} ${orange(msg)}\n`);
	}

	if (type === `info`) {
		console.log(`\n${sym.info}  ${blueI(` ${printName} `)} ${blue(msg)}\n`);
	}

	if (type === `error`) {
		console.log(`\n${sym.error}  ${redI(` ${printName} `)} ${red(msg)}\n`);
	}
};
