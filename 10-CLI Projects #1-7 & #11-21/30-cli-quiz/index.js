#!/usr/bin/env node

/**
 * cli-quiz
 * CLI that takes a technical quiz
 *
 * @author Ahmad Awais <https://twitter.com/MrAhmadAwais/>
 */
const { Quiz } = require('enquirer');

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	const prompt = new Quiz({
		message: `How do you hide a div in CSS?`,
		choices: [
			`display: table`,
			`display: none`,
			`display: hide`,
			`display: flex`
		],
		correctChoice: 1
	});

	prompt
		.run()
		.then(answer => {
			if (answer.correct) {
				console.log('Correct!');
			} else {
				console.log(`Wrong! Correct answer is ${answer.correctAnswer}`);
			}
		})
		.catch(console.error);

	debug && log(flags);
})();
