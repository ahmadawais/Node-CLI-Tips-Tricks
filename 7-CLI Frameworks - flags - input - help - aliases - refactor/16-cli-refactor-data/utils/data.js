const chalk = require('chalk');

const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

const bio = `${italic(
	`
Award-winning open-source engineer and developer advocate. Author of various open-source dev-tools and software libraries used by millions of developers worldwide. Leading developers and publishing technical content for over a decade. Self-confessed tech comedian cracking silly jokes in the JavaScript web and cloud communities.`
)}`;

const social = `
${twitterClr(` Twitter `)} ${dim(`https://twitter.com/MrAhmadAwais`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/AhmadAwais`)}
${purple(` Blog `)}    ${dim(`https://AhmadAwais.com`)}
`;

const ad = `Check out my NodeCLI.com course.`;

module.exports = {
	bio,
	social,
	ad,
};
