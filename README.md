# Blink Identity CLI Tool [![npm](https://img.shields.io/npm/v/@blinkmobile/identity-cli.svg?maxAge=2592000)](https://www.npmjs.com/package/@blinkmobile/identity-cli) [![Travis CI Status](https://travis-ci.org/blinkmobile/identity-cli.svg?branch=master)](https://travis-ci.org/blinkmobile/identity-cli) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/1byjia4efwq4nquj?svg=true)](https://ci.appveyor.com/project/blinkmobile/identity-cli)

Provides easy management of authenication for our CLI via a single identity.

## Installation

```sh
npm install -g @blinkmobile/cli @blinkmobile/identity-cli
```

## Usage

`blinkm identity --help`

or, shorter

`bm identity --help`

### Logging In

Some BlinkMobile CLI tools require users to be authenticated before use.
The `login` command will allow user to authenticate themselves with BlinkMobile via a variety of login providers

`bm identity login` Start a browser based login process.
- `--username <username>` Start a username and password login process. Omitting <username> will prompt for username.
- `--password <password>` Specify password instead of being prompted.
- `--email <emailAddress>` Start a passwordless email login process. Omitting <emailAddress> will prompt for email address.
- `--sms <phoneNumber>` Start a passwordless sms login process. Omitting <phoneNumber> will prompt for phone number.

To start a browser based login process, this is how users can login using a social account e.g. Google:
```sh
bm identity login
```

To start a username and password login process and be prompted for password:
```sh
bm identity login --username username@email.com
```

### Logging Out

Once you have finished using the CLI tools that required authentication, please remember to logout.

To start the logout process:
```sh
bm identity logout
```

### Manage Tenants

Some BlinkMobile CLI tools require the user to select the Tenant they are currently working on
The `tenant` command will allow user to:
- Display current and previous tenants
- Set a new tenant
- Remove the current tenant and also remove from the list of previous

`bm identity tenant` Show current and previous tenants
- `<tenantName>` Set as current and add <tenantName> to previous if new.
- `<tenantName> --remove` Remove <tenantName> from previous tenants.

To display current and previous tenants:
```sh
bm identity tenant
```

To set a new or previously used tenant
```sh
bm identity tenant nameoftenant
```

To remove a tenant
```sh
bm identity tenant nameoftenant --remove
```
