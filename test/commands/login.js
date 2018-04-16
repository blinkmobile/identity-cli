'use strict'

const test = require('ava')

const loginCommand = require('../../lib/commands/login.js')

const FLAGS = {
  text: 'abc',
  numbers: 123,
  rememberMe: false
}
const OPTIONS = {
  blinkMobileIdentity: {
    login: () => Promise.resolve()
  }
}

test.beforeEach(t => {
  t.context.error = console.error
  t.context.log = console.log
})

test.afterEach(t => {
  console.error = t.context.error
  console.log = t.context.log
})

test.serial('loginCommand() should resolve to a success message', (t) => {
  console.log = function (content) {
    t.is(content, `
Success! Welcome to BlinkMobile. Be sure to logout when you're finished.
`)
  }

  return loginCommand(null, FLAGS, OPTIONS)
    .then(() => t.is(process.exitCode, undefined))
})

test.serial('loginCommand() should pass the flags argument to blinkMobileIdentity.login()', (t) => {
  const options = {
    blinkMobileIdentity: {
      login: (flags) => {
        t.deepEqual(flags, Object.assign({}, FLAGS, {
          refreshToken: FLAGS.rememberMe,
          storeJwt: true
        }))
        return Promise.resolve()
      }
    }
  }
  console.log = function () {}

  return loginCommand(null, FLAGS, options)
    .then(() => t.is(process.exitCode, undefined))
})

test.serial('loginCommand() should log error if login rejects with error', (t) => {
  const options = {
    blinkMobileIdentity: {
      login: () => Promise.reject(new Error('Error Message'))
    }
  }
  console.error = function (content) {
    t.is(content, `
There was a problem while attempting to login:

Error: Error Message

Please fix the error and try again.
`)
  }

  return loginCommand(null, FLAGS, options)
    .then(() => t.is(process.exitCode, 1))
})
