const alert = require('./index.js');

console.clear();

alert({type: `info`, msg: `Awais is awesome!`});
alert({type: `error`, msg: `Something went wrong!`});
alert({type: `warning`, msg: `cli-alerts are cool!`});
alert({type: `success`, msg: `Everything finished!`});
alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
alert();
