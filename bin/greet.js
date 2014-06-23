#!/usr/bin/env node

var greet = require('greet');
var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));
var result = greet(argv._, argv.drunk);

console.log(result);
