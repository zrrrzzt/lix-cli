'use strict'

const tap = require('tap')
const getHelpText = require('../lib/get-help-text')
const helpText = require('../lib/helptext.json').join('\n')

tap.equal(helpText, getHelpText(), 'It returns correct helptext')
