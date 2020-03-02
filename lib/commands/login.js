'use strict'

/**
 * Module for login command.
 * @module commands/login
 */

/**
 * Login command to login using a BlinkMobile Identity
 * @function loginCommand
 * @param {Array<String>} input - The inputs passed to command.
 * @param {Object} flags - The flags passed to the command.
 * @param {Object} options - The extra options.
 */

const tenants = {
  ONEBLINK: 'OneBlink',
  CIVICPLUS: 'CivicPlus'
}
function loginCommand(input, flags, options) {
  if (flags.username === '') flags.username = true
  return options.blinkMobileIdentity
    .login({
      username: flags.username,
      password: flags.password,
      storeJwt: true
    })
    .then(() => {
      console.log(`
Success! Welcome to ${tenants[flags.tenant.toUpperCase()] ||
        'OneBlink'}. Be sure to logout when you're finished.
`)
    })
    .catch(error => {
      console.error(`
There was a problem while attempting to login:

${error}

Please fix the error and try again.
`)
      process.exitCode = 1
    })
}

module.exports = loginCommand
