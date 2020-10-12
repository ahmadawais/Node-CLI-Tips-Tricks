#!/usr/bin/env node

const alert = require('cli-alerts');

const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const posts = require('./utils/posts');

const input = cli.input;
const flags = cli.flags;

(async () => {
	// Init and help.
	init(flags.minimal, flags.clear);
	input.includes('help') && cli.showHelp(0);

	// Print out the info.
	flags.ad && alert({ type: 'info', msg: data.ad });
	flags.bio && console.log(data.bio);
	flags.social && console.log(data.social);
	flags.posts && alert({ type: 'info', msg: data.blog, name: data.blogName });
	flags.posts && (await posts());

	// Debug info if needed.
	debug(flags.debug, cli);
})();
