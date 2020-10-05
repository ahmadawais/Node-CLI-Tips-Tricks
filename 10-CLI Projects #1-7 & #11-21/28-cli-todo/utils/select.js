const { dim } = require('chalk');
const { MultiSelect } = require('enquirer');
const to = require('await-to-js').default;
const shouldCancel = require('cli-should-cancel');
const handleError = require('cli-handle-error');

module.exports = async ({ message, choices }) => {
	const [err, response] = await to(
		new MultiSelect({
			message,
			choices,
			hint: dim(`\nUse [space] to select & [enter] to submit.\n`),
			validate(value) {
				return value.length === 0
					? `Please select at least one todo.`
					: true;
			}
		})
			.on(`cancel`, () => shouldCancel())
			.run()
	);

	handleError(`INPUT: `, err);
	return response;
};
