'use strict';

const test = require('ava');

const logoutCommand = require('../../lib/commands/logout.js');

const OPTIONS = {
  blinkMobileIdentity: {
    logout: () => Promise.resolve()
  }
};

test.beforeEach(t => {
  t.context.log = console.log;
});

test.afterEach(t => {
  console.log = t.context.log;
});

test.serial('logoutCommand() should resolve to a success message', (t) => {
  console.log = function (content) {
    t.is(content, `
Success! See you next time.
`);
  };

  return logoutCommand(null, null, OPTIONS);
});

test.serial('logoutCommand() should log error if logout rejects with error', (t) => {
  const options = {
    blinkMobileIdentity: {
      logout: () => Promise.reject('Errror Message')
    }
  };
  console.log = function (content) {
    t.is(content, `
There was a problem while attempting to logout:

Errror Message

Please fix the error and try again.
`);
  };

  return logoutCommand(null, null, options);
});
