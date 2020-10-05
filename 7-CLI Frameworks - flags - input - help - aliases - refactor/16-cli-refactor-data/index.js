#!/usr/bin/env node

const alert = require('cli-alerts');
const handleError = require('cli-handle-error');

const init = require('./utils/init');
const data = require('./utils/data');

(async () => {
	init();
	console.log(data.bio);
	console.log(data.social);
	alert({ type: 'info', msg: data.ad });
})();
