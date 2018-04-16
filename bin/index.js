#!/usr/bin/env node

'use strict'

// foreign modules

const meow = require('meow')

// local modules

const main = require('..')
const help = require('../lib/help')

// this module

const cli = meow({
  help,
  flags: {
    'remove': {
      type: 'boolean'
    },
    'username': {
      type: 'string'
    },
    'password': {
      type: 'string'
    },
    'rememberMe': {
      type: 'boolean'
    }
  }
})

main(cli.input, cli.flags)
