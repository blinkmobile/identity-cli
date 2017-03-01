'use strict'

/**
 * Module for tenant command.
 * @module commands/tenant
 */

/**
 * Tenant command to add, remove, set and unset tenant for indentity
 * @function tenantCommand
 * @param {Array<String>} input - The inputs passed to command.
 * @param {Object} flags - The flags passed to the command.
 * @param {Object} options - The extra options.
 */
function tenantCommand (input, flags, options) {
  const tenantName = input[0]
  let promise
  if (!tenantName) {
    promise = options.blinkMobileIdentity.getTenants()
  } else if (flags.remove) {
    promise = options.blinkMobileIdentity.removeTenant(tenantName)
  } else {
    promise = options.blinkMobileIdentity.setTenant(tenantName)
  }

  return promise
    .then((tenants) => {
      if (tenants && tenants.previous.length) {
        // shallow-clone array and sort it, avoid mutation
        const previousTenants = tenants.previous.concat([]).sort()
        console.log(`Current Tenant: ${tenants.current || 'Unset'}
Previous Tenants:
  ${previousTenants.join(`
  `)}`)
      } else {
        console.log('No tenants have been created. See --help for details on how to set a tenant')
      }
    })
    .catch(error => {
      console.error(`
There was a problem attempting to use the tenant command:

${error}

Please fix the error and try again.
`)
      process.exitCode = 1
    })
}

module.exports = tenantCommand
