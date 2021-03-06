'use strict'

// foreign modules

const updateNotifier = require('update-notifier')
const BlinkMobileIdentity = require('@blinkmobile/bm-identity')

// local modules

const pkg = require('./package.json')
const help = require('./lib/help')

// this module

const commands = {
  login: require('./lib/commands/login.js'),
  logout: require('./lib/commands/logout.js')
}

updateNotifier({ pkg }).notify()

module.exports = function(input, flags) {
  const command = input[0]

  if (!command) {
    console.log(help)
    process.exitCode = 0
    return
  }

  if (!commands[command]) {
    console.error(`unknown command: ${command}`)
    console.log(help)
    process.exitCode = 1
    return
  }

  if (typeof commands[command] !== 'function') {
    console.log('not implemented')
    process.exitCode = 1
    return
  }

  const blinkMobileIdentity = new BlinkMobileIdentity(
    flags.tenant ? flags.tenant.toUpperCase() : undefined
  )

  commands[command](input.slice(1), flags, {
    blinkMobileIdentity,
    cwd: process.cwd()
  })
}
