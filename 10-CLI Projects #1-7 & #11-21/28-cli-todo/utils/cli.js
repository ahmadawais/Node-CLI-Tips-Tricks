const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
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
	view: { desc: `View or list all todos` },
	ls: { desc: `View or list all todos` },
	add: { desc: `Add a new todo` },
	del: { desc: `Del a selected todos` },
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `todo`,
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
