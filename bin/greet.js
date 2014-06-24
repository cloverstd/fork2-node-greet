#!/usr/bin/env node

var greet = require('../lib/index.js');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));
var result = greet(argv._, argv.drunk);

console.log(result);
