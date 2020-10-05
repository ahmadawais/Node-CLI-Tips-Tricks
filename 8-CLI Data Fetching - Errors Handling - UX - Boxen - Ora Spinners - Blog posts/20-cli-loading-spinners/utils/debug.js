const alert = require('cli-alerts');

module.exports = (isDebug, cli) => {
	if (!isDebug) {
		return;
	}

	alert({ type: 'warning', msg: `DEBUGGING INFO ↓` });
	console.log(`input`, cli.input);
	console.log(`flags`, cli.flags);
	console.log();
};
