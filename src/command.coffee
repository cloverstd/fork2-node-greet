greet = require '../lib/index.js'
parseArgs = require 'minimist'

module.exports = ->
  argv = parseArgs process.argv.slice 2
  console.log greet argv._, argv.drunk
