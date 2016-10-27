'use strict';

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
function loginCommand (input, flags, options) {
  // Auth0 requires phone number to in this format: '+61412345678'
  // This means that sms must default to a string to include the plus at the beginning
  // Because it defaults to a string, we must convert empty strings to true to allow for prompt
  // to kick in for phone number. See @blinkmobile/bm-identity login function for more details.
  if (flags.sms === '') flags.sms = true;
  if (flags.email === '') flags.email = true;
  if (flags.username === '') flags.username = true;
  return new Promise((resolve, reject) => {
    options.blinkMobileIdentity.login(flags)
      .then(() => {
        console.log(`
Success! Welcome to BlinkMobile. Be sure to logout when you're finished.
`);
        resolve();
      })
      .catch(error => {
        console.error(`
There was a problem while attempting to login:

${error}

Please fix the error and try again.
`);
        process.exitCode = 1;
        resolve();
      });
  });
}

module.exports = loginCommand;
