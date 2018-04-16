# blinkmobile / identity-cli [![npm](https://img.shields.io/npm/v/@blinkmobile/identity-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/@blinkmobile/identity-cli) [![Travis CI Status](https://travis-ci.org/blinkmobile/identity-cli.svg?branch=master)](https://travis-ci.org/blinkmobile/identity-cli) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/1byjia4efwq4nquj?svg=true)](https://ci.appveyor.com/project/blinkmobile/identity-cli) [![Greenkeeper badge](https://badges.greenkeeper.io/blinkmobile/identity-cli.svg)](https://greenkeeper.io/)

CLI to provide easy management of authentication with BlinkMobile.

## Installation

```sh
npm install -g @blinkmobile/cli @blinkmobile/identity-cli
```

## Documentation

See the [Documentation](./docs/README.md) directory for more details.

## Usage

```sh
blinkm identity --help

# or, shorter
bm identity --help
```

```
Usage: blinkm identity <command>

Where command is one of:

  login, logout, tenant

Login

  login                       => start the login process, if no flags are passed, a browser based login will begin
    --username <username>     => username to login with, if password is not specified, you will be prompted for it
    --password <password>     => password to login with, requires the username flag as well

Logout

  logout                      => logout of the service being extended

Setting tenant for services with multiple tenants:

  tenant                      => Display current and available tenants.
    <tenantName>              => Set as current tenant and add to available tenants
    <tenantName> --remove     => Remove from available available tenants


Examples
  bm identity login --username
  bm identity login --username email@provider.com
  bm identity login

  bm identity logout

  bm identity tenant
  bm identity tenant mytenant
  bm identity tenant mytenant --remove
```
