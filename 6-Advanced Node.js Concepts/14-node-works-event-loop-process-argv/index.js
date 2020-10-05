#!/usr/bin/env node
const chalk = require('chalk');
const alert = require('cli-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const args = process.argv.slice(2);

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const socialInfo = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/MrAhmadAwais`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/AhmadAwais`)}
${purple(` Blog `)}    ${dim(`https://AhmadAwais.com`)}
`;

const adInfo = alert({ type: 'info', msg: `Check out my NodeCLI.com course.` });

const printSocial = args.indexOf('--no-social') === -1;
const social = printSocial ? socialInfo : ``;

const printAd = args.indexOf('--no-ad') === -1;
const ad = printAd ? adInfo : ``;

(async () => {
	init();

	console.log(
		`${italic(
			`
Award-winning open-source engineer and developer advocate. Author of various open-source dev-tools and software libraries used by millions of developers worldwide. Leading developers and publishing technical content for over a decade. Self-confessed tech comedian cracking silly jokes in the JavaScript web and cloud communities.`
		)}

${social}

${ad}
`
	);
})();
