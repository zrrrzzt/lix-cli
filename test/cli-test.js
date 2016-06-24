'use strict'

const exec = require('child_process').execFile
const tap = require('tap')
const getHelpText = require('../lib/get-help-text')
const pkgVersion = require('../package.json').version
const text = 'Dette er en lang tekst. Den har noen, men ikke så mange, kjempevanskelige ord. Her er et eksempel på et slikt ord: onomatopoetikon.'

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithH (test) {
  exec('./index.js', ['--help'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns lix', function testLix (test) {
  exec('./index.js', ['--text', text], function versionWithV (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.equal(stdout.toString().trim(), '18.79')
    test.end()
  })
})
