'use strict';

/**
 * Module for logout command.
 * @module commands/logout
 */

/**
 * Logout command
 * @function logoutCommand
 * @param {Array<String>} input - The inputs passed to command.
 * @param {Object} flags - The flags passed to the command.
 * @param {Object} options - The extra options.
 */
function logoutCommand (input, flags, options) {
  return new Promise((resolve, reject) => {
    return options.blinkMobileIdentity.logout()
      .then(() => {
        console.log(`
Success! See you next time.
`);
        resolve();
      })
      .catch(error => {
        console.log(`
There was a problem while attempting to logout:

${error}

Please fix the error and try again.
`);
        resolve();
      });
  });
}

module.exports = logoutCommand;
