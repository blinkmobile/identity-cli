'use strict';

const test = require('ava');

const tenantCommand = require('../../lib/commands/tenant.js');

const FLAGS = {};
const OPTIONS = {
  blinkMobileIdentity: {
    getTenants: () => Promise.resolve(),
    setTenant: () => Promise.resolve(),
    removeTenant: () => Promise.resolve()
  }
};

test.beforeEach(t => {
  t.context.log = console.log;
});

test.afterEach(t => {
  console.log = t.context.log;
});

test.serial.cb('tenantCommand() should resolve to a message displaying previous and current tenants', (t) => {
  console.log = function (content) {
    t.is(content, `
Success! Welcome to BlinkMobile. Be sure to logout when you're finished.
`);
  };

  tenantCommand(null, FLAGS, OPTIONS)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});

test.serial.cb('tenantCommand() should pass the flags argument to blinkMobileIdentity.login()', (t) => {
  const options = {
    blinkMobileIdentity: {
      login: (flags) => {
        t.deepEqual(flags, FLAGS);
        return Promise.resolve();
      }
    }
  };
  console.log = function () {};

  tenantCommand(null, FLAGS, options)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});

test.serial.cb('tenantCommand() should log error if login rejects with error', (t) => {
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

  tenantCommand(null, FLAGS, options)
    .then(() => t.end())
    .catch(error => {
      t.fail(error);
      t.end();
    });
});
