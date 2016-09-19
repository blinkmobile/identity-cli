#! /usr/bin/env node

'use strict';

// foreign modules

const meow = require('meow');

// local modules

const main = require('..');
const help = require('../lib/help');

// this module

const cli = meow({
  help,
  version: true
}, {
  boolean: [
    'remove'
  ],
  string: [
    'username',
    'password',
    'email',
    'sms'
  ]
});

main(cli.input, cli.flags);
