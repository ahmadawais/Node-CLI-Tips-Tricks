#!/usr/bin/env node

/**
 * cli-img
 * CLI to resize and optimize images
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const ora = require('ora');
const { yellow: y, green: g } = require('chalk');
const alert = require('cli-alerts');
const resizeOptimizeImages = require('resize-optimize-images');

const globby = require('globby');
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug, source, width, quality } = flags;
const spinner = ora({ text: `` });

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	if (source) {
		const images = await globby(source);
		const options = {
			images,
			width: width ? width : 1920,
			quality: quality ? quality : 90
		};

		spinner.start(
			`${y(`RUNNING`)} optim & resize task on ${images.length} images…`
		);
		await resizeOptimizeImages(options);
		spinner.succeed(
			`${g(`COMPLETED`)} optim & resize task on ${images.length} images`
		);

		alert({
			type: `success`,
			name: `DONE`,
			msg: `Resized and optimized ${images.length} images`
		});
	} else {
		alert({
			type: `error`,
			msg: `You forgot to specify --source flag`
		});
	}

	console.log();
	debug && log(flags);
})();
