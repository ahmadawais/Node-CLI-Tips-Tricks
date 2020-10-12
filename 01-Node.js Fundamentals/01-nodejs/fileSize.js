const fs = require('fs');

function getFilesizeInBytes(filename) {
	const stats = fs.statSync(filename);
	const fileSizeInBytes = stats['size'];
	return fileSizeInBytes;
}

console.log(getFilesizeInBytes(`${process.cwd()}/01-nodejs/index.js`), `bytes`);
