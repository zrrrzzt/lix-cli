'use strict'

module.exports = function getHelptext () {
  const help = require('./helptext.json')
  return help.join('\n')
}
