import { statSync } from 'node:fs';

export default function getFilesizeInBytes(filename) {
	const stats = statSync(filename);
	const fileSizeInBytes = stats['size'];
	return fileSizeInBytes;
}

try {
	console.log(getFilesizeInBytes(`${process.cwd()}/index.js`), `bytes`);
} catch (error) {
	console.log('erro')
}