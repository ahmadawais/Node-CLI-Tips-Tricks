#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');

welcome({
	title: pkgJSON.name,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#FADC00`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log(`
Ahmad Awais

Award-winning open-source engineer and developer advocate. Author of various open-source dev-tools and software libraries used by millions of developers worldwide. Leading developers and publishing technical content for over a decade. Self-confessed tech comedian cracking silly jokes in the JavaScript web and cloud communities.

🐦 Twitter: https://twitter.com/MrAhmadAwais
📖 GitHub:  https://github.com/AhmadAwais
😎 Blog:    https://AhmadAwais.com
`);
