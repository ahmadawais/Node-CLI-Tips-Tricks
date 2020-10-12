const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = () => {
	unhandled();

	welcome({
		title: `Ahmad Awais`,
		tagLine: `Howdy, nice to meet ya!`,
		description: pkgJSON.description,
		version: pkgJSON.version,
		bgColor: `#6937FF`,
		color: `#000000`,
		bold: true,
		clear: true,
	});

	checkNode('10');
};
