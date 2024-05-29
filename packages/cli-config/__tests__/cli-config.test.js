'use strict';

const cliConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(cliConfig(), 'Hello from cliConfig');
console.info('cliConfig tests passed');
