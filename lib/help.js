'use strict';

module.exports = `Blink Mobile Identity CLI

Usage: bm identity <command>

Where command is one of:

  login, logout, tenant

Login

  login                       => start the login process, if no flags are passed, a browser based login will begin
    --username <username>     => username to login with, if password is not specified, you will be prompted for it
    --password <password>	    => password to login with, requires the username flag as well
    --email <email>           => email address to send code to for passwordless authentication
    --sms <phone>             => phone number to send code to for passwordless authentication

Logout

  logout                      => logout of the service being extended

Setting tenant for services with multiple tenants:

  tenant                      => Display current and available tenants.
    <tenantName>              => Set as current tenant and add to available tenants
    <tenantName> --remove     => Remove from available available tenants


Examples
  bm identity login --username
  bm identity login --username email@provider.com
  bm identity login --email
  bm identity login --sms +61412345678
  bm identity login

  bm identity logout

  bm identity tenant
  bm identity tenant mytenant
  bm identity tenant mytenant --remove
`;
