'use strict';

const test = require('ava');

const tenantCommand = require('../../lib/commands/tenant.js');

const TENANT_NAME = 'valid tenant name';
const TENANTS = {
  current: TENANT_NAME,
  previous: [
    TENANT_NAME
  ]
};
const INPUT = [
  TENANT_NAME
];
const FLAGS = {};
const OPTIONS = {
  blinkMobileIdentity: {
    getTenants: () => Promise.resolve(TENANTS),
    setTenant: () => Promise.resolve(TENANTS),
    removeTenant: () => Promise.resolve(TENANTS)
  }
};

test.beforeEach(t => {
  t.context.log = console.log;
});

test.afterEach(t => {
  console.log = t.context.log;
});

test.serial('tenantCommand() should resolve to a message displaying previous and current tenants', (t) => {
  console.log = function (content) {
    t.is(content, `Current Tenant: ${TENANTS.current || 'Unset'}
Previous Tenants:
  ${TENANTS.previous.sort().join(`
  `)}`);
  };

  return tenantCommand(INPUT, FLAGS, OPTIONS);
});

test.serial('tenantCommand() should call blinkMobileIdentity.getTenants() if no tenant is passed in', (t) => {
  t.plan(1);
  const options = {
    blinkMobileIdentity: {
      getTenants: () => {
        t.pass();
        return Promise.resolve(TENANTS);
      }
    }
  };
  console.log = function () {};

  return tenantCommand([], FLAGS, options);
});

test.serial('tenantCommand() should call blinkMobileIdentity.setTenant() if a tenant is passed in with no --remove flag', (t) => {
  t.plan(1);
  const options = {
    blinkMobileIdentity: {
      setTenant: (tenant) => {
        t.is(tenant, TENANT_NAME);
        return Promise.resolve(TENANTS);
      }
    }
  };
  console.log = function () {};

  return tenantCommand(INPUT, FLAGS, options);
});

test.serial('tenantCommand() should call blinkMobileIdentity.removeTenant() if a tenant is passed in with a --remove flag', (t) => {
  t.plan(1);
  const options = {
    blinkMobileIdentity: {
      removeTenant: (tenant) => {
        t.is(tenant, TENANT_NAME);
        return Promise.resolve(TENANTS);
      }
    }
  };
  console.log = function () {};

  return tenantCommand(INPUT, { remove: true }, options);
});

test.serial('tenantCommand() should log error if any tenant function rejects with error', (t) => {
  t.plan(3);
  const options = {
    blinkMobileIdentity: {
      getTenants: () => Promise.reject('Errror Message'),
      setTenant: () => Promise.reject('Errror Message'),
      removeTenant: () => Promise.reject('Errror Message')
    }
  };
  console.log = function (content) {
    t.is(content, `
There was a problem attempting to use the tenant command:

Errror Message

Please fix the error and try again.
`);
  };

  return Promise.all([
    tenantCommand([], FLAGS, options),
    tenantCommand(INPUT, FLAGS, options),
    tenantCommand(INPUT, { remove: true }, options)
  ]);
});
