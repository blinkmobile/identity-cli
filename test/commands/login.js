'use strict';

const test = require('ava');

const loginCommand = require('../../lib/commands/login.js');

const FLAGS = {
  text: 'abc',
  numbers: 123
};
const OPTIONS = {
  blinkMobileIdentity: {
    login: () => Promise.resolve()
  }
};

test.beforeEach(t => {
  t.context.log = console.log;
});

test.afterEach(t => {
  console.log = t.context.log;
});

test.serial.cb('loginCommand() should resolve to a success message', (t) => {
  console.log = function (content) {
    t.is(content, `
Success! Welcome to BlinkMobile. Be sure to logout when you're finished.
`);
  };

  loginCommand(null, FLAGS, OPTIONS)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});

test.serial.cb('loginCommand() should pass the flags argument to blinkMobileIdentity.login()', (t) => {
  const options = {
    blinkMobileIdentity: {
      login: (flags) => {
        t.deepEqual(flags, FLAGS);
        return Promise.resolve();
      }
    }
  };
  console.log = function () {};

  loginCommand(null, FLAGS, options)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});

test.serial.cb('loginCommand() should log error if login rejects with error', (t) => {
  const options = {
    blinkMobileIdentity: {
      login: () => Promise.reject('Errror Message')
    }
  };
  console.log = function (content) {
    t.is(content, `
There was a problem while attempting to login:

Errror Message

Please fix the error and try again.
`);
  };

  loginCommand(null, FLAGS, options)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});
