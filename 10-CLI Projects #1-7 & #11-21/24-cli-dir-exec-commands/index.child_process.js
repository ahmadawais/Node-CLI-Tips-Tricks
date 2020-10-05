#!/usr/bin/env node
const dirName = process.argv[2];
const { exec } = require('child_process');

const cb = (error, stdout, stderr) => {
	if (error) {
		console.error(`exec error: ${error}`);
		return;
	}
	console.log(`stdout: ${stdout}`);
	console.error(`stderr: ${stderr}`);
};
exec(`mkdir -p ${dirName}`, cb);
