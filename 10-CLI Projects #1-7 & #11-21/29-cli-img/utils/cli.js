const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	source: {
		type: `string`,
		alias: `s`,
		desc: `Source file or directory of images`
	},
	width: {
		type: `number`,
		alias: `w`,
		desc: `Width of images in pixels`
	},
	quality: {
		type: `number`,
		alias: `q`,
		desc: `Quality of images`
	},
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `img`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
