#!/usr/bin/env node
'use strict'

const lix = require('lix-index')
const argv = require('minimist')((process.argv.slice(2)))
const getHelpText = require('./lib/get-help-text')
const pkg = require('./package.json')
const query = process.argv[2]
const text = argv.t || argv.text || argv._[0]

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

console.log(lix(text))
process.exit(0)
