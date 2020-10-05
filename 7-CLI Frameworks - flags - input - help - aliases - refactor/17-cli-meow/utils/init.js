const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');

const pkgJSON = require('./../package.json');

module.exports = (minimal, clear) => {
	unhandled();

	!minimal &&
		welcome({
			title: `Ahmad Awais`,
			tagLine: `Howdy, nice to meet ya!`,
			description: pkgJSON.description,
			version: pkgJSON.version,
			bgColor: `#6937FF`,
			color: `#000000`,
			bold: true,
			clear,
		});

	minimal && console.log(`Ahmad Awais`);

	checkNode('10');
};
