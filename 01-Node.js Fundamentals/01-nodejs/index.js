import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;
let count = 1;

const server = createServer((req, res) => {
	console.log('VISIT:', count++);
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end(`Hello ${req.headers['user-agent']}`);
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
