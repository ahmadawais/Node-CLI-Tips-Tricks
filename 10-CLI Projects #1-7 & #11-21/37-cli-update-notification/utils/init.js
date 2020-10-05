const welcome = require('cli-welcome');
const pkg = require('./../package.json');
const unhandled = require('cli-handle-unhandled');
const updateNotifier = require('update-notifier');

module.exports = ({ clear = true }) => {
	unhandled();
	welcome({
		title: `cli-update`,
		tagLine: `by Ahmad Awais`,
		description: pkg.description,
		version: pkg.version,
		bgColor: '#36BB09',
		color: '#000000',
		bold: true,
		clear
	});
	updateNotifier({ pkg }).notify();
};
